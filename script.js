window.addEventListener("load",Getthings); 
let ListAnswers = [];
var count = 0;
function Getthings()
{
    document.getElementById("Answers").style.display = "none";
    document.getElementById("Question2").style.display = "none"; 
    document.getElementById("Question3").style.display = "none"; 
    document.getElementById("BlueWhale").addEventListener("click",Correct);
    document.getElementById("Lion").addEventListener("click",Wrong);
    document.getElementById("African").addEventListener("click",Wrong);
    document.getElementById("American").addEventListener("click",Wrong);
    document.getElementById("Trump").addEventListener("click",Wrong2);
    document.getElementById("Mao").addEventListener("click",Wrong2);
    document.getElementById("Xijingping").addEventListener("click",Correct2);
    document.getElementById("DengXiaoPing").addEventListener("click",Wrong2);
    document.getElementById("SolutionInput").addEventListener("click",Check);


}
function Correct()
{
    document.getElementById("Question2").style.display = "block";
    document.getElementById("Question1").style.display = "none"; 
    document.getElementById("Solution1").focus();
    ListAnswers.push("Correct");
}
function Wrong()
{
    document.getElementById("Question2").style.display = "block";
    document.getElementById("Question1").style.display = "none"; 
    document.getElementById("Solution1").focus();
    ListAnswers.push("Incorrect");
}
function Check()
{
    var Value1 = document.getElementById("Solution1").value; 
    var value2 = document.getElementById("Solution2").value; 
    let check = !isNaN(Value1); 
    let check2 = !isNaN(value2);
    if(Value1 == "" || value2 == "" || check == false || check2 == false)
    {
        document.getElementById("Solution1").value = ""; 
        document.getElementById("Solution2").value = ""; 
        document.getElementById("Solution1").focus();
        alert("Type in a correct value")
    }
    else
    {
        sum = parseInt(Value1) + parseInt(value2);
        if(sum == 5 )
        {
            ListAnswers.push("Correct");
        }
        else
        {
            ListAnswers.push("Incorrect");
        }
        document.getElementById("Question2").style.display = "none";
        document.getElementById("Question3").style.display = "block";
    }
}
function Correct2()
{
    ListAnswers.push("Correct");
    Answers()
}
function Wrong2()
{
    ListAnswers.push("Incorrect");
    Answers()
}
function Answers()
{
    let length = ListAnswers.length;
    let element = document.getElementById("Correct/Wrong");

    for (let i = 0; i < length; i++)
    {
        let li = document.createElement("li"); 
        li.innerText = ListAnswers[i]; 
        element.appendChild(li);
    }
    
    let removeitem = "Correct"; 
    let wrong = ListAnswers.filter(value => value !=removeitem); 
    let length2 = wrong.length; 
    let difference = length - length2; 
    let percent = difference/length;
    let other = percent * 100;

    document.getElementById("percentage").textContent = other + "%";
    document.getElementById("Question3").style.display = "none"; 
    document.getElementById("Answers").style.display = "block";
}
