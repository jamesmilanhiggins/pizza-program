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
  if ((this.size === "small") && (this.toppings.length === 0)) {
    this.price += 6;
  }
    else if ((this.size === "small") && (this.toppings.length === 1)) {
      this.price += 7;
    }
    else if ((this.size === "small") && (this.toppings.length === 2)) {
      this.price += 8;
    }
    else if ((this.size === "small") && (this.toppings.length === 3)) {
      this.price += 9;
    }
    else if ((this.size === "small") && (this.toppings.length >= 4)) {
      this.price += 10;
    }
    else if ((this.size === "medium") && (this.toppings.length === 0)) {
      this.price += 8;
    }
    else if ((this.size === "medium") && (this.toppings.length === 1)) {
      this.price += 9;
    }
    else if ((this.size === "medium") && (this.toppings.length === 2)) {
      this.price += 10;
    }
    else if ((this.size === "medium") && (this.toppings.length === 3)) {
      this.price += 11;
    }
    else if ((this.size === "medium") && (this.toppings.length >= 4)) {
      this.price += 12;
    }
    else if ((this.size === "large") && (this.toppings.length === 0)) {
      this.price += 10;
    }
    else if ((this.size === "large") && (this.toppings.length === 1)) {
      this.price += 11;
    }
    else if ((this.size === "large") && (this.toppings.length === 2)) {
      this.price += 12;
    }
    else if ((this.size === "large") && (this.toppings.length === 3)) {
      this.price += 13;
    }
    else if ((this.size === "large") && (this.toppings.length >= 4)) {
      this.price += 14;
    }
    else if ((this.size === "xl") && (this.toppings.length === 0)) {
      this.price += 12;
    }
    else if ((this.size === "xl") && (this.toppings.length === 1)) {
      this.price += 13;
    }
    else if ((this.size === "xl") && (this.toppings.length === 2)) {
      this.price += 14;
    }
    else if ((this.size === "xl") && (this.toppings.length === 3)) {
      this.price += 15;
    }
    else if ((this.size === "xl") && (this.toppings.length >= 4)) {
      this.price += 16;
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

    $("#hidden").append("<li>" +'Hi ' + nameInput + '. The cost of your pizza will be $' + newPizza.alterPrice() + "</li>");
    newPizza.alterPrice();
  });
});
