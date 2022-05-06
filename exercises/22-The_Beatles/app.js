function sing() {
let song = "";
    for(i = 1 ; i <= 4; i++){
        song = song + "let it be, ";
    }
    song = song + "whisper words of wiswom, "
    for(i = 1 ; i <= 5; i++){
        song = song + "let it be, ";
    }
    song = song + "there will be an answer, let it be"
    return song;
}

//Your code above ^^^

console.log(sing());