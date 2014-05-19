$(document).on('ready', function() {
  var productContainer = $('#product-template').html();

  var template = Handlebars.compile(productContainer);

  for (var i = 0; i < productsData.productsList.length; i ++){
  	var output = template(productsData.productsList[i]);
  	$('#product-container').append(output);
  }

  $('.container').on('click', '.add-item', function(){
  	var title = $(this).siblings('h4').text();

  	var productObject = productsData.productsList.filter(function(d){
  		return d.title == title;
  	});

  	var wishContainer = $('#wishlist-template').html();
  	var wishTemplate = Handlebars.compile(wishContainer);
  	var wishOutput = wishTemplate(productObject[0]);
  	$('#wishlist').append(wishOutput);
  });

  $('.container').on('click', '.remove-item', function(){
  		$(this).parent().remove();
  	})

});