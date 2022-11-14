
// const mybtn = document.querySelector(".btn")
// mybtn.addEventListener("click", ()=>{
//     var row=`<tr>
//                     <td>${document.getElementById("firstname").value}</td>
//                     <td>${document.getElementById("lastname").value}</td>
//                     <td>${document.getElementById("gender").value}</td>
//                     <td>${document.getElementById("address").value}</td>
//                     <td>${document.getElementById("pincode").value}</td>
//                     <td>${document.getElementById("state").value}</td>
//                     <td>${document.getElementById("country").value}</td>
                    
                  
//                 </tr>`
//     const tr=document.createElement("tr")
//     tr.innerHTML=row
//     document.querySelector("#myTable").appendChild(tr)
//     clear();
// }
// )

  
  var list1=[];
  var list2=[];
  var list3=[];
  var list4=[];
  var list5=[];
  var list6=[];
  var list7=[];
  var list8=[];
  var n=1;
  var x=0;
  function addRows(){
    var addrown=document.getElementById('table')
    var newrow=addrown.insertRow(n)
    list1[x]=document.getElementById("first-name").value
    list2[x]=document.getElementById("lastname").value
    list3[x]=document.getElementById("address").value
    list4[x]=document.getElementById("pincode").value
    list5[x]=document.getElementById("gender").value
    list6[x]=document.getElementById("state").value
    list7[x]=document.getElementById("country").value

    var cell1=newrow.insertCell(0)
    var cell2=newrow.insertCell(1)
    var cell3=newrow.insertCell(2)
    var cell4=newrow.insertCell(3)
    var cell5=newrow.insertCell(4)
    var cell6=newrow.insertCell(5)
    var cell7=newrow.insertCell(6)
    cell1.innerHTML=list1[x]
    cell2.innerHTML=list2[x]
    cell3.innerHTML=list3[x]
    cell4.innerHTML=list4[x]
    cell5.innerHTML=list5[x]
    cell6.innerHTML=list6[x]
    cell7.innerHTML=list7[x]

clear()


  }
  function clear(){
    document.getElementById("first-name").value='';
    document.getElementById("lastname").value=''
    document.getElementById("gender").value=''
    document.getElementById("pincode").value=''
    document.getElementById("address").value=''
    document.getElementById("state").value=''
    document.getElementById("country").value=''
}
