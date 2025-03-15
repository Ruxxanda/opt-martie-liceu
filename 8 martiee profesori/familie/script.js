// Afișează butonul după 5 secunde
setTimeout(() => {
    document.querySelector('.btn').style.display = 'block';
}, 5000);

// Pagina cadou: schimbă imaginea după 2 secunde
if (document.getElementById("gift")) {
    setTimeout(() => {
        document.getElementById('gift').src = 'imagini/cadou on.png';
        document.querySelector('.message').style.display = 'block';
    }, 2000);

    setTimeout(() => {
        document.querySelector('.btn').style.display = 'block';
    }, 10000);
}

// Generare automată a motivelor
document.addEventListener("DOMContentLoaded", function () {
    const motivList = document.getElementById("motiv-list");

    if (motivList) {
        const motive = [
            "Pentru că ești minunată!",
            "Pentru că mă iubești necondiționat.",
            "Pentru că îmi oferi mereu cele mai bune sfaturi.",
            "Pentru că mă susții în tot ceea ce fac.",
            "Pentru că îți pasă de mine mai mult decât oricine altcineva.",
            "Pentru că îmi gătești mâncarea preferată.",
            "Pentru că ai cea mai frumoasă îmbrățișare.",
            "Pentru că știi mereu ce să spui ca să mă înveselești.",
            "Pentru că mă înveți să fiu puternică.",
            "Pentru că îmi povestești amintiri din copilăria ta.",
            "Pentru că ai un zâmbet cald și sincer.",
            "Pentru că ești cea mai bună prietenă a mea.",
            "Pentru că mă ajuți chiar și când nu îți cer ajutorul.",
            "Pentru că îmi dai curaj să îmi urmez visele.",
            "Pentru că ai mereu răbdare cu mine.",
            "Pentru că mă faci să mă simt specială.",
            "Pentru că nu te superi pe mine când greșesc.",
            "Pentru că îmi spui mereu că sunt valoroasă.",
            "Pentru că mă încurajezi când sunt tristă.",
            "Pentru că îți sacrifici timpul pentru mine.",
            "Pentru că îmi amintești mereu să am încredere în mine.",
            "Pentru că ești grijulie și atentă la detalii.",
            "Pentru că ai cea mai frumoasă voce din lume.",
            "Pentru că îmi spui povești înainte de culcare.",
            "Pentru că ai un suflet bun și generos.",
            "Pentru că îmi amintești să fiu recunoscătoare",
            "Pentru că mă protejezi mereu.",
            "Pentru că mă înveți ce înseamnă bunătatea.",
            "Pentru că ești mereu alături de mine.",
            "Pentru că îmi îndrepți greșelile cu blândețe.",
            "Pentru că mă iubești chiar și atunci când nu merit.",
            "Pentru că știi să mă ierți.",
            "Pentru că mă ții de mână când mi-e frică.",
            "Pentru că îmi faci zilele mai frumoase.",
            "Pentru că mă înveți să fiu responsabilă.",
            "Pentru că îmi faci surprize frumoase.",
            "Pentru că mă înveți să respect oamenii.",
            "Pentru că știi să mă faci să râd.",
            "Pentru că mă îmbrățișezi fără motiv.",
            "Pentru că îmi asculți problemele.",
            "Pentru că mă înveți să fiu recunoscătoare.",
            "Pentru că îți pasă de fiecare detaliu al vieții mele.",
            "Pentru că mă sprijini când sunt slabă.",
            "Pentru că ai mereu o soluție pentru orice problemă.",
            "Pentru că îmi amintești să visez frumos.",
            "Pentru că ai o inimă mare și plină de iubire.",
            "Pentru că mă înveți să fiu curajoasă.",
            "Pentru că mă faci să mă simt în siguranță.",
            "Pentru că ai întotdeauna un sfat bun pentru mine.",
            "Pentru că mă faci să mă simt importantă.",
            "Pentru că mă ajuți să înțeleg ce este bine și ce este rău.",
            "Pentru că mă înveți să fiu cinstită.",
            "Pentru că ești mereu mândră de mine.",
            "Pentru că ai grijă să nu îmi lipsească nimic.",
            "Pentru că mă îndrumi pe drumul cel bun.",
            "Pentru că ai cea mai caldă îmbrățișare.",
            "Pentru că mă înveți să fiu independentă.",
            "Pentru că îți place să petreci timp cu mine.",
            "Pentru că mă respecți și mă asculți.",
            "Pentru că îmi dai încredere în mine.",
            "Pentru că mă iubești fără condiții.",
            "Pentru că ai un suflet frumos.",
            "Pentru că îmi umpli viața de lumină.",
            "Pentru că mă motivezi să fiu mai bună.",
            "Pentru că îți pasă de mine mai mult decât orice altceva.",
            "Pentru că mă îndrumi cu înțelepciune.",
            "Pentru că îți sacrifici propriile dorințe pentru fericirea mea.",
            "Pentru că îmi faci zilele mai senine.",
            "Pentru că ești cea mai bună mamă din lume!",
            "Pentru că îmi dai sfaturi sincere.",
            "Pentru că mă înveți să fiu recunoscătoare pentru tot ce am.",
            "Pentru că mă inspiri să fiu o persoană mai bună.",
            "Pentru că îmi arăți zilnic cât de mult mă iubești.",
            "Pentru că mă faci să mă simt norocos(oasă).",
            "Pentru că ești un exemplu pentru mine.",
            "Pentru că mă înveți să iubesc viața.",
            "Pentru că ai mereu grijă de mine.",
            "Pentru că mă susții indiferent de situație.",
            "Pentru că îți pasă de fericirea mea.",
            "Pentru că mă înveți să fiu curajoasă și puternică.",
            "Pentru că ești o comoară neprețuită pentru mine.",
            "Pentru că îmi umpli viața cu iubire și căldură.",
            "Pentru că mă inspiri să fiu un om mai bun.",
            "Pentru că ai un suflet frumos și generos.",
            "Pentru că mă înveți să prețuiesc familia.",
            "Pentru că ești o binecuvântare în viața mea.",
            "Pentru că pur și simplu TE IUBESC! ❤️"
        ];

        // Adăugăm motivele în listă
        motive.forEach((motiv, index) => {
            let li = document.createElement("li");
            li.textContent = `${index + 1}. ${motiv}`;
            motivList.appendChild(li);
        });
    }
});





document.addEventListener("DOMContentLoaded", function () {
    const puzzleContainer = document.getElementById("puzzle-container");

    if (puzzleContainer) {
        const imgSrc = "imagini/mama.jpg";
        const gridSize = 3;
        let pieces = [];

        // Creăm piesele de puzzle
        for (let row = 0; row < gridSize; row++) {
            for (let col = 0; col < gridSize; col++) {
                let piece = document.createElement("div");
                piece.classList.add("puzzle-piece");
                piece.style.backgroundImage = `url(${imgSrc})`;
                piece.style.backgroundPosition = `-${col * 100}px -${row * 100}px`;
                piece.dataset.index = row * gridSize + col;
                pieces.push(piece);
            }
        }

        // Amestecăm piesele
        pieces.sort(() => Math.random() - 0.5);

        // Afișăm piesele în pagină
        pieces.forEach(piece => puzzleContainer.appendChild(piece));

        // Adăugăm funcționalitate de swap (schimb de piese)
        let selectedPiece = null;
        puzzleContainer.addEventListener("click", function (e) {
            if (e.target.classList.contains("puzzle-piece")) {
                if (!selectedPiece) {
                    selectedPiece = e.target;
                    selectedPiece.style.border = "2px solid red";
                } else {
                    let temp = selectedPiece.style.backgroundPosition;
                    selectedPiece.style.backgroundPosition = e.target.style.backgroundPosition;
                    e.target.style.backgroundPosition = temp;
                    selectedPiece.style.border = "1px solid white";
                    selectedPiece = null;
                }
            }
        });
    }
});
