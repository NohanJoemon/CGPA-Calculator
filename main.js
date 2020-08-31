
const form = document.cgform;
const grades = ["S","A","B","C","D","E","U"]
const gradepoints = {
	"S":10,
	"A":9,
	"B":8,
	"C":7,
	"D":6,
	"E":4,
	"U":0
};

// ==========  ADDING NEW COURSES  ====================== //
function add() {
    let div = document.createElement("div");
    div.setAttribute("class","eachCourse");

    

    let label1 = document.createElement("label");
    label1.setAttribute("for","courseNum");
    label1.textContent="Course-No: ";
    div.appendChild(label1);

    let input1 = document.createElement("input");
    input1.setAttribute("type","text");
    input1.setAttribute("id","courseNum");
    div.appendChild(input1);

  

    let label2 = document.createElement("label");
    label2.setAttribute("for","credits");
    label2.textContent=" No. of Credits: ";
    div.appendChild(label2);

    let input2 = document.createElement("input");
    input2.setAttribute("type","number");
    input2.setAttribute("id","credits");
    input2.setAttribute("class","credits");
    div.appendChild(input2);

   

    let label3 = document.createElement("label");
    label3.setAttribute("for","grade");
    label3.textContent=" Grade: ";                                                        
    div.appendChild(label3);

    let input3 = document.createElement("select");
    input3.setAttribute("id","grade");
    for (let i = 0; i <grades.length; i++) {
    let option=document.createElement("option");
    option.textContent=grades[i];
    input3.appendChild(option);
    }
    div.appendChild(input3); 

    let input4 = document.createElement("input");
    input4.setAttribute("type","button");
    input4.setAttribute("value","Delete course");
    input4.setAttribute("class","delete");
    input4.onclick = function(e) {
      removeElement(e)
    };
    div.appendChild(input4);

	form.getElementsByClassName("currcg")[0].appendChild(div);

}
add();
form.add.addEventListener('click',function(){
	add();
})


// ========  DELETING COURSES  ======================= //
function removeElement(ev) {
    ev.target.parentElement.parentElement.removeChild(ev.target.parentElement)
  }


// =========  FINDING CGPA  ==========================//

form.addEventListener('submit',function(e){
	e.preventDefault();

	if (document.getElementsByClassName("credits")[0] == undefined){

		if (document.getElementById("prevtcredits").value != "" && document.getElementById("prevcgpa").value != "" ){
	    	var tcredits=parseInt(document.getElementById("prevtcredits").value);
	     	var cgpat=parseFloat(document.getElementById("prevcgpa").value)*tcredits;
	     	form.tcredits.value=tcredits;
			form.cgpa.value=cgpat/tcredits;
            if (tcredits!=0){
	     		form.cgpa.value=cgpat/tcredits;
	     	}
	     	else {
	     		form.cgpa.value=0;
	     	}

	    }
	    else if (document.getElementById("prevtcredits").value == "" && document.getElementById("prevcgpa").value != "") {
	    	form.tcredits.value=0;
			form.cgpa.value=document.getElementById("prevcgpa").value;
	    }
	    else {
		 	form.tcredits.value=0;
			form.cgpa.value=0;
	    }
	}


	else {

		if (document.getElementById("prevtcredits").value != "" && document.getElementById("prevcgpa").value != "" && document.getElementsByClassName("credits")[0].value != "") {
    	var tcredits=parseInt(document.getElementById("prevtcredits").value);
     	var cgpat=parseFloat(document.getElementById("prevcgpa").value)*tcredits;

     	for (let i = 0; i < document.getElementsByClassName("credits").length; i++) {
		 let sel = document.getElementsByTagName("select")[i];
		 var grade = sel.options[sel.selectedIndex].value;
		 let gradepoint = parseInt(gradepoints[grade]);
		 console.log(grade);
		 cgpat = cgpat + parseInt(document.getElementsByClassName("credits")[i].value)*gradepoint;
		 tcredits=tcredits + parseInt(document.getElementsByClassName("credits")[i].value);
		}
    
		form.tcredits.value=tcredits;
		form.cgpa.value=cgpat/tcredits;

	    }
	    else if (document.getElementById("prevtcredits").value != "" && document.getElementById("prevcgpa").value != "" ){
	    	var tcredits=parseInt(document.getElementById("prevtcredits").value);
	     	var cgpat=parseFloat(document.getElementById("prevcgpa").value)*tcredits;
	     	form.tcredits.value=tcredits;
	     	if (tcredits!=0){
	     		form.cgpa.value=cgpat/tcredits;
	     	}
	     	else {
	     		form.cgpa.value=0;
	     	}
			

	    }
	    else if (document.getElementById("prevtcredits").value == "" && document.getElementById("prevcgpa").value != "") {
	    	form.tcredits.value=0;
			form.cgpa.value=document.getElementById("prevcgpa").value;
	    }
	    else {
		 	form.tcredits.value=0;
			form.cgpa.value=0;
	    }
	   
		

		}
    
})

