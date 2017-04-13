var jsonData = {
    "navbar": {
        "logo": "img/logo.png",
        "menu1": "Menu'er",
        "menu2": "Buffet Menu'er",
        "menu3": "Selvskab Lokaler",
        "menu4": "Udlejning",
        "menu5": "Kontakt",
    },
    "title": {
        "header1": "Velkommen til </br>",
        "header2": "Levering af mad weekender og aften",
        "button": "Se Menu'en",
        "logo": "img/logo.png",
    },
    // Almindelige menu'er her ----
    "menu1": {
        "title": "Menu'er",
        "flavorText": "Tag et kig på alle vores lækre retter og menu'er </br></br> Klik på en kategori for at få se hvad vi tilbyder",
        "columns": "4",
        "noLink" : "false",
        "modals": [
            // Kopier her fra
            {
                "title": "Forretter",
                "price": "35kr. pr. person",
                "extraText": "",
                "image": "img/portfolio/forretter.jpg",
                "items": [
                    "Tunmousse på salatbund med flutes og dressing",
                    "Tarteletter med hønsekødsfyld",
                    "Laksetatar på salatbund med ristet rugbrød",
                    "Varmrøget laks med safran creme",
                ],
            },
            //Og Her til for at indsætte et nyt menu punkt
            {
                "title": "Desserter",
                "price": "30kr. pr. person",
                "extraText": "",
                "image": "img/portfolio/dessert.jpg",
                "items": [
                    "Rabarber trifili",
                    "Chokolademousse",
                    "Citronfromage",
                    "Brownies (20kr. pr. person)",
                ],
            },
            {
                "title": "Bonde's favorit",
                "price": "80kr. pr. person",
                "extraText": "Minimum bestilling 10 personer",
                "image": "img/portfolio/favorit.jpg",
                "items": [
                    "Hjemmelavet pulled pork (marineret nakkefilet) stegt i 10 timer",
                    "Hjemmelavet Coleslaw",
                    "Hjemmelavet BBQ sauce",
                    "Store grove burgerboller",
                ],
            },
            {
                "title": "Tapas",
                "price": "75kr. pr. person",
                "extraText": "Som hovedret min 15 personer </br> Som forret til buffet 45kr. pr. person",
                "image": "img/portfolio/tapas.jpg",
                "items": [
                    "3 slags spansk pølse",
                    "Spegeskinke",
                    "2 slags pesto",
                    "Hummus",
                    "Oliven",
                    "Oliventappanade",
                    "Saltmandler",
                    "Vælg mellem 3 slags langtidshævet kuglebrød (malt krydder eller naturel)",
                ],
            },
            {
                "title": "Grillstegning",
                "price": "Pris 295 kr pr time ",
                "extraText": "Jeg tager gerne ud og griller til jeres firmafest, fødselsdage mv. i Odder kommune. </br></br> Jeg griller bla:",
                "image": "img/portfolio/grill.jpg",
                "items": [
                    "Hele skinker",
                    "Oksefilet",
                    "Oksemørbrad",
                    "Krydret porchettastege",
                ],
            },
            {
                "title": "Grill tapas",
                "price": " - ",
                "extraText": "Grill tapas er små stykker kød Så alle kan smage alle slags",
                "image": "img/portfolio/grillTapas.jpg",
                "items": [
                    "Grill kød",
                    "Bøffer alm/marineret",
                    "Karrymarineret kylling",
                    "Frankfurter pølsere",
                    "BBQ ben",
                    "Zouvaliki spyd",
                ],
            },
            {
                "title": "Klassearrangement-polterabend",
                "price": "45kr. pr. person ",
                "extraText": "Alle retter kan bestilles med salat og flutes </br> Salat 10kr. </br> Flutes 5kr.",
                "image": "img/portfolio/polterabend.jpg",
                "items": [
                    "Helstegt pattegris 30-65 kg",
                    "Flødekartofler eller bagt kartoffel",
                    "Blandet salat",
                    "Hjemmebagt Møllehjul",
                ],
            },
            {
                "title": "Helstegt Pattegris",
                "price": "160kr. pr. person ",
                "extraText": "Minimum bestilling 30 personer </br> Bemærk jeg griller og udskære hos jer",
                "image": "img/portfolio/gris.png",
                "items": [
                    "Helstegt pattegris 30-65 kg",
                    "Flødekartofler eller bagt kartoffel",
                    "Blandet salat",
                    "Hjemmebagt Møllehjul",
                ],
            },
        ]
    },

    // Buffet menu'er her ---------------

    "menu2": {
        "title": "Buffet Menu'er",
        "flavorText": "Tag et kig på alle vores lækre buffet'er </br></br> Sammensæt selv din menu af retter fra de forskellige kategorier </br></br> <b>150kr.</b> pr. person",
        "columns": "4",
        "noLink" : "false",
        "modals": [{
                "title": "Kød",
                "price": "Vælg 1-2 slags kød",
                "extraText": "",
                "image": "img/portfolio/kod.jpg",
                "items": [
                    "Rosa stegt oksefilet",
                    "Rosa stegt kalvefilet",
                    "Kyllingefilet med bacon",
                    "Chili/vanilie marineret skinkesteg",
                    "Glaseret Skinke",
                    "Ungkvæg Culotte",
                    "Helstegt Oksemørbrad (tillæg på 20 kr pr person)",
                    "Langtidsstegt marineret Nakkefilet (ala Pulled Pork)",
                    "Kold hvidvinsdampet Laks (tillæg 10 kr pr person)",
                    "Grill pakke (grill selv)", [
                        "Grill kød",
                        "Bøffer alm/marineret",
                        "Karrymarineret kylling",
                        "Frankfurter pølser",
                        "BBQ ben",
                        "Zouvaliki spyd",
                    ],
                ],
            },
            {
                "title": "Kartofler",
                "price": "Vælg 1-2 slags kartofler",
                "extraText": "",
                "image": "img/portfolio/kartofler.jpg",
                "items": [
                    "Flødekartofler",
                    "Kartffelsalat med Creme fraiche",
                    "Bagekartofler med hjemmerørt hvidløgssmør",
                    "Sommer kartoffelsalat med radiser forårsløg, ærter og friske asparges",
                    "Små nye marinerede kartofler",
                    "Kartoffelrøsti",
                ],
            },
            {
                "title": "Salat",
                "price": "Vælg 1-2 slags salater",
                "extraText": "",
                "image": "img/portfolio/salat.jpg",
                "items": [
                    "Coleslaw Salat",
                    "Salat med friske frugter",
                    "Feta salat med agurk tomat pinjekerner mm.",
                    "Spidskålsalat med æbler og mandler",
                    "Tomatsalat med frisk Mozzarella",
                    "Honningmarineret rødbedesalat m/feta",
                    "Vandmelonsalat m/ feta (kun i sommertiden)",
                ],
            },
            {
                "title": "Brød",
                "price": "Vælg 1 slags brød",
                "extraText": " Med brød kan man frit vælge imellem: </br> Hummus pesto advocadocreme eller fetacreme",
                "image": "img/portfolio/brod.jpg",
                "items": [
                    "talianske Flutes",
                    "Møllehjul",
                    "Langtidshævet kuglebrød \"malt/krydder/neutral\"",
                ],
            },
        ]
    },
    // Selvskab lokale ----
    "menu3": {
        "title": "Bonde`s Mads Selskabslokale",
        "flavorText": "Har plads til 80 personer </br> Lejes med bord stole og service. </br> Rengøring kan tilkøbes </br> <b>Pris 2500 kr</b>",
        "images" : [
            "img/carousel/lokale1.jpg",
            "img/carousel/lokale2.jpg",
            "img/carousel/lokale3.jpg",
            "img/carousel/lokale4.jpg",
        ]
    },
    // Udlejning -------
    "menu4": {
        "title": "Udlejning",
        "flavorText": "Vi kan hos Bonde's Mad tilbyde udlejning af flere forskellige emner",
        "columns": "4",
        "noLink" : "true",
        "modals": [
            {
                "title": "Partytelt",
                "price": "2000 kr.",
                "extraText": "6x8 meter i pvc </br> Pris ved afhentning Skovdalsvej 4",
                "image": "img/portfolio/telt.jpg",
            },
            {
                "title": "Pattegris Grill",
                "price": "<b>500 kr.</b> pr. dag </p>",
                "extraText": "Grill til stegning af grise op til 60 kg",
                "image": "img/portfolio/stor_grill.jpg",
            },
            {
                "title": "Kvalitets stol",
                "price": "12 kr.</b> pr. stk. 0-40 stk. </br><b>10 kr.</b> pr. stk. 40-80 stk.",
                "extraText": "",
                "image": "img/portfolio/stol.jpg",
            },
            {
                "title": "Borde",
                "price": "<b>50 kr.</b> pr. stk.",
                "extraText": " ",
                "image": "img/portfolio/borde.jpg",
            },
        ]
    },
    "menu5": {
        "title": "Kontakt Os",
        "text1": "Tøv ikke med at kontakte mig! </br> Ring, mail eller besøg mig:",
        "text2": "Bonde's Mad:</br> <a href=\"https://goo.gl/maps/8bNwwiAQkM22\">Skovdalsvej 4 </br> 8300 Odder</h3> </br></a> Indgang nede i hjørnet ved glasdøren",
        "text3": "Tlf: <a href=\"tel:+4542835326\">42 83 53 26</a></br>E-Mail: <a href=\"mailto:Bonde@bondes-mad.dk\">Bonde@bondes-mad.dk</a>",
    }
};
