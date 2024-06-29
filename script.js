const input = document.getElementById("number");
const outputMsg = document.getElementById("output");
const form = document.getElementById("roman-numeral-converter");


const romanConverter = (str) =>
    {
        const romanNumber = [];
        let inputInt = parseInt(str);

        if(!str || isNaN(inputInt) || str.match(/[e+]/g))
            {
            return outputMsg.innerText = "Please enter a valid number";
            }
        else if(inputInt <= 0)
        {
            return outputMsg.innerText = "Please enter a number greater than or equal to 1";
        }
        else if(inputInt > 3999)
        {
            return outputMsg.innerText = "Please enter a number less than or equal to 3999";
        }
        else
        {
                const romanNumerals = 
                [
                    ["M", 1000],
                    ["CM", 900],
                    ["D", 500],
                    ["CD", 400],
                    ["C", 100],
                    ["XC", 90],
                    ["L", 50],
                    ["XL", 40],
                    ["X", 10],
                    ["IX", 9],
                    ["V", 5],
                    ["IV", 4],
                    ["I", 1]
                ];
            for (const [numeral, value] of romanNumerals) 
            {
            while (inputInt >= value) 
                {
                romanNumber.push(numeral);
                inputInt -= value;
            }
            }
            return outputMsg.innerText = romanNumber.join("");
        }
        
    }
form.addEventListener("submit", (e) => 
    {
        e.preventDefault();
        romanConverter(input.value);
        outputMsg.classList.remove("hide");
    });
input.addEventListener("click", () =>
    {
        outputMsg.classList.add("hide");
        outputMsg.innerText = "";
    });


