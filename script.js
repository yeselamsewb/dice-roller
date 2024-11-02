// dice roller program

function rolldice(){

    const diceresult = document.getElementById("diceresult");
    const diceimages = document.getElementById("diceimages");
    const value = Math.floor(Math.random() * 6) + 1;
    console.log(value);
    if(value == 1){
        diceimages.innerHTML=`<img src="dice_images/1.png">`
    }
    else if(value == 2){
        diceimages.innerHTML=`<img src="dice_images/2.png">`
    }
    else if(value == 3){
        diceimages.innerHTML=`<img src="dice_images/3.png">`
    }
    else if(value == 4){
        diceimages.innerHTML=`<img src="dice_images/4.png">`
    }
    else if(value == 5){
        diceimages.innerHTML=`<img src="dice_images/5.png">`
    }
    else if(value == 6){
        diceimages.innerHTML=`<img src="dice_images/6.png">`
    }
  } 

