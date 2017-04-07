/////////////////
//Back-End Logic
/////////////////


function Pizza (size, toppings) {
  this.age = [medium, large, xl];
  this.time = [cheese, pepperoni, sausage];
}

// Ticket.prototype.alterPrice = function() {
//   if ((this.age < 12) || (this.age >= 65)) {
//     this.price += 0
//   }
//   else {
//     this.price += 2
//
//   return this.price;
// }




//////////////////
//Front-End Logic
//////////////////
alert("test");
$(document).ready(function() {
   $("button[name=submit-button]").click(function(){
    var name =  $("input[name=name]").val();
    console.log(name);
  
    var pizzaSize = $("#pizza-size").val();
    var pizzaSize = $("#pizza-size").val();
  });
});
