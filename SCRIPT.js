
tt=2;

function light(){
    document.getElementsByTagName('body')[0].style.backgroundColor="white";

}
function palelight(){
    document.getElementsByTagName('body')[0].style.backgroundColor="#E8EFCF";

}
function dark(){
    document.getElementsByTagName('body')[0].style.backgroundColor="#31363F";

}
function superdark(){
    document.getElementsByTagName('body')[0].style.backgroundColor="black";

}



function conv(){
    document.getElementById("pchangeb").style.display="block";
    document.getElementById("pchangec").style.display="none";
    document.getElementById("pchangeco").style.display="none";

    document.getElementById("conv").style.fontWeight="bolder";
    document.getElementById("conv").style.textDecoration="underline";
    document.getElementById("calc").style.fontWeight="normal";
    document.getElementById("calc").style.textDecoration="none";
    document.getElementById("comp").style.fontWeight="normal";
    document.getElementById("comp").style.textDecoration="none";
}


function calc(){
    document.getElementById("pchangeb").style.display="none";
    document.getElementById("pchangec").style.display="block";
    document.getElementById("pchangeco").style.display="none";

    document.getElementById("conv").style.fontWeight="normal";
    document.getElementById("conv").style.textDecoration="none";
    document.getElementById("calc").style.fontWeight="bolder";
    document.getElementById("calc").style.textDecoration="underline";
    document.getElementById("comp").style.fontWeight="normal";
    document.getElementById("comp").style.textDecoration="none";
}

function comp(){
    document.getElementById("pchangeb").style.display="none";
    document.getElementById("pchangec").style.display="none";
    document.getElementById("pchangeco").style.display="block";

    document.getElementById("conv").style.fontWeight="normal";
    document.getElementById("conv").style.textDecoration="none";
    document.getElementById("calc").style.fontWeight="normal";
    document.getElementById("calc").style.textDecoration="none";
    document.getElementById("comp").style.fontWeight="bolder";
    document.getElementById("comp").style.textDecoration="underline";
}

function next(){
    if(tt<3){
        tt++;
    }
    if(tt==2){
        calc();
    }
    else if(tt==3){
        comp();
    }
}


function prev(){
    if(tt>1){
        tt--;
    }
    if(tt==2){
        calc();
    }
    else if(tt==1){
        conv();
    }
}




function conversion()
{
    var a= document.getElementById("inpu").value;
    a=a.toUpperCase();
    var base=document.getElementById("base").value;
    var basef=document.getElementById("basef").value;
    var ans=0;
    var d=0;
    var e=0;
    var k=0;
    var l;
    var inti;
    var x=0;
    var y="";
    var frac;
    var t=0;
    var m=0;
    var n=0;
    var te=0;
    var list=[];

    if ((Number(base)%1==0) && (Number(basef)%1==0) && (Number(base)>0) && (Number(basef)>0)){

        

    


    if(Number(a)<0){
        a=Number(a);
        a=-a;
        a=a.toString();
        te=1;
    }

    for(i=0;i<a.length;i++){
        if (a[i]=="."){
            break;
        } 
    }


    

    for(j=i-1;j>=0;j--)
    {
        switch(a[j])
        {
            case "A": l="10";
            break;
            case "B": l="11";
            break;
            case "C": l="12";
            break;
            case "D": l="13";
            break;
            case "E": l="14";
            break;
            case "F": l="15";
            break;
            case "G": l="16";
            break;
            case "H": l="17";
            break;
            case "I": l="18";
            break;
            case "J": l="19";
            break;
            case "K": l="20";
            break;
            case "L": l="21";
            break;
            case "M": l="22";
            break;
            case "N": l="23";
            break;
            case "O": l="24";
            break;
            case "P": l="25";
            break;
            case "Q": l="26";
            break;
            case "R": l="27";
            break;
            case "S": l="28";
            break;
            case "T": l="29";
            break;
            case "U": l="30";
            break;
            case "V": l="31";
            break;
            case "W": l="32";
            break;
            case "X": l="33";
            break;
            case "Y": l="34";
            break;
            case "Z": l="35";
            break;
            default: l=a[j];
            break;
        }

        if (Number(l)>=base)
        {
            n=1;
            break;
        }
        ans=ans+Number(l)*Math.pow(base,d);
        d++;
    }

    for (k=i+1;k<a.length;k++)
    {
        switch(a[k])
        {
            case "A": l="10";
            break;
            case "B": l="11";
            break;
            case "C": l="12";
            break;
            case "D": l="13";
            break;
            case "E": l="14";
            break;
            case "F": l="15";
            break;
            case "G": l="16";
            break;
            case "H": l="17";
            break;
            case "I": l="18";
            break;
            case "J": l="19";
            break;
            case "K": l="20";
            break;
            case "L": l="21";
            break;
            case "M": l="22";
            break;
            case "N": l="23";
            break;
            case "O": l="24";
            break;
            case "P": l="25";
            break;
            case "Q": l="26";
            break;
            case "R": l="27";
            break;
            case "S": l="28";
            break;
            case "T": l="29";
            break;
            case "U": l="30";
            break;
            case "V": l="31";
            break;
            case "W": l="32";
            break;
            case "X": l="33";
            break;
            case "Y": l="34";
            break;
            case "Z": l="35";
            break;
            default: l=a[k];
            break;
        }

        if (Number(l)>=base)
        {
            n=1;
            break;
        }
        e++;
        ans=ans+Number(l)/Math.pow(base,e);  
    }

    frac=ans%1;
    inti=ans-frac;

    for (i=inti;i>0;i=Math.floor(i/basef))
    {
        x=i%basef;
        switch(x)
        {
            case 10: l="A";
            break;
            case 11: l="B";
            break;
            case 12: l="C";
            break;
            case 13: l="D";
            break;
            case 14: l="E";
            break;
            case 15: l="F";
            break;
            case 16: l="G";
            break;
            case 17: l="H";
            break;
            case 18: l="I";
            break;
            case 19: l="J";
            break;
            case 20: l="K";
            break;
            case 21: l="L";
            break;
            case 22: l="M";
            break;
            case 23: l="N";
            break;
            case 24: l="O";
            break;
            case 25: l="P";
            break;
            case 26: l="Q";
            break;
            case 27: l="R";
            break;
            case 28: l="S";
            break;
            case 29: l="T";
            break;
            case 30: l="U";
            break;
            case 31: l="V";
            break;
            case 32: l="W";
            break;
            case 33: l="X";
            break;
            case 34: l="Y";
            break;
            case 35: l="Z";
            break;
            default: l=x.toString();
            break;
        }
        y=l+y;
    }
    if (te==1){
        y="-"+y;
    }

    if (frac!=0)
    {
        y=y+".";
        t=frac;

        
        for(j=0;j<10;j++)
        {
            
            t=basef*t;
            m=Math.floor(t/1);
            t=t-m;
     
            switch(m)
            {
                case 10: l="A";
                break;
                case 11: l="B";
                break;
                case 12: l="C";
                break;
                case 13: l="D";
                break;
                case 14: l="E";
                break;
                case 15: l="F";
                break;
                case 16: l="G";
                break;
                case 17: l="H";
                break;
                case 18: l="I";
                break;
                case 19: l="J";
                break;
                case 20: l="K";
                break;
                case 21: l="L";
                break;
                case 22: l="M";
                break;
                case 23: l="N";
                break;
                case 24: l="O";
                break;
                case 25: l="P";
                break;
                case 26: l="Q";
                break;
                case 27: l="R";
                break;
                case 28: l="S";
                break;
                case 29: l="T";
                break;
                case 30: l="U";
                break;
                case 31: l="V";
                break;
                case 32: l="W";
                break;
                case 33: l="X";
                break;
                case 34: l="Y";
                break;
                case 35: l="Z";
                break;
                default: l=m.toString();
                break;
            }
            y=y+l;
            r=list.indexOf(t); 
            if (r!=-1)
            {
                break;
            }
            list.push(t);    
        }
    }
    document.getElementById("answerdiv").style.display = 'inline-block';
    if(n!=1){
    document.getElementById("answer").innerHTML=y;
    document.getElementById("answer").style.color = '#13474d';
    
    }
    else{
        document.getElementById("answer").innerHTML="DIGIT CAN NOT BE GRATER THAN BASE";
        document.getElementById("answer").style.color = 'red';

    }


}
else{
    document.getElementById("answerdiv").style.display = 'inline-block';
    document.getElementById("answer").innerHTML="WRITE PROPER BASE";
    document.getElementById("answer").style.color = 'red';
}
}
