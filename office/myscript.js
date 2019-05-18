 function handleChange(input) {
	 try{
	 if (input.value > 100 )  throw "Give with in 100"; 
	 if (isNaN(input.value )) throw "Give the number";
	 }
	 
    catch(err){
		document.getElementById("error").innerHTML= err
		 input.value = ""
	}
  }
function add(){
	var m=document.getElementById("identy").value
	if(m==""){
		return document.getElementById("nameerror").innerHTML= "NAME required"
	}
	var a=document.getElementById("first").value
	if(a==""){
		return document.getElementById("error").innerHTML= " TAMILMARK required"
	}
	var b=document.getElementById("second").value
	if(b==""){
		return document.getElementById("error").innerHTML= "ENGLISHMARK required"
	}
	var c=document.getElementById("third").value
	if(c==""){
		return document.getElementById("error").innerHTML= "MATHSMARK required"
	}
	var d=document.getElementById("fourth").value
	if(d==""){
		return document.getElementById("error").innerHTML= "SCIENCEMARK required"
	}
	var e=document.getElementById("fifth").value
	if(e==""){
		return document.getElementById("error").innerHTML= "SOCIALMARK required"
	}
	

	var addone=Number(document.getElementById("first").value);
	var addsecond=Number(document.getElementById("second").value);
	var addthird=Number(document.getElementById("third").value);
	var addfourth=Number(document.getElementById("fourth").value)
	var addfifth=Number(document.getElementById("fifth").value);
	
	var total=addone+addsecond+addthird+addfourth+addfifth;
	alert(total)
	document.getElementById('demo').innerHTML = ("Total score: "+total)
	console.log("hai");
	
	var sum=total/5
	alert(sum)
	var name =document.getElementById("identy").value

if (sum <=21) {
    document.getElementById('grade').innerHTML = (name.toUpperCase()+":"+" "+"GRADE E")
  }
  else if (sum > 21 && 41 > sum) {
    document.getElementById('grade').innerHTML = (name.toUpperCase()+":"+" "+"GRADE D")
  } 
  else if (sum>41 && 61>sum){
		document.getElementById('grade').innerHTML = (name.toUpperCase()+":"+" "+"GRADE C")
		
	}
	else if (sum>61 && 81>sum){
		document.getElementById('grade').innerHTML = (name.toUpperCase()+":"+" "+"GRADE B")
		
	}
	else if (sum>81 && 101>sum){
		document.getElementById('grade').innerHTML = (name.toUpperCase()+":"+" "+"GRADE A")
	}
}