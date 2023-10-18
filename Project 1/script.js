function generateCode(length = 6, addNumbers = false) {
    let randomCode = "";
    if(!addNumbers){
        for(let i = 0; i < length; i++){
            randomCode += randomLetter();
        }
        return randomCode;
    }
    
    for(let i = 0; i < length; i++){
        randomCode += randomLetter();
        randomCode += randomNumber(100, 65);
    }
    return randomCode.substring(0, length);
}

function randomNumber(max, min) {
    return Math.floor(Math.random() * (max-min) + min);
}

function randomLetter() {
    return String.fromCodePoint(randomNumber(90,65));
}