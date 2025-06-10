// ASCII to Char
const prompt = require("prompt-sync")();

let code = prompt("Enter an ASCII code (0 to 127): ");

	if (code >= 0 && code <= 127) {
        char character = (char) code;
            console.log("The character for ASCII code " + code + " is: '" + character + "'");
} else {
           console.log("Invalid input! Please enter a number between 0 and 127.");
}

}
}
