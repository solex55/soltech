inames =[];
iqty = [];
iprice= [];

function addItem(){
    inames.push(document.getElementById('pname').value)
    iqty.push(parseInt(document.getElementById('qty').value))
    iprice.push(parseInt(document.getElementById('price').value))

    displayCart()
}

function displayCart(){
    cartdata='<table><tr><th>Product Name</th><th>Quantity</th><th>Price</th><th>Total</th></tr>';
    
    var total = 0;

    for(i=0; i<iqty.length; i++){
        total += iqty[i] * iprice[i]
        cartdata += "<tr><td>" + inames[i] + "</td><td>" + iqty[i] + "</td><td>" + iprice[i] + "</td><td>" + iqty[i] * iprice[i] + "</td><td><button onclick='delElement(" + i + ")'>Delete </button></td></tr>"
    }

    cartdata += '<tr><td></td><td></td><td></td><td>' + total + '</td><tr></table>';

    document.getElementById('cart').innerHTML = cartdata
}

function delElement(i){
    inames.splice(i, 1);
    iqty.splice(i, 1);
    iprice.splice(i, 1);
    displayCart();
}
