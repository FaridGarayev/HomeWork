var card1 = ["C.David","5678 5433 2254 3476","01/22","https://media.discordapp.net/attachments/827485050257014826/831808756416643113/discover.png"];
var card2 = ["T.Konten","5432 9876 5678 1234","05/24","https://media.discordapp.net/attachments/827485050257014826/831816549282742283/mastercard.png"];
var card3 = ["J.Thomson","1234 5678 9876 5432","07/19","https://media.discordapp.net/attachments/827485050257014826/831816551815970816/visa.png"]
var color = ["#1e272e","#e44946"]
var infoCard1 = [["01/02/2016","05/02/2016","05/02/2016","14/02/2016"],["Apple","Jack & Jones","F&B","Swarovski"],["$205.25","$32.95","$47.22","$325.00"]];
var infoCard2 = [["05/02/2018","05/06/2018","05/07/2019","01/04/2019"],["Microsoft","Bill & Gates","T&V","Moskovski"],["$400.00","$45.75","$21.22","$720.00"]];
var infoCard3 = [["01/05/2019","02/02/2019","03/07/2019","22/08/2020"],["Google","Jony & Billy","F&Q","Briliant"],["$305.50","$50.00","$40.22","$465.00"]];


function card_1()
{
    document.getElementById("card_1").style.backgroundColor = color[1];
    document.getElementById("card_2").style.backgroundColor = color[0];
    document.getElementById("card_3").style.backgroundColor = color[0];

    document.getElementById("own_fullname").innerHTML = card1[0];
    document.getElementById("own_cardnum").innerHTML = card1[1];
    document.getElementById("own_date").innerHTML = card1[2];
    document.getElementById("own_img").src = card1[3];

    document.getElementById("date_1").innerHTML = infoCard1[0][0];
    document.getElementById("merchant_1").innerHTML = infoCard1[1][0];
    document.getElementById("spend_1").innerHTML = infoCard1[2][0];

    document.getElementById("date_2").innerHTML = infoCard1[0][1];
    document.getElementById("merchant_2").innerHTML = infoCard1[1][1];
    document.getElementById("spend_2").innerHTML = infoCard1[2][1];

    document.getElementById("date_3").innerHTML = infoCard1[0][2];
    document.getElementById("merchant_3").innerHTML = infoCard1[1][2];
    document.getElementById("spend_3").innerHTML = infoCard1[2][2];

    document.getElementById("date_4").innerHTML = infoCard1[0][3];
    document.getElementById("merchant_4").innerHTML = infoCard1[1][3];
    document.getElementById("spend_4").innerHTML = infoCard1[2][3];
    
}

function card_2()
{
    document.getElementById("card_1").style.backgroundColor = color[0];
    document.getElementById("card_2").style.backgroundColor = color[1];
    document.getElementById("card_3").style.backgroundColor = color[0];

    document.getElementById("card_2").style.backgroundColor = "#e44946";
    document.getElementById("own_fullname").innerHTML = card2[0];
    document.getElementById("own_cardnum").innerHTML = card2[1];
    document.getElementById("own_date").innerHTML = card2[2];
    document.getElementById("own_img").src = card2[3];
    
    document.getElementById("date_1").innerHTML = infoCard2[0][0];
    document.getElementById("merchant_1").innerHTML = infoCard2[1][0];
    document.getElementById("spend_1").innerHTML = infoCard2[2][0];

    document.getElementById("date_2").innerHTML = infoCard2[0][1];
    document.getElementById("merchant_2").innerHTML = infoCard2[1][1];
    document.getElementById("spend_2").innerHTML = infoCard2[2][1];

    document.getElementById("date_3").innerHTML = infoCard2[0][2];
    document.getElementById("merchant_3").innerHTML = infoCard2[1][2];
    document.getElementById("spend_3").innerHTML = infoCard2[2][2];

    document.getElementById("date_4").innerHTML = infoCard2[0][3];
    document.getElementById("merchant_4").innerHTML = infoCard2[1][3];
    document.getElementById("spend_4").innerHTML = infoCard2[2][3];
}

function card_3()
{
    document.getElementById("card_1").style.backgroundColor = color[0];
    document.getElementById("card_2").style.backgroundColor = color[0];
    document.getElementById("card_3").style.backgroundColor = color[1];

    document.getElementById("card_3").style.backgroundColor = "#e44946";
    document.getElementById("own_fullname").innerHTML = card3[0];
    document.getElementById("own_cardnum").innerHTML = card3[1];
    document.getElementById("own_date").innerHTML = card3[2];
    document.getElementById("own_img").src = card3[3];
    
    document.getElementById("date_1").innerHTML = infoCard3[0][0];
    document.getElementById("merchant_1").innerHTML = infoCard3[1][0];
    document.getElementById("spend_1").innerHTML = infoCard3[2][0];

    document.getElementById("date_2").innerHTML = infoCard3[0][1];
    document.getElementById("merchant_2").innerHTML = infoCard3[1][1];
    document.getElementById("spend_2").innerHTML = infoCard3[2][1];

    document.getElementById("date_3").innerHTML = infoCard3[0][2];
    document.getElementById("merchant_3").innerHTML = infoCard3[1][2];
    document.getElementById("spend_3").innerHTML = infoCard3[2][2];

    document.getElementById("date_4").innerHTML = infoCard3[0][3];
    document.getElementById("merchant_4").innerHTML = infoCard3[1][3];
    document.getElementById("spend_4").innerHTML = infoCard3[2][3];
}

var infoCard1 = [["01/02/2016","05/02/2016","05/02/2016","14/02/2016"],["Apple","Jack & Jones","F&B","Swarovski"],["$205.25","$32.95","$47.22","$325.00"]];
var infoCard2 = [["05/02/2018","05/06/2018","05/07/2019","01/04/2019"],["Microsoft","Bill & Gates","T&V","Moskovski"],["$400.00","$45.75","$21.22","$720.00"]];
var infoCard3 = [["01/05/2019","02/02/2019","03/07/2019","22/08/2020"],["Google","Jony & Billy","F&Q","Briliant"],["$305.50","$50.00","$40.22","$465.00"]];


