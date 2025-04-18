// const = a variable that cannot be changed
// It's generally good practice to make const name ALL CAPS. 
//   BUT only for primitive datatypes, such as, Numbers, Booleans BUT referenced datatypes,such as, Strings do not. 


const PI = 3.14159;
let radius;
let circumference;



document.getElementById("submit").onclick = function() {
    radius = document.getElementById("myText").value;

    radius = Number(radius);

    circumference = 2 * PI * radius;

    document.getElementById("result").textContent = `Radius = ${circumference}cm`;
};
