const basicSingle = '.js-lang_select-single'
function formatState (state) {
    if (!state.id) return state.text
	console.log(state.element)
    return $('<span><img src="' + state.element.value.toLowerCase() + '.png" class="img-flag" style="width: 31px"/> ' + state.text + '</span>')
}

console.log('here')
$(document).ready(function() {
	console.log('here')
    $(basicSingle).select2({
        width: '50px',
        templateResult: formatState,
        templateSelection: formatState,
        minimumResultsForSearch : Infinity,
    })
});
