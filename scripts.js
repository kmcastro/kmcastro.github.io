﻿
window.onload = function () {
    document.getElementById("loadAfter").innerHTML =
        '<div class="detail" id="programs" style="display:none;">'+
        '<hr />'+
        '<h2> PROGRAMMING PROJECTS </h2> <br />'+
        '<div>'+
            '<h4> TriVR </h4>'+
            '<h6> Immersive STEAM Learning - USC CS538 Augmented, Virtual and Mixed Reality Term Project </h6>'+
            '<div class="row">'+
                '<div class="col-sm-6">'+
                    '<h6> [Unity3D, C#, Oculus Rift, Steam VR] </h6>'+
                    '<p>'+
                        'I worked with 5 other people over the course of the semester to build a VR learning/trivia experience.<br />'+
                        'Using Unity3D, Oculus Rift and the Steam VR plugin, we made a game in which the player roamed a space station one wing at a time, answering questions in a certain topic before moving on.<br />'+
                        'Within each wing is a portal transporting the player to a fantastical location where the player has to use a different motion to select their answers to multiple choice questions in a given category.<br />'+
                        'When the player "wins" the minigame by answering enough questions correctly, they are sent back to the main level where they receive a clue and move on to the next wing.<br /><br />'+

                        'Using C# and available assets, I designed and implemented the "jellyfishing" minigame.<br />'+
                        'The jellyfish were animated within Unity to have a pulsing motion, and given physical properties to float around and swim within an invisible cage that envelops the player, who must use a larger-than-life net to catch the jellyfish whose color matches that of their selected answer.<br />'+

                        'Additionally, I assembled and filled the initial main level, and later assisted in filling the final main level. Additionally, I added interactable objects in each wing of the space station and added code to blend the audio between levels.<br />'+

                        '<br />'+
                        '<span><a href="https://trivr.github.io/">Link to project website from CS538: Augmented, Virtual, and Mixed Reality</a></span><br />'+
                    '</p>'+
                '</div>'+
                '<div class="col-sm-6">'+
                    '<video width="100%" controls>'+
                        '<source src="images/programPics/JellyGamePlay.mp4" type="video/mp4">'+
                        'Your browser does not support the video tag.'+
                    '</video>'+
                '</div>'+
            '</div>'+
        '</div>'+
        '<br />'+
        '<div>'+
            '<h4> TikiMan Go </h4>'+
            '<h6> USC Directed Research Pokemon Go Style AR/VR Mobile Game </h6>'+
            '<h6> [Unity3D, Blender, C#] </h6>'+
            '<p>'+
                'TikiMan Go is an app in development via the USC Directed Research program. <br />'+
                'During the semester I worked on it, my assignment was playability, weapons, and villains; introduce enemy projections that harm health <br />'+
                'Using Blender, I added motion to models that UCLA undergraduates were creating.<br />'+
                'It was also my duty to coordinate with the eundergraduate students.<br />'+
                'In taking the game from one with a single enemy to one with different enemies based on level, I restructured the existing code to support enemy objects that used a C# interface allowing different attack, run, and sound per enemy.<br />'+
            '</p>'+
        '</div>'+
        '<br /> '+
        '<div>'+
            '<h4> The Glass Oven </h4>'+
            '<h6> Commerce Site - CS50xMiami Final Project </h6>'+
            '<div class="row">'+
                '<div class="col-sm-6">'+
                    '<h6>[Gmail API, Recaptcha API, Clover Developer Pay API, FB Login API, Bootstrap, HTML5, CSS3, PHP, JavaScript, MySQL, cPanel web hosting]</h6>'+
                    '<p> '+
                        'As a continuation of the final project for CS50xMiami, I built upon code provided for PSET 7 (CS50 Finance website) to deploy a functioning commerce site '+
                        'for The Glass Oven. We later decided to migrate the site to SquareSpace and it is no longer in use. <br /><br />'+

                        'Customers could browse the menu, place orders, and view an order history.<br />'+
                        'The Glass Oven could view an order dashboard.<br />'+
                        'Cart and checkout were highly customized to allow adding of "extras" to cake items, specified ordering quantities for different item types, and day-specific delivery options.<br /><br />'+

                        'PHP was used to load HTML5 pages that read information from a SQL server.<br />'+
                        'Using the Clover API and curl, payments were processed via The Glass Oven\'s Clover account.<br />'+
                        'Upon purchase, the Gmail API was used to email confirmation to both The Glass Oven and the customer.<br />'+
                        'Recaptcha and Facebook Login were used to help protect the SQL database as well as make login easier for clients.<br />'+
                        'Bootstrap and CSS3 were used to style the website.<br />'+
                        'GoDaddy was used for hosting, providing cPanel managing and allowing the continued use of mySQL and PHPmyadmin which were previously used from thwe CS50 IDE.<br />'+
                    '</p>'+
                '</div>'+
                '<div class="col-sm-6">'+
                    '<video width="100%" controls>'+
                        '<source src="images/webPics/glass_oven/home_to_menu.mp4" type="video/mp4">'+
                        'Your browser does not support the video tag.'+
                    '</video>'+
                '</div>'+
            '</div>'+
        '</div>'+
        '<hr />'+
        '<div>'+
            '<h4> EXPERIENCE WITH ADDITIONAL CODING LANGUAGES </h4>'+
            '<div class="row">'+
                '<div class="col-md-3">'+
                    '<h6> PYTHON </h6>'+
                    '<p> Assignments for CS561 Foundations of Artificial Intelligence were completed in Python.</p>'+
                '</div>'+
                '<div class="col-md-3">'+
                    '<h6> JAVA / C++ </h6>'+
                    '<p> '+
                        'Assignments for CS455 Introduction to Programming Systems Design were completed in Java and C++. '+
                        'This foundational programming course was based largely in Java and partly in C++.'+
                    '</p>'+
                '</div>'+
                '<div class="col-md-3">'+
                    '<h6> C </h6>'+
                    '<p>'+
                        'Assignments for CS50xMiami, CS450 Introduction to Computer Networks, and CS402 Operating Systems were completed in C.'+
                        'CS50xMiami chose C as the coding language for teaching programming principles and assignments.'+
                        'CS450 final project to deploy socket completed in C.'+
                        'CS402 term projects applying operating system principles all completed in C.'+
                    '</p>'+
                '</div>'+
                '<div class="col-md-3">'+
                    '<h6> Swift </h6>'+
                    '<p>LaunchCode 6 week course in Swift - follow along as build map app. CS571 Web Technologies assignment mobile app for entertainment/travel in Swift.</p>'+
                '</div>'+
            '</div>'+
        '</div>'+
        '<hr />'+
    '</div>'+





    '<div class="detail" id="web" style="display:none;">'+
        '<hr />'+
        '<h2> WEB / UI / UX </h2> <br />'+
        '<span><a href="https://www.behance.net/gallery/79211113/Cabrillo-Marine-Aquarium-Website-Redesign">Link to portfolio from INF555: Interface Design</a></span>'+
        '<div>'+
            '<h4> User Interface Design </h4>'+
            '<div>'+
                '<div class="row">'+
                    '<div class="col-sm-3">'+
                        '<img src="images/webPics/ui_class/prototype.png" alt="mobile home page" />'+
                    '</div>'+
                    '<div class="col-sm-9">'+
                        '<img src="images/webPics/ui_class/wireframes2.png" alt="wireframes" />'+
                    '</div>'+
                '</div>'+
                '<div class="row">'+
                    '<div class="col-sm-5">'+
                        '<img src="images/webPics/ui_class/web.png" alt="prototype pages for mobile" />'+
                    '</div>'+
                    '<div class="col-sm-7">'+
                        '<img src="images/webPics/ui_class/sitemap.png" alt="sitemap" />'+
                    '</div>'+
                '</div>'+
                '<div class="col-sm-12">'+
                    '<img src="images/webPics/ui_class/mobileMap.png" alt="mobile map with added content" />'+
                '</div>'+
            '</div>'+
        '</div>'+
        '<br />'+
        '<div>'+
            '<h4> The Glass Oven</h4>'+
            '<div class="row">'+
                '<div class="row">'+
                    '<div class="col-sm-9">'+
                        '<img src="images/webPics/glass_oven/homeDesktop.png" alt="widest view of home" />'+
                    '</div>'+
                    '<div class="col-sm-2">'+
                        '<img src="images/webPics/glass_oven/cart.jpg" alt="cart" />'+
                        '<br /><br />'+
                        '<img src="images/webPics/glass_oven/extras.jpg" alt="extras" />'+
                    '</div>'+
                '</div>'+
            '</div>'+
            '<div class="row">'+
                '<div class="col-sm-4">'+
                    '<video width="100%" controls>'+
                        '<source src="images/webPics/glass_oven/recs.mp4" type="video/mp4">'+
                        'Your browser does not support the video tag.'+
                    '</video>'+
                '</div>'+
                '<div class="col-sm-4">'+
                    '<video width="100%" controls>'+
                        '<source src="images/webPics/glass_oven/home_to_menu.mp4" type="video/mp4">'+
                        'Your browser does not support the video tag.'+
                    '</video>'+
                '</div>'+
                '<div class="col-sm-4">'+
                    '<video width="100%" controls>'+
                        '<source src="images/webPics/glass_oven/menuDet.mp4" type="video/mp4">'+
                        'Your browser does not support the video tag.'+
                    '</video>'+
                '</div>'+
            '</div>'+
        '</div>'+
        '<hr />'+
    '</div>'+





    '<div class="detail" id="art" style="display:none;">'+
        '<hr />'+
        '<h2> DIGITAL ART </h2> <br />'+
        '<div class="row">'+
            '<div class="col-sm-7">'+
                '<div class="row">'+
                    '<div class="col-sm-6">'+
                        '<div class="row">'+
                            '<div class="col-sm-12">'+
                                '<img src="images/artPics/illustrator/miamiMerpeopleLong.png" alt="long logo for etsy shop" />'+
                            '</div>'+
                        '</div>'+
                        '<div class="row">'+
                            '<div class="col-sm-12">'+
                                '<img src="images/artPics/illustrator/zhcfLogo.png" alt="logo for gym" />'+
                            '</div>'+
                        '</div>'+
                        '<div class="row">'+
                            '<div class="col-sm-12 darkBG">'+
                                '<img src="images/artPics/illustrator/achievrLogo.png" alt="logo for class project proposal" />'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                    '<div class="col-sm-6">'+
                        '<div class="row">'+
                            '<div class="col-sm-6 darkBG">'+
                                '<img src="images/artPics/illustrator/virt_wkplace.png" alt="diagram for class project proposal" />'+
                            '</div>'+
                            '<div class="col-sm-6">'+
                                '<img src="images/artPics/illustrator/Trivr_favicon.png" alt="favicon for class project website" />'+
                            '</div>'+
                        '</div>'+
                        '<div class="row">'+
                            '<div class="col-sm-12">'+
                                '<img src="images/artPics/illustrator/Alvin.png" alt="art for class project Alvin the Alien" />'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
            '<div class="col-sm-5">'+
                '<div class="row">'+
                    '<div class="col-sm-6">'+
                        '<img src="images/artPics/illustrator/TriVR_poster.png" alt="poster for class project" />'+
                    '</div>'+
                    '<div class="col-sm-6">'+
                        '<img src="images/artPics/illustrator/area51.png" alt="art for class assignment, topic area 51" />'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>'+
        '<hr />'+
    '</div>';
}



function show(category) {
    document.querySelectorAll(".detail").forEach(function(detail){
        detail.style.display = "none";
    });
    console.log(category);
    document.getElementById(category).style.display = "block";

    if (document.getElementById("nav").style.display == "none") {
        document.getElementById("nav").style.display = "flex";
    }

    window.scrollTo(0, 0);
}

