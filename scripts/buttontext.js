function button() {
    var c = document.forms["ebform"]["committee"].value;
    if(c == "security council" || c == "general assembly") {
        document.getElementById("btn").innerHTML = "Proceed <small>(provide your co-delegate's info)</small>";
    }
    if(c == "economic and social council" || c == "international press corps") {
        document.getElementById("btn").innerHTML = "Apply";
    }
}