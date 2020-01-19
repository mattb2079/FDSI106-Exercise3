var items = [];

function fetchCatalog(){
    items = [
        {
            "code": "1234",
            "description": "This is the first item of the store",
            "price": 99.65,
            "image": "https://www.easygiftproducts.co.uk/32915/cruise-boat-835000-.jpg",
            "category": "Ships",
            "stock": 2,
            "deliveryDays": 180
        },
        {
            "code": "5678",
            "description": "This is the second item of the store",
            "price": 122.55,
            "image": "https://images-na.ssl-images-amazon.com/images/I/518pMpQuV4L._SL1001_.jpg",
            "category": "Planes",
            "stock": 5,
            "deliveryDays": 250
        },
        {
            "code": "1122",
            "description": "This is the third item of the store",
            "price": 12.22,
            "image": "https://static.turbosquid.com/Preview/2014/05/26__21_00_00/10.jpgdcb09e7e-9a23-4bbf-8e87-0390c8d26605DefaultHQ.jpg",
            "category": "Trains",
            "stock": 3,
            "deliveryDays": 150
        },
        {
            "code": "9876",
            "description": "This is the fourth item of the store",
            "price": 899.66,
            "image": "https://cdn.shopify.com/s/files/1/1847/5233/products/1e55298f22efbfb6fce345c0d4d874aa_1024x1024.png?v=1545342471",
            "category": "Rockets",
            "stock": 2,
            "deliveryDays": 600
        }
    ];
}

function displayCatalog(){
    // travel the array
    for(var i=0; i < items.length; i++){
        // get the item
        var item = items[i];
        // draw the item on the DOM (html)
        drawItem(item);
    }
}

function drawItem(item){
    // create the syntax

    var sntx =
    `<div class= 'item'>
    <img src='${item.image}'>

        <label class='code'>${item.code}</label>
        <label class='cat'>${item.category}</label>

        <label class='desc'>${item.description}</label>

        <label class='price'>${item.price}</label>
        <button class = 'btn btn-sm btn-info'> + </button>

    </div>`;

    // get the element from the screen
    var container = $("#catalog");

    // append the syntax to the element
    container.append(sntx);
}

function search(){

    var text = $("#txtSearch").val().toLowerCase(); // get the text

    // clear prev results
    $('#catalog').html("");

    //travel the array and show only items that contain the text
    for(var i=0; i < items.length; i++){
        var item = items[i];

        // if the title contains the text,
        // OR the category contains the text
        // OR the code is equal to the text
        // OR the price is equal to the text
        //then show the item on the screen
        if (item.description.toLowerCase().includes(text)
            || item.category.toLowerCase().includes(text)
            || item.code == text
            || item.price == text
        ){
            drawItem(item);
        }
    }
}

function init(){
    console.log("This is catalog page!");

    // get data
    fetchCatalog();
    displayCatalog();

    // hook events
    $("#btnSearch").click(search);

    
    $("#txtSearch").keypress( function(e){
        //console.log(e);

        if(e.keyCode == 13){
            search();
        }
    });
}


// http methods
// http status codes

window.onload = init;