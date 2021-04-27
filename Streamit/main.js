function pagesClickJsin()
{
    document.getElementsByClassName("pagesJs")[0].style.display = "block";
    
}

function pagesClickJsout()
{
    document.getElementsByClassName("pagesJs")[0].style.display = "none";
}

function pricingClickJsin()
{
    document.getElementsByClassName("pagesJs")[0].style.display = "block";
    document.getElementsByClassName("pricingJs")[0].style.display = "block";

}

function pricingClickJsout()
{
    document.getElementsByClassName("pagesJs")[0].style.display = "none";
    document.getElementsByClassName("pricingJs")[0].style.display = "none";

}

function searchClickJsin()
{
    document.getElementsByClassName("loopJs")[0].style.display = "block";

}

function searchClickJsout()
{
    document.getElementsByClassName("loopJs")[0].style.display = "none";

}

function bellClickJsin()
{
    document.getElementsByClassName("bellJs")[0].style.display = "block";

}

function bellClickJsout()
{
    document.getElementsByClassName("bellJs")[0].style.display = "none";

}

function imgClickJsin(){
    document.getElementsByClassName("imgJs")[0].style.display = "block";

}

function imgClickJsout(){
    document.getElementsByClassName("imgJs")[0].style.display = "none";

}

var span = document.getElementsByClassName('span1');
var div = document.getElementsByClassName('div12');
var l = 0;
span[1].onclick = () => {
    l++;
    for (var i of div) {
        if (l == 0) {
            i.style.left = "0px";
        }
        if (l == 1) {
            i.style.left = "-713px";
        }
        if (l == 2) {
            i.style.left = "-1435px";
        }
        if (l == 4) {
            i.style.left = "-2150px";
        }
        if (l > 4) {
            l = 4;
        }
    }
}
span[0].onclick = () => {
    l--;
    for (var i of div) {
        if (l == 0) {
            i.style.left = "0px";
        }
        if (l == 1) {
            i.style.left = "-713px";
        }
        if (l == 2) {
            i.style.left = "-1435px";
        }
        if (l == 4) {
            i.style.left = "-2150px";
        }
        if (l < 0) {
            l = 0;
        }
    }
}

var div1 = document.getElementsByClassName('div13');
var l = 0;
span[3].onclick = () => {
    l++;
    for (var i of div1) {
        if (l == 0) {
            i.style.left = "0px";
        }
        if (l == 1) {
            i.style.left = "-713px";
        }
        if (l == 2) {
            i.style.left = "-1435px";
        }
        if (l == 4) {
            i.style.left = "-2150px";
        }
        if (l > 4) {
            l = 4;
        }
    }
}
span[2].onclick = () => {
    l--;
    for (var i of div1) {
        if (l == 0) {
            i.style.left = "0px";
        }
        if (l == 1) {
            i.style.left = "-713px";
        }
        if (l == 2) {
            i.style.left = "-1435px";
        }
        if (l == 4) {
            i.style.left = "-2150px";
        }
        if (l < 0) {
            l = 0;
        }
    }
}

var div2 = document.getElementsByClassName('div14');
var l = 0;
span[5].onclick = () => {
    l++;
    for (var i of div2) {
        if (l == 0) {
            i.style.left = "0px";
        }
        if (l == 1) {
            i.style.left = "-720px";
        }
        if (l == 2) {
            i.style.left = "-1440px";
        }
        if (l == 4) {
            i.style.left = "-2160px";
        }
        if (l > 4) {
            l = 4;
        }
    }
}
span[4].onclick = () => {
    l--;
    for (var i of div2) {
        if (l == 0) {
            i.style.left = "0px";
        }
        if (l == 1) {
            i.style.left = "-713px";
        }
        if (l == 2) {
            i.style.left = "-1440px";
        }
        if (l == 4) {
            i.style.left = "-2160px";
        }
        if (l < 0) {
            l = 0;
        }
    }
}

var cover12 = document.getElementsByClassName("cover-12");

// Cover 1 Start
document.querySelectorAll(".div12")[0].addEventListener("mouseover", function() { document.querySelectorAll(".cover-12")[0].style.display = "block"; });
document.querySelectorAll(".div12")[0].addEventListener("mouseout", function() { document.querySelectorAll(".cover-12")[0].style.display = "none"; });

document.querySelectorAll(".div12")[1].addEventListener("mouseover", function() { document.querySelectorAll(".cover-12")[1].style.display = "block"; });
document.querySelectorAll(".div12")[1].addEventListener("mouseout", function() { document.querySelectorAll(".cover-12")[1].style.display = "none"; });

document.querySelectorAll(".div12")[2].addEventListener("mouseover", function() { document.querySelectorAll(".cover-12")[2].style.display = "block"; });
document.querySelectorAll(".div12")[2].addEventListener("mouseout", function() { document.querySelectorAll(".cover-12")[2].style.display = "none"; });

document.querySelectorAll(".div12")[3].addEventListener("mouseover", function() { document.querySelectorAll(".cover-12")[3].style.display = "block"; });
document.querySelectorAll(".div12")[3].addEventListener("mouseout", function() { document.querySelectorAll(".cover-12")[3].style.display = "none"; });

document.querySelectorAll(".div12")[4].addEventListener("mouseover", function() { document.querySelectorAll(".cover-12")[4].style.display = "block"; });
document.querySelectorAll(".div12")[4].addEventListener("mouseout", function() { document.querySelectorAll(".cover-12")[4].style.display = "none"; });

document.querySelectorAll(".div12")[5].addEventListener("mouseover", function() { document.querySelectorAll(".cover-12")[5].style.display = "block"; });
document.querySelectorAll(".div12")[5].addEventListener("mouseout", function() { document.querySelectorAll(".cover-12")[5].style.display = "none"; });

document.querySelectorAll(".div12")[6].addEventListener("mouseover", function() { document.querySelectorAll(".cover-12")[6].style.display = "block"; });
document.querySelectorAll(".div12")[6].addEventListener("mouseout", function() { document.querySelectorAll(".cover-12")[6].style.display = "none"; });

document.querySelectorAll(".div12")[7].addEventListener("mouseover", function() { document.querySelectorAll(".cover-12")[7].style.display = "block"; });
document.querySelectorAll(".div12")[7].addEventListener("mouseout", function() { document.querySelectorAll(".cover-12")[7].style.display = "none"; });

document.querySelectorAll(".div12")[8].addEventListener("mouseover", function() { document.querySelectorAll(".cover-12")[8].style.display = "block"; });
document.querySelectorAll(".div12")[8].addEventListener("mouseout", function() { document.querySelectorAll(".cover-12")[8].style.display = "none"; });
// Cover 1 End

// Cover 2 Start
document.querySelectorAll(".div13")[0].addEventListener("mouseover", function() { document.querySelectorAll(".cover-12")[9].style.display = "block"; });
document.querySelectorAll(".div13")[0].addEventListener("mouseout", function() { document.querySelectorAll(".cover-12")[9].style.display = "none"; });

document.querySelectorAll(".div13")[1].addEventListener("mouseover", function() { document.querySelectorAll(".cover-12")[10].style.display = "block"; });
document.querySelectorAll(".div13")[1].addEventListener("mouseout", function() { document.querySelectorAll(".cover-12")[10].style.display = "none"; });

document.querySelectorAll(".div13")[2].addEventListener("mouseover", function() { document.querySelectorAll(".cover-12")[11].style.display = "block"; });
document.querySelectorAll(".div13")[2].addEventListener("mouseout", function() { document.querySelectorAll(".cover-12")[11].style.display = "none"; });

document.querySelectorAll(".div13")[3].addEventListener("mouseover", function() { document.querySelectorAll(".cover-12")[12].style.display = "block"; });
document.querySelectorAll(".div13")[3].addEventListener("mouseout", function() { document.querySelectorAll(".cover-12")[12].style.display = "none"; });

document.querySelectorAll(".div13")[4].addEventListener("mouseover", function() { document.querySelectorAll(".cover-12")[13].style.display = "block"; });
document.querySelectorAll(".div13")[4].addEventListener("mouseout", function() { document.querySelectorAll(".cover-12")[13].style.display = "none"; });

document.querySelectorAll(".div13")[5].addEventListener("mouseover", function() { document.querySelectorAll(".cover-12")[14].style.display = "block"; });
document.querySelectorAll(".div13")[5].addEventListener("mouseout", function() { document.querySelectorAll(".cover-12")[14].style.display = "none"; });

document.querySelectorAll(".div13")[6].addEventListener("mouseover", function() { document.querySelectorAll(".cover-12")[15].style.display = "block"; });
document.querySelectorAll(".div13")[6].addEventListener("mouseout", function() { document.querySelectorAll(".cover-12")[15].style.display = "none"; });

document.querySelectorAll(".div13")[7].addEventListener("mouseover", function() { document.querySelectorAll(".cover-12")[16].style.display = "block"; });
document.querySelectorAll(".div13")[7].addEventListener("mouseout", function() { document.querySelectorAll(".cover-12")[16].style.display = "none"; });

document.querySelectorAll(".div13")[8].addEventListener("mouseover", function() { document.querySelectorAll(".cover-12")[17].style.display = "block"; });
document.querySelectorAll(".div13")[8].addEventListener("mouseout", function() { document.querySelectorAll(".cover-12")[17].style.display = "none"; });
// Cover 2 End

// Page 3 onClick start
var phchng = document.getElementsByClassName("phchng");

document.querySelectorAll(".phchng")[0].addEventListener("click", function() {
     document.getElementById("phShow").style.backgroundImage = "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.5),rgba(0,0,0,0.4)) ,url(https://images-ext-1.discordapp.net/external/112lOo_ZVgVo-VF_HTT2DU7kJ7Alfk6GNgcP0RgzsEo/https/iqonic.design/themes/streamitnew/frontend/html/images/top-10/01.jpg?width=1191&height=670)"; 
     document.querySelectorAll(".btnShow")[0].style.display = "block";
     document.querySelectorAll(".btnShow")[1].style.display = "none";
     document.querySelectorAll(".btnShow")[2].style.display = "none";
     document.querySelectorAll(".btnShow")[3].style.display = "none";
     document.querySelectorAll(".btnShow")[4].style.display = "none";
     document.querySelectorAll(".btnShow")[5].style.display = "none";
     document.querySelectorAll(".btnShow")[6].style.display = "none";
 
    });

document.querySelectorAll(".phchng")[1].addEventListener("click", function() { 
    document.getElementById("phShow").style.backgroundImage = "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.5),rgba(0,0,0,0.4)) ,url(https://iqonic.design/themes/streamitnew/frontend/html/images/top-10/02.jpg)"; 
    document.querySelectorAll(".btnShow")[0].style.display = "none";
    document.querySelectorAll(".btnShow")[1].style.display = "block";
    document.querySelectorAll(".btnShow")[2].style.display = "none";
    document.querySelectorAll(".btnShow")[3].style.display = "none";
    document.querySelectorAll(".btnShow")[4].style.display = "none";
    document.querySelectorAll(".btnShow")[5].style.display = "none";
    document.querySelectorAll(".btnShow")[6].style.display = "none";
});

document.querySelectorAll(".phchng")[2].addEventListener("click", function() { 
    document.getElementById("phShow").style.backgroundImage = "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.5),rgba(0,0,0,0.4)) ,url(https://images-ext-2.discordapp.net/external/DsXQKCa7yA9ebEcoTzci9icY3Dz6bq08CohIPC3cGl8/https/iqonic.design/themes/streamitnew/frontend/html/images/favorite/03.jpg?width=1191&height=670)"; 
    document.querySelectorAll(".btnShow")[0].style.display = "none";
    document.querySelectorAll(".btnShow")[1].style.display = "none";
    document.querySelectorAll(".btnShow")[2].style.display = "block";
    document.querySelectorAll(".btnShow")[3].style.display = "none";
    document.querySelectorAll(".btnShow")[4].style.display = "none";
    document.querySelectorAll(".btnShow")[5].style.display = "none";
    document.querySelectorAll(".btnShow")[6].style.display = "none";
});

document.querySelectorAll(".phchng")[3].addEventListener("click", function() { document.getElementById("phShow").style.backgroundImage = "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.5),rgba(0,0,0,0.4)) ,url(https://images-ext-1.discordapp.net/external/ksfjzFR_3V0T8i7F66BeBWwo9VSZC_kNnaIrj3ah9yE/https/iqonic.design/themes/streamitnew/frontend/html/images/favorite/02.jpg?width=1191&height=670)"; });

document.querySelectorAll(".phchng")[4].addEventListener("click", function() { document.getElementById("phShow").style.backgroundImage = "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.5),rgba(0,0,0,0.4)) ,url(https://images-ext-1.discordapp.net/external/81sy-mimatwUlr-iUyN_D6kKbTmJsQ_wS9YLltWn1lQ/https/iqonic.design/themes/streamitnew/frontend/html/images/favorite/01.jpg?width=1191&height=670)"; });

document.querySelectorAll(".phchng")[5].addEventListener("click", function() { document.getElementById("phShow").style.backgroundImage = "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.5),rgba(0,0,0,0.4)) ,url(https://images-ext-1.discordapp.net/external/112lOo_ZVgVo-VF_HTT2DU7kJ7Alfk6GNgcP0RgzsEo/https/iqonic.design/themes/streamitnew/frontend/html/images/top-10/01.jpg?width=1191&height=670)"; });

document.querySelectorAll(".phchng")[6].addEventListener("click", function() { document.getElementById("phShow").style.backgroundImage = "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.5),rgba(0,0,0,0.4)) ,url(https://iqonic.design/themes/streamitnew/frontend/html/images/top-10/02.jpg)"; });
// Page 3 onClick End


