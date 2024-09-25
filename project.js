// alert("loading...")
function addnewWeField(){
    // console.log("add...")
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here")
    let weOb = document.getElementById("we");
    let weAddBtnOb = document.getElementById("weAddBtn");

    weOb.insertBefore(newNode,weAddBtnOb)

}
function addnewAqField(){
    // console.log("add...")
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here")
    let aqOb = document.getElementById("aq");
    let aqAddBtnOb = document.getElementById("aqAddBtn");

    aqOb.insertBefore(newNode,aqAddBtnOb)

}

// Last Part
// Generating CV
function generateCV(){
    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = nameField;

    document.getElementById("nameT2").innerHTML = nameField;
    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;
    document.getElementById("linkedInT").innerHTML = document.getElementById("linkedIn").value;
    document.getElementById("githubT").innerHTML = document.getElementById("gitHub").value;
    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;
    
    let weS = document.getElementsByClassName("weField");
    let str = "";
    for(let e of weS){
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML=str;

    let aqS = document.getElementsByClassName("aqField");
    let str1 = "";
    for(let e of aqS){
        str1 = str1 + `<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML=str1;

    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";
}

// printing CV
function printCV(){
    window.print();
}