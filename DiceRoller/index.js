function roll(){
    const numofdice = document.getElementById("numberodice").value;
    const diceresult = document.getElementById("diceresult");
    const diceimage = document.getElementById("diceimages");

    const values = [];
    const images = [];

    for (let i = 0; i < numofdice; i++){
        const value = Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="/diceroller/images/${value}.png">`);
    }

    diceresult.textContent =` dice: ${values.join(', ')}`;
    diceimage.innerHTML = images.join(' ');
    console.log(images);
}