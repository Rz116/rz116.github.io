
window.addEventListener("load",button); 
var weight,weight_2,age,height,activity,gender,BMR_round;
function button()
{
    document.getElementById("question_2").style.display = "none";
    document.getElementById("question_3").style.display = "none";
    document.getElementById("question_4").style.display = "none";
    document.getElementById("question_5").style.display = "none";
    document.getElementById("question_6").style.display = "none";
    document.getElementById("Home").addEventListener("click",Home_Page);
	document.getElementById("direct").addEventListener("click",Output);
    document.getElementById("Submit_1").addEventListener("click",Question_1); 
    document.getElementById("submit_2").addEventListener("click",Question_2); 
    document.getElementById("submit_3").addEventListener("click",Question_3); 
    document.getElementById("submit_4").addEventListener("click",Question_4); 
    document.getElementById("submit_5").addEventListener("click",Question_5); 
    document.getElementById("submit_6").addEventListener("click",Question_6); 
}
function Home_Page()
{
    window.location.href = "Home.html";
}
function Output()
{
    var check = localStorage.length;
    if(check == 0)
    {
        alert("You must complete everything in order to go the output page!")
    }
    else
    {
        window.location.href = "Output.Html";

    }
}
function Question_1()
{
    localStorage.clear();
    weight = document.getElementById("answer_1").value;
    let check = weight/1;
    let other = parseFloat(weight)/1;
    let length = weight.length;
    if(weight == "" || check != other || weight > 1800 || weight < 0)
    {
        alert("Type in a correct input (Has to be a number and below 1800 lbs)");
        document.getElementById("answer_1").value = "";
        document.getElementById("answer_1").focus();
    }
    else
    {
        localStorage.setItem("Current_weight", weight);
        document.getElementById("question_1").style.display = "none";
        document.getElementById("question_2").style.display = "block";
        document.getElementById("answer_2").focus();
    }
}
function Question_2()
{
    weight_2 = document.getElementById("answer_2").value; 
    let check = weight_2/1; 
    let other = parseFloat(weight_2)/1;
    if(weight_2 == "" || check != other || weight_2 > 1800 || weight_2 > parseFloat(weight) || weight_2 < 0)
    {
        alert("Type in a correct input (Has to be a positive number and below 1800 pounds)");
        document.getElementById("answer_2").value = ""; 
        document.getElementById("answer_2").focus();
    }
    else
    {
        localStorage.setItem("Goal_weight", weight_2);
        document.getElementById("question_2").style.display = "none";
        document.getElementById("question_3").style.display = "block";
        document.getElementById("answer_3").focus();
    }
}
function Question_3()
{
    age = document.getElementById("answer_3").value; 
    let check = age%1;
    if(age == "" || check != 0 || age < 0)
    {
        alert("Type in a correct input (HAS TO BE A WHOLE NUMBER)"); 
        document.getElementById("answer_3").value = ""; 
        document.getElementById("answer_3").focus(); 
    }
    else
    {
        document.getElementById("question_3").style.display = "none";
        document.getElementById("question_4").style.display = "block";
        document.getElementById("answer_4").focus();
    }
}
function Question_4()
{
    height = document.getElementById("answer_4").value; 
    let check = height/1; 
    let other = parseFloat(height)/1;
    if (height == "" || check != other || height < 0)
    {
        alert("Type in a correct Input (HAS TO BE A NUMBER)")
        document.getElementById("answer_4").value = ""; 
        document.getElementById("answer_4").focus();
    }
    else
    {
        document.getElementById("question_4").style.display = "none";
        document.getElementById("question_5").style.display = "block";
        document.getElementById("answer_5").focus();
    }
}
function Question_5()
{
    activity = document.getElementById("answer_5").value;
    document.getElementById("question_5").style.display = "none";
    document.getElementById("question_6").style.display = "block";
}
function Question_6()
{
    document.getElementById("answer_6").focus();
    gender = document.getElementById("answer_6").value;
    document.getElementById("question_6").style.display = "none";
    calculations()
}
function calculations()
{
	var Bmi = 703 * (weight/height ** 2);
	let round = Math.round(Bmi);
    localStorage.setItem("Bmi_Original",round); 

    var Bmi_deficit = 703 * (weight_2 / height ** 2);
    let round_after = Math.round(Bmi_deficit); 
    localStorage.setItem("Bmi_after",round_after);

	if(gender == "Woman")
	{
	    var bmr = 655 + (4.34 * weight) + (4.7 * height) - (4.7 * age);
	}
	else
	{
	    var bmr = 66.47 + (6.24 * weight) + ( 12.7 * height) - (6.76 * age);
	}
	switch(true)
	{
	    case activity == "Sedentary":
	        bmr = bmr * 1.2;
            BMR_round = Math.round(bmr);
	        localStorage.setItem("BMR_Maintain",BMR_round);
	        break; 
	    case activity == "Lightly Active":
	        bmr = bmr * 1.375; 
            BMR_round = Math.round(bmr);
	        localStorage.setItem("BMR_Maintain",BMR_round);
	        break; 
	    case activity == "Moderately active":
	        bmr = bmr * 1.55; 
            BMR_round = Math.round(bmr);
	        localStorage.setItem("BMR_Maintain",BMR_round);
	        break;
	    case activity == "Very active":
	        bmr = bmr * 1.725; 
            BMR_round = Math.round(bmr);
	        localStorage.setItem("BMR_Maintain",BMR_round);
	        break; 
	    case activity == "Extra active":
	        bmr = bmr * 1.9; 
            BMR_round = Math.round(bmr);
	        localStorage.setItem("BMR_Maintain",BMR_round);
	        break;
	    default:
	        alert("something"); 
	        break;
	}
	let deficit = bmr - 500; 
	let deficit_round = Math.round(deficit);
    localStorage.setItem("Bmr_deficit",deficit_round);
    window.location.href = "Output.html";
}

