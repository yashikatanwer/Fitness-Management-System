// -------------------------
// SHOW SIGNUP FORM
// -------------------------

function showSignup() {

    document.getElementById("signup").style.display = "block";

    document.getElementById("login-section").style.display = "none";

}

// -------------------------
// LOGIN VALIDATION
// -------------------------

function showDashboard() {

    const username =
        document.getElementById("username").value;

    if(username.trim()==""){

        alert("Please enter your email.");

        return false;

    }

    if(!username.includes("@")){

        alert("Please enter a valid email.");

        return false;

    }

    window.location.href="dashboard.html";

    return false;

}

// -------------------------
// TRAINER DATA
// -------------------------

const trainers={

Ramesh:{

name:"Ramesh - Strength Coach",

image:"images/ramesh.jpg",

description:"10+ years experience in strength training, bodybuilding and fat loss transformation."

},

Sunita:{

name:"Sunita - Yoga & Flexibility Coach",

image:"images/sunita.jpg",

description:"Certified yoga instructor helping clients improve flexibility, posture and mindfulness."

}

};

// -------------------------
// SHOW TRAINER
// -------------------------

function showTrainer(){

const trainer=

document.getElementById("trainer-select").value;

if(trainer===""){

document.getElementById("trainer-profile").style.display="none";

return;

}

document.getElementById("trainer-profile").style.display="block";

document.getElementById("trainer-name").innerHTML=

trainers[trainer].name;

document.getElementById("trainer-description").innerHTML=

trainers[trainer].description;

document.getElementById("trainer-image").src=

trainers[trainer].image;

}

// -------------------------
// CHAT BUTTON
// -------------------------

function chatTrainer(){

alert(

"Trainer:\nHello! 👋\nHow can I help you today?"

);

}

// -------------------------
// WORKOUT BUTTON
// -------------------------
function workoutPlan(){

alert(

"🏋️ Workout Plan\n\nMonday - Chest\nTuesday - Back\nWednesday - Legs\nThursday - Shoulders\nFriday - Arms\nSaturday - Cardio\nSunday - Rest"

);

}

// -------------------------
// STAR RATING
// -------------------------

function rate(stars){

const allStars=document.querySelectorAll(".star");

allStars.forEach((star,index)=>{

if(index<stars){

star.style.color="gold";

}else{

star.style.color="#ccc";

}

});

document.getElementById("rating-output").innerHTML=
"You rated this trainer "+stars+" ⭐";

}

// -------------------------
// BMI CALCULATOR
// -------------------------

function calculateBMI(){

const height =
parseFloat(document.getElementById("height").value);

const weight =
parseFloat(document.getElementById("weight").value);

const age =
parseInt(document.getElementById("age").value);

const gender =
document.getElementById("gender").value;

if(isNaN(height) || isNaN(weight)){

alert("Please enter height and weight.");

return false;

}

const bmi =
weight / ((height/100) * (height/100));

const bmiValue = bmi.toFixed(1);

document.getElementById("bmi").innerHTML = bmiValue;


// -------------------------
// BMI CATEGORY
// -------------------------

let category="";

if(bmi < 18.5){

category="Underweight";

}

else if(bmi < 25){

category="Healthy Weight";

}

else if(bmi < 30){

category="Overweight";

}

else{

category="Obese";

}

document.getElementById("category").innerHTML=category;

// -------------------------
// DAILY CALORIES
// -------------------------

let calories=0;

if(gender=="Male"){

calories=Math.round((10*weight)+(6.25*height)-(5*age)+5);

}

else{

calories=Math.round((10*weight)+(6.25*height)-(5*age)-161);

}

document.getElementById("calories").innerHTML=

calories+" kcal/day";

// -------------------------
// WATER INTAKE
// -------------------------

const water=(weight*0.035).toFixed(1);

document.getElementById("water").innerHTML=

water+" Litres/day";

// -------------------------
// DIET RECOMMENDATION
// -------------------------

let diet="";

if(bmi<18.5){

diet="Increase protein, milk, nuts, eggs and healthy carbohydrates.";

}

else if(bmi<25){

diet="Maintain a balanced diet with fruits, vegetables, proteins and whole grains.";

}

else{

diet="Reduce sugar, fried foods and soft drinks. Increase vegetables and lean protein.";

}

document.getElementById("diet").innerHTML=diet;

alert("Fitness Report Generated Successfully!");

return false;

}