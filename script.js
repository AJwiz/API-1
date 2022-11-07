//Function for Creating Elements
function creatediv(tagname, atname, atvalue) {
  let div = document.createElement(tagname);
  div.setAttribute(atname, atvalue);
  return div;
}
// Creating Elements
let head = creatediv("div", "class", "header");
let webHead = creatediv("h1", "class", "pageheader");
webHead.innerHTML = `Anime Series Lover`;
let pageDetail = creatediv("h4", "class", "sub");
pageDetail.innerHTML = `Unknown FACTS About TopAnime Series`;
//Facts BOX
let factbox = creatediv("section", "class", "fact-box", "");
let factcontainer = creatediv("div", "class", "container", "");
let factHead = creatediv("h2", "class", "fact-head");
let factSection = creatediv("div", "class", "fsec");
//let h6 = creatediv("h6","class","facts");

//Creating Container & Row
let container = creatediv("div", "class", "container", "");
let row = creatediv("div", "class", "row");

//Creating Anime CArds
async function anime() {
  let getAnime = await fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1`);
  let jsonAnime = await getAnime.json();
  let data = jsonAnime.data;
  let nAme = [];
  let newarr = [];
  try {
    for (let i = 0; i < data.length; i++) {
      nAme.push(data[i].anime_name);
      newarr.push(nAme[i].split("_").join(" "));
      row.innerHTML += `<div class="card">
            <img id="my-img" src="${data[i].anime_img}" class="card-img-top" alt="Anime POSTER">
            <div class="card-body">
                <h5 class="card-title" onclick="fact${i}()">${newarr[i]}</h5>
            </div>
            </div>`
    }
  }
  catch {
    //alert("Error")
  }
}
anime();
//Creating functions For ON-Clicks
async function fact0() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  let animeName = `bleach`;
  let getFact = await fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1/${animeName}`);
  let jsonFacts = await getFact.json();
  let data1 = jsonFacts.data;
  factHead.innerHTML = `Facts About ${animeName.toUpperCase()}:`;
  for (let j = 0; j < data1.length; j++) {
    factSection.innerHTML += `<br><h6 class="para">${data1[j].fact}</h6>`;
  }
}
async function fact1() {
  factHead.innerHTML = "";
  factSection.innerHTML = "";
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  let animeName = `black_clover`;
  let getFact = await fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1/${animeName}`);
  let jsonFacts = await getFact.json();
  let data1 = jsonFacts.data;
  factHead.innerHTML = `Facts About ${animeName.toUpperCase()}:`;
  for (let j = 0; j < data1.length; j++) {
    factSection.innerHTML += `<br><h6 class="para">${data1[j].fact}</h6>`;
  }
}
async function fact2() {
  factHead.innerHTML = "";
  factSection.innerHTML = "";
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  let animeName = `dragon_ball`;
  let getFact = await fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1/${animeName}`);
  let jsonFacts = await getFact.json();
  let data1 = jsonFacts.data;
  factHead.innerHTML = `Facts About ${animeName.toUpperCase()}:`;
  for (let j = 0; j < data1.length; j++) {
    factSection.innerHTML += `<br><h6 class="para">${data1[j].fact}</h6>`;
  }
}
async function fact3() {
  factHead.innerHTML = "";
  factSection.innerHTML = "";
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  let animeName = `jujutsu_kaisen`;
  let getFact = await fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1/${animeName}`);
  let jsonFacts = await getFact.json();
  let data1 = jsonFacts.data;
  factHead.innerHTML = `Facts About ${animeName.toUpperCase()}:`;
  for (let j = 0; j < data1.length; j++) {
    factSection.innerHTML += `<br><h6 class="para">${data1[j].fact}</h6>`;
  }
}
async function fact4() {
  factHead.innerHTML = "";
  factSection.innerHTML = "";
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  let animeName = `fma_brotherhood`;
  let getFact = await fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1/${animeName}`);
  let jsonFacts = await getFact.json();
  let data1 = jsonFacts.data;
  factHead.innerHTML = `Facts About ${animeName.toUpperCase()}:`;
  for (let j = 0; j < data1.length; j++) {
    factSection.innerHTML += `<br><h6 class="para">${data1[j].fact}</h6>`;
  }
}
async function fact5() {
  factHead.innerHTML = "";
  factSection.innerHTML = "";
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  let animeName = `naruto`;
  let getFact = await fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1/${animeName}`);
  let jsonFacts = await getFact.json();
  let data1 = jsonFacts.data;
  factHead.innerHTML = `Facts About ${animeName.toUpperCase()}:`;
  for (let j = 0; j < data1.length; j++) {
    factSection.innerHTML += `<br><h6 class="para">${data1[j].fact}</h6>`;
  }
}
async function fact6() {
  factHead.innerHTML = "";
  factSection.innerHTML = "";
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  let animeName = `gintama`;
  let getFact = await fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1/${animeName}`);
  let jsonFacts = await getFact.json();
  let data1 = jsonFacts.data;
  factHead.innerHTML = `Facts About ${animeName.toUpperCase()}:`;
  for (let j = 0; j < data1.length; j++) {
    factSection.innerHTML += `<br><h6 class="para">${data1[j].fact}</h6>`;
  }
}
async function fact7() {
  factHead.innerHTML = "";
  factSection.innerHTML = "";
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  let animeName = `itachi_uchiha`;
  let getFact = await fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1/${animeName}`);
  let jsonFacts = await getFact.json();
  let data1 = jsonFacts.data;
  factHead.innerHTML = `Facts About ${animeName.toUpperCase()}:`;
  for (let j = 0; j < data1.length; j++) {
    factSection.innerHTML += `<br><h6 class="para">${data1[j].fact}</h6>`;
  }
}
async function fact8() {
  factHead.innerHTML = "";
  factSection.innerHTML = "";
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  let animeName = `one_piece`;
  let getFact = await fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1/${animeName}`);
  let jsonFacts = await getFact.json();
  let data1 = jsonFacts.data;
  factHead.innerHTML = `Facts About ${animeName.toUpperCase()}:`;
  for (let j = 0; j < data1.length; j++) {
    factSection.innerHTML += `<br><h6 class="para">${data1[j].fact}</h6>`;
  }
}
async function fact9() {
  factHead.innerHTML = "";
  factSection.innerHTML = "";
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  let animeName = `demon_slayer`;
  let getFact = await fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1/${animeName}`);
  let jsonFacts = await getFact.json();
  let data1 = jsonFacts.data;
  factHead.innerHTML = `Facts About ${animeName.toUpperCase()}:`;
  for (let j = 0; j < data1.length; j++) {
    factSection.innerHTML += `<br><h6 class="para">${data1[j].fact}</h6>`;
  }
}
async function fact10() {
  factHead.innerHTML = "";
  factSection.innerHTML = "";
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  let animeName = `attack_on_titan`;
  let getFact = await fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1/${animeName}`);
  let jsonFacts = await getFact.json();
  let data1 = jsonFacts.data;
  factHead.innerHTML = `Facts About ${animeName.toUpperCase()}:`;
  for (let j = 0; j < data1.length; j++) {
    factSection.innerHTML += `<br><h6 class="para">${data1[j].fact}</h6>`;
  }
}
async function fact11() {
  factHead.innerHTML = "";
  factSection.innerHTML = "";
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  let animeName = `hunter_x_hunter`;
  let getFact = await fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1/${animeName}`);
  let jsonFacts = await getFact.json();
  let data1 = jsonFacts.data;
  factHead.innerHTML = `Facts About ${animeName.toUpperCase()}:`;
  for (let j = 0; j < data1.length; j++) {
    factSection.innerHTML += `<br><h6 class="para">${data1[j].fact}</h6>`;
  }
}
async function fact12() {
  factHead.innerHTML = "";
  factSection.innerHTML = "";
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  let animeName = `boku_no_hero_academia`;
  let getFact = await fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1/${animeName}`);
  let jsonFacts = await getFact.json();
  let data1 = jsonFacts.data;
  factHead.innerHTML = `Facts About ${animeName.toUpperCase()}:`;
  for (let j = 0; j < data1.length; j++) {
    factSection.innerHTML += `<br><h6 class="para">${data1[j].fact}</h6>`;
  }
}

//Appending the Created Elements
head.append(webHead, pageDetail);
factbox.append(factHead, factcontainer, factSection);
container.append(row);
document.body.append(head, factbox, container);