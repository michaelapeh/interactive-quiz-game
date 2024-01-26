
const quizData = [
    {
      question: "Name of the capital of Nigeria?",
      options: ["Abuja", "Enugu", "Ekity", "Logos"],
      answer: "Abuja"
    },
    {
      question: "Which state in nigeria that has the highest landmark?",
      options: ["benue", "jos", "enugu", "kaduna", "Niger"],
      answer: "Niger"
    },
    {
      question: "what is the name of the cuurent president of Nigeria",
      options: ["Jonatha", "Yaradua", "Buhari", "Tinubu"],
      answer: "Tinubu"
    }

  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const submitButton = document.getElementById('submitBtn');
  const scoreElement = document.getElementById('score');
  
  function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;
    optionsElement.innerHTML = '';
  
    currentQuizData.options.forEach(option => {
      const button = document.createElement('button');
      button.innerText = option;
      button.classList.add('option-btn');
      button.addEventListener('click', checkAnswer);
      optionsElement.appendChild(button);
    });
  }
  
  function checkAnswer(e) {
    const selectedOption = e.target.innerText;
    const currentQuizData = quizData[currentQuestion];
  
    if (selectedOption === currentQuizData.answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showScore();
    }
  }
  
  function showScore() {
    questionElement.innerText = `Quiz Completed! Your Score: ${score} out of ${quizData.length}`;
    optionsElement.innerHTML = '';
    submitButton.style.display = 'none';
    scoreElement.innerText = `Your final score is: ${score}`;
    scoreElement.style.display = 'block';
  }
  
  submitButton.addEventListener('click', loadQuestion);

  
  
  loadQuestion();
  