let avatarEls = document.getElementsByTagName("img");

for(let a = 0; a < avatarEls.length; a++){
    avatarEls[a].style.height = "90px";
    avatarEls[a].title = avatarEls[a].alt;
}

