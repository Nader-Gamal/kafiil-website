// perchuse function

let itemsCount = 0;

let itemsElement = document.getElementById('items');
let costElement = document.getElementById('cost');

let minus = document.getElementById('minus');
let plus = document.getElementById('plus');

minus.addEventListener('click', function () {
  if(itemsCount > 0)
  {
    itemsCount--;
  }
  updateItemsAndCost();
});
plus.addEventListener('click',function(){
  itemsCount++;
  updateItemsAndCost();
})

function updateItemsAndCost() {
  // Update the items and cost variables
  let items = `<p class="space align-self-center fw-bold fs-6">${itemsCount}</p>`;
  let cost = `<p class = "fw-bold fs-6">$${itemsCount * 100}</p>`;

  // Set the updated values to the innerHTML of respective elements
  itemsElement.innerHTML = items;
  costElement.innerHTML = cost;
}

// Initial update
updateItemsAndCost();
