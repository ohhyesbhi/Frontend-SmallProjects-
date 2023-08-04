document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("container");
    const flappy = document.getElementById("flappy");
    const obs1 = document.getElementById("obs-1");
    const obs2 = document.getElementById("obs-2");
    const obs3 = document.getElementById("obs-3");
    const obs4 = document.getElementById("obs-4");


    // FLappy Jump -- Start -- 
    document.addEventListener("keyup", (e) => {
        if(e.keyCode == 38){
            jumpFlappy();
        }
    })
    let flappyAt = 0;
    function jumpFlappy(){
        flappyAt += 40
        flappy.style.bottom = `${flappyAt}px`;
    }

    function downFlappy(){
        if(((flappy.offsetTop + flappy.offsetHeight) - container.offsetHeight-40)){
            flappyAt -= 1;
            flappy.style.bottom = `${flappyAt}px`;
        }
    }
    setInterval(downFlappy, 10)
    // FLappy Jump -- End -- 
    


    const intervalId = setInterval(obstacleHit);

    function stopAnimation(){
        const obstacles = document.querySelectorAll(".obstacle");
        obstacles.forEach(element => {
            console.log(element)
            element.style.cssText += `right:0; left:${element.offsetLeft}px !important`;
            element.classList.remove("animate");
            clearInterval(intervalId)
            document.getElementById("alert").style.cssText = "display: block";
        });
    }
    
    function obstacleHit(){
        
        if(obs1.offsetLeft <= flappy.offsetLeft+flappy.offsetWidth-13){
            if(obs1.offsetTop <= flappy.offsetTop+flappy.offsetHeight-13){
                stopAnimation();
            }
            return;
        }
        if(obs2.offsetLeft <= flappy.offsetLeft+flappy.offsetWidth-13){
            if(obs2.offsetTop <= flappy.offsetTop+flappy.offsetHeight-13){
                stopAnimation();
            }
            return;
        }
        if(obs3.offsetLeft <= flappy.offsetLeft+flappy.offsetWidth-13){
            if(obs3.offsetTop <= flappy.offsetTop+flappy.offsetHeight-13){
                stopAnimation();
            }
            return;
        }
        if(obs4.offsetLeft <= flappy.offsetLeft+flappy.offsetWidth-13){
            if(obs4.offsetTop <= flappy.offsetTop+flappy.offsetHeight-13){
                stopAnimation();
            }
            return;
        }   
    }
    

})