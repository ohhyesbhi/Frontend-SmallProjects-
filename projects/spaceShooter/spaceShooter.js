document.addEventListener("DOMContentLoaded", () => {

let shooter = document.getElementById("shooter");
let count = 0
let present = 900
let present1 = 498


shooter.style.left = `${present}px`
shooter.style.top = `${present1}px`



    document.addEventListener("keydown",function f(event){
    
        if(event.keyCode == 65){
           present = present-20;    // moving leftside (where bullet and jet will be moving in the LEFT direction)
          
           shooter.style.left = `${present}px`
           if(shooter.offsetLeft <= 0){
            shooter.style.left = 0
           }
           if(shooter.offsetLeft >= 1280){
            shooter.style.left = `${1280}px`
        }
          
        }
        if(event.keyCode == 68){
            present = present + 20;  // moving rightside (where bullet and jet will be moving in the RIGHT direction)
            
            shooter.style.left = `${present}px`
            if(shooter.offsetLeft <= 0){
                shooter.style.left = 0
               }
            if(shooter.offsetLeft >= 1280){
                shooter.style.left = `${1280}px`
            }
           
        }
        if(event.keyCode == 87){  // keyUp (where bullet and jet will be moving in the UP direction)
        present1 = present1 - 20
       
        shooter.style.top = `${present1}px`
        if(shooter.offsetTop >= 548){
            shooter.style.top = `${548}px`
        }
        if(shooter.offsetTop < 0){
            shooter.style.top = 0;
        }
        
        }
        if(event.keyCode == 83){  // keyDown (where bullet and jet will be moving in DOWN direction)
            present1 = present1 + 20
           
        shooter.style.top = `${present1}px`
        if(shooter.offsetTop >= 548){
            shooter.style.top = `${548}px`
        }
        if(shooter.offsetTop < 0){
            shooter.style.top = 0;
        }
    }
})   


setInterval(function addAliens(){
    let Allaliens = document.getElementById("aliens")
    let alien = document.createElement("div");
    alien.classList.add("alien")
    alien.innerHTML = `<svg id="layer-1" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#4B925E;" d="M233.412,376.471h-45.176V150.588c0-24.91-20.266-45.176-45.176-45.176V60.235 c49.821,0,90.353,40.532,90.353,90.353V376.471z"></path> <path style="fill:#32623F;" d="M323.765,376.471h-45.176V150.588c0-49.821,40.532-90.353,90.353-90.353v45.176 c-24.91,0-45.176,20.266-45.176,45.176V376.471z"></path> <circle style="fill:#91DC5A;" cx="165.647" cy="67.765" r="67.765"></circle> <circle style="fill:#3C5D76;" cx="165.647" cy="67.765" r="22.588"></circle> <circle style="fill:#64C37D;" cx="346.353" cy="67.765" r="67.765"></circle> <circle style="fill:#1E2E3B;" cx="346.353" cy="67.765" r="22.588"></circle> <path style="fill:#91DC5A;" d="M384,466.824c-12.475,0-22.588-10.114-22.588-22.588V286.118 c0-58.217-47.194-105.412-105.412-105.412S150.588,227.9,150.588,286.118v158.118c0,12.475-10.114,22.588-22.588,22.588 s-37.647,0-37.647,0V512h331.294v-45.176C421.647,466.824,396.475,466.824,384,466.824z"></path> <path style="fill:#64C37D;" d="M384,466.824c-12.475,0-22.588-10.114-22.588-22.588V286.118 c0-58.217-47.194-105.412-105.412-105.412V512h165.647v-45.176C421.647,466.824,396.475,466.824,384,466.824z"></path> <path style="fill:#3C5D76;" d="M210.824,271.059c0,24.949,20.227,45.176,45.176,45.176l0,0c24.949,0,45.176-20.227,45.176-45.176 H210.824z"></path> <path style="fill:#1E2E3B;" d="M256,271.059v45.176c24.949,0,45.176-20.227,45.176-45.176H256z"></path> </g></svg>`


alien.style.left = `${Math.floor(Math.random() * 100)}%`;
const alienMove = alien.animate([{top : "110%"}],{
fill:"forwards",
duration:10000
})
Allaliens.appendChild(alien);
},2000)

setInterval(function hitEnemy(){

    let missiles = document.querySelectorAll(".bullets")

    missiles.forEach((missile) => {
        
        let enemies = document.querySelectorAll(".alien");       
        enemies.forEach((enemy)=>{
            if(enemy.offsetTop+enemy.offsetHeight > missile.offsetTop && enemy.offsetTop < missile.offsetTop + missile.offsetHeight){

                if(enemy.offsetLeft+enemy.offsetHeight+36 >= missile.offsetLeft && enemy.offsetLeft+enemy.offsetHeight+36 <= missile.offsetLeft+missile.offsetWidth || enemy.offsetLeft+36 >= missile.offsetLeft && enemy.offsetLeft+36 <= missile.offsetLeft+missile.offsetWidth){
                    let explosion = document.getElementById("explosion");
                    let boom = document.getElementById("boom")
                    explosion.style.cssText = "display: block;"
                    boom.style.top = `${enemy.offsetTop}px`;
                    boom.style.left = `${enemy.offsetLeft}px`
                    let score = document.getElementById("score")
                    count++
                    score.innerText = `${count}`;
                    enemy.remove()
                    missile.remove()
                }
            }

        })
    })
},)


document.addEventListener("contextmenu",function addBullet(event){
    event.preventDefault();
        let fire = document.createElement("div");
        fire.setAttribute("class","bullets")
        fire.innerHTML = `<svg fill="#cebbbb" height="200px" width="200px" version="1.1" id="bullets" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-122.88 -122.88 757.76 757.76" xml:space="preserve" stroke="#cebbbb" transform="matrix(-1, 0, 0, 1, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M326.718,459.023h0.942V150.104C327.66,143.974,326.859,0,257.024,0s-70.636,143.974-70.636,150.104v308.918h-1.106 c-14.559,0-26.407,11.882-26.407,26.489c0,14.607,11.848,26.489,26.407,26.489h141.437c14.559,0,26.407-11.882,26.407-26.489 C353.125,470.905,341.278,459.023,326.718,459.023z M256,17.545c40.272,0,51.404,81.673,52.814,123.614H203.182 C204.57,99.218,215.676,17.545,256,17.545z M310.001,158.818v300.205H204.047V158.818H310.001z M326.718,494.341H185.282 c-4.906,0-8.748-3.88-8.748-8.83c0-4.872,3.923-8.83,8.748-8.83h8.911h123.614h8.911c4.906,0,8.748,3.88,8.748,8.83 C335.466,490.383,331.543,494.341,326.718,494.341z"></path> </g> </g> </g></svg>`
        Allbullets.appendChild(fire)
    
        fire.style.top = `${shooter.offsetTop}px`
        fire.style.left = `${shooter.offsetLeft + shooter.offsetHeight/2 - 45}px`
    
        let fire_animationID = fire.animate([{top: "-110%"}],{
    fill:"forwards",
    duration:2000
        })

        fire_animationID.addEventListener("finish",() => {
            fire.remove();
        })
        
           
})
})
