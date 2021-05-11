$(document).ready(function(){
    var x = 1;
    $("#circleJS").click(function(){
        x++;
        if(x % 2 ==0)
        {
            $("body").css("backgroundColor","#1a202c");
            $(".page1").css("backgroundColor","#2d3748");
            $(".page1 h1").css("color","#f8f8f8");
            $(".page1 .zz").css("color","#f8f8f8");
            $(".btn-2").css({"border":"3px solid #718096","backgroundColor": "#2d3748","color":"#f8f8f8"});
            $("#circleJS").css({ "left": "25px"});
            $("#b-w").css("background", "linear-gradient(45deg,#3366FF,#AC15B8)");
            $("header").css("backgroundColor", "#2d3748");
            $(".aa").css("color","#e2e8f0");
            $(".imghover").css("backgroundColor","#2d3748");
            $(".imghover i").css("color","#f8f8f8");
            $(".imghover h6").css("color","#f8f8f8");
            $(".page3").css("backgroundColor","#2d3748");
            $(".page3 h5").css("color","#f8f8f8");
            $(".page3 h4").css("color","#f8f8f8");
            $(".basliq").css({"color":"#f8f8f8","border-left":"4px solid #f8f8f8"});
            $(".basliq button").css("color","white");
            $(".card").css("backgroundColor","#2d3748");
            $(".card span").css("color","#f8f8f8");
            $(".card-title").css("color","#f8f8f8");
            $(".card-text").css("color","#f8f8f8");
            $(".page5").css("backgroundColor","#2d3748");
            $(".page5 h3").css("color","#f8f8f8");
            $(".page5 p").css("color","#f8f8f8");
            $("footer").css("backgroundColor","#2d3748");
            $("footer a").css("color","#f8f8f8");
            $("footer p").css("color","#f8f8f8");
            $("footer h6").css("color","#f8f8f8");
            $(".basliq2").css({"color":"#f8f8f8","border-left":"4px solid #f8f8f8"});
        }else if(x%2==1){
            $("body").css("backgroundColor","#f8f8f8");
            $(".page1").css("backgroundColor","white");
            $(".page1 h1").css("color","#2d3748");
            $(".page1 .zz").css("color","#2d3748");
            $(".btn-2").css({"border":"3px solid #afb3b9","backgroundColor": "#dfdfdf","color":"#606b7c"});
            $("#circleJS").css({ "left": "3px"});
            $("#b-w").css("background", "linear-gradient(45deg,#FF7D6B,#FFD64C)");
            $("header").css("backgroundColor", "white");
            $(".aa").css("color","#4a5568");
            $(".imghover").css("backgroundColor","#edf2f7");
            $(".imghover i").css("color","#718096");
            $(".imghover h6").css("color","#718096");
            $(".page3").css("backgroundColor","white");
            $(".page3 h5").css("color","#4a5568");
            $(".page3 h4").css("color","#4a5568");
            $(".basliq").css({"color":"#4a55685b","border-left":"4px solid #4a55685b"});
            $(".basliq button").css("color","#444f63");
            $(".card").css("backgroundColor","white");
            $(".card span").css("color","#718096");
            $(".card-title").css("color","#718096");
            $(".card-text").css("color","#718096");
            $(".page5").css("backgroundColor","white");
            $(".page5 h3").css("color","#262729");
            $(".page5 p").css("color","#262729");
            $("footer").css("backgroundColor","white");
            $("footer a").css("color","#262729");
            $("footer p").css("color","#262729");
            $("footer h6").css("color","#262729");
            $(".basliq2").css({"color":"#4a55685b","border-left":"4px solid #4a55685b"});
        }
    });
  })

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        800:{
            items:1
        },
        1000:{
            items:2
        },
        1024:{
            items:3
        },
        1500:{
            items:4
        }

    }
});