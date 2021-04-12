var sumDice1 = 0
var sumDice2 = 0

function diceDrop1()
{
    var randomDice = Math.floor(Math.random() * 6) + 1;

   
    switch(randomDice) {
        case 1:
            document.getElementById("dice1").style.backgroundImage = "url(https://media.discordapp.net/attachments/827485050257014826/831199645346693120/bir.png)";
            sumDice1+=randomDice;
          break;
        case 2:
            document.getElementById("dice1").style.backgroundImage = "url(https://media.discordapp.net/attachments/827485050257014826/831199649804058654/iki.png)";
            sumDice1+=randomDice;
          break;
        case 3:
            document.getElementById("dice1").style.backgroundImage = "url(https://media.discordapp.net/attachments/827485050257014826/831199651218456636/uc.png)";
            sumDice1+=randomDice;
          break;
        case 4:
            document.getElementById("dice1").style.backgroundImage = "url(https://media.discordapp.net/attachments/827485050257014826/831199647812288562/dord.png)";
            sumDice1+=randomDice;
          break;
        case 5:
            document.getElementById("dice1").style.backgroundImage = "url(https://media.discordapp.net/attachments/827485050257014826/831199643252555856/bes.png)";
            sumDice1+=randomDice;
          break;
        case 6:
          document.getElementById("dice1").style.backgroundImage = "url(https://media.discordapp.net/attachments/827485050257014826/831199641071910973/alti.png)";
          sumDice1+=randomDice;
        break;
      }

      document.getElementById("score1").innerHTML = sumDice1;
      
        if (sumDice1 >= 15) {
        sumDice1 = 0;
        document.getElementById("score1").innerHTML = sumDice1.toString();
        alert("Birinci oyuncu qazandi!");
        document.getElementById("score2").innerHTML = 0;
        sumDice2 = 0;
        } else {
        document.getElementById("score1").innerHTML = sumDice1.toString();
        
        }

      document.getElementById("dropButton1").style.display = "none";
      document.getElementById("dropButton2").style.display = "block";
      document.getElementById("dropButton2").style.marginLeft = "28%";
}

function diceDrop2()
{
    var randomDice = Math.floor(Math.random() * 6) + 1;

    switch(randomDice) {
        case 1:
            document.getElementById("dice2").style.backgroundImage = "url(https://media.discordapp.net/attachments/827485050257014826/831199645346693120/bir.png)";
            sumDice2+=randomDice;
          break;
        case 2:
            document.getElementById("dice2").style.backgroundImage = "url(https://media.discordapp.net/attachments/827485050257014826/831199649804058654/iki.png)";
            sumDice2+=randomDice;
          break;
        case 3:
            document.getElementById("dice2").style.backgroundImage = "url(https://media.discordapp.net/attachments/827485050257014826/831199651218456636/uc.png)";
            sumDice2+=randomDice;
          break;
        case 4:
            document.getElementById("dice2").style.backgroundImage = "url(https://media.discordapp.net/attachments/827485050257014826/831199647812288562/dord.png)";
            sumDice2+=randomDice;
          break;
        case 5:
            document.getElementById("dice2").style.backgroundImage = "url(https://media.discordapp.net/attachments/827485050257014826/831199643252555856/bes.png)";
            sumDice2+=randomDice;
          break;
        case 6:
          document.getElementById("dice2").style.backgroundImage = "url(https://media.discordapp.net/attachments/827485050257014826/831199641071910973/alti.png)";
          sumDice2+=randomDice;
        break;
      }

      document.getElementById("score2").innerHTML = sumDice2;
        
        if (sumDice2 >= 15) {
        sumDice2 = 0;
        document.getElementById("score2").innerHTML = sumDice2.toString();
        alert("Ikinci oyuncu qazandi!");
        document.getElementById("score1").innerHTML = 0;
        sumDice1 = 0;
        } else {
        document.getElementById("score2").innerHTML = sumDice2.toString();
        }
      document.getElementById("dropButton2").style.display = "none";
      document.getElementById("dropButton1").style.display = "block";
      document.getElementById("dropButton1").style.marginLeft = "28%";
}