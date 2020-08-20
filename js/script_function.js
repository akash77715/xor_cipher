	var instr;
	var instr2="";
	var key;
	var key2;
	var enc_str="";
	var dec_str="";
	function store(){
		instr=document.getElementById('in_str').value.trim();
		var letters = /^[A-Za-z]+$/;
		if(instr.match(letters)){
		if(instr.length==5){
			//INPUT DISPLAY
			document.getElementById('inchar1').innerHTML=instr.charAt(0);
			document.getElementById('inchar2').innerHTML=instr.charAt(1);
			document.getElementById('inchar3').innerHTML=instr.charAt(2);
			document.getElementById('inchar4').innerHTML=instr.charAt(3);
			document.getElementById('inchar5').innerHTML=instr.charAt(4);
			
			document.getElementById('out1').innerHTML="PLAIN TEXT : " + instr;
			document.getElementById("outenc").style.display="block";
			document.getElementById("out1").style.display="block";
			
			
			document.getElementById("in_strlabel").style.display="none";
			document.getElementById("btn1").style.display="none";
			document.getElementById("btn2").style.display="block";
			document.getElementById("keylabel").style.display="block";
			document.getElementById("inchar").style.display="block";
			
			
		}
		else{
			alert("Enter String with length 5");
		}
		}
		else{
			alert('Please input alphabet characters only');
		}
	}
	function reset(){
		window.location.reload();
	}
	function keystore(){
		var e =  document.querySelector('#key');
		key = e.value;
		//KEY DISPLAY
			document.getElementById('keyb1').innerHTML=key;
			document.getElementById('keyb2').innerHTML=key;
			document.getElementById('keyb3').innerHTML=key;
			document.getElementById('keyb4').innerHTML=key;
			document.getElementById('keyb5').innerHTML=key;
			
			document.getElementById('out2').innerHTML="KEY : " + key;
			document.getElementById("out2").style.display="block";
			
			document.getElementById("cb").style.display="block";
			document.getElementById("keyb").style.display="block";
			
			encrypt();
	}
	function encrypt(){
			//ASCII XOR Calculation
			key_ascii=key.charCodeAt(0);
			op1_ascii=key_ascii^instr.charCodeAt(0);
			op2_ascii=key_ascii^instr.charCodeAt(1);
			op3_ascii=key_ascii^instr.charCodeAt(2);
			op4_ascii=key_ascii^instr.charCodeAt(3);
			op5_ascii=key_ascii^instr.charCodeAt(4);
			
			//OUTPUT DISPLAY
			document.getElementById('outchar1').innerHTML=String.fromCharCode(op1_ascii);
			enc_str=enc_str+String.fromCharCode(op1_ascii);
			document.getElementById('outchar2').innerHTML=String.fromCharCode(op2_ascii);
			enc_str=enc_str+String.fromCharCode(op2_ascii);
			document.getElementById('outchar3').innerHTML=String.fromCharCode(op3_ascii);
			enc_str=enc_str+String.fromCharCode(op3_ascii);
			document.getElementById('outchar4').innerHTML=String.fromCharCode(op4_ascii);
			enc_str=enc_str+String.fromCharCode(op4_ascii);
			document.getElementById('outchar5').innerHTML=String.fromCharCode(op5_ascii);
			enc_str=enc_str+String.fromCharCode(op5_ascii);
			
			document.getElementById("eqlb").style.display="block";
			document.getElementById("outchar").style.display="block";
			document.getElementById('key').disabled = true;
			document.getElementById('btnenc').disabled = true;
			document.getElementById("decrypt").style.display="block";
			document.getElementById('btnenc').style.backgroundColor = 'grey';
			
			document.getElementById('out3').innerHTML="CIPHER TEXT : " + enc_str
			document.getElementById("out3").style.display="block";
	
	}
	function decrypt(){
		instr2=document.getElementById('in_str2').value;
		if(instr2.length==instr.length){
		//INPUT DISPLAY
			document.getElementById('inchar1').innerHTML=instr2.charAt(0);
			document.getElementById('inchar2').innerHTML=instr2.charAt(1);
			document.getElementById('inchar3').innerHTML=instr2.charAt(2);
			document.getElementById('inchar4').innerHTML=instr2.charAt(3);
			document.getElementById('inchar5').innerHTML=instr2.charAt(4);
			
			var e =  document.querySelector('#key2');
			key2 = e.value;
			//KEY DISPLAY
			document.getElementById('keyb1').innerHTML=key2;
			document.getElementById('keyb2').innerHTML=key2;
			document.getElementById('keyb3').innerHTML=key2;
			document.getElementById('keyb4').innerHTML=key2;
			document.getElementById('keyb5').innerHTML=key2;
			
			//ASCII XOR Calculation
			key_ascii=key2.charCodeAt(0);
			op1_ascii=key_ascii^instr2.charCodeAt(0);
			op2_ascii=key_ascii^instr2.charCodeAt(1);
			op3_ascii=key_ascii^instr2.charCodeAt(2);
			op4_ascii=key_ascii^instr2.charCodeAt(3);
			op5_ascii=key_ascii^instr2.charCodeAt(4);
			
			dec_str="";
			//OUTPUT DISPLAY
			document.getElementById('outchar1').innerHTML=String.fromCharCode(op1_ascii);
			dec_str=dec_str+String.fromCharCode(op1_ascii);
			document.getElementById('outchar2').innerHTML=String.fromCharCode(op2_ascii);
			dec_str=dec_str+String.fromCharCode(op2_ascii);
			document.getElementById('outchar3').innerHTML=String.fromCharCode(op3_ascii);
			dec_str=dec_str+String.fromCharCode(op3_ascii);
			document.getElementById('outchar4').innerHTML=String.fromCharCode(op4_ascii);
			dec_str=dec_str+String.fromCharCode(op4_ascii);
			document.getElementById('outchar5').innerHTML=String.fromCharCode(op5_ascii);
			dec_str=dec_str+String.fromCharCode(op5_ascii);
			
			document.getElementById('out4').innerHTML="CIPHER TEXT : " + instr2;
			document.getElementById('out5').innerHTML="KEY : " + key2;
			document.getElementById('out6').innerHTML="PLAIN TEXT : " + dec_str;
			
			document.getElementById("outdec").style.display="block";
			document.getElementById("out4").style.display="block";
			document.getElementById("out5").style.display="block";
			document.getElementById("out6").style.display="block";
			
			document.getElementById("out6").style.color = 'red';
			if(instr==dec_str){
				document.getElementById('in_str2').disabled = true;
				document.getElementById('key2').disabled = true;
				document.getElementById('btndec').disabled = true;
				document.getElementById('btndec').style.backgroundColor = 'grey';
				document.getElementById("out6").style.color = 'green';
			}
			
		}
		else{
			alert("Invalid length!");
		}
	}