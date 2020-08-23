	var instr;
	var instr2="";
	var key;
	var key2;
	var enc_str="";
	var dec_str="";
	function store(){
		instr=document.getElementById('in_str').value.trim();
		var letters = /^[A-Za-z]+$/;
		if(instr.match(letters) && instr.length>0){
			//INPUT DISPLAY
			for(i=0;i<instr.length;i++){
				document.getElementById('inchar1').innerHTML=document.getElementById('inchar1').innerHTML+"<td><table><tr><td class='charbox'>"+instr.charAt(i)+"</td></tr><tr><td class='ascbox'>"+instr.charCodeAt(i)+"</td></tr></table></td>";
			//	"<td class='charbox'>'"+instr.charAt(i)+"'<td>";
			}
			document.getElementById("hintasc").style.display="block";
			
			
			document.getElementById('out1').innerHTML="PLAIN TEXT : " + instr;
			document.getElementById("outenc").style.display="block";
			document.getElementById("out1").style.display="block";
			
			document.getElementById("hintenc").style.display="none";
			document.getElementById("in_strlabel").style.display="none";
			document.getElementById("btn1").style.display="none";
			document.getElementById("btn2").style.display="block";
			document.getElementById("keylabel").style.display="block";
			document.getElementById("inchar").style.display="block";
			
			//animating code view
			document.getElementById("loc07").style.color="black";
			document.getElementById("loc07").style.fontWeight="normal";
			document.getElementById("loc07").style.background="whitesmoke";
			document.getElementById("loc08").style.color="black";
			document.getElementById("loc08").style.fontWeight="normal";
			document.getElementById("loc08").style.background="whitesmoke";
			document.getElementById("loc09").style.color="blue";
			document.getElementById("loc09").style.fontWeight="bold";
			document.getElementById("loc09").style.background="pink";
			document.getElementById("loc10").style.color="blue";
			document.getElementById("loc10").style.fontWeight="bold";
			document.getElementById("loc10").style.background="pink";
			
			
		}
		else{
			//alert("Only alphabetical string is acceptable\nString length can range from 1 to 10.");
			document.getElementById('hintenc').style.color="red";
			document.getElementById('hintenc').style.fontWeight="bold";
			document.getElementById('in_str').value="";
		}
	}
	function reset(){
		window.location.reload();
	}
	function keystore(){
		var e =  document.querySelector('#key');
		key = e.value;
	
		//KEY DISPLAY
			for(i=0;i<instr.length;i++){
				document.getElementById('cbox').innerHTML=document.getElementById('cbox').innerHTML+"<td class='eqlbox'><img src='images/xor_icon.png' width='99%' height='90%'><td>";
			}
			
			for(i=0;i<instr.length;i++){
			
				document.getElementById('keyb1').innerHTML=document.getElementById('keyb1').innerHTML+"<td><table><tr><td class='ascbox'>"+key.charCodeAt(0)+"</td></tr><tr><td class='charbox'>"+key+"</td></tr></table></td>";
				//document.getElementById('keyb1').innerHTML=document.getElementById('keyb1').innerHTML+"<td class='charbox'>'"+key+"'<td>";
			}
			
			
			
			document.getElementById("cb").style.display="block";
			document.getElementById("keyb").style.display="block";
			
			for(i=0;i<instr.length;i++){
				document.getElementById('eqlt').innerHTML=document.getElementById('eqlt').innerHTML+"<td class='eqlbox'><img src='images/down_arrow_icon.png' width='99%' height='99%'><td>";
			}
			//animating code view
			document.getElementById("loc09").style.color="black";
			document.getElementById("loc09").style.fontWeight="normal";
			document.getElementById("loc09").style.background="whitesmoke";
			document.getElementById("loc10").style.color="black";
			document.getElementById("loc10").style.fontWeight="normal";
			document.getElementById("loc10").style.background="whitesmoke";
			document.getElementById("loc12").style.background="green";
			document.getElementById("loc12").style.fontWeight="bold";
			document.getElementById("loc12").style.color="white";
			document.getElementById("loc21").style.background="lightgrey";
			document.getElementById("loc22").style.background="lightgrey";
			document.getElementById("loc23").style.background="lightgrey";
			document.getElementById("loc24").style.background="lightgrey";
			document.getElementById("loc25").style.background="lightgrey";
			document.getElementById("loc26").style.background="lightgrey";
			document.getElementById("loc14").style.color="blue";
			document.getElementById("loc14").style.fontWeight="bold";
			document.getElementById("loc14").style.background="pink";
			document.getElementById("loc15").style.color="blue";
			document.getElementById("loc15").style.fontWeight="bold";
			document.getElementById("loc15").style.background="pink";
			document.getElementById("loc16").style.color="blue";
			document.getElementById("loc16").style.fontWeight="bold";
			document.getElementById("loc16").style.background="pink";
			document.getElementById("loc17").style.color="blue";
			document.getElementById("loc17").style.fontWeight="bold";
			document.getElementById("loc17").style.background="pink";
			
			encrypt();
	}
	function encrypt(){
			//ASCII XOR Calculation
			key_ascii=key.charCodeAt(0);
			
			for(i=0;i<instr.length;i++){
				op1_ascii=key_ascii^instr.charCodeAt(i);
document.getElementById('outchar1').innerHTML=document.getElementById('outchar1').innerHTML+"<td><table><tr><td class='charbox'>"+String.fromCharCode(op1_ascii)+"</td></tr><tr><td class='ascbox'>"+op1_ascii+"</td></tr></table></td>";
				//document.getElementById('outchar1').innerHTML=document.getElementById('outchar1').innerHTML+"<td class='charbox'>"+String.fromCharCode(op1_ascii)+"<td>";
				enc_str=enc_str+String.fromCharCode(op1_ascii);
			}
			
			document.getElementById("eqlb").style.display="block";
			document.getElementById("outchar").style.display="block";
			document.getElementById('key').disabled = true;
			document.getElementById('btnenc').disabled = true;
			document.getElementById("decrypt").style.display="block";
			document.getElementById('in_str2').value=enc_str;
			document.getElementById('btnenc').style.backgroundColor = 'grey';
			document.getElementById('btnenc').value = 'Encrypted';
			
			//key select for decrypt
			if(key=="1"){
				document.getElementById("key2").selectedIndex = "1";
			}
			else if(key=="2"){
				document.getElementById("key2").selectedIndex = "2";
			}
			else if(key=="3"){
				document.getElementById("key2").selectedIndex = "3";
			}
			else if(key=="4"){
				document.getElementById("key2").selectedIndex = "4";
			}
			else if(key=="5"){
				document.getElementById("key2").selectedIndex = "5";
			}
			else if(key=="6"){
				document.getElementById("key2").selectedIndex = "6";
			}
			else if(key=="7"){
				document.getElementById("key2").selectedIndex = "7";
			}
			else if(key=="8"){
				document.getElementById("key2").selectedIndex = "8";
			}
			else if(key=="9"){
				document.getElementById("key2").selectedIndex = "9";
			}
			
			
			
			document.getElementById('out3').innerHTML="CIPHER TEXT : " + enc_str;
			document.getElementById('out3').style.color="green";
			document.getElementById("out3").style.display="block";
	
	}
	function decrypt(){
		instr2=document.getElementById('in_str2').value;
		if(instr2.length==instr.length){
		
		document.getElementById('inchar1').innerHTML="";
		document.getElementById('cbox').innerHTML="";
		document.getElementById('keyb1').innerHTML="";
		document.getElementById('eqlt').innerHTML="";
		document.getElementById('outchar1').innerHTML="";
		
		//INPUT DISPLAY
			for(i=0;i<instr2.length;i++){
	document.getElementById('inchar1').innerHTML=document.getElementById('inchar1').innerHTML+"<td><table><tr><td class='charbox'>"+instr2.charAt(i)+"</td></tr><tr><td class='ascbox'>"+instr2.charCodeAt(i)+"</td></tr></table></td>";
				//document.getElementById('inchar1').innerHTML=document.getElementById('inchar1').innerHTML+"<td class='charbox'>"+instr2.charAt(i)+"<td>";
			}
				
			
			
			var e =  document.querySelector('#key2');
			key2 = e.value;
			//KEY DISPLAY
			for(i=0;i<instr2.length;i++){
				document.getElementById('cbox').innerHTML=document.getElementById('cbox').innerHTML+"<td class='eqlbox'><img src='images/xor_icon.png' width='99%' height='90%'><td>";
			}
			
			for(i=0;i<instr2.length;i++){
				document.getElementById('keyb1').innerHTML=document.getElementById('keyb1').innerHTML+"<td><table><tr><td class='ascbox'>"+key2.charCodeAt(0)+"</td></tr><tr><td class='charbox'>"+key2+"</td></tr></table></td>";

				//document.getElementById('keyb1').innerHTML=document.getElementById('keyb1').innerHTML+"<td class='charbox'>"+key2+"<td>";
			}
			
			
			for(i=0;i<instr.length;i++){
				document.getElementById('eqlt').innerHTML=document.getElementById('eqlt').innerHTML+"<td class='eqlbox'><img src='images/down_arrow_icon.png' width='99%' height='99%'><td>";
			}
			
			dec_str="";
			//ASCII XOR Calculation
			key_ascii=key2.charCodeAt(0);
			
			for(i=0;i<instr2.length;i++){
				op1_ascii=key_ascii^instr2.charCodeAt(i);
document.getElementById('outchar1').innerHTML=document.getElementById('outchar1').innerHTML+"<td><table><tr><td class='charbox'>"+String.fromCharCode(op1_ascii)+"</td></tr><tr><td class='ascbox'>"+op1_ascii+"</td></tr></table></td>";
				
				//document.getElementById('outchar1').innerHTML=document.getElementById('outchar1').innerHTML+"<td class='charbox'>"+String.fromCharCode(op1_ascii)+"<td>";
				dec_str=dec_str+String.fromCharCode(op1_ascii);
			}
			
			
			document.getElementById('out4').innerHTML="CIPHER TEXT : " + instr2;
			document.getElementById('out6').innerHTML="PLAIN TEXT : " + dec_str;
			
			document.getElementById("outdec").style.display="block";
			document.getElementById("out4").style.display="block";
			document.getElementById("out6").style.display="block";
			
			document.getElementById("out6").style.color = 'red';
			
			//animating code view
			document.getElementById("loc14").style.color="black";
			document.getElementById("loc14").style.fontWeight="normal";
			document.getElementById("loc14").style.background="whitesmoke";
			document.getElementById("loc15").style.color="black";
			document.getElementById("loc15").style.fontWeight="normal";
			document.getElementById("loc15").style.background="whitesmoke";
			document.getElementById("loc16").style.color="black";
			document.getElementById("loc16").style.fontWeight="normal";
			document.getElementById("loc16").style.background="whitesmoke";
			document.getElementById("loc17").style.color="black";
			document.getElementById("loc17").style.fontWeight="normal";
			document.getElementById("loc17").style.background="whitesmoke";
			document.getElementById("loc18").style.color="white";
			document.getElementById("loc18").style.fontWeight="bold";
			document.getElementById("loc18").style.background="red";
			document.getElementById('hintdec').style.color="red";
			document.getElementById('hintdec').style.fontWeight="bold";
			document.getElementById("hintdec").innerHTML="Decrypted String mismatched with Original String.";
			if(instr==dec_str){
				document.getElementById('in_str2').disabled = true;
				document.getElementById('key2').disabled = true;
				document.getElementById('btndec').disabled = true;
				document.getElementById('btndec').style.backgroundColor = 'grey';
				document.getElementById('btndec').value = 'Decrypted';
				document.getElementById("hintdec").style.display="none";
				document.getElementById("out6").style.color = 'green';
				
				//animating code view
				document.getElementById("loc18").style.background="green";
				document.getElementById("loc18").style.color="white";
				
				document.getElementById("loc21").style.background="lightgreen";
				document.getElementById("loc22").style.background="lightgreen";
				document.getElementById("loc23").style.background="lightgreen";
				document.getElementById("loc24").style.background="lightgreen";
				document.getElementById("loc25").style.background="lightgreen";
				document.getElementById("loc26").style.background="lightgreen";
				
				//Quiz Notification
				document.getElementById("hintdec").innerHTML="Attempt the task given below!";
				document.getElementById("hintdec").style.color="red";
				document.getElementById("hintdec").style.display = "block";
				
				//Activating Quiz div
				document.getElementById("quizdiv").style.display = "block";
			}
			
		}
		else{
			document.getElementById("hintdec").innerHTML="Length of encrypted text and plain text must be same."
			document.getElementById('hintdec').style.color="red";
			document.getElementById('hintdec').style.fontWeight="bold";
		}
	}
function viewresult(){
var qans=0;
var selected=0;

//checking for total marked answers
if(document.getElementById("op11").checked==true){
	selected=selected+1;
}
if(document.getElementById("op12").checked==true){
	selected=selected+1;
}
if(document.getElementById("op13").checked==true){
	selected=selected+1;
}
if(document.getElementById("op14").checked==true){
	selected=selected+1;
}
if(document.getElementById("op21").checked==true){
	selected=selected+1;
}
if(document.getElementById("op22").checked==true){
	selected=selected+1;
}
if(document.getElementById("op31").checked==true){
	selected=selected+1;
}
if(document.getElementById("op32").checked==true){
	selected=selected+1;
}
if(document.getElementById("op33").checked==true){
	selected=selected+1;
}
if(document.getElementById("op34").checked==true){
	selected=selected+1;
}
if(document.getElementById("op41").checked==true){
	selected=selected+1;
}
if(document.getElementById("op42").checked==true){
	selected=selected+1;
}
if(document.getElementById("op43").checked==true){
	selected=selected+1;
}
if(document.getElementById("op44").checked==true){
	selected=selected+1;
}
if(document.getElementById("op45").checked==true){
	selected=selected+1;
}
if(document.getElementById("op51").checked==true){
	selected=selected+1;
}
if(document.getElementById("op52").checked==true){
	selected=selected+1;
}
if(document.getElementById("op53").checked==true){
	selected=selected+1;
}
if(document.getElementById("op54").checked==true){
	selected=selected+1;
}

if(selected==5){
//checking users response
if(document.getElementById("op11").checked==true){
	document.getElementById("lop11").style.color = 'red'; // red or #fffff
}
if(document.getElementById("op12").checked==true){
	document.getElementById("lop12").style.color = 'red';
}
if(document.getElementById("op13").checked==true){
	document.getElementById("lop13").style.color = 'red';
}
if(document.getElementById("op14").checked==true){
	document.getElementById("lop14").style.color = 'red';
}
if(document.getElementById("op21").checked==true){
	document.getElementById("lop21").style.color = 'red';
}
if(document.getElementById("op22").checked==true){
	document.getElementById("lop22").style.color = 'red';
}
if(document.getElementById("op31").checked==true){
	document.getElementById("lop31").style.color = 'red';
}
if(document.getElementById("op32").checked==true){
	document.getElementById("lop32").style.color = 'red';
}
if(document.getElementById("op33").checked==true){
	document.getElementById("lop33").style.color = 'red';
}
if(document.getElementById("op34").checked==true){
	document.getElementById("lop34").style.color = 'red';
}
if(document.getElementById("op41").checked==true){
	document.getElementById("lop41").style.color = 'red';
}
if(document.getElementById("op42").checked==true){
	document.getElementById("lop42").style.color = 'red';
}
if(document.getElementById("op43").checked==true){
	document.getElementById("lop43").style.color = 'red';
}
if(document.getElementById("op44").checked==true){
	document.getElementById("lop44").style.color = 'red';
}
if(document.getElementById("op45").checked==true){
	document.getElementById("lop45").style.color = 'red';
}
if(document.getElementById("op51").checked==true){
	document.getElementById("lop51").style.color = 'red';
}
if(document.getElementById("op52").checked==true){
	document.getElementById("lop52").style.color = 'red';
}
if(document.getElementById("op53").checked==true){
	document.getElementById("lop53").style.color = 'red';
}
if(document.getElementById("op54").checked==true){
	document.getElementById("lop54").style.color = 'red';
}





//checking correct answers
if(document.getElementById("op11").checked==true){
	qans=qans+1;
	}
if(document.getElementById("op22").checked==true){
	qans=qans+1;
	}
if(document.getElementById("op32").checked==true){
	qans=qans+1;
	}
if(document.getElementById("op42").checked==true){
	qans=qans+1;
	}
if(document.getElementById("op53").checked==true){
	qans=qans+1;
	}
	//marking correct answers
	document.getElementById("lop11").style.color = '#2fd677'; 
	document.getElementById("lop22").style.color = '#2fd677'; 
	document.getElementById("lop32").style.color = '#2fd677'; 
	document.getElementById("lop42").style.color = '#2fd677'; 
	document.getElementById("lop53").style.color = '#2fd677'; 
	
	//Rating according to number of correct answers
	if(qans<=2){
		document.getElementById('score').innerHTML="Beginner! Your score is "+qans+"/5.";
		document.getElementById("score").style.color = 'red';
	}
	else if(qans<5 && qans>2){
		document.getElementById('score').innerHTML="Amazing! Your score is "+qans+"/5.";
		document.getElementById("score").style.color = 'blue';
	}
	else{
		document.getElementById('score').innerHTML="Extraordinary! Your score is "+qans+"/5.";
		document.getElementById("score").style.color = '#2fd677'; //light green
	}
	
	document.getElementById('quizsubmit').disabled= true;
	document.getElementById('quizsubmit').style.backgroundColor='grey';
	}
	else{
		document.getElementById('score').innerHTML="Attempt all questions!";
		document.getElementById("score").style.color = 'red';
	}
}

