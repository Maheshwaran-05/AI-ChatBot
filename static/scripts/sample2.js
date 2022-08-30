function getBotResponse(input) {
    // const login = < a href = "http://jayagc.org/index.php/login/page/field/apply" > < button > click here < /button></a >
    //rock paper scissors

    let answer = ""

    const link = "login"
    if (input === "rock") {
        return "paper";
    } else if (input === "paper") {
        return "scissors";
    } else if (input === "scissors") {
        return "rock";
    }

    if (input === "login") {
        return 1;
    }
    if (input === "need help" || "want to contact persons" || "doubts") {
        return "contact <a href='https://jec.ac.in/contact-us-3/'>https://jec.ac.in/contact-us-3/</a>";
    } else if (input === "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
    if (input === "need help" || "need councelling details" || "councelling code") {
        return "councelling code http://jayagc.org/index.php/login/page/field/apply";
    } else if (input === "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
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