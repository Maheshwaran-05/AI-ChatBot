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
    } else if (input == "what is your name") {
        return "My name is JEC-Bot";
    } else if (input == "what is your nickname") {
        return "My creators call me JARVIS!";
    } else if (input == "what is your age") {
        return "My age is about around 15days";
    } else if (input == "what is your favourite thing to do") {
        return "I Love Helping People's when they need me";
    } else if (input == "need counselling help" || input == "Need Counselling Help" || input == "need counselling details" || input == "Need Counselling Details" || input == "counselling code" || input == "Counselling Code") {
        return "counselling <a href='https://jec.ac.in/contact-us-3/'>https://jec.ac.in/contact-us-3/</a>";
    } else if (input == "courses offered" || input == "Courses Offered" || input == "courses" || input == "Courses" || input == "departments" || input == "Departments") {
        return " Programs Offered: <br/>1.Computer Science Engineering<br/>2.Civil Engineering <br/>\n3.Informational Technology<br/>  \n 4.Mechanical Engineering <br/> For More info Click Here <a href='https://jec.ac.in/#'>https://jec.ac.in/#/</a>";
    } else if (input == "clubs" || input == "Clubs" || input == "associations" || input == "Associations" || input == "society" || input == "Society") {
        return "Clubs :<br/> 1.Coding Club <a href='https://jec.ac.in/coding-club/'>https://jec.ac.in/coding-club</a> <br/> \n 2.Cultural Club <a href='https://jec.ac.in/cultural-club/'>https://jec.ac.in/cultural-club/</a> <br/> \n 3.Women Empowerment Cell <a href='https://jec.ac.in/women-empowerment-cell/'>https://jec.ac.in/women-empowerment-cell/</a> <br/> \n 4.Ramanujan’s Mathematician Club <a href='https://jec.ac.in/maths-club/'>https://jec.ac.in/maths-club/</a> <br/> \n For More <a href='https://jec.ac.in/#'>https://jec.ac.in/#/</a>";
    } else if (input == "about jec" || input == "About JEC" || input == "about college" || input == "About College") {
        return "About Us <a href='https://jec.ac.in/about-us/'>https://jec.ac.in/about-us/</a>";
    } else if (input == "admission details" || input == "Admission Details" || input == "admission queries" || input == "Admission Queries") {
        return "For Admission <a href='http://jec.ac.in/admission-procedure/'>http://jec.ac.in/admission-procedure/</a>";
    } else if (input == "goodbye" || input == "GoodBye" || input == "thank you" || input == "thankyou" || input == "Thankyou" || input == "Thank you" || input == "bye" || input == "Bye") {
        return "ThankYou,can you rate me out of 5!";
    } else if (input == "1" || input == "2" || input == "3") {
        return "Thankyou For your feedback<br/> \n Will Try my Best Next Time";
    } else if (input == "4" || input == "5") {
        return "Thankyou For your feedback<br/> \n Hope You Enjoyed the Session :)";
    } else if (input == "hai" || input == "Hai" || input == "hi" || input == "Hi" || input == "hello" || input == "Hello") {
        return "Hai,How shall i help you";
    } else if (input == "good morning" || input == "Good Morning" || input == "goodmorning" || input == "GoodMorning") {
        return "Good Morning,How shall i help you";
    } else if (input == "good afternoon" || input == "goodafternoon" || input == "Good Afternoon" || input == "GoodAfternoon") {
        return "Good Afternoon,How shall i help you";
    } else if (input == "good evening" || input == "goodevening" || input == "Good Evening" || input == "GoodEvening") {
        return "Good evening,How shall i help you";
    } else if (input == "i have queries" || input == "I Have Queries" || input == "i have few questions" || input == "I Have Few Questions") {
        return "Feel Free To Ask!";
    } else {
        return "Try asking something else!";
    }

}