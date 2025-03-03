document.addEventListener("DOMContentLoaded", function() {
    let butonFloare = document.querySelector(".floare");
    let mesajElement = document.querySelector(".mesaj");

    if (butonFloare) {
        const mesaje = [
            "Datorită Dumneavoastră, învățăm cu plăcere și pasiune!",
            "O profesoară ca Dumneavoastră lasă amprente în suflete, nu doar în caiete!",
            "Vă mulțumim pentru că ne încurajați mereu să credem în noi!",
            "Cu Dumneavoastră, fiecare lecție este o călătorie frumoasă spre cunoaștere!",
            "Pasiunea cu care predați ne inspiră să învățăm și să ne dezvoltăm!",
            "Aveți darul de a transforma informația în ceva magic și ușor de înțeles!",
            "Prin răbdarea și dedicarea Dumneavoastră, devenim oameni mai buni!",
            "Vă suntem recunoscători pentru fiecare moment în care ne-ați ghidat și sprijinit!",
            "Educația oferită de Dumneavoastră este o comoară ce va rămâne cu noi toată viața!",
            "Fiecare zi cu Dumneavoastră este o lecție de viață, nu doar de materie!"
        ];
        
        butonFloare.addEventListener("click", function() {
            let mesajAleatoriu = mesaje[Math.floor(Math.random() * mesaje.length)];
            mesajElement.textContent = mesajAleatoriu;
        });
    }
});
