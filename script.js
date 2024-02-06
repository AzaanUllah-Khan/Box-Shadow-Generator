var box = document.getElementById("test")
var boxShadow;
function setBoxShadow(){
    var horizontal = document.getElementById("hor").value
    var vertical = document.getElementById("ver").value
    var blur = document.getElementById("bl").value
    var spread = document.getElementById("spr").value
    var color = document.getElementById("cl").value
    var colorOpacity = document.getElementById("op").value
    var inset = document.getElementById("ins")
    document.getElementById("horizon").innerText = horizontal + "px"
    document.getElementById("vertic").innerText = vertical + "px"
    document.getElementById("blur").innerText = blur + "px"
    document.getElementById("spread").innerText = spread + "px"
    document.getElementById("color").innerText = color
    document.getElementById("opacity").innerText = colorOpacity
    var rgbaColor = hexToRGBA(color, colorOpacity);
    boxShadow = `${horizontal}px ${vertical}px ${blur}px ${spread}px ${rgbaColor} ${inset.checked?"inset":""}`
    box.style.boxShadow = boxShadow
    document.getElementById("colorcopy").innerText = "box-shadow: "+boxShadow
}
function hexToRGBA(hex, opacity) {
    hex = hex.replace('#', '');
    var r = parseInt(hex.substring(0, 2), 16);
    var g = parseInt(hex.substring(2, 4), 16);
    var b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
function copy(icon) {
    var tempInput = document.createElement("input");
    tempInput.value = boxShadow;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    icon.className = "fa fa-check fa-fade"
    setTimeout(() => {
        icon.className = "fa-solid fa-copy"
    }, 1500);
}

setBoxShadow()