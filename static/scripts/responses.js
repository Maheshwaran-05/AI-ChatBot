function getBotResponse(input) {
    // const login = < a href = "http://jayagc.org/index.php/login/page/field/apply" > < button > click here < /button></a >
    //rock paper scissors
    const link = "login"
    if (input === "rock") {
        return "paper";
    } else
    if (input === "paper") {
        return "scissors";
    } else if (input === "scissors") {
        return "rock";
    }

    if (input === "login") {
        return 1;
    }
    // Simple responses
    if (input === "hello" || "hi" || "hey") {
        return "Hello there!";
    } else if (input === "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }



}