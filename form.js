

const mybtn = document.querySelector(".btn")
mybtn.addEventListener("click", ()=>{
  var row;
  var ele;
var ele = document.getElementsByName('gender');
      
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked){
        document.getElementById("demo1").innerHTML
              = (ele[i].value);
    }
  }
  
  
  
     row=`<tr>
                    <td>${document.getElementById("first-name").value}</td>
                    <td>${document.getElementById("last-name").value}</td>
                    <td>${document.getElementById("address").value}</td>
                    <td>${document.getElementById("pincode").value}</td>
                    <td>${document.getElementById("demo1").text}</td>
                    <td>${document.getElementById("state").value}</td>
                    <td>${document.getElementById("country").value}</td>
                    <td>${document.getElementById("mySelect").options.item(document.getElementById("mySelect").selectedIndex).text}</td>
                  
                </tr>`
    const tr=document.createElement("tr")
    tr.innerHTML=row
    document.querySelector("#myTable").appendChild(tr)
    clear();
}
)
function clear(){
  document.getElementById("first-name").value='';
  document.getElementById("lastname").value=''
  document.getElementById("demo").value=''
  document.getElementById("pincode").value=''
  document.getElementById("address").value=''
  document.getElementById("state").value=''
  document.getElementById("country").value=''
}

  

 
