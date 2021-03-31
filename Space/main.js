function planetFunc()
{
    var inputPlanet = document.getElementById("inputspace").value;
    if (inputPlanet == "Ay") {
        document.getElementById("planetnames").style.display = "block"
    } else if (inputPlanet == "Neptune"){
        document.getElementById("planimg").style.backgroundImage = "url(..//image/neptun.jpg)";
        document.getElementById("plantname").innerHTML = "Neptune";
        document.getElementById("plantxt").innerHTML = "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, slightly more massive than its near-twin Uranus. Neptune is denser and physically smaller than Uranus because its greater mass causes more gravitational compression of its atmosphere.";
        document.getElementById("planetnames").style.display = "block"
    }else if (inputPlanet == "Mercury"){
        document.getElementById("planimg").style.backgroundImage = "url(..//image/merkuri.jpg)";
        document.getElementById("plantname").innerHTML = "Mercury";
        document.getElementById("plantxt").innerHTML = "Mercury is the smallest and closest planet to the Sun in the Solar System. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the planets in the Solar System. It is named after the Roman god Mercurius (Mercury), god of commerce, messenger of the gods, and mediator between gods and mortals, corresponding to the Greek god Hermes (Ἑρμῆς).";
        document.getElementById("planetnames").style.display = "block"
    }else if (inputPlanet == "Venus"){
        document.getElementById("planimg").style.backgroundImage = "url(..//image/venera.jpg)";
        document.getElementById("plantname").innerHTML = "Venus";
        document.getElementById("plantxt").innerHTML = "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasion, visible to the naked eye in broad daylight.[15][16] Venus lies within Earth's orbit, and so never appears to venture far from the Sun, either setting in the west just after dusk or rising in the east a little while before dawn.";
        document.getElementById("planetnames").style.display = "block"
    }else if (inputPlanet == "Earth"){
        document.getElementById("planimg").style.backgroundImage = "url(..//image/yer.jpg)";
        document.getElementById("plantname").innerHTML = "Earth";
        document.getElementById("plantxt").innerHTML = "Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29% of Earth's surface is land consisting of continents and islands. The remaining 71% is covered with water, mostly by oceans, seas, gulfs, and other salt water bodies, but also by lakes, rivers, and other fresh water, which together constitute the hydrosphere. Much of Earth's polar regions are covered in ice.";
        document.getElementById("planetnames").style.display = "block"
    }else if (inputPlanet == "Mars"){
        document.getElementById("planimg").style.backgroundImage = "url(..//image/mars.jpg)";
        document.getElementById("plantname").innerHTML = "Mars";
        document.getElementById("plantxt").innerHTML = "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the .[16][17] The latter refers to the effect of the iron oxide prevalent on Mars's surface, which gives it a reddish appearance distinctive among the astronomical bodies visible to the naked eye.";
        document.getElementById("planetnames").style.display = "block"
    }else if (inputPlanet == "Jupiter"){
        document.getElementById("planimg").style.backgroundImage = "url(..//image/yupiter.jpg)";
        document.getElementById("plantname").innerHTML = "Jupiter";
        document.getElementById("plantxt").innerHTML = "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two and a half times that of all the other planets in the Solar System combined. Jupiter is the third-brightest natural object in the Earth's night sky after the Moon and Venus. It has been observed since pre-historic times and is named after the Roman god Jupiter.";
        document.getElementById("planetnames").style.display = "block"
    }else if (inputPlanet == "Saturn"){
        document.getElementById("planimg").style.backgroundImage = "url(..//image/saturn.jpg)";
        document.getElementById("plantname").innerHTML = "Saturn";
        document.getElementById("plantxt").innerHTML = "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine times that of Earth.[20][21] It only has one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive.[22][23][24] Saturn is named after the Roman god of wealth and agriculture;";
        document.getElementById("planetnames").style.display = "block"
    }else if (inputPlanet == "Uranus"){
        document.getElementById("planimg").style.backgroundImage = "url(..//image/uran.jpg)";
        document.getElementById("plantname").innerHTML = "Uranus";
        document.getElementById("plantxt").innerHTML = "Uranus is the seventh planet from the Sun. Its name is a Greek god of the sky, Uranus, who, according to Greek mythology, was the grandfather of Zeus (Jupiter) and father of Cronus (Saturn). It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have bulk chemical compositions which differ from that of the larger gas giants Jupiter and Saturn. ";
        document.getElementById("planetnames").style.display = "block"
    }else if (inputPlanet == "Pluto"){
        document.getElementById("planimg").style.backgroundImage = "url(..//image/pluton.jpg)";
        document.getElementById("plantname").innerHTML = "Pluto";
        document.getElementById("plantxt").innerHTML = "Pluto (minor planet designation: 134340 Pluto) is a dwarf planet in the Kuiper belt, a ring of bodies beyond the orbit of Neptune. It was the first and the largest Kuiper belt object to be discovered. After Pluto was discovered in 1930, it was declared to be the ninth planet from the Sun. Beginning in the 1990s, its status as a planet was questioned following the discovery of several objects of similar size in the Kuiper belt, including the dwarf planet Eris. ";
        document.getElementById("planetnames").style.display = "block"
    }else{
        alert("Xəta!!!\n(Earth,Ay,Pluto,Uranus,Saturn,Jupiter,Mars,Venus,Mercury,Neptune)")
    }
    
}

function xbutton()
{
    document.getElementById("planetnames").style.display = "none"
}