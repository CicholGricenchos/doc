
$(document).ready(function(){
	$('pre[lang=sexp]').each(function(){
		var code = $(this).find('code').text()
		var sexp = new Sexp().eval(eval(code))
		var div = document.createElement('div')
		ReactDOM.render(sexp, div)
		$(this).replaceWith(div)
	})	
})
