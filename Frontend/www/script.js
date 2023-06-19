let codeToSave
var pizza_info = [
    {
        id:1,
        icon:'assets/images/pizza_7.jpg',
        title: "Імпреза",
        type: 'meat',
        content: {
            meat: ['балик', 'салямі'],
            chicken: ['куриця'],
            cheese: ['сир моцарелла', 'сир рокфорд'],
            pineapple: ['ананаси'],
            additional: ['томатна паста', 'петрушка']
        },
        small_size:{
            weight: 370,
            size: 30,
            price: 99
        },
        big_size:{
            weight: 660,
            size: 40,
            price: 169
        },
        is_new:true,
        is_popular:true

    },
    {
        id:2,
        icon:'assets/images/pizza_2.jpg',
        title: "BBQ",
        type: 'meat',
        content: {
            meat: ['мисливські ковбаски', 'ковбаски папероні', 'шинка'],
            cheese: ['сир домашній'],
            mushroom: ['шампінйони'],
            additional: ['петрушка', 'оливки']
        },
        small_size:{
            weight: 460,
            size: 30,
            price: 139
        },
        big_size:{
            weight: 840,
            size: 40,
            price: 199
        },
        is_popular:true
    },
    {
        id:3,
        icon:'assets/images/pizza_1.jpg',
        title: "Міксовий поло",
        type: 'seafood',
        content: {
            meat: ['вітчина', 'куриця копчена'],
            cheese: ['сир моцарелла'],
            pineapple: ['ананаси'],
            additional: ['кукурудза', 'петрушка', 'соус томатний']
        },
        small_size:{
            weight: 430,
            size: 30,
            price: 115
        },
        big_size:{
            weight: 780,
            size: 40,
            price: 179
        }
    },
    {
        id:4,
        icon:'assets/images/pizza_5.jpg',
        title: "Сициліано",
        type: 'meat',
        content: {
            meat: ['вітчина', 'салямі'],
            cheese: ['сир моцарелла'],
            mushroom: ['шампінйони'],
            additional: ['перець болгарський',  'соус томатний']
        },
        small_size:{
            weight: 450,
            size: 30,
            price: 111
        },
        big_size:{
            weight: 790,
            size: 40,
            price: 169
        }
    },
    {
        id:17,
        icon:'assets/images/pizza_3.jpg',
        title: "Маргарита",
        type: 'vegan',
        content: {
            cheese: ['сир моцарелла', 'сир домашній'],
            tomato: ['помідори'],
            additional: ['базилік', 'оливкова олія', 'соус томатний']
        },
        small_size:{
            weight: 370,
            size: 30,
            price: 89
        },
        big_size:{
            weight: 660,
            size: 40,
            price: 129
        }
    },
    {
        id:43,
        icon:'assets/images/pizza_6.jpg',
        title: "Мікс смаків",
        type: 'meat',
        content: {
            meat: ['ковбаски'],
            cheese: ['сир моцарелла'],
            mushroom: ['шампінйони'],
            pineapple: ['ананаси'],
            additional: ['цибуля кримська', 'огірки квашені', 'соус гірчичний']
        },
        small_size:{
            weight: 470,
            size: 30,
            price: 115
        },
        big_size:{
            weight: 780,
            size: 40,
            price: 180
        }
    },
    {
        id:90,
        icon:'assets/images/pizza_8.jpg',
        title: "Дольче Маре",
        type: 'seafood',
        content: {
            ocean: ['криветки тигрові', 'мідії', 'ікра червона', 'філе червоної риби'],
            cheese: ['сир моцарелла'],
            additional: ['оливкова олія', 'вершки']
        },
        small_size:{
            weight: 470,
            size: 30,
            price: 115
        },
        big_size:{
            weight: 845,
            size: 40,
            price: 399
        }
    },
    {
        id:6,
        icon:'assets/images/pizza_4.jpg',
        title: "Россо Густо",
        type: 'seafood',
        content: {
            ocean: ['ікра червона', 'лосось копчений'],
            cheese: ['сир моцарелла'],
            additional: ['оливкова олія', 'вершки']
        },
        small_size:{
            weight: 400,
            size: 30,
            price: 189
        },
        big_size:{
            weight: 700,
            size: 40,
            price: 299
        }
    }
];
if(codeToSave!==undefined){
    let cart = document.querySelector(".cart")
    let parsed = localStorage.getItem('savedCode')
    cart = JSON.parse(parsed)
}
for (let pizza of pizza_info){
    let new_pizza = document.createElement('div');
    new_pizza.classList.add('pizza-item')
    new_pizza.setAttribute("type", pizza.type)
    if(pizza.content.pineapple!==undefined){
        new_pizza.setAttribute("add-ons", "pineapple")
    }
    if(pizza.content.mushroom!==undefined){
        new_pizza.setAttribute("add-ons", "mushrooms")
    }
    new_pizza.innerHTML = `<div class="thumbnail">
            <img src="${pizza.icon}" alt="pizza-image">
            <div class="information">
                <span class="name">
                    ${pizza.title}
                </span>
                <span class="pizza-type">
                    ${pizza.type}
                </span>
                <span class="ingredients">
                ${Object.values(pizza.content).flat().join(', ')}
                </span>
                <div class="size-info">
                    <div class="size-s">
                        <div class="size">
                            <img src="assets/images/size-icon.svg"/><span>${pizza.small_size.size}</span>
                        </div>
                        <div class="weight">
                            <img src="assets/images/weight.svg"/><span>${pizza.small_size.weight}</span>
                        </div>
                        <div class="price">
                            <b>${pizza.small_size.price}</b>
                        </div>
                        <span>грн.</span>
                        <button type="button" onclick="buy_small()">
                            Купити
                        </button>
                    </div>
                <div class="size-l">
                    <div class="size">
                        <img src="assets/images/size-icon.svg"/><span>${pizza.big_size.size}</span>
                    </div>
                    <div class="weight">
                        <img src="assets/images/weight.svg"/><span>${pizza.big_size.weight}</span>
                    </div>
                    <div class="price">
                        <b>${pizza.big_size.price}</b>
                    </div>
                    <span>грн.</span>
                    <button type="button" onclick="buy_large()">
                        Купити
                    </button>
                </div>
                </div>
            </div>
        </div>`
    let products = document.querySelector('.list');
    products.appendChild(new_pizza)
}
document.querySelector('.pizzas-amount').textContent = pizza_info.length
let total = document.querySelector(".cart .cart-title span span")
let total_sum = document.querySelector(".cart .buy-section .sum")
let all_pizzas = 8
class Pizza{
    constructor(name, large, quantity) {
        this.name = name
        this.large = large
        this.quantity = quantity
    }
    increase(){
        this.quantity += 1
    }
    decrease(){
        this.quantity -= 1
    }
}
let pizza_ordered = []
function buy_large(){
    let item = event.target.closest(".thumbnail")
    let name = item.querySelector(".name").textContent.trim()
    let large_name = name + " (Велика)"
    let price = item.querySelector(".size-l").querySelector(".price").querySelector('b').textContent
    for(let pizza of pizza_ordered){
        if(pizza.name===name && pizza.large){
            pizza.quantity += 1
            for (let order of document.querySelector(".order-list").getElementsByClassName("ordered-item")){
                    if(order.querySelector(".pizza-name").textContent==large_name.trim()){
                        let quantity = order.querySelector(".amount")
                        amount = parseInt(quantity.textContent)
                        quantity.textContent = amount+1
                        total.textContent = parseInt(total.textContent) + 1
                        order.querySelector(".minus").classList.remove('disabled')
                        total_sum.textContent = (parseInt(total_sum.textContent.split(" ")[0]) + parseInt(price)) + "грн"
                        return;
                    }
            }
        }
    }
    pizza_ordered.push(new Pizza(name, true, 1))
    let weight = item.querySelector(".size-l").querySelector(".weight").querySelector('span').textContent
    let new_order = document.createElement('div')
    let image = item.querySelector("img").getAttribute('src')
    new_order.classList.add("ordered-item")

    new_order.innerHTML = `<div class="details">
            <span class="pizza-name">${name} (Велика)</span>
            <div class="order-info">
                <div class="size">
                    <img src="assets/images/size-icon.svg"/><span>40</span>
                </div>
                <div class="weight">
                    <img src="assets/images/weight.svg"/><span>${weight}</span>
                </div>
            </div>
            <form class="control-panel">
                <span>${price}грн</span>
                <div class="amount-control">
                    <button type="button" class="minus disabled" onclick="reduce()">
                        -
                    </button>
                    <span class="amount">1</span>
                    <button type="button" class="plus" onclick="increase()">
                        +
                    </button>
                </div>
                <button type="button" class="delete" onclick="remove()">
                        x
                </button>
            </form>
            </div>
            <div class="order-picture">
                <img src=${image}>
            </div>
        </div>
    `
    document.querySelector(".order-list").appendChild(new_order)
    total.textContent = parseInt(total.textContent) + 1
    total_sum.textContent = (parseInt(total_sum.textContent.split(" ")[0]) + parseInt(price)) + "грн"
    update_storage()
}
function buy_small(){
    let item = event.target.closest(".thumbnail")
    let name = item.querySelector(".name").textContent.trim()
    let large_name = name + " (Мала)"
    let price = item.querySelector(".size-s").querySelector(".price").querySelector('b').textContent
    for(let pizza of pizza_ordered){
        if(pizza.name===name && !pizza.large){
            pizza.quantity += 1
            for (let order of document.querySelector(".order-list").getElementsByClassName("ordered-item")){
                if(order.querySelector(".pizza-name").textContent==large_name.trim()){
                    let quantity = order.querySelector(".amount")
                    amount = parseInt(quantity.textContent)
                    quantity.textContent = amount+1
                    total.textContent = parseInt(total.textContent) + 1
                    order.querySelector(".minus").classList.remove('disabled')
                    total_sum.textContent = (parseInt(total_sum.textContent.split(" ")[0]) + parseInt(price)) + "грн"
                    return;
                }
            }
        }
    }
    pizza_ordered.push(new Pizza(name, false, 1))
    let weight = item.querySelector(".size-s").querySelector(".weight").querySelector('span').textContent
    let new_order = document.createElement('div')
    let image = item.querySelector("img").getAttribute('src')
    new_order.classList.add("ordered-item")
    new_order.innerHTML = `<div class="details">
            <span class="pizza-name">${name} (Мала)</span>
            <div class="order-info">
                <div class="size">
                    <img src="assets/images/size-icon.svg"/><span>40</span>
                </div>
                <div class="weight">
                    <img src="assets/images/weight.svg"/><span>${weight}</span>
                </div>
            </div>
            <form class="control-panel">
                <span>${price}грн</span>
                <div class="amount-control">
                    <button type="button" class="minus disabled" onclick="reduce()">
                        -
                    </button>
                    <span class="amount">1</span>
                    <button type="button" class="plus" onclick="increase()">
                        +
                    </button>
                </div>
                <button type="button" class="delete" onclick="remove()">
                        x
                </button>
            </form>
            </div>
            <div class="order-picture">
                <img src=${image}>
            </div>
        </div>
    `
    document.querySelector(".order-list").appendChild(new_order)
    total.textContent = parseInt(total.textContent) + 1
    total_sum.textContent = (parseInt(total_sum.textContent.split(" ")[0]) + parseInt(price)) + "грн"
    update_storage()

}
function increase(){
    let order = event.target.closest(".ordered-item");
    let quantity = order.querySelector(".amount")
    amount = parseInt(quantity.textContent)
    quantity.textContent = amount+1
    total.textContent = parseInt(total.textContent) + 1
    order.querySelector(".minus").classList.remove('disabled')
    let price = parseInt(order.querySelector(".control-panel span").textContent.slice(0, -3))
    total_sum.textContent = (parseInt(total_sum.textContent.split(" ")[0]) + price) + "грн"
}
function reduce(){
    let order = event.target.closest(".ordered-item");
    let quantity = order.querySelector(".amount")
    amount = parseInt(quantity.textContent)
    quantity.textContent = amount-1
    total.textContent = parseInt(total.textContent) - 1
    if(quantity.textContent==1){
        order.querySelector(".minus").classList.add('disabled')
    }
    let price = parseInt(order.querySelector(".control-panel span").textContent.slice(0, -3))
    total_sum.textContent = (parseInt(total_sum.textContent.split(" ")[0]) - price) + "грн"
}
function remove(){
    let order = event.target.closest(".ordered-item");
    let quantity = order.querySelector(".amount").textContent
    let price = parseInt(order.querySelector(".control-panel span").textContent.slice(0, -3))
    total_sum.textContent = (parseInt(total_sum.textContent.split(" ")[0]) - price*parseInt(quantity)) + "грн"
    total.textContent = parseInt(total.textContent) - parseInt(quantity)
    order.remove()
}
function clear_orders(){
    let list = document.querySelector(".order-list")
    list.innerHTML = ``
    pizza_ordered = []
    total.textContent = 0
    total_sum.textContent = "0 грн"
}
function filter_pizza(element){
    for (let filter of document.querySelector(".filters").getElementsByTagName("span")){
        filter.classList.remove("chosen")
    }
    element.classList.add("chosen")
    all_pizzas = 0
    let filter = element.classList[0].trim()
    if(filter==='meat' || filter==='seafood' || filter==='vegan'){
        for (let pizza of document.getElementsByClassName("pizza-item")){
            pizza.style.display = "flex"
            if(pizza.getAttribute('type')!==filter){
                pizza.style.display = "none"
            }
            else{
                all_pizzas+=1
            }
        }
    }
    else if(filter==='mushrooms' || filter==="pineapple"){
        for (let pizza of document.getElementsByClassName("pizza-item")){
            pizza.style.display = "flex"
            if(pizza.getAttribute('add-ons')!==filter){
                pizza.style.display = "none"
            }
            else{
                all_pizzas+=1
            }
        }
    }
    else if(filter==='all'){
        for (let pizza of document.getElementsByClassName("pizza-item")){
            pizza.style.display = "flex"
                all_pizzas+=1
        }
    }
    document.querySelector(".pizza-filters .pizzas-amount").textContent = all_pizzas

}
function update_storage(){
    let codeToSave = document.querySelector(".cart")
    codeToSave = JSON.stringify(codeToSave)
    localStorage.setItem('savedCode', codeToSave);
}