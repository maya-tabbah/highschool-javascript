var shoppingList;

function setup() {
  createCanvas(325, 400);
  //Create shopping list here
  shoppinglist = ["ice cream", "snacks", "cereal", "yogurt", "tissues", "pillow", "blanket"]
  //console.log(shoppinglist);
}

function draw() {
  background(220);
  textSize(26)
  textAlign(CENTER)
  text("Shopping List \nManagement System", width / 2, 50)

  textSize(12)
  //this will Update the list!
  rect(25, 100, 75, 50)
  text("Add Item", 60, 130)

  //this will Delete an item from the list
  rect(125, 100, 75, 50)
  text("Delete Item", 162, 130)

  //this will allow us to read the entire list
  rect(225, 100, 75, 50)
  text("View List", 263, 130)

  //this will show us a single (potentially random) item from the list
  rect(125, 175, 75, 50)
  text("Show One\nItem", 163, 197)
}

//we will practice using a CALL BACK FUNTION to make this organized!

function mousePressed() {
  //add item button
  if (mouseX > 25 && mouseX < 25 + 75 && mouseY > 100 && mouseY < 100 + 50) {
    //code to add an item 
    var addToList = prompt("what do you want to get?")
    shoppinglist.push(addToList)
    //console.log(shoppinglist);
  }

  //delete item button
  if (mouseX > 125 && mouseX < 125 + 75 && mouseY > 100 && mouseY < 100 + 50) {
    //code to delete item 
    let indexPosition = shoppinglist.indexOf("item to be removed");
    shoppinglist.splice(indexPosition,1);
    console.log(shoppinglist);
  }

  //view list button
  if (mouseX > 225 && mouseX < 225 + 75 && mouseY > 100 && mouseY < 100 + 50) {
    //code to view entire list
    alert(shoppinglist);
  }

  //single item button
  if (mouseX > 125 && mouseX < 125 + 75 && mouseY > 175 && mouseY < 175 + 50) {
    //code to display one item (and eventually one random item) 
    itemNumber = floor(random(0,shoppinglist.length))
    alert(shoppinglist[itemNumber])
  }
}