const thingy = document.getElementById("boooop")

const thingy2 = document.getElementById("yesbutton")

const no = document.getElementById("no")

const nobutton = document.getElementById("nobutton")

thingy2.addEventListener("click", function(){
    thingy.style.display = "block";
    no.style.display = "none";
    
});

nobutton.addEventListener("click", function(){
    no.style.display = "block";
    thingy.style.display = "none";
});