

document.addEventListener("DOMContentLoaded", () => {
    let count1 = 0;
    let count2 = 0;
    let table = document.getElementById("ping-pong-table");
    let ball = document.getElementById("ball"); // targetting the ball element
    let paddle = document.getElementById("paddle1"); // targetting the paddle element
    let paddle2 = document.getElementById("paddle2");
    let tableW = table.offsetWidth;
    let player1Score = document.getElementById("player1Score")
    let player2Score = document.getElementById("player2Score")
   
    // here the ballX and ballY will be helping us to set a starting point of ball w.r.t table
    let ballX = 70; // distance of the left of the ball w.r.t ping pong table
    let ballY = 70; // distance of the top of the ball w.r.t ping pong table

    let dx = 3; // displacement factor in x-direction, 2 -> you will displace by 2 px in +x direction , -2 -> you will displace by 2px in -x direction
    let dy = 3; // displacement factor in y-direction, 2 -> you will displace by 2 px in +y direction , -2 -> you will displace by 2px in -y direction

    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;


   let IntervalID = setInterval(function movementOfBall() {

        ballX += dx;
        ballY += dy;

        ball.style.left = `${ballX}px`;
        ball.style.top = `${ballY}px`;
      
        if(ballX > table.offsetWidth - ball.offsetWidth || ballX <= 0) dx *= -1; // change x-direction
        else if(ballY > table.offsetHeight - ball.offsetHeight || ballY <= 0) dy *= -1; // change y-direction
        
        
        else if(ballX < paddle.offsetWidth || ballX + ball.offsetWidth > tableW - 10 ){

// checking for the collision of paddle1(leftside) and ball

    if(ballX < (table.offsetWidth/2)){
        if(ballY >= paddle.offsetTop - 4  && ballY <= paddle.offsetTop + paddle.offsetHeight - 4){
            ball.style.left = `${ballX}px`;
            dx *= -1;
            ballX += dx;
             count1++
             player1Score.innerText = `${count1}`
        }else{
            // comparing the player1 and player2 scores
            let firstPlayerScore = Number(player1Score.innerText);
            let secondPlayerScore = Number(player2Score.innerText);
            
            if(firstPlayerScore > secondPlayerScore){
                let alert = document.getElementById("alert")
                alert.innerText = "Player 1 has won the match (refresh to RESTART)"
                clearInterval(IntervalID)
                document.getElementById("alert").style.cssText = "display: block";
                player1Score.innerText = 0
                player2Score.innerText = 0
            }else if(firstPlayerScore < secondPlayerScore){
                let alert = document.getElementById("alert")
                alert.innerText = "Player 2 has won the match (refresh to RESTART)"
                clearInterval(IntervalID)
                document.getElementById("alert").style.cssText = "display: block";
                player1Score.innerText = 0
                player2Score.innerText = 0
            }
        }
    }
    // checking for the collision of paddle2(rightside) and ball
    else if(ballX > (table.offsetWidth/2)){
        if(ballY >= paddle2.offsetTop && ballY <= paddle2.offsetTop + paddle2.offsetHeight){
            ball.style.left = `${ballX}px`;
            dx *= -1;
            ballX += dx;
            count2++
            player2Score.innerText = `${count2}`
        }
        else{
             // comparing the player1 and player2 scores
          let firstPlayerScore = Number(player1Score.innerText);
          let secondPlayerScore = Number(player2Score.innerText);
          if(firstPlayerScore > secondPlayerScore){
            let alert = document.getElementById("alert")
            alert.innerText = "Player 1 has won the match refresh to RESTART"
            clearInterval(IntervalID)
            document.getElementById("alert").style.cssText = "display: block";
            player1Score.innerText = 0
            player2Score.innerText = 0
        }
        else if(firstPlayerScore < secondPlayerScore){

            let alert = document.getElementById("alert")
            alert.innerText = "Player 2 has won the match refresh to RESTART"
            clearInterval(IntervalID)
            document.getElementById("alert").style.cssText = "display: block";
            player1Score.innerText = 0
            player2Score.innerText = 0
        }
        }
    }
}


    },);

    let paddleY = 0;
    let paddleY2 = 0;
    let dPy = 10; 
    let dPy2 = 10;

    document.addEventListener("keydown", (event) => {

 // paddle1 movement

        event.preventDefault(); // prevents the execution of the default event behaviour
        if(event.keyCode == 87 && paddleY > 0.5) {
            // press W it moves in upwards direction 
            paddleY += (-1)*dPy;;

        } else if(event.keyCode == 83 && paddleY < table.offsetHeight - paddle.offsetHeight - 9.5) {
            // press S it moves in downward direction
            paddleY += dPy;
        }
        paddle.style.top = `${paddleY}px`;

// paddle2 movement 

        if(event.keyCode == 38 && paddleY2 > 0){
            paddleY2 += (-1)*dPy2;;
            // press uparrow key it moves in upwards direction
        }
        else if(event.keyCode == 40 && paddleY2 < table.offsetHeight - paddle2.offsetHeight - 9.5) {
            // press downarrow key it moves in downwards direction
            paddleY2 += dPy2;
        }
       paddle2.style.top = `${paddleY2}px`
    });
})