console.log("Fuck")

elem=document.getElementById("tname")

urlParams = new URL(window.location.href).searchParams

let gender=urlParams.get("g")
let tname =urlParams.get("n")
if (!!gender && !!tname){
    let prefix="Mr. "
    if (gender=="f"){
        prefix="Mrs. "
    }
    if (gender==""){
        prefix=""
    }
    elem.innerText=prefix + tname
}