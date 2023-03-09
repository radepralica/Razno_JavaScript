function Krug()
{
    var r =document.getElementById('poluprKruga').value;
    var Krobim =2*r*Math.PI;
    var Krpovr = r*r*Math.PI;
    var obimkruga=Krobim.toFixed(2);
    var povrsinakruga=Krpovr.toFixed(2);
    document.getElementById('obimKruga').value=parseFloat(obimkruga);
    document.getElementById('povrsinaKruga').value=parseFloat(povrsinakruga);
}

function Kvadrat()
{
    var a =document.getElementById('stranicaA').value;
    var kvobim=4*a;
    var kvpovr=a*a;
    var obimkvadrata=kvobim.toFixed(2);
    var povrsinavadrata=kvpovr.toFixed(2);
    document.getElementById('obimKvadrata').value=parseFloat(obimkvadrata);
    document.getElementById('povrsinaKvadrata').value=parseFloat(povrsinavadrata);
}

function Pravougaonik()
{
    var pravA=parseFloat(document.getElementById('pravougaonikA').value);
    var pravB=parseFloat(document.getElementById('pravougaonikB').value);
    var obimPravoug=2*(pravA+pravB);
    var povrPravoug=pravA*pravB;
    var obimpravougaonika=obimPravoug.toFixed(2);
    var povrsinapravougaonika=povrPravoug.toFixed(2);
    document.getElementById('obimPravougaonika').value=parseFloat(obimpravougaonika);
    document.getElementById('povrsinaPravougaonika').value=parseFloat(povrsinapravougaonika);
}

function JednakostranicniTrougao()
{
    var JednakostA=parseFloat(document.getElementById('JednakostA').value);
    
   var PovrsinaJenakost=JednakostA*JednakostA*Math.sqrt(3)/4;
    var ObimJednakost=3*JednakostA;
    var PovJed=PovrsinaJenakost.toFixed(2);
    var ObimJed=ObimJednakost.toFixed(2);
    document.getElementById('JednakostObim').value=parseFloat(ObimJed);
    document.getElementById('JednakostrPovrsina').value=parseFloat(PovJed);
}

function Jednakokraki()
{
    var a=parseFloat(document.getElementById('jednakokrA').value);
    var b=parseFloat(document.getElementById('jednakokrB').value);
    
    var JednakokObim=a+2*b;
    var JednakokrPovrsina=(a/4)*Math.sqrt(4*b*b-a*a);
    var JedObim=JednakokObim.toFixed(2);
    var JedPovr=JednakokrPovrsina.toFixed(2);
    document.getElementById('obimJednakokrakog').value=JedObim;
    document.getElementById('povrsinaJednakokrakog').value=JedPovr;
}

function Pravougli()

{
    var a=parseFloat(document.getElementById('pravougA').value);
    var b=parseFloat(document.getElementById('pravougB').value);
    var c=parseFloat(document.getElementById('pravougC').value);
    
   c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
    var hip=c.toFixed(2);
    var PravougPov=a*b/2;
    var PravougObim=a+b+c;
    var PravPov=PravougPov.toFixed(2);
    var PravObim=PravougObim.toFixed(2);
    
   document.getElementById('pravougC').value=hip;
    document.getElementById('pravougObim').value=PravPov;
    document.getElementById('pravougPovrsina').value=PravObim;
    
}

function Romb()
{
    var a=document.getElementById('RombA').value;
    var h=document.getElementById('RombH').value;
   
    var RombPovr=a*h;
    var RombObim=4*a;
    var O=RombObim.toFixed(2);
    var P=RombPovr.toFixed(2);
    document.getElementById('RombObim').value=O;
    document.getElementById('RombPovrsina').value=P;
}



function Paralelogram()

{
    var a=parseFloat(document.getElementById('ParalA').value);
    var b=parseFloat(document.getElementById('ParalB').value);
    var h=parseFloat(document.getElementById('ParalH').value);
    
    var ParalObim=2*(a+b);
    var PO=ParalObim.toFixed(2);
    var ParalPOvrsina=a*h;
    var PP=ParalPOvrsina.toFixed(2);
    
    document.getElementById('ParalObim').value=PO;
    document.getElementById('ParalPovrsina').value=PP;
}

function Trapez()
{
    var a =parseFloat(document.getElementById('TrapezA').value);
    var b =parseFloat(document.getElementById('TrapezB').value);
    var c =parseFloat(document.getElementById('TrapezC').value);
    var d =parseFloat(document.getElementById('TrapezD').value);
    var h =parseFloat(document.getElementById('TrapezH').value);
    
    var TrapezObim=a+b+c+d;
    var TO=TrapezObim.toFixed(2);
    var TrapezPovrsina=(a+b)*h/2;
    var TP=TrapezPovrsina.toFixed(2);
    document.getElementById('TrapezObim').value=TO;
    document.getElementById('TrapezPovrsina').value=TP;
}

function Kocka()
{
    var a=document.getElementById('KockaA').value;
    
    var KockaObim=Math.pow(a,3);
    var KO=KockaObim.toFixed(2);
    
    var KockaPovrsina=6*Math.pow(a,2);
    var KP=KockaPovrsina.toFixed(2);
    
    document.getElementById('KockaObim').value=KO;
    document.getElementById('KockaPovrsina').value=KP;
}


function Lopta()
{
    var r=document.getElementById('LoptaR').value;
    
    var LoptaPovr=4*Math.pow(r,2)*Math.PI;
    var LP=LoptaPovr.toFixed(2);
    
    var LoptaVolumen=4*Math.pow(r,3)*Math.PI/3;
    var LV=LoptaVolumen.toFixed(2);
    
    document.getElementById('LoptaPovrsina').value=LP;
    document.getElementById('LoptaZapremina').value=LV;
}

function Valjak()
{
    var r=parseFloat(document.getElementById('ValjakR').value);
    var h=parseFloat(document.getElementById('ValjakH').value);
    
    var ValjakPovr=(2*Math.pow(r,2)*Math.PI)+(2*r*h*Math.PI);
    var VP=ValjakPovr.toFixed(2);
    
    var ValjakVolum=Math.pow(r,2)*h*Math.PI;
    var VV=ValjakVolum.toFixed(2);
    
    document.getElementById('ValjakPovrsina').value=VP;
    document.getElementById('ValjakVolumen').value=VV;
}

function Kupa()

{
     var r =parseFloat(document.getElementById('KupaR').value);
     var s =parseFloat(document.getElementById('KupaS').value);
     var h =parseFloat(document.getElementById('KupaH').value);
    
    var KupaPovr=(Math.pow(r,2)*Math.PI)+(r*s*Math.PI);
    var KP=KupaPovr.toFixed(2);
    
    var KupaVolum=Math.pow(r,2)*Math.PI*h/3;
    var KV=KupaVolum.toFixed(2);
    
    document.getElementById('KupaPovrsina').value=KP;
    document.getElementById('KupaVolumen').value=KV;
}





