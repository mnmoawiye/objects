// Problem 1
const gameSettings = {
  difficulty: "Easy",
  soundOn: true,
  maxPlayers: 2
};

function problem1() {
  let result = "<strong>Game Settings:</strong><br>";
  for (let key in gameSettings) {
    result += `${key}: ${gameSettings[key]}<br>`;
  }
  outputDiv.innerHTML = result;
}

// Problem 2
gameSettings.toggleSound = function () {
  this.soundOn = !this.soundOn;
};

function problem2() {
  gameSettings.toggleSound();
  outputDiv.innerHTML = `<strong>Sound is now:</strong> ${gameSettings.soundOn}`;
}

// Problem 3
const smoothie = {
  flavor: "Berry",
  size: "Large",
  hasProtein: false
};

function problem3() {
  let newSize = prompt("Enter smoothie size:");
  if (newSize && newSize.trim() !== "") {
    smoothie.size = newSize.trim();
  }
  outputDiv.innerHTML = `<strong>Smoothie Size Updated:</strong> ${smoothie.size}`;
}

// Problem 4
const gadget = {
  name: "Camera",
  batteryLife: 8,
  isWireless: true
};

function printGadgetSpecs(gadget) {
  return `Name: ${gadget.name}, Battery Life: ${gadget.batteryLife} hrs, Wireless: ${gadget.isWireless}`;
}

function problem4() {
  outputDiv.innerHTML = `<strong>Gadget Specs:</strong> ${printGadgetSpecs(gadget)}`;
}

// Problem 5
const garden = {
  plants: [],
  addPlant: function (plantName) {
    this.plants.push(plantName);
  }
};

function problem5() {
  const newPlant = document.getElementById("plantInput").value;
  if (newPlant.trim() !== "") {
    garden.addPlant(newPlant);
    document.getElementById("plantInput").value = "";
  }

  let result = "<strong>Plants in Garden:</strong><ul>";
  for (let plant of garden.plants) {
    result += `<li>${plant}</li>`;
  }
  result += "</ul>";
  outputDiv.innerHTML = result;
}

// Problem 6
const playlist = {
  name: "Top Hits",
  songList: [],
  addSong: function (songName) {
    this.songList.push(songName);
  }
};

function problem6() {
  for (let i = 0; i < 2; i++) {
    let song = prompt(`Enter song ${i + 1}:`);
    if (song && song.trim() !== "") {
      playlist.addSong(song.trim());
    }
  }

  let result = `<strong>Playlist: ${playlist.name}</strong><ul>`;
  for (let song of playlist.songList) {
    result += `<li>${song}</li>`;
  }
  result += "</ul>";
  outputDiv.innerHTML = result;
}
