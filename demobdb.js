function dicho(){
    console.log("Di cho");
}

function naucom(hamkhac){
    //phai cho
    setTimeout(hamkhac, 1000);
    console.log("nau com")
}

function antrua(){
    naucom(dicho);
    console.log("doncom");
    console.log("an");
    console.log("rua bat")
}