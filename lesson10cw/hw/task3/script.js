let totalScore = 0;
const totalQuestions = 3;
let currentQuestion = 1;

function checkAnswer(questionNum, selectedOption) {
    const isCorrect = parseInt(selectedOption.value) > 0;
    
    if (isCorrect) {
        totalScore += parseInt(selectedOption.value);
        
        if (questionNum < totalQuestions) {
            document.getElementById(`question${questionNum}`).classList.add('hidden');
            document.getElementById(`question${questionNum + 1}`).classList.remove('hidden');
            currentQuestion = questionNum + 1;
        } else {
            document.getElementById('showResultBtn').style.display = 'block';
        }
    } else {
        totalScore += parseInt(selectedOption.value);
        alert('Подумайте еще');
    }
}

function showResult() {
    const resultElement = document.getElementById('result');
    resultElement.style.display = 'block';
    
    let message;
    const maxScore = totalQuestions * 10;
    
    if (totalScore === maxScore) {
        message = `Поздравляем! Вы набрали максимальное количество баллов: ${totalScore} из ${maxScore}`;
    } else if (totalScore > maxScore / 2) {
        message = `Хороший результат! Вы набрали ${totalScore} баллов из ${maxScore}`;
    } else {
        message = `Вы набрали ${totalScore} баллов из ${maxScore}. Попробуйте еще раз!`;
    }
    
    resultElement.textContent = message;
}
