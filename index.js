$("a.nav-link, .navbar-brand").on("mouseenter", handlerIn).on("mouseleave",handlerOut);

function handlerIn(){
    $(this).addClass("fc-darkpurple");
    console.log($(this));
}

function handlerOut(){
    $(this).removeClass("fc-darkpurple");
    console.log("this");
}


$(".projectButtons").on("mouseenter", handlerInProjects).on("mouseleave",handlerOutProjects);

function handlerInProjects(){
    $(this).addClass("shadow-current");
}

function handlerOutProjects(){
    $(this).removeClass("shadow-current");
}


