function creatGame(player1, hour, player2) {
  return `
    <li>
          <img
            src="./assets/icons/icon-${player1}.svg"
            alt="Ícone da bandeira do ${player1}"
          />
          <strong>${hour}</strong>
          <img
            src="./assets/icons/icon-${player2}.svg "
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
  creatCard("20/11", "domingo", creatGame("qatar", "13:00", "ecuador")) +
  creatCard(
    "21/11",
    "segunda",
    creatGame("england", "10:00", "iran") +
      creatGame("senegal", "13:00", "netherlands") +
      creatGame("usa", "16:00", "wales")
  ) +
  creatCard(
    "22/11",
    "terça",
    creatGame("saudiArabia", "07:00", "argentina") +
      creatGame("denmark", "10:00", "tunisia") +
      creatGame("mexican", "13:00", "poland") +
      creatGame("france", "16:00", "aus")
  ) +
  creatCard(
    "23/11",
    "quarta",
    creatGame("morroco", "07:00", "croatia") +
      creatGame("germany", "10:00", "japan") +
      creatGame("spain", "13:00", "costaRica") +
      creatGame("belgian", "16:00", "canada")
  ) +
  creatCard(
    "24/11",
    "quinta",
    creatGame("switzerland", "07:00", "cameroon") +
      creatGame("uruguay", "10:00", "southKorea") +
      creatGame("portugal", "13:00", "ghana") +
      creatGame("brazil", "16:00", "serbia")
  ) +
  creatCard(
    "25/11",
    "sexta",
    creatGame("wales", "07:00", "iran") +
      creatGame("qatar", "10:00", "senegal") +
      creatGame("netherlands", "13:00", "ecuador") +
      creatGame("england", "16:00", "usa")
  ) +
  creatCard(
    "26/11",
    "sábado",
    creatGame("tunisia", "07:00", "aus") +
      creatGame("poland", "10:00", "saudiArabia") +
      creatGame("france", "13:00", "denmark") +
      creatGame("argentina", "16:00", "mexican")
  ) +
  creatCard(
    "27/11",
    "domingo",
    creatGame("japan", "07:00", "costaRica") +
      creatGame("belgian", "10:00", "morroco") +
      creatGame("croatia", "13:00", "canada") +
      creatGame("spain", "16:00", "germany")
  ) +
  creatCard(
    "28/11",
    "segunda",
    creatGame("cameroon", "07:00", "serbia") +
      creatGame("southKorea", "10:00", "ghana") +
      creatGame("brazil", "13:00", "switzerland") +
      creatGame("portugal", "16:00", "uruguay")
  ) +
  creatCard(
    "29/11",
    "terça",
    creatGame("ecuador", "07:00", "senegal") +
      creatGame("netherlands", "10:00", "qatar") +
      creatGame("iran", "13:00", "usa") +
      creatGame("wales", "16:00", "england")
  ) +
  creatCard(
    "30/11",
    "quarta",
    creatGame("tunisia", "07:00", "france") +
      creatGame("aus", "10:00", "denmark") +
      creatGame("poland", "13:00", "argentina") +
      creatGame("saudiArabia", "16:00", "mexican")
  ) +
  creatCard(
    "01/12",
    "quinta",
    creatGame("croatia", "07:00", "belgian") +
      creatGame("canada", "10:00", "morroco") +
      creatGame("japan", "13:00", "spain") +
      creatGame("costaRica", "16:00", "germany")
  ) +
  creatCard(
    "02/12",
    "sexta",
    creatGame("southKorea", "07:00", "portugal") +
      creatGame("ghana", "10:00", "uruguay") +
      creatGame("serbia", "13:00", "switzerland") +
      creatGame("cameroon", "16:00", "brazil")
  )
