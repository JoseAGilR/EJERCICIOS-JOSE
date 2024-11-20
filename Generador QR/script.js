function generarCodigoQR(){
    let url = document.getElementById("url").value;

    if (url.trim()===""){
        alert("Por favor, introduce una URL válida.");
        return;
    }
    
    document.getElementById("contenedorInputs").style.display = "none";


    let qrcode = new QRCode(document.getElementById("contenedorQRcode"), url);

    document.getElementById("contenedorBotonDespues").style.display = "flex";


}