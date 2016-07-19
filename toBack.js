var ToBack = ( function () {
	/** Constructor */
	function ToBack () {
		// Error manager
		try {
			// Start events
			this.bindEvents();
		} catch ( e ) {
			// Show error
			console.error( 'TOBACK ERROR: ' + e.message );
		}
	}

	/** Start events */
	ToBack.prototype.bindEvents = function () {
		$( document ).on( 'touchstart' , function ( e ) {
			var touchobj = e.originalEvent.changedTouches[0] ;
			var startx = parseInt( touchobj.clientX ) ;
			var starty = parseInt( touchobj.clientY ) ;

			$( document ).one( 'touchend' , function ( e ) {
				var touchobj = e.originalEvent.changedTouches[0] ;
				var endx = parseInt( touchobj.clientX ) ;
				var endy = parseInt( touchobj.clientY ) ;

				if ( startx < endx && ( endx - startx ) >= 100 ) {
					var dify = Math.abs( starty - endy ) ;
					if ( dify <= 50 ) {
						window.history.back();
					}
				}
		    } );
	    } );
	}

	return new ToBack ;
} () ) ;