function getBotResponse(input) {
    let answer = ""
    const link = "login"
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    if (input == "login") {
        return 1;
    }
    if (input == "need help" || input == "want to contact persons" || input == "doubts") {
        return "contact <a href='https://jec.ac.in/contact-us-3/'>https://jec.ac.in/contact-us-3/</a>";
    } else
    if (input == "need councelling help" || input == "need councelling details" || input == "councelling code") {
        return "councelling <a href='https://jec.ac.in/contact-us-3/'>https://jec.ac.in/contact-us-3/</a>";
    } else if (input == "courses offered" || input == "courses" || input == "departments") {
        return " Programs Offered <a href='https://jec.ac.in/b-e-computer-science-engineering/'>https://jec.ac.in/b-e-computer-science-engineering/</a>";
    } else if (input == "clubs" || input == "associations" || input == "society") {
        return "Coding Club <a href='https://jec.ac.in/coding-club/'>href='https://jec.ac.in/coding-club</a>";
    } else if (input == "about jec" || input == "about college") {
        return "About Us <a href='https://jec.ac.in/about-us/'>https://jec.ac.in/about-us/</a>";
    } else if (input == "admission details" || input == "admission queries") {
        return "For Admission <a href='http://jec.ac.in/admission-procedure/'>http://jec.ac.in/admission-procedure/</a>";
    } else if (input == "goodbye" || input == "thank you" || input == "bye") {
        return "Talk to you later!";
    } else if (input == "i got some quaries") {
        return "feel free to ask!";
    } else {
        return "Try asking something else!";
    }
}