var counter = 3;
function Record_Adding() 
{
  counter++;
  var table = document.getElementById("myTable");
if(table.getElementsByClassName('studentRecord').length === 0){
	counter = 1;
}
  var row = table.insertRow(-1);
  row.setAttribute('class', 'studentRecord');
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cell8 = row.insertCell(7);
  var cell9 = row.insertCell(8);
  var cell10 = row.insertCell(9);
  
  cell1.innerHTML = '<input type="checkbox" id="check" onclick="checkBox(this)"><br /><br/><img class="img1" src="down.png" width="25px" onclick="img_click(this)"/>';
  cell2.innerHTML = "Student" +" "+counter;
  cell3.innerHTML = "Teacher" +" "+counter;
  cell4.innerHTML = "Approved" ;
  cell5.innerHTML = "Fall" ;
  cell6.innerHTML = "TA" ;
  cell7.innerHTML = counter+counter+"2"+counter+"44" ;
  cell8.innerHTML = "100%" ;
  cell9.setAttribute('class', 'Del');
  cell9.innerHTML = '<button id="Delete" onclick="Delete(this)">Delete</button>' ;
  cell10.setAttribute('class', 'Edi');
  cell10.innerHTML=  '<button id="Edit" onclick="Edit(this)">Edit</button>';
  alert("New Record Added");

  var table = document.getElementById("myTable");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);



  row.setAttribute('class', 'dropDownTextArea');
  row.setAttribute('id', 'Area');
  cell1.setAttribute('colspan', '8');
  cell1.innerHTML='Advisor:<br /><br />Award Details<br />Summer 1-2014(TA)<br />Budget Number: <br />Tuition Number: <br />Comments:<br /><br /><br />Award Status:<br /><br /><br />';
  
}

function checkBox(row) 
{
    if( row.checked == true)
    {
       var c = row.parentNode.parentNode;
       c.style.backgroundColor="yellow";

       const closest_Del = c.getElementsByClassName( 'Del' )[0];
      
       closest_Del.style.visibility="visible";
       const closest_Edi = c.getElementsByClassName( 'Edi' )[0];
      
       closest_Edi.style.visibility="visible";
    

       var form = document.getElementById('myTable');
       var inputs = form.getElementsByTagName('input');
       var is_checked = false;
       for(var x = 0; x < inputs.length; x++) 
       {
       if(inputs[x].type == 'checkbox') 
       {
        is_checked = inputs[x].checked;
        if(is_checked) break;
       }
      }

    if(is_checked == true)
{
    const collection1 = document.getElementById("button");
    collection1.style.backgroundColor="orange";
    var show_delete=document.getElementById("DELETE");
    show_delete.style.visibility="visible";
}
else
{
    const collection1 = document.getElementById("button");
    collection1.style.backgroundColor="gray";
    var show_delete=document.getElementById("DELETE");
    show_delete.style.visibility="collapse";
}
    
    }
    else
    {
        var c = row.parentNode.parentNode;
        c.style.backgroundColor="white";
        const closest_Del = c.getElementsByClassName( 'Del' )[0];
      
        closest_Del.style.visibility="collapse";
        const closest_Edi = c.getElementsByClassName( 'Edi' )[0];
       
        closest_Edi.style.visibility="collapse";
        
        var form = document.getElementById('myTable');
var inputs = form.getElementsByTagName('input');
var is_checked = false;
for(var x = 0; x < inputs.length; x++) {
    if(inputs[x].type == 'checkbox') {
        is_checked = inputs[x].checked;
        if(is_checked) break;
    }
}

if(is_checked == true)
{
    const collection1 = document.getElementById("button");
    collection1.style.backgroundColor="orange";
    var show_delete=document.getElementById("DELETE");
    show_delete.style.visibility="visible";
}
else
{
    const collection1 = document.getElementById("button");
    collection1.style.backgroundColor="gray";
    var show_delete=document.getElementById("DELETE");
    show_delete.style.visibility="collapse";
}
        
        
    }
}

function Delete(Del) 
{
    var cells = document.getElementById('myTable').getElementsByTagName('tr');
    var i=Del.parentNode.parentNode.rowIndex;

  
        cells[i+1].style.display = "none";
    var i=Del.parentNode.parentNode.rowIndex;
    document.getElementById('myTable').deleteRow(i);
    alert("Record of the student deleted");
    

    
      

    var form = document.getElementById('myTable');
var inputs = form.getElementsByTagName('input');
var is_checked = false;
for(var x = 0; x < inputs.length; x++) {
    if(inputs[x].type == 'checkbox') {
        is_checked = inputs[x].checked;
        if(is_checked) break;
    }
}

if(is_checked == true)
{
    const collection1 = document.getElementById("button");
    collection1.style.backgroundColor="orange";
    var show_delete=document.getElementById("DELETE");
    show_delete.style.visibility="visible";
}
else
{
    const collection1 = document.getElementById("button");
    collection1.style.backgroundColor="gray";
    var show_delete=document.getElementById("DELETE");
    show_delete.style.visibility="collapse";
}

}

function Edit(Edi)
{
    prompt("Edit the details");
}

function img_click(img)
{

    var cells = document.getElementById('myTable').getElementsByTagName('tr');
    var i=img.parentNode.parentNode.rowIndex;

    if (cells[i+1].style.display == "none") {
        cells[i+1].style.display = "block";
      } else {
        cells[i+1].style.display = "none";
      }

    }

        

