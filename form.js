
const mybtn = document.querySelector(".btn")
mybtn.addEventListener("click", ()=>{
  var row;
  var ele;
  var gender
var ele = document.getElementsByName('gender');
      
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked){
        gender  = ele[i].value;
         
    }
  }

  var checkboxes=document.querySelectorAll('.checkbox')
  var food=[]
  for(j = 0; j < checkboxes.length; j++){
  
  if(checkboxes[j].checked){
    food.push(checkboxes[j].value)
  }
}
  

    
    const formData= {};
    formData["firstname"]=     document.getElementById("first-name").value;
    formData["lastname"] =     document.getElementById("last-name").value;
    formData["address"]  =     document.getElementById("address").value;
    formData["pincode"]  =     document.getElementById("pincode").value;
    formData["gender"]   =     gender
    formData["food"]     =     food;
    formData["state"]    =     document.getElementById("state").value;
    formData["country"]  =     document.getElementById("country").value;
    

  
  
     row=`<tr>
                    <td>${formData["firstname"]}</td>
                    <td>${formData["lastname"]}</td>
                    <td>${formData["address"]}</td>
                    <td>${formData["pincode"]}</td>
                    <td>${formData["gender"]}</td>
                    <td>${formData["state"]}</td>
                    <td>${formData["country"]}</td>
                    <td>${formData["food"]}</td>
                  
                </tr>`
    const tr=document.createElement("tr")
    tr.innerHTML=row
    document.querySelector("#myTable").appendChild(tr)
    clear();
}
)
function clear(){
  document.getElementById("first-name").value='';
  document.getElementById("last-name").value=''
  
  document.getElementById("pincode").value=''
  document.getElementById("address").value=''
  document.getElementById("state").value=''
  document.getElementById("country").value=''
 
}

  
