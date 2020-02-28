/**
Creates a shopping list and displays it on shopping.innerHTML
*/
function Item(n, p, c) {

    this.name = n;
    this.price = p;
    this.count = c;
}


let shopping = [];

function addItem(){


  while(true){

  let name = prompt("What would you like to buy?");
  console.log(name);
  if(name==null){
    return;
  }
  let price = prompt("How much is it?");
  let count = prompt("How many do you want?");
  let myItem = new Item(name, price, count);
  shopping.push(myItem);
  }
  return;
}

function total(){
  let sum = 0;
  for(i = 0; i < shopping.length; i++){
    sum += shopping[i].price * shopping[i].count;
  }
  return(sum);
}
//
window.onload = function(){
//You will call the functions you wrote here
addItem();
printList(shopping);
}


//Prints the shopping list on the web page by changing the html code
//list: Array of items
function printList(list){
    for(let i = 0; i < list.length; i++){
        document.getElementById("shoppingList").innerHTML += "<tr><td>" + list[i].name  + "</td> <td>" + list[i].price  + "</td> <td>" + list[i].count  +'</td></tr>';
    }
    document.getElementById("totalCost").innerHTML += "<br>Your total is $" + total();
}
