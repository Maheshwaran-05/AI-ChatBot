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
    if (input == "need help" || input == "Need Help" || input == "want to contact persons" || input == "Want To Contact Persons" || input == "doubts" || input == "Doubts") {
        return "contact <a href='https://jec.ac.in/contact-us-3/'>https://jec.ac.in/contact-us-3/</a>";
    } else
    if (input == "need councelling help" || input == "Need Councelling Help" || input == "need councelling details" || input == "Need Councelling Details" || input == "councelling code" || input == "Councelling Code") {
        return "councelling <a href='https://jec.ac.in/contact-us-3/'>https://jec.ac.in/contact-us-3/</a>";
    } else if (input == "courses offered" || input == "Courses Offered" || input == "courses" || input == "Courses" || input == "departments" || input == "Departments") {
        return " Programs Offered <a href='https://jec.ac.in/b-e-computer-science-engineering/'>https://jec.ac.in/b-e-computer-science-engineering/</a>";
    } else if (input == "clubs" || input == "Clubs" || input == "associations" || input == "Associations" || input == "society" || input == "Society") {
        return "Coding Club <a href='https://jec.ac.in/coding-club/'>href='https://jec.ac.in/coding-club</a>";
    } else if (input == "about jec" || input == "About JEC" || input == "about college" || input == "About College") {
        return "About Us <a href='https://jec.ac.in/about-us/'>https://jec.ac.in/about-us/</a>";
    } else if (input == "admission details" || input == "Admission Details" || input == "admission queries" || input == "Admission Queries") {
        return "For Admission <a href='http://jec.ac.in/admission-procedure/'>http://jec.ac.in/admission-procedure/</a>";
    } else if (input == "goodbye" || input == "GoodBye" || input == "thank you" || input == "thankyou" || input == "Thankyou" || input == "Thank you" || input == "bye" || input == "Bye") {
        return "Talk to you later!";
    } else if (input == "hai" || input == "Hai" || input == "hello" || input == "Hello") {
        return "Hai,How shall i help you";
    } else if (input == "good morning" || input == "Good Morning" || input == "goodmorning" || input == "GoodMorning") {
        return "Good Morning,How shall i help you";
    } else if (input == "good afternoon" || input == "goodafternoon" || input == "Good Afternoon" || input == "GoodAfternoon") {
        return "Good Afternoon,How shall i help you";
    } else if (input == "good evening" || input == "goodevening" || input == "Good Evening" || input == "GoodEvening") {
        return "Good evening,How shall i help you";
    } else if (input == "i have quaries" || input == "I Have Quaries" || input == "i have few questions" || input == "I Have Few Questions") {
        return "Feel Free To Ask!";
    } else {
        return "Try asking something else!";
    }
}