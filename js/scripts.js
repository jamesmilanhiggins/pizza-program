/////////////////
//Back-End Logic
/////////////////
function Pizza(name, size, toppings, price) {
  this.name = name;
  this.size = size;
  this.toppings = [];
  this.price = 0;
}
Pizza.prototype.alterPrice = function() {
  if ((this.size === "small") && (this.toppings.length <= 5)) {
    this.price += 6000;
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
    else if((this.toppings.length === 1)) {
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
    else if (this.toppings.length === 5) {
      this.price +=5;
    }
    else if (this.toppings.length === 6) {
      this.price +=6;
    }
    return this.price;
  }
//////////////////
//Front-End Logic
//////////////////
$(document).ready(function() {
   $("button[name=submit-button]").click(function(){
    var nameInput =  $("input[name=name]").val();
    var pizzaSizeInput = $("#pizza-size").val();
    var newPizza =  new Pizza(nameInput, pizzaSizeInput, toppingsInput);

    var toppingsInput = $("input:checkbox[name=topping]:checked").each(function() {
      var toppingInput = $(this).val();
      newPizza.toppings.push(toppingsInput);
    });
    $("#hidden").append("<li>" +'Hi ' + nameInput + '. The cost of your pizza is $' + newPizza.alterPrice() + "</li>");
    console.log(newPizza);
    newPizza.alterPrice();

  });
});
