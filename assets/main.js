function creatGame(player1, hour, player2) {
  return `
    <li>
          <img
            src="./assets/icon-${player1}.svg"
            alt="Ícone da bandeira do ${player1}"
          />
          <strong>${hour}</strong>
          <img
            src="./assets/icon-${player2}.svg "
            alt="Ícone da bandeira do ${player2}"
          />
    </li>`
}

let delay = -0.4

function creatCard(date, day, games) {
  delay = delay + 0.4
  return `
  <div class="card" style ="animation-delay: ${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
      ${games}
    </ul>
  </div>
        `
}

document.querySelector("#cards").innerHTML =
  creatCard("21/11", "segunda", creatGame("brazil", "07:00", "cameroon")) +
  creatCard("24/11", "quinta", creatGame("brazil", "16:00", "serbia")) +
  creatCard("28/11", "segunda", creatGame("brazil", "13:00", "switzerland"))
