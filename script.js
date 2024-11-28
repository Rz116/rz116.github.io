window.addEventListener("load",addlistener); 
var Number_of_things,Things,count = 0,inputter;
let lstThings = [];
function addlistener()
{
	document.getElementById("Output").style.display = "none";
	document.getElementById("btn1").addEventListener("click",Getelements);
	document.getElementById("btn2").addEventListener("click",GetThings);

}

function Getelements()
{
	Number_of_things = document.getElementById("txtHowmany").value; 
	var check = Number_of_things % 1; 
	
	if(check != 0 || Number_of_things == "")
	{
		alert("Type in a correct input!");
		document.getElementById("txtHowmany").value = ""; 
		document.getElementById("txtHowmany").focus();
	}
	else 
	{
		document.getElementById("txtThings").focus();
	}
	
}
function GetThings()
{
	Things = document.getElementById("txtThings").value; 
	if(Things == "")
	{
		alert("Type in a correct input!");
		document.getElementById("txtThings").value = ""; 
		document.getElementById("txtThings").focus();
	}
	else 
	{
		lstThings.push(Things);
		document.getElementById("txtThings").focus();
		document.getElementById("txtThings").value = "";
		count = count + 1;
	}
	
	if(count == parseInt(Number_of_things))
	{
		let Todo = document.getElementById("TodoList");
		let length = lstThings.length;
		for(let i = 0; i < length; i++)
		{
			let li = document.createElement("li"); 
			li.innerText = lstThings[i]; 
			Todo.appendChild(li);
		}
		document.getElementById("Inputs").style.display = "none";
		document.getElementById("Output").style.display = "block";
	}
}
