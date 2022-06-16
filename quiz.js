const sectionStart = document.getElementById("sectionStart");
const sectionEnd = document.getElementById("sectionEnd");
const response = document.getElementById("reponse");
const contenu = document.getElementById("contenu");
const questionOne = document.getElementById("questionOne");
const questionTwo = document.getElementById("questionTwo");
const questionThree = document.getElementById("questionThree");
const nbQuestion = document.getElementById("nbQuestion");
const nbQuestionDyn = document.getElementById("nbQuestionDyn");
const score = document.getElementById("score");
const scoreDyn = document.getElementById("scoreDyn");

const newH3 = document.createElement("h3");



// Pour savoir si la page est charger
document.addEventListener('DOMContentLoaded', function() {
    //Si la page est charger, executé ce code
    console.log('HTML prêt !');
    nbQuestion.style.display = "none";
    sectionEnd.style.display = "none";
    contenu.style.display = "none";
    questionOne.style.display = "none";
    questionTwo.style.display = "none";
    questionThree.style.display = "none";
    response.style.display = "none";
});


// Création d'un botuon "Suivant"
function creationBtnSuivant(){
    let btnSuivant = document.createElement("button");
    btnSuivant.setAttribute("type", "button");
    btnSuivant.setAttribute("id", "btn");
    btnSuivant.textContent = "Suivant";
    response.appendChild(btnSuivant);
    return btnSuivant;
}


// Compteur nombre de question juste
let compteurNbQuestionJuste = 0;
// Compteur nombre de question
let compteurNbQuestion = 0;

// Function qui permet de masquer la sectionStart et d'afficher la première
function commencerQuiz(){
    sectionStart.style.display = "none";
    sectionEnd.style.display = "none";
    contenu.style.display = "block";
    questionOne.style.display = "block";
    // Compteur nombre de question
    nbQuestion.style.display = "block";
    compteurNbQuestion += 1;
    nbQuestionDyn.textContent = compteurNbQuestion;
}


// Question 1
function validerQuestion1(){
    var valeur = document.querySelector('input[name="question1"]:checked').value;
    questionOne.style.display = "none";
    sectionStart.style.display = "none";
    response.style.display = "block";
    
    if(valeur === "jonathan"){
        // Création d'un message en cas de bonne réponse
        newH3.textContent = "Bien joué !! C'est une bonne réponse !!";
        response.appendChild(newH3);
        // Compteur nombre de question juste
        compteurNbQuestionJuste += 1;
        console.log(compteurNbQuestionJuste);
    } else {
        // Création d'un message en cas de mauvaise réponse
        newH3.textContent = "Dommage !! C'est une mauvaise réponse !!";
        response.appendChild(newH3);
    }
    
    let btnSuivant = creationBtnSuivant();
    // Action à effectuer lors du click button "suivant"
    btnSuivant.addEventListener("click", function(){
        response.style.display = "none";
        questionTwo.style.display = "block";
        response.removeChild(btnSuivant);
        response.removeChild(newH3);
        // Compteur nombre de question
        nbQuestion.style.display = "block";
        compteurNbQuestion += 1;
        nbQuestionDyn.textContent = compteurNbQuestion;
    });
}

// Question 2
function validerQuestion2(){
    var valeur = document.querySelector('input[name="question2"]:checked').value;
    sectionStart.style.display = "none";
    questionOne.style.display = "none";
    questionTwo.style.display = "none";
    response.style.display = "block";

    if(valeur === "blanc"){
        // Création d'un message en cas de bonne réponse
        newH3.textContent = "Bien joué !! C'est une bonne réponse !!";
        response.appendChild(newH3);
        // Compteur nombre de question juste
        compteurNbQuestionJuste += 1;
        console.log(compteurNbQuestionJuste);
    } else {
        // Création d'un message en cas de mauvaise réponse
        newH3.textContent = "Dommage !! C'est une mauvaise réponse !!";
        response.appendChild(newH3);
    }

    let btnSuivantNew = creationBtnSuivant();
    btnSuivantNew.addEventListener("click", function(){
        response.style.display = "none";
        questionTwo.style.display = "none";
        questionOne.style.display = "none";
        questionThree.style.display = "block";
        response.removeChild(btnSuivantNew);
        response.removeChild(newH3);
        // Compteur nombre de question
        nbQuestion.style.display = "block";
        compteurNbQuestion += 1;
        nbQuestionDyn.textContent = compteurNbQuestion;
    });
}

// Question 3
function validerQuestion3(){
    var valeur = document.querySelector('input[name="question3"]:checked').value;
    sectionStart.style.display = "none";
    questionOne.style.display = "none";
    questionTwo.style.display = "none";
    questionThree.style.display = "none";
    response.style.display = "block";
    
    if(valeur === "non"){
        // Création d'un message en cas de bonne réponse
        newH3.textContent = "Bien joué !! C'est une bonne réponse !!";
        response.appendChild(newH3);
        // Compteur nombre de question juste
        compteurNbQuestionJuste += 1;
        console.log(compteurNbQuestionJuste);
    } else {
        // Création d'un message en cas de mauvaise réponse
        newH3.textContent = "Dommage !! C'est une mauvaise réponse !!";
        response.appendChild(newH3);
    }

    let btnSuivantNew = creationBtnSuivant();
    btnSuivantNew.addEventListener("click", function(){
        response.style.display = "none";
        questionTwo.style.display = "none";
        sectionEnd.style.display = "block";
        response.removeChild(btnSuivantNew);
        response.removeChild(newH3);
    });

    // Affichage du score
    scoreDyn.textContent = compteurNbQuestionJuste;
}