 var container;
 const restaurants = [{
         "name": "LuLa am Markt",
         "subtitle": "Café",
         "img": "https://lh5.googleusercontent.com/p/AF1QipMHUGKUTwadfNz-tuMr4OSbuH4ng5IKrqQoLk7w=w284-h160-k-no",
         "address": "Lauterstraße 14, 12159 Berlin",
         "url": "http://lula-berlin.de",
         "tel": "030 12345678"
     },
     {
         "name": "KAWA Cafe-Deli",
         "subtitle": "Veganes Restaurant",
         "img": "https://lh5.googleusercontent.com/p/AF1QipOfkiCHPK6KAIMyrGtm-184QCauoIwmO6sTiRPK=w213-h160-k-no",
         "address": "Moltkestraße 1, 12203 Berlin",
         "url": "http://www.cafekawa.de",
         "tel": "030 12345678"
     },
     {
         "name": "Curry 36",
         "subtitle": "Snack Bar",
         "img": "https://lh5.googleusercontent.com/p/AF1QipOTqap7-04d-rfhnlI8EgOvXWX_Z73ZE2B3ts2B=w213-h160-k-no",
         "address": "Mehringdamm 36, 10961 Berlin",
         "url": "http://www.curry36.de",
         "tel": "030 12345678"
     }
 ];
 // console.log(restaurants);

 document.addEventListener("DOMContentLoaded", event => {

     container = document.querySelector("main");
     navigateTo(location.hash.trim().substring(1));
     insert();


 });
 window.addEventListener("hashchange", event => {
     navigateTo(location.hash.trim().substring(1));
 });
 // console.log(container.children.length);
 function navigateTo(template) {
     while (container.hasChildNodes()) {
         container.removeChild(container.lastChild);
     }
     var content;
     if (template == "")
         template = "Intro";
     switch (template) {
         case "Intro":
             content = document.getElementById("IntroTemplate").content;
             activateNav(template)
             break;
         case "Restaurants":
             content = document.getElementById("RestaurantsTemplate").content;
             activateNav(template)
             break;
         case "Impressum":
             content = document.getElementById("ImpressumTemplate").content;
             activateNav(template)
             break;
         default:
             content = document.getElementById("IntroTemplate").content;
             activateNav(template)
             break;
     }

     container.appendChild(document.importNode(content, true));


 }

 function activateNav(template) {
     let navLinks = document.querySelectorAll(".menu a");

     for (let i = 0; i < navLinks.length; i++) {
         if (navLinks[i].textContent == template) {
             navLinks[i].classList.add("ADDED");

         }
     }
 }

 function insert() {
     let bla = [];
     for (let i = 0; i < restaurants.length; i++) {
         // console.log(restaurants[i]);
         let entry = createEntry(restaurants[i]);
         // let test = document.getElementById("test");
         // test.insertBefore(entry, test.firstChild);
         // console.log(entry);
         bla.push(entry);

     }
     for (let j = 0; j < bla.length; j++) {
         let cards = document.getElementById("RestaurantsTemplate").content;
         cards.querySelector("#test").appendChild(bla[j]);
         // container.appendChild(bla[j]);
         // main.querySelector("main").appendChild(bla[j]);
     }

 }

 function createEntry(entry) {
     var template = document.getElementById("EntryTemplate").content;
     // console.log(entry.subtitle);
     template.querySelector("header > img").src = entry.img;
     template.querySelector("header > div").textContent = entry.subtitle;
     template.querySelector("header > h3").textContent = entry.name;
     template.querySelector("section > div").textContent = entry.address;
     template.querySelector("section > div > #url").href = entry.url;
     template.querySelector("section > div > #tel").href = entry.tel;
     // template.content.querySelector("section").getElementsByName("url").textContent = entry.url;
     // template.content.querySelector("section").getElementsByName("tel").textContent = entry.tel;
     // console.log(template);
     return document.importNode(template, true);
     // var clone = document.importNode(template, true);
     // document.querySelector("main").appendChild(clone);
 }