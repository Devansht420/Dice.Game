
    var random1 = Math.floor((Math.random() * 6))
    var random2 = Math.floor((Math.random() * 6))

    var arr = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]
    document.querySelector(".img1").src = arr[random1]
    document.querySelector(".img2").src = arr[random2]
    if (random1 > random2){
        document.querySelector("h1").innerHTML = "🚩Player 1 Won"
    }
    else if (random1 < random2){
        document.querySelector("h1").innerHTML = "Player 2 Won🚩"
    }
    else{
        document.querySelector("h1").innerHTML = "It's a Tie"
    }

