/////////////////
//Back-End Logic
/////////////////
function Pizza(name, size, topping, price) {
  this.name = name;
  this.size = size;
  this.topping = topping;
  // this.topping = [cheese, peperoni, sausage];
  this.price = 0;
  // this.topping = topping;
  // this.size = [medium, large, xl];
  // this.size = [1, 2, 3];
  // this.topping = [cheese, pepperoni, sausage];
}

Pizza.prototype.alterPrice = function() {
  if (this.size === "small") {
    this.price += 6;
  }
    else if (this.size === "medium") {
      this.price += 8;
    }
    else if (this.size === "large") {
      this.price += 10;
    }
    else if (this.size === "xl") {
      this.price += 12;
    }
    if ((this.topping === "cheese")) {
      this.price += 1;
    }
    return this.price;
  }



// }

//////////////////
//Front-End Logic
//////////////////
$(document).ready(function() {
   $("button[name=submit-button]").click(function(){
    var nameInput =  $("input[name=name]").val();
    var pizzaSizeInput = $("#pizza-size").val();
    var toppingInput = $("input:checkbox[name=topping]:checked").val();
    var newPizza = new Pizza(nameInput, pizzaSizeInput, toppingInput);
   //
  //  $("input:checkbox[name=topping]:checked").each(function (){
  //    var toppingsInput = $(this).val();
  //  });
  //  var name = new Pizza(nameInput);
  //  var size = new Pizza(pizzaSizeInput);

  console.log(newPizza);
  $("#hidden").append("<li>" +'Hi ' + nameInput + '. The cost of your pizza is $' + newPizza.alterPrice() + "</li>");
  newPizza.alterPrice();
  });
});
