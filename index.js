let carts = document.querySelectorAll("#add_to_cart");
const items = [];

let products = [
    {
        name:"Lathe Machine",
        price: 100000,
        inCart: 0,
    },
    {
        name:"Glass Cutting Machine",
        price: 200000,
        inCart: 0,
    },
    {
        name:"Gear System",
        price: 120000,
        inCart: 0,
    },
    {
        name:"Electric Motors",
        price: 150000,
        inCart: 0,
    },

	{
        name:"Big Cranes",
        price: 150000,
        inCart: 0,
    },
    {
        name:"Bull Dozer",
        price: 800000,
        inCart: 0,
    },
    {
        name:"Excavator",
        price: 550000,
        inCart: 0,
    },
    {
        name:"Construction Safety Equipment",
        price: 50000,
        inCart: 0,
    },

	{
        name:"Coffee Machine",
        price: 400000,
        inCart: 0,
    },
    {
        name:"Distillery",
        price: 700000,
        inCart: 0,
    },
    {
        name:"Boilers",
        price: 900000,
        inCart: 0,
    },
    {
        name:"Diffusers",
        price: 100000,
        inCart: 0,
    }
];

for(let i=0; i<carts.length; i++){
	carts[i].addEventListener('click', ()=>{
		cartNumbers(products[i]);
	})
}

function onLoadCartNumber(){
    localStorage.removeItem('cartNumbers');
	//let productNumber = localStorage.getItem('cartNumber');

	/*if(productNumber){
		document.querySelector('.btn span').textContent = productNumber;
	}
	else{

	}*/
}

function cartNumbers(product){
	//console.log('The product clicked is:', product);
	let productNumber = localStorage.getItem('cartNumber');
	productNumber = parseInt(productNumber);
    
	if(productNumber){
		localStorage.setItem('cartNumber', productNumber+1);
		document.querySelector('.btn span').textContent = productNumber+1;
	}
	else{
		localStorage.setItem('cartNumber', 1);
		document.querySelector('.btn span').textContent = 1;
	}

	itemsInCart(product);
}

function itemsInCart(product){  //contains items present in the cart
	items.push(product);
    console.log(items);
}

let cartButton = document.getElementById('show_cart');
cartButton.addEventListener('click', display);

function display(){
	if(items.length == 0){
		//console.log('Nothing in the cart');
		document.getElementById('modalBody').innerHTML = 'Nothing in the cart';
	}
	else{
		document.getElementById('modalBody').innerHTML = "";
		let ul = document.createElement('ul');
		ul.className = "list-group";
		let totalCost = 0;
		for(let item of items){
			let amount = item.price;
			amount = parseInt(amount);
			totalCost += amount;
			var li = document.createElement('li');
			li.className = "list-group-item";
			li.innerHTML = 
			`<div>
				<p>${item.name}   <span class="text-muted">Rs ${item.price}</span></p>
			</div>`;
			ul.appendChild(li);
		}
		
		let body = document.getElementById('modalBody');
		body.append(ul);
		document.getElementById('total-amount').innerHTML = "Rs." + totalCost;
	}
}

onLoadCartNumber();


