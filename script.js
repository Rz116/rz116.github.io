window.addEventListener("load",direct); 
function direct()
{
    document.getElementById("benefit1").addEventListener("click",Direct1);
    document.getElementById("benefit2").addEventListener("click",Direct2);
    document.getElementById("consequence1").addEventListener("click",Direct4);
    document.getElementById("consequence2").addEventListener("click",Direct5);
    document.getElementById("BM").addEventListener("click",Direct3);
}
function Direct1()
{
    window.location.href = "benefit1.html";
}
function Direct2()
{
    window.location.href = "benefit2.html";
}
function Direct3()
{
    window.location.href = "Home.html"
}
function Direct4()
{
    window.location.href = "consequence1.html";
}
function Direct5()
{
    window.location.href = "consequence2.html";
}
