;(function() {
	let accordionContainer = $('.js-accordion-container')
	let accordionToggler = $('.js-accordion-toggler');

	if (accordionToggler.length < 1) {
		return;
	}

	/*
	* accordionContainer - use it, if you need add one event listener , instead not for all accordions togglers
	* accordionToggler - accordion title, icon on some thing else.
	* accordion - accordion item container
	* accordionContent - content which animated
	*/

	if (accordionContainer.length) {
		accordionContainer.on('click', '.js-accordion-toggler', toggleAccordion);
	} else {
		accordionToggler.click(toggleAccordion);
	}

	function toggleAccordion() {
		let accordion = $(this).parents('.js-accordion');
		let accordionContent = accordion.find('.js-accordion-content');

		accordion.toggleClass('open');
		accordionContent.stop().slideToggle(400, function() {
			$(this).css('height', '');
		});
	}
}());