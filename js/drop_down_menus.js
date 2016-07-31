var test = (function() {
	var init, isMobile, setupMenus, _Drop;

	_Drop = Drop.createContext({
		classPrefix: 'drop'
	});
	
	isMobile = $(window).width() < 567;

	init = function() {
		return setupMenus();
	};

	setupMenus = function() {
		return $('.dropdown').each(function() {
			var $dropdown, $target, content, drop, openOn, theme;
			$dropdown = $(this);
			theme = $dropdown.data('theme');
			openOn = $dropdown.data('open-on') || 'click';
			$target = $dropdown.find('.drop-target');
			$target.addClass(theme);
			content = $dropdown.find('.drop-content').html();
			return drop = new _Drop({
				target: $target[0],
				classes: theme,
				position: 'bottom center',
				constrainToWindow: true,
				constraintoScrollParent: false,
				openOn: openOn,
				content: content
			});
		});
	};

	init();

}).call(this)
