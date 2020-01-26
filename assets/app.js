$(document).ready(function () {

    var remainingTime = 15;
    var setIntervalId;
    var index=0;

    var questions = [{
        question: "Who is the host of Watch What Happens Live?", 
        choices: ["Andy Cohen", "Anderson Cooper", "Ryan Seacrest", "Christ Harrison"],
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
        question: "Who is the OG of the OC from Real Housewives of Orange County",
        choices: ["Shannon Beador", "Tamra Judge", "Vicki Gunvalson", "Gretchen Rossi"],
        answer: "Vicki Gunvalson"
    }
];
    
    


    $("#main").hide()
    $("#scoreboard").hide()


    $("#start").on("click", function () {

        $("#main").show()
        $("#start").hide()
        $("scoreboard").hide()
        showQuestion()
        setIntervalID = setInterval(countDown, 1000)
    })

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

    function showQuestion(){
        // <p> Who is the host of Watch What Happens Live?
        // </p>
         
        // <iframe src="https://giphy.com/embed/bVxuvX7Vru98c" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/realitytvgifs-real-housewives-realitytvgifs-bVxuvX7Vru98c">via GIPHY</a></p>
    
        for (let index = 0; index < questions.length; index++) {
          
            var getQuestion=questions[index].question
            var p = $("<p>")
            p.text(getQuestion)
        }
       

       $("#questions").append(p)

    } 


    $("#restart").on("click", function(){
        $("#start").show()
        $("#main").hide()
        $("#scoreboard").hide()
    }) 


    // // displays multiple choice options as variables
    



    // Start quiz function with click - initializeStart
    // if (!)


    // Add click function for each multiple choice question
});