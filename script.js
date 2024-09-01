document.getElementById('start_btn').addEventListener('click', () => {
    document.querySelector('.time').style.display = 'flex';
    document.querySelector('.question').style.display = 'block';
    document.querySelector('input').style.display = 'block';
    document.querySelector('.score').style.display = 'block';
    document.getElementById('Submit_Your_Answer').style.display = 'block';
    document.getElementById('start_btn').style.display = 'none';

    let score = 0;
    let timer;

    const questions = [
        { question: '10 + 9', answer: 19 },
        { question: '2 * 4', answer: 8 },
        { question: '10 / 2', answer: 5 },
        { question: '4 * 4', answer: 16 },
        { question: '15 * 2', answer: 30 },
        { question: '10 - 9', answer: 1 }, // исправлено значение
        { question: '40 - 15', answer: 25 },
        { question: '60 / 3', answer: 20 },
    ];

    function getRandomQuestion() {
        const randomIndex = Math.floor(Math.random() * questions.length);
        return questions[randomIndex];
    }

    function startGame() {
        score = 0;
        document.querySelector('.score').textContent = `Score: ${score}`;

        let timeLeft = 15;
        document.querySelector('.time').innerHTML = timeLeft;

        timer = setInterval(() => {
            timeLeft--;
            document.querySelector('.time').innerHTML = timeLeft;
            if (timeLeft <= 0) {
                clearInterval(timer);
                alert('Time is up! Your score is ' + score);
                resetGame();
            }
        }, 1000);
    }

    function nextQuestion() {
        const currentQuestion = getRandomQuestion();
        document.querySelector('.question').textContent = currentQuestion.question;

        document.getElementById('Submit_Your_Answer').onclick = () => {
            const userAnswer = parseFloat(document.querySelector('input').value);
            if (userAnswer === currentQuestion.answer) {
                score++;
                document.querySelector('.score').textContent = `Score: ${score}`;
                document.querySelector('input').value = '';
                nextQuestion();
            } else {
                clearInterval(timer);
                alert('Wrong answer! Game over. Your final score is ' + score);
                resetGame();
            }
        };
    }

    function resetGame() {
        document.querySelector('.time').style.display = 'none';
        document.querySelector('.question').style.display = 'none';
        document.querySelector('input').style.display = 'none';
        document.querySelector('.score').style.display = 'none';
        document.getElementById('Submit_Your_Answer').style.display = 'none';
        document.getElementById('start_btn').style.display = 'block';
    }

    startGame();
    nextQuestion();
});
