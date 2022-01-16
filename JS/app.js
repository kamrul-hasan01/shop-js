//  data 

const data = [{ name: "Court", price: 20, img: "https://image.freepik.com/free-vector/young-businessman-standing-character_98292-3724.jpg" },
{ name: "Plazo", price: 20, img: "https://image.freepik.com/free-vector/young-woman-standing-white_25030-39533.jpg" },
{ name: "Midi Dress", price: 20, img: "https://image.freepik.com/free-photo/beautiful-woman-with-red-rose_329181-18518.jpg" },
{ name: "black-dress", price: 20, img: "https://image.freepik.com/free-photo/portrait-young-woman-wearing-dress-touching-head_114579-66901.jpg" },
{ name: "white-dress", price: 20, img: "https://image.freepik.com/free-photo/sadness-beautiful-contemporary-ballroom-dancer-isolated-grey-studio-background-sensual-proffessional-artist-dancing-walz-tango-slowfox-quickstep-flexible-weightless_155003-37028.jpg" },
{ name: "t-shirt2", price: 20, img: "https://image.freepik.com/free-psd/white-t-shirt-with-silkscreen-mockup_125540-697.jpg" },
{ name: "jacket", price: 20, img: "https://image.freepik.com/free-psd/sweater-mockup-front-back_125540-579.jpg" },
{ name: "Joursy", price: 20, img: "https://image.freepik.com/free-vector/soccer-jersey-template-sport-t-shirt-design_29096-1420.jpg" },
{ name: "t-shirt", price: 20, img: "https://image.freepik.com/free-psd/mens-tri-blend-crew-tee-mockup_126278-130.jpg" },
{ name: "k-10", price: 20, img: "https://image.freepik.com/free-psd/sports-shirt-mockup-with-brand-logo_23-2148126781.jpg" },
{ name: "t-shirt2", price: 20, img: "https://image.freepik.com/free-psd/black-hoodie-mockup_125540-877.jpg" },

{ name: "joursy2", price: 20, img: "https://img.freepik.com/free-vector/soccer-jersey-template-sport-t-shirt-design_29096-1293.jpg?size=338&ext=jpg" }]




const getValue = (id) => {
    const value = parseFloat(document.getElementById(id).innerText)
    return value;
}
const setInnerTax = (id, value) => {
    const selectId = document.getElementById(id);
    selectId.innerText = value.toFixed(2);
}



//  product show 
const showProducts = (data) => {
    const { name, img, price } = data;
    const container = document.getElementById('products');
    const div = document.createElement("div")
    div.classList.add('col-md-3', 'm-2');
    div.innerHTML = `   <div class="card products" onclick="buyProduct('${name}','${img}',${price})">
    <div class="card-body">
    <img src= ${img} style="height: 150px;width: 150px;" alt="">
    
   
        <h5 class="card-title">${name}</h5>
        
    
    </div>
</div>`




    container.appendChild(div)

}
data.map(d => showProducts(d))

// addto cart
const addItem = () => {

    totalCount();
    if (newArray.length == 0) {
        const container = document.getElementById('purchase-item')
        container.innerHTML = "";
    }

    if (newArray.length !== 0) {
        const container = document.getElementById('purchase-item')
        container.innerHTML = "";

        for (const item of newArray) {

            const { name, img, quantity, price } = item;


            const div = document.createElement("div")
            div.classList.add('col-md-12', 'd-flex', 'box-shadow', 'pt-3', 'mb-0', 'm-3');
            div.innerHTML = ` 
            <p class="fs-5 ps-1"> <img
                    src=${img}
                    alt="no img" style="height: 60px; width: 60px; border-radius: 50%;"> ${name} <i
                    class="fab fa-d-and-d mx-2"></i> price :${price}
            </p >
            <img src="./delete.png" alt=""" class=" delete-icon" onclick="deletecart('${name}')">

            <p class="number">${quantity}</p>
        `


            container.appendChild(div)
        }
    }

}

//  cart data 
let newArray = [];
const buyProduct = (name, img, price) => {
    var obj = {};
    obj.name = name;
    obj.quantity = 1;
    obj.img = img;
    obj.price = price;



    if ((newArray.length !== 0) && (newArray.some(item => item.name === name))) {

        for (const item of newArray) {
            if (item.name === name) {

                item.quantity += 1;

                totalCount();
                addItem();

            }


        }

    } else {
        newArray.push(obj);
        totalCount();
        addItem();

    }
    if (newArray.length === 0) {

        newArray.push(obj);
        totalCount();
        addItem();
    }
}
const deletecart = (name) => {
    if (newArray.length === 0) {

        newArray = {};
        addItem();

    }

    if (newArray.length !== 0) {
        const result = newArray.filter(item => item.name !== name);

        newArray = result;
        addItem();

    }




}
const totalCount = () => {
    let Itemmprice = 0;
    newArray.map(item => { Itemmprice += item.price * item.quantity })


    const newPrice = Itemmprice;
    const discount = newPrice * 0.02;
    const total = newPrice - discount;
    setInnerTax('subtotal', newPrice);
    setInnerTax('discount', discount);
    setInnerTax('total', total);
    setInnerTax('totalPay', total);


}





