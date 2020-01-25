$(document).ready(function () {

    var remainingTime = 15;
    var setIntervalId;
    var index=0;

    var questions = [{
        question: "Who is the host of Watch What Happens Live", 
        choices: ["Andy Cohen", "Anderson Cooper", "Ryan Seacrest", "Christ Harrison"],
        answer: "Andy Cohen"
    }, 
    {
        question: "Which cast of housewives begun the Real Housewives franchise?",
        choices: ["Real Housewives of New York", "Real Housewives of Atlanta", "Real Housewives of Orange County", "Real Housewives of Beverly Hills"],
        answer: "Real Housewives of Orange County"
    }]
    
    


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

    // Creates the variables
    // var start = document.getElementById("start").text = "s";

    // // prevents the clock from slowing down?
    //  var countdownTimer = Math.floor((distance % (1000 * 60)) / 1000);

    // // displays multiple choice options as variables
    



    // Start quiz function with click - initializeStart
    // if (!)


    // Add click function for each multiple choice question
});