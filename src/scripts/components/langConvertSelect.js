$(document).ready(function() {
	const basicSingle = '.js-lang_select-single'

    $(basicSingle).select2({
        width: '50px',
        templateResult: formatState,
        templateSelection: formatState,
        minimumResultsForSearch : Infinity,
    })


	function formatState (state) {
		if (!state.id) return state.text
		return $('<span><img src="' + state.element.dataset.flagUrl + '" class="img-flag" style="width: 31px"/> ' + state.text + '</span>')
	}
});
