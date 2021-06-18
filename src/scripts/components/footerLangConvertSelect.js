$(document).ready(function() {
	const footerLangSelect = '.js-footer-lang_select-single'

    $(footerLangSelect).select2({
        width: '50px',
        templateResult: formatState,
        templateSelection: formatState,
        minimumResultsForSearch : Infinity,
        dropdownPosition: 'above',
    })

	function formatState (state) {
		if (!state.id) return state.text
		return $('<span><img src="' + state.element.dataset.flagUrl + '" class="img-flag" style="width: 31px"/> ' + state.text + '</span>')
	}
});
