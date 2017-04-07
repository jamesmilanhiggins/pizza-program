/////////////////
//Back-End Logic
/////////////////
function Pizza(name, size, toppings, price) {
  this.name = name;
  this.size = size;
  this.toppings = [];
  this.price = 0;
  // this.topping = [cheese, peperoni, sausage];
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
    if ((this.toppings.length === 1)) {
      this.price += 1;
    }
    else if (this.toppings.length === 2) {
      this.price +=2;
    }
    else if (this.toppings.length === 3) {
      this.price +=3;
    }
    else if (this.toppings.length === 4) {
      this.price +=4;
    }
    return this.price;
  }
//////////////////
//Front-End Logic
//////////////////
$(document).ready(function() {
   $("button[name=submit-button]").click(function(){
    var newPizza = new Pizza(nameInput, pizzaSizeInput, toppings2, 0);
    var nameInput =  $("input[name=name]").val();
    var pizzaSizeInput = $("#pizza-size").val();
    var toppings2 = $("input:checkbox[name=topping]:checked").each(function() {
      var toppingInput = $(this).val();
      newPizza.toppings.push(toppings2);
      console.log(toppings2);
    });
    // console.log(toppings);
    console.log(toppings2);
    console.log(newPizza);

    // var toppingInput = $("input:checkbox[name=topping]:checked").val();
    // var toppingsInput = [];
    // var test = $("input:checkbox[name=topping]:checked").each(function (){
    //   var toppingInput = $(this).val();
    //     console.log(toppingInput);
    $("#hidden").append("<li>" +'Hi ' + nameInput + '. The cost of your pizza is $' + newPizza.alterPrice() + "</li>");
  newPizza.alterPrice();
  });
});
