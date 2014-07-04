/**************************************************************
*
* My Plugin 1.0
*
**************************************************************/

( function( $ ){
	var MyPlugin = function( element, options ){

		var settings = $.extend( {}, $.fn.myPlugin.defaults, options );
		var el = $( element );
		
		var initialize = function() {
			//console.log( el.text() );

			var string = settings.odd ? 'odd' : 'even';

			el.find('li:nth-child(' + string + ')').css('background', settings.color);

		};

		initialize();
	};

	$.fn.myPlugin = function( options ) {
		return this.each( function( key, value ){
      var element = $( this );
      if ( element.data( 'myPlugin' ) ) {
      	var myPlugin = new MyPlugin( this, options );
      	return element.data( 'myPlugin' );
      }
      var myPlugin = new MyPlugin( this, options );
      element.data( 'myPlugin', myPlugin );
  	  });
	};

	$.fn.myPlugin.defaults = {
		color	: '#000',
		odd		: true
	};

})( jQuery );