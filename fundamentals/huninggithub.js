
var myname;

function clickmefunction() {
$(document).ready(function(){
    var myname;
    // the given link is for Bulbasaur's information
    $.get("https://api.github.com/users/yadulagithub", function(data){     
        myname = data.name;
        console.log("Name is : ", myname);
        alert("Name is : " + myname)
        document.getElementById("name").innerHTML = "Name is : " + myname;
    });

   
});     

}