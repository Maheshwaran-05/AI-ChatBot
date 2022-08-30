function getBotResponse(input) {
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
    } else if (input === "need councelling help" || "need councelling details" || "councelling code") {
        return "councelling http://jayagc.org/index.php/login/page/field/apply";
    } else if (input === "courses offered" || "courses" || "departments") {
        return " Programs Offered http://jayagc.org/index.php/login/page/field/courses";
    } else if (input === "clubs" || "associations" || "society") {
        return "Coding Club https://jec.ac.in/coding-club/";
    } else if (input === "about jec" || "about college") {
        return "About Us https://jec.ac.in/about-us/";
    } else if (input === "admission details" || "admission queries") {
        return "For Admission http://jec.ac.in/admission-procedure/";
    } else if (input === "goodbye" || "thank you" || "bye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}