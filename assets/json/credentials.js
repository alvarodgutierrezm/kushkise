function credentials() {
    var credentials = {
        CLP: 'cab1736fa5504f9baae97a1b4aa21642',
        COP: 'a192201dc05f4ab6807b866328d1f205',
        PEN: '1000000633845053099215659713079',
        MXN: '9fbf716eff3343ebbd77390132d0bf5e',
        USD: '2f31660c732f4ccc9c6133490cd09809'
    }
    const currency = localStorage.getItem('currency') ?? 'CLP';
    return currency ? credentials[currency] : '';
}

function documentType() {
    var documentType = {
        CLP: 'RUT',
        COP: 'CC',
        PEN: 'DNI',
        MXN: 'CURP',
        USD: 'CI'
    }
    const currency = localStorage.getItem('currency') ?? 'CLP';
    return currency ? documentType[currency] : '';
}


function privateCredential(){
    var credentials = {
        CLP: '9f90b202cd254b2b85b0af8d18c96879',
        COP: '3efe3f01cef54b4a8dd5d34ad275f6f8',
        PEN: '1000000633843458299515659713079',
        MXN: 'f647df83894f4648a77e70cb785c5888',
        USD: 'fc96ef60f72e473191f535dc3db253a7'
    }
    const currency = localStorage.getItem('currency') ?? 'CLP';
    return currency ? credentials[currency] : '';
}