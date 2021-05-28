var modal = document.getElementById("modal1");
var modal2 = document.getElementById("modal2");

// Get the button that opens the modal
var btn = document.getElementById("buton-galerie");
var btn2 = document.getElementById("buton-login");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close")[0];
var span = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal
span.style.backgroundColor = "black";
span.style.fontFamily = "Times New Roman, sans-serif";
span2.style.backgroundColor = "black";
span2.style.fontFamily = "Times New Roman, sans-serif";
btn.onclick = function() {
  modal.style.display = "block";
}
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.currentTarget == modal) {
    modal.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}
document.getElementById("modal-content").style.backgroundColor = "lightblue";
document.getElementById("modal-content2").style.backgroundColor = "lightblue";
document.getElementById("modal-content2").style.fontFamily = "Times New Roman";

var lgnbtn = document.getElementById("login");
lgnbtn.onclick = function() {
  var text = "";
  var x = document.getElementById("demo-l1");
  text += x.value + " ";
  x = document.getElementById("demo-l2");
  text += x.value + "<br>";
  localStorage.setItem(0,text);
  document.getElementById("result").innerHTML = "You loged in as: " + localStorage.getItem(0);

} 


var x = document.createElement("IMG");
x.setAttribute("src", "pizza5.jpeg");
x.setAttribute("width", "275");
x.setAttribute("height", "183");
x.setAttribute("alt", "Poza pizza 5");
x.style.display = "inline-block";
x.style.padding = "10px";
document.getElementById("galerie-popup").appendChild(x);

x = document.createElement("IMG");
x.setAttribute("src", "pizza6.jpeg");
x.setAttribute("width", "275");
x.setAttribute("height", "183");
x.setAttribute("alt", "Poza pizza 6");
x.style.display = "inline-block";
x.style.padding = "10px";
document.getElementById("galerie-popup").appendChild(x);

x = document.createElement("IMG");
x.setAttribute("src", "pizza7.jpeg");
x.setAttribute("width", "275");
x.setAttribute("height", "183");
x.setAttribute("alt", "Poza pizza 7");
x.style.display = "inline-block";
x.style.padding = "10px";
document.getElementById("galerie-popup").appendChild(x);

x = document.createElement("IMG");
x.setAttribute("src", "pizza8.jpeg");
x.setAttribute("width", "275");
x.setAttribute("height", "183");
x.setAttribute("alt", "Poza pizza 8");
x.style.display = "inline-block";
x.style.padding = "10px";
document.getElementById("galerie-popup").appendChild(x);


document.getElementsByClassName("poza-pizza-galerie")[0].addEventListener("mouseover", mouseOver);
document.getElementsByClassName("poza-pizza-galerie")[0].addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementsByClassName("poza-pizza-galerie")[0].setAttribute("height","230");
  document.getElementsByClassName("poza-pizza-galerie")[0].setAttribute("width","300");
}

function mouseOut() {
  document.getElementsByClassName("poza-pizza-galerie")[0].setAttribute("height","183");
  document.getElementsByClassName("poza-pizza-galerie")[0].setAttribute("width","275");	
 }

document.getElementById("demo").style.display = "block";
document.getElementById("demo").style.margin="auto";
document.getElementById("demo").addEventListener("keydown", myFunction);

function myFunction() {
  var text = "";
  var x = document.getElementById("demo");
  text += x.value;
  document.getElementById("modal-content").style.backgroundColor = text;

  
}

function FctReduceri() {
	var mywindow = window.open("","mywindow","width=200,height=100");
	mywindow.document.write("<p>Use discount code SPRING for 20% off for any order!</p>");
	setTimeout(function(){mywindow.close()},3000);
}

var ora = setInterval (mytimer,1000);
function mytimer () {
	var d = new Date();
	var t= d.toLocaleTimeString();
	document.getElementById("ora").innerHTML = t;
}

document.getElementById("ceas").classList.add("dropbtn");
document.getElementById("ceas").style.padding = "0";
document.getElementById("ceas").style.textAlign = "center";

function Show () {
	var x = document.createElement("P");
	var txt = "The computed styles for the gallery are: <br>";
	
	var elem = document.getElementById("modal-content");
	var txt;
	cssObj = window.getComputedStyle(elem, null);

	for (i = 0; i < cssObj.length; i++) {
	  cssObjProp = cssObj.item(i)
	  txt += cssObjProp + " = " + cssObj.getPropertyValue(cssObjProp) + "<br>";
	}
	x.innerHTML =txt;
	document.getElementById("modal-content").appendChild(x);
}

function validateForm() {
  var x1 = document.forms["myForm"]["name"].value;
  var x2 = document.forms["myForm"]["email"].value;
  var x3 = document.forms["myForm"]["adress"].value;
  var x4 = document.forms["myForm"]["phone"].value;
  if (x1 == "") {
    alert("Name must be filled out");
    return false;
  }
  if (x2 == "") {
    alert("E-mail must be filled out");
    return false;
  }
  if (x3 == "") {
    alert("Adress must be filled out");
    return false;
  }
  if (x4 == "" && x4.length != 10) {
  	alert("Invalid phone number!");
  	return false;
  }

  const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; //XXX-XXX-XXXX sau XXX.XXX.XXXX sau XXX XXX XXXX
  if(!(phoneno.test(x4))) {
  	alert("Invalid Phone number!");
    return false;
  }
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!(re.test(String(x2).toLowerCase()))) {
  	alert ("Not a valid e-mail adress!");
  	return false;
  }


}



