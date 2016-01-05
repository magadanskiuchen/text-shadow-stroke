(function ($) {
	$.fn.stroke = function (options) {
		var $this = $(this);
		var settings = $.extend({
			color: '#000',
			size: 2
		}, options);
		
		settings.size = Math.abs(settings.size); // should always be a positive value
		
		return this.each(function () {
			var style = [];
			
			for (var i=-settings.size; i<=settings.size; i++) {
				var r = settings.size; // radius
				var x = i; // x coordinate
				var y = Math.sqrt(Math.pow(r, 2) - Math.pow(x, 2)); // y coordinate calculated based on circle equation: r^2 = x^2 + y^2
				
				var y1 = Math.floor(y);
				var y2 = Math.ceil(y);
				
				style.push( x + 'px ' + y1 + 'px ' + settings.color );
				
				if (y1 !== 0) {
					style.push( x + 'px -' + y1 + 'px ' + settings.color );
				}
				
				if (y1 !== y2) {
					style.push( x + 'px ' + y2 + 'px ' + settings.color );
					
					if (y2 !== 0) {
						style.push( x + 'px -' + y2 + 'px ' + settings.color );
					}
				}
			}
			
			$this.css('text-shadow', style.join(', '));
		});
	};
})(jQuery);