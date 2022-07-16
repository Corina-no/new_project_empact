//import fetch from "./node_modules/node-fetch/src/index.js";
//import * as cheerio from "cheerio";

const RSS_URL = "https://rss.nytimes.com/services/xml/rss/nyt/World.xml";

fetch(RSS_URL)
  .then((respone) => respone.text())
  .then((data) => {
    let parser = new DOMParser();
    let xml = parser.parseFromString(data, "text/xml");
    console.log(xml);

    listElements(xml);
  });
function listElements(x) {
  for (let i = 0; i <= x.querySelectorAll("item").length; i++) {
    const list = x.querySelectorAll("item")[i];
    const y = list.childNodes;
    const title = list.childNodes[1].innerHTML;
    const description = list.childNodes[9].innerHTML;

    const author = list.childNodes[11].innerHTML;

    const date = list.childNodes[13].innerHTML;

    console.log(y);
    console.log("Titlu: " + title);
    console.log("Descriere: " + description);
    console.log("Autor: " + author);
    console.log("Data: " + date);

    console.log(x.querySelectorAll("item").length);

    let newdiv = document.createElement("div");
    newdiv.innerHTML =
      "<ul>" +
      "<li> Title: " +
      title +
      "</li>" +
      "<li> Author: " +
      author +
      "</li>" +
      "<li> Date: " +
      date +
      "</li>" +
      "<li> Description: " +
      description +
      "</li>" +
      "<br/>" +
      "</ul>";

    document.body.appendChild(newdiv);
  }
}
