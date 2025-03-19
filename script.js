
// Questions:
const questions = [
    { //Q01
        question: "Joe and David ate dinner at The Cotton Patch. Both ordered the Salmon Dinner which costs $15.95 each and both ordered peach iced tea which costs $2.25 each. They shared a slice of chocolate cake which costs $4.95. The tax rate was 8.25%. Joe was feeling generous so he paid with three $20 bills and told the waitress to keep the change as a tip. How much was the tip?",
        options: ["(A) $15.12", "(B) $15.15", "(C) $15.18", "(D) $15.21", "(E) $15.24"],
        correct: 4,
        hint: "Calculate the total cost of Joe and David's meals. Do NOT forget to add the tax to the total.",
        hintAudio: "HintAudios/HintMusic01.mp3",
        solution: "(E) <eq>$15.24</eq>\n\nTotal cost before tax <eq>= $15.95 x 2 + $2.25 x 2 + $4.95 = $41.35</eq>\n\nTotal cost including tax = <eq>$41.35 x (1 + 8.25%) = $44.76</eq>\n\n Tip = <eq>$20.00 x 3 - $44.76 = $15.24</eq>",
        solutionVideo: "SolutionVideos/SolutionVideo01.mp4",
        quote: "MotivationQuotes/Quote01.jpg"
    },
    { //Q02
        question: "An adult ticket to an Idaho Falls game cost $10.00 and a youth ticket cost $6.00. On Tuesday night’s game, they sold 396 tickets and grossed $3,224. How many adult tickets did they sell?",
        options: ["(A) 208", "(B) 210", "(C) 212", "(D) 214", "(E) 216"],
        correct: 2,
        hint: "Set up 2 equations with 2 unknowns for numbers of tickets sold, one for adult and the other for youth.",
        hintAudio: "HintAudios/HintMusic02.mp3",
        solution: "(C) 212\n\nAssume number of tickets sold is <eq>x</eq> for adult and <eq>y</eq> for youth.\n\nTwo equations: <eq>x + y = 396 & 10x + 6y = 3224</eq>\n\nSolutions: <eq>x = 212 & y = 184</eq>",
        solutionVideo: "SolutionVideos/SolutionVideo02.mp4",
        quote: "MotivationQuotes/Quote02.jpg"
    },
    { //Q03
        question: "Justin can wash and wax 10 cars in 4 hours. Aryan can wash and wax 20 cars in 6 hours. Justin started work at 8:00 AM. Aryan arrived at 10:00 AM and they both worked from 10:00 AM until a total of 30 cars had been washed and waxed. What time was it when they finished if they took no breaks? (nearest minute)",
        options: ["(A) 2:17 PM", "(B) 2:20 PM", "(C) 2:23 PM", "(D) 2:26 PM", "(E) 2:29 PM"],
        correct: 0,
        hint: "Notice that Aryan started two hours later than Justin.",
        hintAudio: "HintAudios/HintMusic03.mp3",
        solution: "(A) 2:17PM\n\nAssume they finish in <eq>x</eq> hours after 10:00AM.\n\n <eq><span class='fraction-line'><span class='numerator'>5</span><span class='denominator'>2</span></span>(x+2) + <span class='fraction-line'><span class='numerator'>10</span><span class='denominator'>3</span></span>(x) = 30</eq>\n\nSolve for <eq>x = 4 <span class='fraction-line'><span class='numerator'>2</span><span class='denominator'>7</span></span></eq> hours\n\nThey finished at 2:17PM.",
        solutionVideo: "SolutionVideos/SolutionVideo03.mp4",
        quote: "MotivationQuotes/Quote03.jpg"
    },
    { //Q04
        question: "The <eq>5<sup>th</sup></eq> term of an arithmetic sequence is 23 and the <eq>13<sup>th</sup></eq> term is 55. Find the sum of the first 15 terms of the sequence. (nearest tenth)",
        options: ["(A) 513", "(B) 517", "(C) 521", "(D) 525", "(E) 529"],
        correct: 3,
        hint: "Need to find the first term (<eq>a<sub>1</sub></eq>) and common difference (<eq>d</eq>) of the arithmetic sequence first.",
        hintAudio: "HintAudios/HintMusic04.mp3",
        solution: "(D) <eq>525</eq>\n\n<eq>a<sub>1</sub> + 4d = 23  &  a<sub>1</sub> + 12d = 55</eq>\n\nSolve for <eq>a<sub>1</sub> = 7  &  d = 4</eq>\n\nThe 15<sup>th</sup> term in the sequence: <eq>a<sub>15</sub> = a<sub>1</sub> + 14d = 63</eq>\n\nSum of the first 15<sup>th</sup> terms: <eq>S<sub>15</sub> = <span class='fraction-line'><span class='numerator'>15 (a<sub>1</sub> + a<sub>15</sub>)</span><span class='denominator'>2</span></span> = 525</eq>",
        solutionVideo: "SolutionVideos/SolutionVideo04.mp4",
        quote: "MotivationQuotes/Quote04.jpg"
    },
    { //Q05
        question: "Amarillo Slim is playing a 5-card poker game with a well shuffled, standard 52-card deck. What is the probability that he will be dealt a full house? An example of a full house is 3 jacks and 2 queens. (nearest hundred-thousandth)",
        options: ["(A) 0.00111", "(B) 0.00122", "(C) 0.00133", "(D) 0.00144", "(E) 0.00155"],
        correct: 3,
        hint: "Probability is equal to conditional counting over total counting.\n\nDoes the order in which you pick the cards matter?",
        hintAudio: "HintAudios/HintMusic05.mp3",
        solution: "(D) <eq>0.00144</eq>\n\n<eq>Conditional Counts = (13 <span class='fraction-line'><span class='numerator'>4!</span><span class='denominator'>3!</span></span>) x (12 <span class='fraction-line'><span class='numerator'>4!</span><span class='denominator'>2! 2!</span></span>)</eq>\n\n<eq>Total Counts = <span class='fraction-line'><span class='numerator'>52!</span><span class='denominator'>47! 5!</span></span></eq>\n\n<eq>Probability = <span class='fraction-line'><span class='numerator'>Conditional Counts</span><span class='denominator'>Total Counts</span></span> = 0.00144</eq>",
        solutionVideo: "SolutionVideos/SolutionVideo05.mp4",
        quote: "MotivationQuotes/Quote05.jpg"
    },
];

let currentQuestion = 0;
let attempts = 0;
let score = 0;
let userChoice = "wrong";
let userAnswers = Array.from({length: questions.length}, () => [null, null]);
let numQuestionsAttempted = 0;

const startScreen = document.querySelector('.start-screen');
const introText = document.querySelector('intro-text');
const quizContent = document.querySelector('.quiz-content');
const questionNumber = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const optionButtons = document.querySelectorAll('.option-btn');
const backBtn = document.getElementById('back-btn');
const hintBtn = document.getElementById('hint-btn');
const solutionBtn = document.getElementById('solution-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const feedback = document.getElementById('feedback');


const musicToggleBtn = document.getElementById('music-toggle-btn');
const backgroundMusic = document.getElementById('background-music');


const hintPopup = document.getElementById('hint-popup');
const hintText = document.getElementById('hint-text');
const hintAudio = document.getElementById('hint-audio');
const hintAudioSource = document.getElementById('hint-audio-source');
const hintAudioToggle = document.getElementById('hint-audio-toggle');
const closeHint = document.getElementById('close-hint');

const solutionPopup = document.getElementById('solution-popup');
const solutionText = document.getElementById('solution-text');
const solutionVideo = document.getElementById('solution-video');
const solutionVideoSource = document.getElementById('solution-video-source');
const solutionVideoToggle = document.getElementById('solution-video-toggle');
const solutionQuoteToggle = document.getElementById('solution-quote-toggle');
const closeSolution = document.getElementById('close-solution');

const videoPopup = document.getElementById('video-popup');
const videoPlayer = document.getElementById('video-player');
const videoPlayerSource = document.getElementById('video-player-source');
const closeVideo = document.getElementById('close-video');

const quotePopup = document.getElementById('quote-popup');
const quoteImg = document.getElementById('quote-image');
const closeQuote = document.getElementById('close-quote')

const scorePopup = document.getElementById('score-popup');
const scoreText = document.getElementById('score-text');
const closeScore = document.getElementById('close-score');

// start quiz
document.getElementById('start-btn').addEventListener('click', () => {
    console.log('Start button clicked');
    startScreen.style.display = 'none';
    quizContent.style.display = 'block';
    loadQuestion();
    submitBtn.disabled = true;
});

optionButtons.forEach(button => {
    button.addEventListener('click', () => checkAnswer(parseInt(button.dataset.choice)));
});

backBtn.addEventListener('click', () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        attempts = 0;
        optionButtons.forEach(btn => btn.disabled = false);
        loadQuestion();
        feedback.style.display = 'block';
        feedback.style.background = 'rgb(177, 224, 243)';
    }
});

nextBtn.addEventListener('click', () => {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        attempts = 0;
        optionButtons.forEach(btn => btn.disabled = false);
        loadQuestion();
        feedback.style.display = 'block';
        feedback.style.background = 'rgb(177, 224, 243)';

    }
    
});

hintBtn.addEventListener('click', showHint);
closeHint.addEventListener('click', () => {
    hintPopup.style.display = 'none';
    hintPopup.classList.remove('active');
    hintAudio.pause();
    hintAudio.currentTime = 0;
    hintAudioToggle.textContent = 'Music';
});
hintAudioToggle.addEventListener('click', () => {
    if (hintAudio.paused) {
        hintAudio.play()
        .then(() => {
            hintAudioToggle.textContent = 'Music';
            console.log('Hint audio playing');
        })
        .catch(error => console.error('Hint audio play error:', error));
    }
    else {
        hintAudio.pause();
        hintAudioToggle.textContent = 'Music';
        console.log('Hint audio paused');
    }
});


solutionBtn.addEventListener('click', showSolution);
closeSolution.addEventListener('click', () => {
    solutionPopup.style.display = 'none';
    solutionPopup.classList.remove('active');
    videoPopup.style.display = 'none';
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
})

solutionVideoToggle.addEventListener('click', () => {
    console.log('Play video button clicked');
    const q = questions[currentQuestion];
    videoPopup.style.display = 'flex';
    videoPlayerSource.src = q.solutionVideo;
    videoPlayer.load();
    videoPlayer.currentTime = 0;
    videoPlayer.play()
        .then(() => {
            console.log(`Solution video playing in video popup for question ${currentQuestion + 1}: ${q.solutionVideo}`);
        })
        .catch(error => console.error('Solution video play error:', error));
});
closeVideo.addEventListener('click', () => {
    console.log('Close video popup clicked');
    videoPopup.style.display = 'none';
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
    solutionPopup.style.display = 'flex';
    solutionPopup.classList.add('active');
})

solutionQuoteToggle.addEventListener('click', () => {
    console.log('Quote button clicked');
    const q = questions[currentQuestion];
    quotePopup.style.display = 'flex';
    quoteImg.src = q.quote;

});
closeQuote.addEventListener('click', () => {
    console.log('Close quote toggle clicked');
    quotePopup.style.display = 'none';
    solutionPopup.style.display = 'flex';
    solutionPopup.classList.add('active')
})

submitBtn.addEventListener('click', showScore);
closeScore.addEventListener('click', () => {
    scorePopup.style.display = 'none';
});


// functions:
function loadQuestion() {
    const q = questions[currentQuestion];
    questionNumber.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    questionText.innerHTML = q.question;
    
    optionButtons.forEach((btn, index) => {
        btn.textContent = q.options[index];
        btn.classList.remove('correct', 'wrong');
    });


    if (userAnswers[currentQuestion][0] === null) {  //Case-1. current question not yet tried.

        feedback.textContent = "You have two attempts remaining.";
        attempts = 0;

    } else {
        attempts = 1;

        if (userAnswers[currentQuestion][0] === q.correct) {  //Case-2. answer correct on 1st attempt.

            feedback.textContent = "Great Job! You got it right on your 1st attempt.";
            optionButtons[userAnswers[currentQuestion][0]].classList.add('correct');
            optionButtons.forEach(btn => btn.disabled = true);

        } else {

                if (userAnswers[currentQuestion][1] === null) {  //Case-3. still have 1 more attempt remaining.

                    feedback.textContent = "You have 1 more attempt remaining.";
                    optionButtons[userAnswers[currentQuestion][0]].classList.add('wrong');
                    optionButtons[userAnswers[currentQuestion][0]].disabled = true;
    
                }
                else {
                    attempts = 2;
                    if (userAnswers[currentQuestion][1] === q.correct) {  //Case-4. answer correct on 2nd attempt.

                        feedback.textContent = "Well done! You got it right on your 2nd attempt.";
                        optionButtons[userAnswers[currentQuestion][0]].classList.add('wrong');
                        optionButtons[userAnswers[currentQuestion][1]].classList.add('correct');
                        optionButtons.forEach(btn => btn.disabled = true);
        
                    } else {  //Case-5. answer wrong on both attempts.

                        feedback.textContent = `You have already tried this question twice. `
                        + `1st attempt: (${String.fromCharCode(65 + userAnswers[currentQuestion][0])}), `
                        + `2nd attempt: (${String.fromCharCode(65 + userAnswers[currentQuestion][1])})`;
                        
                        optionButtons[userAnswers[currentQuestion][0]].classList.add('wrong');
                        optionButtons[userAnswers[currentQuestion][1]].classList.add('wrong');
                        optionButtons[q.correct].classList.add('correct');
                        optionButtons.forEach(btn => btn.disabled = true);
        
                    }
                }
        }
    }

    
    feedback.style.display = 'block';
    backBtn.disabled = (currentQuestion === 0);
    nextBtn.disabled = (currentQuestion === questions.length - 1);
    hintPopup.style.display = 'none';
    hintPopup.classList.remove('active');
    solutionPopup.style.display = 'none';
    solutionPopup.classList.remove('active');
    videoPopup.style.display = 'none';

    userChoice = "wrong";


    if (numQuestionsAttempted !== questions.length) {
        submitBtn.disabled = true;
    } else {
        submitBtn.disabled = false;
    }

}

function checkAnswer(choice) {
    const q = questions[currentQuestion];
    
    if (attempts >= 2) {    
        return;
    }

    userAnswers[currentQuestion][attempts] = choice;
    attempts++;

    feedback.style.display = 'block';
    
    if (choice === q.correct) {
        optionButtons[choice].classList.add('correct');
        feedback.textContent = 'Good job! That is correct.';
        feedback.style.background = '#90ee90';
        optionButtons.forEach(btn => btn.disabled = true);

        userChoice = "correct";

        score ++;

    } else {
        optionButtons[choice].classList.add('wrong');
        optionButtons[choice].disabled = true;
        feedback.textContent = 'Wrong answer. Try again!';
        feedback.style.background = '#ff9999';

        if (attempts === 2) {
            feedback.textContent = `You have reached maximum number of attempts (2). The correct answer is: ${q.options[q.correct]}`;
            optionButtons[q.correct].classList.add('correct');

            optionButtons.forEach(btn => btn.disabled = true);

        }
    }

    if (attempts === 1) {
        numQuestionsAttempted ++;
    }

    if (numQuestionsAttempted === questions.length) {
        submitBtn.disabled = false;
    }

    console.log(`Number of Questions attempted so far is ${numQuestionsAttempted}.`);
    console.log(`Question ${currentQuestion+1} choice is ${choice}`);
   
}



function showHint() {
    const q = questions[currentQuestion];
    if (userAnswers[currentQuestion][0] !== null && userAnswers[currentQuestion][0] !== q.correct
        && userAnswers[currentQuestion][1] === null) {
        hintText.innerHTML = '<b>Hint:</b>\n' + questions[currentQuestion].hint;
        hintPopup.style.display = 'flex';
        hintPopup.classList.add('active');
        hintAudioSource.src = questions[currentQuestion].hintAudio;
        hintAudio.load();
        hintAudio.loop = true;
    }
}


function showSolution() {
    const q = questions[currentQuestion];
    if (userAnswers[currentQuestion][0] === q.correct || userAnswers[currentQuestion][1] !== null) {
        const q = questions[currentQuestion];
        solutionText.innerHTML = `<b>Solution:</b> ${q.solution}`;
        solutionPopup.style.display = 'flex';
        solutionPopup.classList.add('active');
        solutionVideoSource.src = q.solutionVideo;
        solutionVideo.load();
        solutionVideo.currentTime = 0;
        console.log(`Solution video loaded for question ${currentQuestion + 1}: ${q.solutionVideo}`);
    }
}


function showScore() {
    //if (currentQuestion === questions.length-1) {
        scorePopup.style.display = 'flex';
        let tableHTML = '<h2>Quiz Results</h2>\n';
        tableHTML += `You scored ${score} out of ${questions.length}.\n`
        if ((score/questions.length) >= 0.8) {tableHTML += 'Great Job!\n'}
        tableHTML += '<table border="1"><tr><th>Question</th><th>Attempt 1</th><th>Attempt 2</th><th>Correct Answer</th></tr>';
        questions.forEach((q, index) => {
            const attempt1 = userAnswers[index][0] !== null ? q.options[userAnswers[index][0]] : '-';
            const attempt2 = userAnswers[index][1] !== null ? q.options[userAnswers[index][1]] : '-';
            tableHTML += `<tr>
                <td>${index+1}</td>
                <td>${attempt1}</td>
                <td>${attempt2}</td>
                <td>${q.options[q.correct]}</td>
            </tr>`;
        });
        tableHTML += '</table>';
        scoreText.innerHTML = tableHTML;
   // }
}


// ===== adding background music =====
//toggle music
musicToggleBtn.addEventListener('click', () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play()
            .then(() => {
                musicToggleBtn.textContent = 'Mute Music';
                console.log('Music resumed');
            })
            .catch(error => console.error('Play error:', error));
    } else {
        backgroundMusic.pause()
        musicToggleBtn.textContent = 'Play Music';
        console.log('Music paused');
    }
});

// make sure music starts if not already (backup for autoplay)
window.addEventListener('load', () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play()
            .then(() => console.log('Music started on load'))
            .catch(error => console.error('Autoplay fialed:', error));
    }
});

// ===== end of background music block =====

