function checkQuiz() {
    const answers = {
        q1: "b",
        q2: "b",
        q3: "b",
        q4: "c"
    };

    let score = 0;
    for (let q in answers) {
        const selected = document.querySelector(`input[name="${q}"]:checked`);
        if (selected && selected.value === answers[q]) {
            score++;
        }
    }

    document.getElementById("quizResult").textContent = `You scored ${score} out of 4.`;
}
