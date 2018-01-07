var mbtn = document.querySelector(".maps-button");
var enter = document.querySelector(".enter");
var exit = document.querySelector(".exit");
mbtn.addEventListener("click", function(evt){
evt.preventDefault();
enter.classList.add("enter-visible");
});

exit.addEventListener("click", function(evt){
evt.preventDefault();
enter.classList.remove("enter-visible");
});
