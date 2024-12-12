//// DRUMKIT!

// En knap for hver trome lyd
// kunne trykke på en knap for å lage lyden
// Hver knapp skal ha en dedikert keboard shortcut

const container = document.querySelector("#container");

const drumMap = {
  kick: "q",
  snare: "w",
  hihat: "e",
  openhat: "r",
  ride: "t",
  tom: "y",
  tink: "u",
  clap: "i",
};

//Using the "for un"
for (let key in drumMap) {
  const drum = document.createElement("div");
  //------Style------//
  drum.style.backgroundColor = "green";
  //image
  const image = document.createElement("img");
  image.src = `./pics/${key}.jpg`;
  image.style.height = "100px";
  image.style.width = "100px";
  //drum names.
  const drumTxt = document.createElement("p");
  drumTxt.textContent = `${key[0].toUpperCase()}${key.slice(1)}`;
  drumTxt.textContent.toUpperCase;
  
  // Display keyboard shortcut
  const shortcut = document.createElement("kbd");
  shortcut.textContent = drumMap[key]; //generere --> drumap.kick, vil generere en shortcut til knappene.
  shortcut.style.fontSize = "2rem";
  //Eventlistener
  image.addEventListener("click", () => {
    new Audio(`./sounds/${key}.wav`).play();
  });
  //appending.
  drum.append(image, drumTxt, shortcut);
  container.append(drum);
}

window.addEventListener("keydown", (event) => {
  for (let key in drumMap) {
    if (event.key === drumMap[key]) {
      new Audio(`./sounds/${key}.wav`).play();
      continue;
    }
  }
});
