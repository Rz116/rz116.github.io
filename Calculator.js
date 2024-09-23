window.addEventListener("load",Buttons)
var Num1, Num2, Answer 

function Buttons()
{
	document.getElementById("BtnAdd").addEventListener("click",addition);
	document.getElementById("BtnSub").addEventListener("click",Subtract);
	document.getElementById("BtnDiv").addEventListener("click",Divide);
	document.getElementById("BtnMul").addEventListener("click",Multiply);
}

function addition()
{
	Num1 = document.getElementById("IntNum1").value;
	if(Num1 == "" )
		{
			alert("Type in a input")
			Autofocus();
		}
	else
		{
			Num2 = document.getElementById("IntNum2").value;
			if(Num2 == "")
			{
				alert("Type in a input");
				Autofocus()
			}
			else
			{
				Answer = Number(Num1) + Number(Num2);
				document.getElementById("pmessage").innerHTML = "Answer: " + Answer;
			}
		}
}
function Subtract()
{
	Num1 = document.getElementById("IntNum1").value;
	if(Num1 == "" )
		{
			alert("Type in a input")
			Autofocus();
		}
	else
		{
			Num2 = document.getElementById("IntNum2").value;
			if(Num2 == "")
			{
				alert("Type in a input");
				Autofocus()
			}
			else
			{
				Answer = Number(Num1) - Number(Num2);
				document.getElementById("pmessage").innerHTML = "Answer: " + Answer;
			}
		}
}
function Divide()
{
	Num1 = document.getElementById("IntNum1").value;
	if(Num1 == "" )
		{
			alert("Type in a input")
			Autofocus();
		}
	else
		{
			Num2 = document.getElementById("IntNum2").value;
			if(Num2 == "")
			{
				alert("Type in a input");
				Autofocus()
			}
			else
			{
				Answer = Number(Num1) / Number(Num2);
				document.getElementById("pmessage").innerHTML = "Answer: " + Answer;
			}
		}
}
function Multiply()
{
	Num1 = document.getElementById("IntNum1").value;
	if(Num1 == "" )
		{
			alert("Type in a input")
			Autofocus();
		}
	else
		{
			Num2 = document.getElementById("IntNum2").value;
			if(Num2 == "")
			{
				alert("Type in a input");
				Autofocus()
			}
			else
			{
				Answer = Number(Num1) * Number(Num2);
				document.getElementById("pmessage").innerHTML = "Answer: " + Answer;
			}
		}
}
function Autofocus()
{
	if (Num1 == "")
	{
		document.getElementById("IntNum1").focus();
	}
	else
	{
		document.getElementById("IntNum2").focus();
	}
}