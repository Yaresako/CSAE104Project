var count = 0 ;
var btn = document.getElementById("btn");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");

btn.addEventListener("click", function() {
    count++;
    btn.textContent = "Clicked " + count + (count === 1 ? " time" : " times" );
    console.log("count is now: " + count);
});
btn1.addEventListener("click", function() {
    alert("WAH");
});
btn2.addEventListener("click", function() {
    document.body.style.backgroundColor = "lightblue";

});
