var functionalRequirements = "System shall allow only textual and numerical inputs,System shall allow the user to select the type of query from a dropdown menu,System shall update its database once every week on Sunday 11:59PM by querying the official Pakistan Penal Code website,System should provide a link to the official Pakistan Penal Code website of the law it is suggesting to the user,User should be able to print the law as a document form that the system has suggested,"
functionalRequirements = functionalRequirements.split(",");
document.getElementById("functional").style.display = 'none';
function showFunctional() {
    var x = document.getElementById("functional");
    if (x.style.display === "none") {
        var ol = document.createElement("ol");
        for (let i of functionalRequirements) {
            let li = document.createElement("li");
            li.innerHTML = i;
            ol.appendChild(li);
        }
        document.getElementById("functional").appendChild(ol);
        console.log(functionalRequirements);
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
var nonFunctionalRequirements = "System shall allow only textual and numerical inputs,System shall allow the user to select the type of query from a dropdown menu,System shall update its database once every week on Sunday 11:59PM by querying the official Pakistan Penal Code website,System should provide a link to the official Pakistan Penal Code website of the law it is suggesting to the user,User should be able to print the law as a document form that the system has suggested,"
nonFunctionalRequirements = nonFunctionalRequirements.split(",");
document.getElementById("nonfunctional").style.display = 'none';
function showNonFunctional() {
    var x = document.getElementById("nonfunctional");
    if (x.style.display === "none") {
        var ol = document.createElement("ol");
        for (let i of nonFunctionalRequirements) {
            let li = document.createElement("li");
            li.innerHTML = i;
            ol.appendChild(li);
        }
        document.getElementById("nonfunctional").appendChild(ol);
        console.log(nonFunctionalRequirements);
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

