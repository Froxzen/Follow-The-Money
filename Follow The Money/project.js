let button = document.getElementById("click_money")
let tutorial_box = document.getElementsByClassName("tutorial")
var counting_down = document.getElementById("countdown")
const money_button = document.getElementById("money")
let score_button = document.getElementById("score")
let score = 0
var sec = 3
var sec2 = 10
var intervalId
var intervalId2
var timer_text = document.getElementsByClassName("timers")
var timer = document.getElementById("timer")

let play_again = document.getElementById("play-again")
let endscreen = document.getElementById("final-score")

money_button.style.display = "none"
endscreen.style.display = "none"
play_again.style.display = "none"

button.addEventListener("click", function() {
    tutorial_box[0].style.display = "none";
    
    countdown()
    intervalId = setInterval(countdown, 1000)
    function countdown() {
        counting_down.style.display = "block"
        counting_down.innerText = sec  
        sec -= 1
        if (sec === -1) {
            clearInterval(intervalId)
            counting_down.style.display = "none"
            money_button.style.display = "block"
            const i = Math.floor(Math.random() * 1450 + 1);
            const j = Math.floor(Math.random() * 550 + 1);
            
            money_button.style.left = i+"px"
            money_button.style.top = j+"px"
            
        }
    }    
    
    countdown2()
    intervalId2 = setInterval(countdown2, 1000)
    money_button.style.display = "none"
    
    function countdown2() {
        setTimeout(function() {
            timer.innerText = "Time Left: " + sec2 + "s"
            sec2--
            if (sec2 === 2) {
                clearInterval(intervalId2)
            }
            if (timer.innerText === "Time Left: 0s") {
                money_button.style.display = "none"
                endscreen.innerText = "You Got " + score + "!"
                endscreen.style.display = "block"
                play_again.style.display = "block"
                
            }
        }, 3000)
    }
})
money_button.addEventListener("click", add_score_random_pos)
function add_score_random_pos() {
    money_button.classList.add("transition")
    const i = Math.floor(Math.random() * 1400 + 1);
    const j = Math.floor(Math.random() * 500 + 1);
    
    money_button.style.left = i+"px"
    money_button.style.top = j+"px"
    score++
    score_button.innerText = "Score: $" + score
}
    

play_again.addEventListener("click", function() {
    
    endscreen.style.display = "none";
    play_again.style.display = "none";
    counting_down.style.display = "block"
    sec = 3
    score = 0
    sec2 = 10
    counting_down.innerText = sec 
    timer.innerText = "Time Left: " + 10 + "s"
    score_button.innerText = "Score: $" + 0

    countdown()
    intervalId = setInterval(countdown, 1000)
    function countdown() {
        counting_down.style.display = "block"
        counting_down.innerText = sec  
        sec -= 1
        if (sec === -1) {
            clearInterval(intervalId)
            counting_down.remove()
            money_button.style.display = "block"
            const i = Math.floor(Math.random() * 1375 + 1);
            const j = Math.floor(Math.random() * 550 + 1);
            
            money_button.style.left = i+"px"
            money_button.style.top = j+"px"
            
        }
    }    
    
    countdown2()
    intervalId2 = setInterval(countdown2, 1000)
    money_button.style.display = "none"
    
    function countdown2() {
        setTimeout(function() {
            timer.innerText = "Time Left: " + sec2 + "s"
            sec2--
            if (sec2 === 2) {
                clearInterval(intervalId2)
            }
            if (timer.innerText === "Time Left: 0") {
                money_button.style.display = "none"
                endscreen.innerText = "You Got " + score + "!"
                endscreen.style.display = "block"
                play_again.style.display = "block"
            }
        }, 3000)
    }
})