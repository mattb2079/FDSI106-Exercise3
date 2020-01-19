var serverURL = "http://restclass.azurewebsites.net/API/";

function saveItem(){
    // get the values

    var code = $("#txtCode").val();
    var description = $("#txtDescription").val();
    var price = $("#txtPrice").val();
    var image = $("#txtImage").val();
    var category = $("#txtCategory").val();
    var stock = $("#txtStock").val();
    var deliveryDays = $("#txtDeliveryDays").val();

    // create an object
    // HOW TO CREATE OBJECTS, using onject constructor
    // Object literal

    // send the object to the server

    $.ajax({

    });
}

function testAjax(){

    // Asynchronous JavaScript And XML communication

    $.ajax({
        url: serverURL + "test",
        type: 'GET',
        success: function(res){
            console.log("Server says", res);
        },
        error: function(err){
            console.log("Error ocurred", err);
        }
    });

}

function init(){
    console.log("This is Admin page!!");

    // retrieve initial data

    // hook events
    $("#btnSave").click(saveItem);
}


window.onload = init;