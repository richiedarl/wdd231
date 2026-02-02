const spotlightContainer = document.querySelector("#spotlight-container");

async function loadSpotlights() {
  try {
    const response = await fetch("data/members.json");
    const data = await response.json();

    const eligible = data.members.filter(
      member => member.membership === 2 || member.membership === 3
    );

    const shuffled = eligible.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    spotlightContainer.innerHTML = "";

    selected.forEach(member => {
      const card = document.createElement("div");
      card.classList.add("spotlight-card");

      card.innerHTML = `
        <h3>${member.name}</h3>
        <img src="images/${member.image}" alt="${member.name} logo">
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank" rel="noopener">Visit Website</a>
        <p class="membership">Membership: ${member.membership === 3 ? "Gold" : "Silver"}</p>
      `;

      spotlightContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Spotlight error:", error);
  }
}

loadSpotlights();
