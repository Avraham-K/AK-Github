let languages = ["HTML", "CSS", "JavaScript"];
let temp = (languages[0]);

for (let i = 1; i < languages.length; i++) {
    if (i == languages.length - 1) {
        temp += " and " + languages[i];
    }
    else {
        temp += ", " + languages[i];
    }
}
temp += "."
document.getElementById("languagesUsed").innerHTML = temp;
