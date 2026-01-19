const questions = [
    { question: "Qui est la plus bavarde ? 😄", choix: ["Chantal","Rinaldi","Pascale","Majoie"], bonne: 0 },
    { question: "Qui arrive très souvent en retard ? ⏰", choix: ["Chantal","Rinaldi","Pascale","Majoie"], bonne: 2 },
    { question: "Qui aime le plus prendre des photos ? 📸", choix: ["Chantal","Rinaldi","Pascale","Majoie"], bonne: 2 },
    { question: "Qui est la plus drôle ? 😂", choix: ["Chantal","Rinaldi","Pascale","Majoie"], bonne: 0 },
    { question: "Qui rigole pour rien ? 😅", choix: ["Chantal","Rinaldi","Pascale","Majoie"], bonne: 3 },
    { question: "Qui exagère toujours les histoires ?", choix: ["Chantal","Rinaldi","Pascale","Majoie"], bonne: 0 },
    { question: "Qui est la reine du drama ? 🎭", choix: ["Chantal","Rinaldi","Pascale","Majoie"], bonne: 1 },
    { question: "Qui change très souvent de coiffure ? 💇‍♀️", choix: ["Chantal","Rinaldi","Pascale","Majoie"], bonne: 1 },
    { question: "Qui fait le plus souvent de mauvais selfies ? 📸", choix: ["Chantal","Rinaldi","Pascale","Majoie"], bonne: 3 },
    { question: "Qui oublie le plus vite ?", choix: ["Chantal","Rinaldi","Pascale","Majoie"], bonne: 0 },
    { question: "Qui donne les meilleurs conseils ?", choix: ["Chantal","Rinaldi","Pascale","Majoie"], bonne: 1 },
    { question: "Qui est toujours là quand ça ne va pas ? ❤️", choix: ["Chantal","Rinaldi","Pascale","Majoie"], bonne: 1 },
    { question: "Qui protège le plus le groupe ?", choix: ["Chantal","Rinaldi","Pascale","Majoie"], bonne: 0 },
    { question: "Qui garde le mieux les secrets ? 🤫", choix: ["Chantal","Rinaldi","Pascale","Majoie"], bonne: 1 },
    { question: "Qui se vexe le plus vite ?", choix: ["Chantal","Rinaldi","Pascale","Majoie"], bonne: 3 },
    { question: "Qui parle trop ? 😄", choix: ["Chantal","Rinaldi","Pascale","Majoie"], bonne: 0 },
    { question: "Qui est la plus têtue ?", choix: ["Chantal","Rinaldi","Pascale","Majoie"], bonne: 0 },
];

let index = 0;
let score = 0;

const questionEl = document.getElementById("question");
const boutons = document.querySelectorAll("#reponses button");
const scoreEl = document.getElementById("score");
const messageEl = document.getElementById("message");

function afficherQuestion() {
    questionEl.innerText = questions[index].question;
    boutons.forEach((btn, i) => {
        btn.querySelector("span").innerText = questions[index].choix[i];
    });
}

function verifierReponse(choix) {
    if (choix === questions[index].bonne) {
        score++;
        scoreEl.innerText = score;
        messageEl.innerText = "Bonne réponse 🎉";
    } else {
        messageEl.innerText = "Oops 😅";
    }

    index++;

    if (index < questions.length) {
        setTimeout(() => {
            afficherQuestion();
            messageEl.innerText = "";
        }, 800);
    } else {
        setTimeout(finDuJeu, 800);
    }
}

function finDuJeu() {
    document.querySelector(".quiz-container").innerHTML = `
        <h1>🎉 Jeu terminé 🎉</h1>
        <p>Score final : ${score} / ${questions.length}</p>
        <p>Vous êtes des meilleures amies 💖</p>
        <button onclick="location.reload()">Rejouer 🔄</button>
    `;
}

afficherQuestion();

