// child Node
const selected_item1=document.querySelector('[data-item="Fruit"]');
console.log(selected_item1);
const selected_item2=document.querySelector('[data-item="Vegetable"]');
console.log(selected_item2);

// Parent Node
const parent=selected_item1.parentNode
console.log(parent);

// Grandparent Node
const Grandparent=parent.parentNode;
console.log(Grandparent);


