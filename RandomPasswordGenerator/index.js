
function gen(length, lowerCase, upperCase, number, symbol){
    const lowercasechars = "abcdefghijklmnopqrstuvwxyz";
    const uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberchars ="0123456789";
    const symbolchars ="!@#$%^&*()_+-";

    let allowdChars = "";
    let password = "";

    allowdChars += lowerCase.checked ? lowercasechars : "";
    allowdChars += upperCase.checked ? uppercasechars : "";
    allowdChars += number.checked ? numberchars : "";
    allowdChars += symbol.checked ? symbolchars : "";

    if(length<=0)
        return `(Password length must be at least 1), now its ${length}`;

    if(allowdChars.length===0){
        return `Please choose at least option lease`;
    }
    
    for(let i = 0;i<length;i++)
        {const randomIndex = Math.floor(Math.random() * allowdChars.length);
        password += allowdChars[randomIndex];}
    return password;
}
function lembo(){
    const passwordLength =  document.getElementById("length").value;
    const lowercase = document.getElementById("lowerCase");
    const uppercase = document.getElementById("upperCase");
    const number = document.getElementById("number");
    const symbol = document.getElementById("symbols");
    
    let result = document.getElementById("gen");
    result.textContent = gen(passwordLength, lowercase, uppercase, number, symbol);
}