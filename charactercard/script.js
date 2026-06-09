const creature = {
  name: "Snortleblat",
  class: "Swamp Beast",
  level: 5,
  health: 100,
  image: "images/snortleblat.png",

  attacked() {
    if (this.health <= 0) {
      return;
    }

    this.health -= 20;

    if (this.health <= 0) {
      this.health = 0;
    }
  },

  levelUp() {
    if (this.health <= 0) {
      return;
    } 

    this.level++;
  }
};

function renderCard() {
  const container = document.querySelector("#cardContainer");

  container.innerHTML = `
    <div class="card">
      <img class="image" src="${creature.image}" alt="${creature.name}">
      
      <div class="name">${creature.name}</div>

      <div class="stats">
        <p><strong>Class:</strong> ${creature.class}</p>
        <p><strong>Level:</strong> ${creature.level}</p>
        <p><strong>Health:</strong> ${creature.health}</p>
      </div>

      <div class="buttons">
        <button id="attackBtn">Attack</button>
        <button id="levelBtn">Level Up</button>
      </div>
    </div>
  `;

  document
  .querySelector("#attackBtn")
  .addEventListener("click", () => {
    creature.attacked();
    renderCard();

    if (creature.health === 0) {
      setTimeout(() => {
        alert("The Snortleblat has died!");
      }, 0);
    }
  });

  document
  .querySelector("#levelBtn")
  .addEventListener("click", () => {
    creature.levelUp();
    renderCard();
  });
}

renderCard();