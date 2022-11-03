function creatCard() {
  return `
        <li>
                <img src="./assets/icon-brazil.svg" alt="Ícone da bandeira do Brasil"/>
                <strong>7:00</strong>
                <img  src="./assets/icon-cameroon.svg " alt="Ícone da bandeira do camarões"/>
        </li>
        
        `
}

document.querySelector("#app").innerHTML = `
<header>
        <img src="./assets/logo.svg" alt="Imagem de logo da NLW Copa" />
</header>
<main id="cards">
        <div class="card">
                <h2>21/11 <span>segunda</span></h2>
                <ul>
                        ${creatCard()}
                        ${creatCard()}
                        ${creatCard()}
                </ul>
        </div>
</main>`
