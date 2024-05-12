tt=1;
function light(){
	document.getElementsByTagName('body')[0].style.backgroundColor="white";
	document.getElementById("conv").style.color = '#13474d';
	document.getElementById("calc").style.color = '#13474d';
	document.getElementById("comp").style.color = '#13474d';
}
function palelight(){
	document.getElementsByTagName('body')[0].style.backgroundColor="#E8EFCF";
	document.getElementById("conv").style.color = '#13474d';
	document.getElementById("calc").style.color = '#13474d';
	document.getElementById("comp").style.color = '#13474d';
}
function dark(){
	document.getElementsByTagName('body')[0].style.backgroundColor="#31363F";
	document.getElementById("conv").style.color = '#98EECC';
	document.getElementById("calc").style.color = '#98EECC';
	document.getElementById("comp").style.color = '#98EECC';
}
function superdark(){
	document.getElementsByTagName('body')[0].style.backgroundColor="black";
	document.getElementById("conv").style.color = '#98EECC';
	document.getElementById("calc").style.color = '#98EECC';
	document.getElementById("comp").style.color = '#98EECC';
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

//main ________

//convert letter to no. ____
function lettono(aj,l){
		switch(aj){
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
			default: l=aj;
			break;
		}
	    return l;	
}

//converting no to letter ___)___

function notolet(x,l){
switch(x){
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
return l;
}

//CONVERSION...._________________________________________________________________________________

function conversion()
{
	var a= document.getElementById("inpu").value;
	a=a.toUpperCase();
	var base=document.getElementById("base").value;
	var basef=document.getElementById("basef").value;
	var ans=0, d=0, e=0, k=0, l, inti, x=0, y="", frac, t=0, m=0, n=0, te=0, list=[];

	if ((base%1==0) && (basef%1==0) && (base>1) && (basef>1) && (base<37) && (basef<37)){
        if(a[0]=="-"){
            a=a.slice(1);
            te=1;
	    }

//first other base to decimal +________

	    for(i=0;i<a.length;i++){
		    if (a[i]=="."){
		    	break;
		    } 
	    }
	    
//before point digits ______
	    for(j=i-1;j>=0;j--){
            l=lettono(a[j],l);
	        if (Number(l)>=base){
			    n=1;
			    break;
		    }
		    ans=ans+Number(l)*Math.pow(base,d);
		    d++;
	    }
	    
//after point digits _______
        for (k=i+1;k<a.length;k++){
            l=lettono(a[k],l);
		    if (Number(l)>=base){
			    n=1;
			    break;
		    }
		    e++;
		    ans=ans+Number(l)/Math.pow(base,e);  
	    }

//now decimal to desired base _______

	    frac=ans%1;
	    inti=ans-frac;

	    for (i=inti;i>0;i=Math.floor(i/basef)){
		    x=i%basef;
            l=notolet(x,l);
		    y=l+y;
	    }
	    if (te==1){
		    y="-"+y;
	    }
	    if (frac!=0){
		    y=y+".";
		    t=frac;
            for(j=0;j<10;j++){
			    t=basef*t;
			    m=Math.floor(t/1);
			    t=t-m;
                l=notolet(m,l);
			    y=y+l;
			    r=list.indexOf(t); 
			    if (r!=-1){
				    break;
	            }
			    list.push(t);    
		    }
	    }
	    document.getElementById("answerdiv").style.display = 'inline-block';
	    if(n!=1){
		    if(y==""){
			    y="0";
		    }
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


//CALCULATOR.....____________________________________________________________________________________
var symbol=1;
function add(){
    symbol=1;
    document.getElementById("fix").innerHTML="(+)";
    }
function sub(){
	symbol=2;
	document.getElementById("fix").innerHTML="(-)";
	}
function mul(){
	symbol=3;
	document.getElementById("fix").innerHTML="(*)";
	}
function dev(){
	symbol=4;
	document.getElementById("fix").innerHTML="(/)";
	}

function calculation()
{
	var a= document.getElementById("inpu2").value;
	a=a.toUpperCase();
	var b= document.getElementById("inpu3").value;
	b=b.toUpperCase();
	var base2=document.getElementById("base2").value;
	var base3=document.getElementById("base3").value;
	var basef2=document.getElementById("basef2").value;
	var ans2=0, ans3=0, ans4=0, l="", n=0, d=0, i, j, e=0, k=0, l, inti, x=0, y="", frac, t=0, m=0, te=0, list=[];
	if ((base2%1==0) && (base2>1) && (base2<37) && (base3%1==0) && (base3>1) && (base3<37) && (basef2%1==0) && (basef2>1) && (basef2<37)){
		if(a[0]=="-"){
			a=a.slice(1);
        	te=1;
        }
		for(i=0;i<a.length;i++){
			if (a[i]=="."){
				break;
			} 
		}

//BEFORE decimal digit of first no. converted to decimal.________
		for(j=i-1;j>=0;j--){
            l=lettono(a[j],l);
			if (Number(l)>=base2){
				n=1;
				break;
			}
			ans2=ans2+Number(l)*Math.pow(base2,d);
			d++;
		}

//after decimal digit of first no. converted to decimal.________
		for (k=i+1;k<a.length;k++){
            l=lettono(a[k],l);
			if (Number(l)>=base2){
				n=1;
				break;
			}
			e++;
			ans2=ans2+Number(l)/Math.pow(base2,e);  
		}
		if (te==1){
			ans2=-ans2;
		}

//SECOND NO. ________________
		d=0, e=0, k=0, x=0, y="", t=0, m=0, te=0;
        if(b[0]=="-"){
			b=b.slice(1);
			te=1;
		}
		for(i=0;i<b.length;i++){
			if (b[i]=="."){
				break;
			} 
		}

//before decimal digits..__________________
		for(j=i-1;j>=0;j--){
            l=lettono(b[j],l);
			if (Number(l)>=base3){
				n=1;
				break;
			}
			ans3=ans3+Number(l)*Math.pow(base3,d);
			d++;
		}

//after decimal digits...___________
		for (k=i+1;k<b.length;k++){
            l=lettono(b[k],l);
			if (Number(l)>=base3){
				n=1;
				break;
			}
			e++;
			ans3=ans3+Number(l)/Math.pow(base3,e);  
		}
		if(te==1){
			ans3=-ans3;
		}

//calculation of decimal no..._______________
		if(symbol==1){
			ans4=ans2+ans3;
		}
		else if(symbol==2){
			ans4=ans2-ans3;
		}
		else if(symbol==3){
			ans4=ans2*ans3;
		}
		else{
			ans4=ans2/ans3;
		}

//converting answer to desired base..._________
		te=0;
		if(ans4<0){
			te=1;
			ans4=-ans4;
		}
		frac=ans4%1;
		inti=ans4-frac;
		for (i=inti;i>0;i=Math.floor(i/basef2)){
			x=i%basef2;
            l=notolet(x,l);
			y=l+y;
		}
		if (te==1){
			y="-"+y;
		}
		if (frac!=0){
			y=y+".";
			t=frac;
			for(j=0;j<10;j++){
				t=basef2*t;
				m=Math.floor(t/1);
				t=t-m;
                l=notolet(m,l);
				y=y+l;
				r=list.indexOf(t); 
				if (r!=-1){
					break;
				}
				list.push(t);    
			}
		}
		document.getElementById("answerdiv2").style.display = 'inline-block';
		if(n!=1){
			if(y==""){
				y="0";
			}
			document.getElementById("answer2").innerHTML=y;
			document.getElementById("answer2").style.color = '#13474d';
		}
		else{
			document.getElementById("answer2").innerHTML="DIGIT CAN NOT BE GRATER THAN BASE";
			document.getElementById("answer2").style.color = 'red';
		}
	}
	else{
		document.getElementById("answerdiv2").style.display = 'inline-block';
	    document.getElementById("answer2").innerHTML="WRITE PROPER BASE";
	    document.getElementById("answer2").style.color = 'red';
	}
}

//COMPLEMENT...______________________________________________________________________________________________

function complement(){
    














}