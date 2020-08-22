	var instr;
	var instr2="";
	var key;
	var key2;
	var enc_str="";
	var dec_str="";
	var view=1;
	function store(){
		instr=document.getElementById('in_str').value.trim();
		var letters = /^[A-Za-z]+$/;
		if(instr.match(letters) && instr.length>0){
			//INPUT DISPLAY
			for(i=0;i<instr.length;i++){
				document.getElementById('inchar1').innerHTML=document.getElementById('inchar1').innerHTML+"<td class='charbox'>"+instr.charAt(i)+"<td>";
			}
			
			
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
			alert("Only alphabetical string is acceptable\nString length can range from 1 to 10.");
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
				document.getElementById('keyb1').innerHTML=document.getElementById('keyb1').innerHTML+"<td class='charbox'>"+key+"<td>";
			}
			
			document.getElementById('out2').innerHTML="KEY : " + key;
			document.getElementById("out2").style.display="block";
			
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
				document.getElementById('outchar1').innerHTML=document.getElementById('outchar1').innerHTML+"<td class='charbox'>"+String.fromCharCode(op1_ascii)+"<td>";
				enc_str=enc_str+String.fromCharCode(op1_ascii);
			}
			
			document.getElementById("eqlb").style.display="block";
			document.getElementById("outchar").style.display="block";
			document.getElementById('key').disabled = true;
			document.getElementById('btnenc').disabled = true;
			document.getElementById("decrypt").style.display="block";
			document.getElementById('btnenc').style.backgroundColor = 'grey';
			document.getElementById('btnenc').value = 'Encrypted';
			
			document.getElementById('out3').innerHTML="CIPHER TEXT : " + enc_str
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
				document.getElementById('inchar1').innerHTML=document.getElementById('inchar1').innerHTML+"<td class='charbox'>"+instr2.charAt(i)+"<td>";
			}
				
			
			
			var e =  document.querySelector('#key2');
			key2 = e.value;
			//KEY DISPLAY
			for(i=0;i<instr2.length;i++){
				document.getElementById('cbox').innerHTML=document.getElementById('cbox').innerHTML+"<td class='eqlbox'><img src='images/xor_icon.png' width='99%' height='90%'><td>";
			}
			
			for(i=0;i<instr2.length;i++){
				document.getElementById('keyb1').innerHTML=document.getElementById('keyb1').innerHTML+"<td class='charbox'>"+key2+"<td>";
			}
			
			
			for(i=0;i<instr.length;i++){
				document.getElementById('eqlt').innerHTML=document.getElementById('eqlt').innerHTML+"<td class='eqlbox'><img src='images/down_arrow_icon.png' width='99%' height='99%'><td>";
			}
			
			dec_str="";
			//ASCII XOR Calculation
			key_ascii=key2.charCodeAt(0);
			
			for(i=0;i<instr2.length;i++){
				op1_ascii=key_ascii^instr2.charCodeAt(i);
				document.getElementById('outchar1').innerHTML=document.getElementById('outchar1').innerHTML+"<td class='charbox'>"+String.fromCharCode(op1_ascii)+"<td>";
				dec_str=dec_str+String.fromCharCode(op1_ascii);
			}
			
			
			document.getElementById('out4').innerHTML="CIPHER TEXT : " + instr2;
			document.getElementById('out5').innerHTML="KEY : " + key2;
			document.getElementById('out6').innerHTML="PLAIN TEXT : " + dec_str;
			
			document.getElementById("outdec").style.display="block";
			document.getElementById("out4").style.display="block";
			document.getElementById("out5").style.display="block";
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
			document.getElementById("hintdec").innerHTML="Length of encrypted text and plain text must be same.<br>Decrypted String mismatched with Original String.";
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
			}
			
		}
		else{
			alert("Invalid length!");
		}
	}
	function view_change(){
		if(view==1){
			document.getElementById("logical").style.display="none";
			document.getElementById("code").style.display="block";
			view=0;
		}
		else{
			document.getElementById("code").style.display="none";
			document.getElementById("logical").style.display="block";
			view=1;
		}
	}