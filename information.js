var weight;
 var height;
 var sex;
 var age;
 var btnNew = document.getElementById("nextButton");

 btnNew.onclick =function write()
 {
     window.alert("imported");
     weight = document.getElementById("weight").value;
     document.getElementById("weight").value = "";
     height = document.getElementById("height").value;
     document.getElementById("height").value = "";
     sex = document.getElementById("sex").value;
     document.getElementById("sex").value = "";
     age = document.getElementById("age").value;
     document.getElementById("age").value = "";
 }

 function getWeight()
 {
     document.getElementById("weight").innerHTML = weight;
 }
function getHeight()
 {
     return height;
 } 
 function getSex()
 {
     return sex;
 } 
 function getAge()
 {
     return age;
 }