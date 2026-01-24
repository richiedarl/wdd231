const membersContainer = document.getElementById("members");
const gridButton = document.getElementById("grid");
const listButton = document.getElementById("list");

async function getMembers() {
  try {
    const response = await fetch("./data/members.json");
    if (!response.ok) throw new Error("members.json not found");

    const data = await response.json();
    displayMembers(data.members);
  } catch (error) {
    console.error(error);
  }
}

function displayMembers(members) {
  membersContainer.innerHTML = "";

  members.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("member-card");

    card.innerHTML = `
      <h3>${member.name}</h3>
      <img src="images/${member.image}" alt="Logo of ${member.name}">
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank" rel="noopener">Visit Website</a>
      <p class="membership level-${member.membership}">
        Membership Level: ${member.membership}
      </p>
    `;

    membersContainer.appendChild(card);
  });
}

gridButton?.addEventListener("click", () => {
  membersContainer.classList.add("grid");
  membersContainer.classList.remove("list");
});

listButton?.addEventListener("click", () => {
  membersContainer.classList.add("list");
  membersContainer.classList.remove("grid");
});

getMembers();
