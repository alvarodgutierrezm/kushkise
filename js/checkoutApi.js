console.log("cargaa");

function getCheckoutProducts() {
    var cartProducts = localStorage.getItem('cart');
    const currency = localStorage.getItem('currency') ?? 'CLP';
    let total = 0;
    let result = [];
    if (cartProducts !== null) {

        cartProducts = JSON.parse(cartProducts);
        const productsObj = {};
        products().forEach(item => {
            productsObj[item.reference] = item;
        });


        cartProducts.forEach(item => {
            let product = productsObj[item.reference];
            if (product) {
                var obj = {
                    reference: item.reference,
                    name: product.name,
                    description: product.name,
                    quantity: Number(item.quantity)
                };
                obj.unitPrice = product[currency]

                total += obj.unitPrice ? obj.unitPrice * obj.quantity : 0;
                result.push(obj);
            }
        });
    }
    return {
        products: result,
        total,
        currency
    }
}



function kushkiCheckout() {
    const products_info = getCheckoutProducts();
    postCheckout(products_info);
}

const postCheckout = async (products_info) => {
    const privateKey =  privateCredential();
    const request = {
        "kind": "webcheckout",
        "contactDetail": {
            "name": "Efren Islas"
        },
        "redirectURL": "https://eislasro.github.io/kushkise",
        "products": products_info.products,
        "paymentConfig": {
            "amount": {
                "subtotalIva": 0,
                "subtotalIva0": products_info.total,
                "iva": 0,
                "currency": products_info.currency,
            },
            "paymentMethod": [
                "credit-card",
                "cash",
                "transfer"
            ]
        }
    };

    swal.fire({
        title: 'Procesando ...',
        didOpen() {
            swal.showLoading()
        },
        didClose() {
            swal.hideLoading()
        },
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false
    })
    const fetch_pros = await fetch("https://api-uat.kushkipagos.com/smartlink/v1/webcheckout", {
        method: "POST",
        body: JSON.stringify(request),
        headers: {
            "Private-Merchant-Id": privateKey
        }
    });
    swal.close();
    const data = await fetch_pros.json();
    window.location.href = data.webcheckoutUrl;

}