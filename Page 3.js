var id=0;
var sec=0;
var min=0;
var arrre=[]
var arrrm=[]
var arrrh=[]
var dd=0;
function change1()
{
    dd=1;
}
function change2()
{
    dd=2;
}
function change3()
{
    dd=3;
}
// document.getElementById("score1").innerHTML=arrr[0];
//     document.getElementById("score2").innerHTML=arrr[1];
//     document.getElementById("score3").innerHTML=arrr[2];
//     document.getElementById("score4").innerHTML=arrr[3];
//     document.getElementById("score5").innerHTML=arrr[4];
function change()
{
    if(dd==0)
    alert("select level");
    else
    {
     id=0;
     sec=0;
     min=0;
     j=1;
     id=window.setInterval(printmsg,1);
    function shufflearray(inputArr)
    {
    // console.log(inputArr);
    var outputArr=inputArr;
    for(var i=inputArr.length-1;i>=0;i--)
    {
        var randomIndex=Math.floor(Math.random()*(i+1));
        var randomItem=inputArr[randomIndex];
        inputArr[randomIndex]=inputArr[i];
        inputArr[i]=randomItem;
    }
    }
    var myarr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
    shufflearray(myarr);
    var par=document.getElementsByClassName("btn");
    var i;
    for( i=0;i<25;i++)
    {
        par[i].innerHTML=myarr[i];
        par[i].style.backgroundColor= "rgb(10,"+(236-4*(myarr[i]))+",10)";
        
    }
}
}
var j=1;
var sec1=0;
var min1=0;
function btn(obj)
{   if(dd==1)
    {
    sec1=sec;
    min1=min;
    var dscore=min1+sec1/1000;
    var str=document.getElementById(obj).innerHTML;

    if(str==j && j<=15)
    {
        document.getElementById(obj).innerHTML=parseInt(str)+25;
        var str=document.getElementById(obj).innerHTML;
        document.getElementById(obj).style.backgroundColor= "rgb(10,"+(236-4*(str))+",10)";
        j++;
    }
    else if(str==j && j>15)
    {
        document.getElementById(obj).innerHTML=" ";
        j++;
    }
    if(str==40)
    {
        window.clearInterval(id);
        // arrr.push(dscore);
        // var score1=document.getElementById("score1").innerHTML;
        // if(parseInt(score1)<dscore)
        // document.getElementById("score1").innerHTML="dscore";
        arrre.push(dscore);
        var sarrre=arrre.sort();
        var len=sarrre.length;
        document.getElementById("escore1").innerHTML=sarrre[0];
        document.getElementById("escore2").innerHTML=sarrre[1];
        document.getElementById("escore3").innerHTML=sarrre[2];
        document.getElementById("escore4").innerHTML=sarrre[3];
        document.getElementById("escore5").innerHTML=sarrre[4];
        var sound= new Audio("wonderful.mp3");
         sound.play();
        }
    }
    else if(dd==2)
    {
    sec1=sec;
    min1=min;
    var dscore=min1+sec1/1000;
    var str=document.getElementById(obj).innerHTML;

    
    if(str==j && j<=25)
    {
        document.getElementById(obj).innerHTML=parseInt(str)+25;
        var str=document.getElementById(obj).innerHTML;
        document.getElementById(obj).style.backgroundColor= "rgb(10,"+(236-4*(str))+",10)";
        j++;
    }
    else if(str==j && j>25)
    {
        document.getElementById(obj).innerHTML=" ";
        j++;
    }
    if(str==50)
    {
        window.clearInterval(id);
        // arrr.push(dscore);
        // var score1=document.getElementById("score1").innerHTML;
        // if(parseInt(score1)<dscore)
        // document.getElementById("score1").innerHTML="dscore";
        arrrm.push(dscore);
        var sarrrm=arrrm.sort();
        var len=sarrrm.length;
        document.getElementById("mscore1").innerHTML=sarrrm[0];
        document.getElementById("mscore2").innerHTML=sarrrm[1];
        document.getElementById("mscore3").innerHTML=sarrrm[2];
        document.getElementById("mscore4").innerHTML=sarrrm[3];
        document.getElementById("mscore5").innerHTML=sarrrm[4];
        var sound= new Audio("wonderful.mp3");
         sound.play();
        }
    }
    else if(dd==3)
    {
    sec1=sec;
    min1=min;
    var dscore=min1+sec1/1000;
    var str=document.getElementById(obj).innerHTML;

    
    if(str==j && j<=35)
    {
        document.getElementById(obj).innerHTML=parseInt(str)+25;
        var str=document.getElementById(obj).innerHTML;
        document.getElementById(obj).style.backgroundColor= "rgb(10,"+(236-4*(str))+",10)";
        j++;
    }
    else if(str==j && j>35)
    {
        document.getElementById(obj).innerHTML=" ";
        j++;
    }
    if(str==60)
    {
        window.clearInterval(id);
        // arrr.push(dscore);
        // var score1=document.getElementById("score1").innerHTML;
        // if(parseInt(score1)<dscore)
        // document.getElementById("score1").innerHTML="dscore";
        arrrh.push(dscore);
        var sarrrh=arrrh.sort();
        var len=sarrrh.length;
        document.getElementById("hscore1").innerHTML=sarrrh[0];
        document.getElementById("hscore2").innerHTML=sarrrh[1];
        document.getElementById("hscore3").innerHTML=sarrrh[2];
        document.getElementById("hscore4").innerHTML=sarrrh[3];
        document.getElementById("hscore5").innerHTML=sarrrh[4];
        var sound= new Audio("wonderful.mp3");
         sound.play();
        }
    }
    
}
// creating stopwatch
function printmsg()
{
    if(sec==250)
    {
        sec=0;
        min++;
    }
    document.getElementById("op").innerHTML=min+"."+sec;
    sec++;
}
var sound= new Audio();
sound.src="sound.mp3";
//scoring
// function chn()
// {
//     document.getElementById("chn").innerHTML="a";
// }