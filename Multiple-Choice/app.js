const quizData=[
    {
        question:'What is the capital of India?',
        options:['Karnataka','Delhi','Maharastra','TamilNadu'],
        correctAnswer:'Delhi'
    },
    {
        question:'Which programming language is known as the "language of the web and android development?',
        options:['Java','Python','Javascript','C++'],
        correctAnswer:'Java'
    },
    {
        question: 'What is the largest planet in our solar system?',
        options: ['Mars', 'Jupiter', 'Saturn', 'Earth'],
        correctAnswer: 'Jupiter'
    }
];
const questionElement=document.getElementById('question');
const optionsElement=document.getElementById('options');
const resultElemet=document.getElementById('result');

let currentQuestionIndex=0;

function initializeQuiz(){
    showQuestion();
}

function showQuestion(){
    const currentQuestion=quizData[currentQuestionIndex];
    questionElement.textContent=currentQuestion.question;

    optionsElement.innerHTML='';//clear previos options

    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.onclick = () => checkAnswer(index);
        optionsElement.appendChild(optionElement);
    });
}

//check user's answer

function checkAnswer(userAnswerIndex){
    const currentQuestion=quizData[currentQuestionIndex];
    if(currentQuestion.correctAnswer===currentQuestion.options[userAnswerIndex]){
        resultElemet.textContent='Corrext!';
        resultElemet.className='';
    }else{
        resultElemet.textContent='Incorrect. The correct answer is: '+currentQuestion.correctAnswer;
        resultElemet.className='incorrect';
    }
    resultElemet.style.display='block';
}

//move to the next question

function nextQuestion(){
    resultElemet.style.display='none';

    if(currentQuestionIndex<quizData.length-1){
        currentQuestionIndex++;
        showQuestion();
    }else{
        questionElement.textContent='Quiz completed!';
        optionsElement.innerHTML='';
    }
}
initializeQuiz(); 