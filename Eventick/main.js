$(function(){
    $("#p1").click(function(){
      $("#p2").hide(2000);
    });
    $("#p1").click(function(){
        $("#p2").show(2000);
      });
  });

document.querySelectorAll(".page3-box")[1].style.backgroundColor = "#E71B37";
document.querySelectorAll(".page3-box")[1].style.color = "white";
document.querySelectorAll(".downIconJs")[1].style.display = "block";

var card = [
  ["Kloe Len","https://images-ext-2.discordapp.net/external/ZvWPWIznkTj4ho6JGsnMzA_vzwqrv4AvAWr0WYC6n6U/https/preview.templatehouse.net/eventick/demo/images/team-01.jpg"],
  ["Olivia Butler","https://images-ext-2.discordapp.net/external/MjM2ywZKS0n0YBHWfnEyARPxovRh5wvzF9qtnLRqlvY/https/preview.templatehouse.net/eventick/demo/images/team-02.jpg"],
  ["Terasa Flores","https://images-ext-1.discordapp.net/external/-FHrOHWRQ3_km1e7TRbHBDgNHtbZHltYjmLVd0gRvqg/https/preview.templatehouse.net/eventick/demo/images/team-03.jpg"],
  ["Gemma Bell","https://images-ext-1.discordapp.net/external/cELaGdm_ixodDuHn3yJ6ZwAFScArRIIE-Vc93xvdvn8/https/preview.templatehouse.net/eventick/demo/images/team-04.jpg"]
]


for (let i = 0; i<4 ; i++) {
  document.querySelectorAll(".page3-box")[i].addEventListener("click", boxJsIn);
  function boxJsIn(){
    document.querySelectorAll(".page3-box")[i].style.backgroundColor = "#E71B37";
    document.querySelectorAll(".page3-box")[i].style.color = "white";
    document.querySelectorAll(".downIconJs")[i].style.display = "block";
    document.querySelector(".page3-cards").style.display = "block";
    document.getElementById("page3-name").innerHTML = card[i][0];
    document.getElementById("page3-photo").src = card[i][1];

      for(let j=0;j<4;j++)
      {
          if(j!=i){
            document.querySelectorAll(".page3-box")[j].style.backgroundColor = "transparent";
            document.querySelectorAll(".page3-box")[j].style.color = "black";
            document.querySelectorAll(".downIconJs")[j].style.display = "none";
          }
      }
  }
}



$(document).ready(function() {
  $("#p1").click(function() {
      $("#p2").slideToggle("slow");
  });
});

$(document).ready(function() {
  $("#flip1").click(function() {
      $("#panel1").slideToggle("slow");
  });
});

$(document).ready(function() {
  $("#flip2").click(function() {
      $("#panel2").slideToggle("slow");
  });
});



document.querySelector("#speakersID").addEventListener("mouseover", spJsIn);
function spJsIn(){
  document.querySelector(".speakersJsin").style.display = "block";
}
document.querySelector(".speakersJsin").addEventListener("mouseover", spJsIn);
function spJsIn(){
  document.querySelector(".speakersJsin").style.display = "block";
}
document.querySelector(".speakersJsin").addEventListener("mouseout", spJsOut);
function spJsOut(){
  document.querySelector(".speakersJsin").style.display = "none";
}



$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  autoplay:true,
  dots: false,
  autoplayTimeout:2000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  },
})


document.querySelector(".headerMediaBurger").addEventListener("click", burgerJs);
function burgerJs(){
  document.querySelector(".headerMedia").style.display = "block";
}
document.querySelector(".headerMediaBurger").addEventListener("dblclick", burgerJs2);
function burgerJs2(){
  document.querySelector(".headerMedia").style.display = "none";
}