var button = document.querySelectorAll("button").length;

for(var i = 0; i < button ; i++){

    document.querySelectorAll(".button")[i].addEventListener("click",function(){
        var text = this.innerHTML;
        console.log(text);
        audioPlay(text);
    });
}

function audioPlay(text){
    switch(text){
        case "Button-1":
        var audio = new Audio("sound/01_Forever.mp3");
        audio.play();
        break;

        case "Button-2":
            var audio = new Audio("sound/01_lovely.mp3");
            audio.play();
            break;

            case "Button-3":
                var audio = new Audio("sound/Duaa.mp3");
                audio.play();
                break;
    }
}

