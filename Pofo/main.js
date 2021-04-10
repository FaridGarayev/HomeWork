function mouseInNext()
{
    document.getElementById("box1next").style.display = "block";
    document.getElementById("box2next").style.display = "block";
    document.getElementById("box3next").style.display = "block";
}

function mouseOutNext()
{
    document.getElementById("box1next").style.display = "none";
    document.getElementById("box2next").style.display = "none";
    document.getElementById("box3next").style.display = "none";
}

function mouseInPrev()
{
    document.getElementById("box1prev").style.display = "block";
    document.getElementById("box2prev").style.display = "block";
    document.getElementById("box3prev").style.display = "block";
}

function mouseOutPrev()
{
    document.getElementById("box1prev").style.display = "none";
    document.getElementById("box2prev").style.display = "none";
    document.getElementById("box3prev").style.display = "none";
}

function homeDropDownin()
{
    document.getElementById("homedropdown").style.display = "block";
}

function homeDropDownOut()
{
    document.getElementById("homedropdown").style.display = "none";
}


function searchPageIn()
{
    document.getElementById("searchPageB").style.display = "block";
    document.getElementById("_body").style.overflow = "hidden";
}

function searchPageOut()
{
    document.getElementById("searchPageB").style.display = "none";
    document.getElementById("_body").style.overflowY = "scroll";
}