const check = $('.checkbox');
const price = $('.price');
let lista = ['$199.99','$249.99','$399.99'];
let listaPadrao = ['$19.99','$24.99','$39.99'];
check.click(()=> {
	if($(check).is(':checked')){
		price.each(function(index, el) {
			el.innerHTML = listaPadrao[index];	
		});
	}else{
		price.each(function(index, el) {
			el.innerHTML = lista[index];	
		});
	}
})
