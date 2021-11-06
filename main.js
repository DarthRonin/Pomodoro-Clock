var minutes = "00";
var seconds = "00";

function setTimer() {
    minutes = document.getElementById("inputTime").value;
    if (minutes <= 0){
        minutes = 1;
    }
    return minutes;
}

function setBreak(){
    minutes = document.getElementById("inputBreak").value;
    if (minutes <= 0){
        minutes = 1;
    }
    return minutes;
}

var click = new Audio("click.mp3");
var bell = new Audio("bell.mp3");
var alarm = new Audio("alarm.mp3");


function template(){
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}



function playTimer(){  
    setTimer();
    click.play();
    minutes = minutes - 1;
    seconds = 59;
    template();
    timer();
    
    function timer(){ //main timer function
        
        var minutes_interval = setInterval(minutesTimer, 60000);
        var seconds_interval = setInterval(secondsTimer, 1000);

        function minutesTimer(){
            minutes = minutes - 1;
            document.getElementById("minutes").innerHTML = minutes;
        }

        function secondsTimer(){
            seconds = seconds - 1;
            document.getElementById("seconds").innerHTML = seconds;

            if(seconds <= 0){
                if(minutes <= 0){
                    clearInterval(minutes_interval);
                    clearInterval(seconds_interval);
                    bell.play();
                    
                    minutes = "00";
                    seconds = "00";

                    template();

                    document.getElementById("done").innerHTML =
                    "Session Completed! Take a Break";
    
                    document.getElementById("done").classList.add("show_message");

                    breakTime();

                }
                
                seconds = 60;
            }

        }

    }

    function breakTime(){ //break timer function
        setBreak();
        minutes = minutes - 1;
        seconds = 59;
        template();
        timerBreak();

        function timerBreak(){

            var minutes_interval = setInterval(minutesBreakTimer, 60001);
            var seconds_interval = setInterval(secondsBreakTimer, 1000);

            function minutesBreakTimer(){
                minutes = minutes - 1;
                document.getElementById("minutes").innerHTML = minutes;
            }

            function secondsBreakTimer(){
                seconds = seconds - 1;
                document.getElementById("seconds").innerHTML = seconds;

                if(seconds <= 0){
                    if(minutes <= 0){
                        clearInterval(minutes_interval);
                        clearInterval(seconds_interval);

                        minutes = "00";
                        seconds = "00";

                        template();
                        alarm.play();
                        
                        document.getElementById("done").innerHTML = 
                        "Break`s over! Let's get back to work";
    
                        document.getElementById("done").classList.add("show_message");
                    }
                    
                    seconds = 60;
                }

            }

        }
    }
    
}


