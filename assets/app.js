$(document).ready(function () {

    // lists out the variables needed to countdown the timer
    var remainingTime = 15;
    var setIntervalId;
    var index=0;

    // lists out the questions being asked to the user
    var questions = [{
        question: "Who is the host of Watch What Happens Live?", 
        choices: ["Andy Cohen", "Anderson Cooper", "Ryan Seacrest", "Chris Harrison"],
        answer: "Andy Cohen"
    }, 
    {
        question: "Which cast of housewives begun the Real Housewives franchise?",
        choices: ["Real Housewives of New York", "Real Housewives of Atlanta", "Real Housewives of Orange County", "Real Housewives of Beverly Hills"],
        answer: "Real Housewives of Orange County"
    },
    {
        question: "Which housewife is the owner of Sur Lounge in LA?",
        choices: ["Nene Leakes", "Tamra Judge", "Bethenny Frankel", "Lisa Vanderpump"],
        answer: "Lisa Vanderpump"
    },
    {   
        question: "Who is the Stud of the Sea from Below Deck?",
        choices: ["Captain Sandy", "Captain Ashton", "Captain Lee", "Captain Colin"],
        answer: "Captain Lee"
    },
    {
        question: "What designer dressed Luann de Lesseps from Real Housewives of New York for her cabaret show?",
        choices: ["Versace", "Valentino", "Balenciaga", "Jovani"],
        answer: "Jovani"
    },
    {
        question: "Where did the cast of Real Housewives of Dallas travel to in southeast Asia in Season 4?",
        choices: ["Malaysia", "Thailand", "Cambodia", "Vietnam"],
        answer: "Thailand"
    },
    {
        question: "Who is the OG of the OC from Real Housewives of Orange County?",
        choices: ["Shannon Beador", "Tamra Judge", "Vicki Gunvalson", "Gretchen Rossi"],
        answer: "Vicki Gunvalson"
    }
];
    
    

    // Creates start button and hides the other elements of the page
    $("#main").hide()
    $("#scoreboard").hide()


    $("#start").on("click", function () {

        $("#main").show()
        $("#start").hide()
        $("scoreboard").hide()
        showQuestion()
        setIntervalID = setInterval(countDown, 1000)
    })

    // Creates function to count the time down to zero
    function countDown() {
        remainingTime = remainingTime - 1;
        $("#time-remaining").text(remainingTime)
        // "5" == 5- true statement
        // "5"  ===5 false statement
        if (remainingTime === 0) {
            clearInterval(setIntervalID)

            $("#scoreboard").show()
            $("#main").hide()

        }
    }
     questionIndex = 0
    // creates a function to show each of the questions listed above in the variables
     function showQuestion(){

        // <p> Who is the host of Watch What Happens Live?
        // </p>
         
        // <iframe src="https://giphy.com/embed/bVxuvX7Vru98c" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/realitytvgifs-real-housewives-realitytvgifs-bVxuvX7Vru98c">via GIPHY</a></p>
    
        // Creating for loop to list questions in a row, this is continuing to break. Really could not get past this point of the hw.
         for (let i = 0; i < questions.length; i++) {
          
             var getQuestion = questions[i].question
             $(".questions").append();


             //console.log lists out all questions in array
             console.log(questions[i]);
             var p = $("<.questions>");
             p.text(getQuestion[i].questions);
        // //  score++;
        }

        // Restarts the game after time is up to zero
    $("#restart").on("click", function(){
        $("#start").show()
        $("#main").hide()
        $("#scoreboard").hide()
    }) 


    // // displays multiple choice options as variables
    

    };
    // Add click function for each multiple choice question
})