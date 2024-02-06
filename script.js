var box = document.getElementById("test")
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
    document.getElementById("opacity").innerText = colorOpacity/100
    box.style.boxShadow = `${horizontal}px ${vertical}px ${blur}px ${spread}px ${color} ${inset.checked?"inset":""}`
}
setBoxShadow()