// let listOne = document.querySelector("#value");
let tableOne = document.querySelector('#tableOne');
let tableTwo = document.querySelector('#tableTwo');
let newAmount = document.querySelector('#amount');
let total = 0;
let flag = 0,flag1=0,change=0;
let content = new Map();

function myFunction() {
  let names = document.getElementById("names").value;
  let amount = document.getElementById("amount").value;

  if(amount==="")alert("Amount can't be empty");
  else 
  {
    list(names, amount);
    finalList(names,amount);
  }
  

  newAmount.value="";
  
}


function finalList(names,amount){

    amount=parseInt(amount);

    if(content.has(names)===false)
    {
        content.set(names,amount);
    }
    else 
    {
        var set = content.get(names);
        set+=amount
        content.set(names,set);
        set=0;
    }

    // content.set(names,set);

    if (flag1 === 0) {
        var caption =tableOne.createCaption();
        caption.innerHTML="Total Bill";
    
        var thead = tableOne.createTHead();
        var headerRow = thead.insertRow();
    
        var headerCell1 = headerRow.insertCell(0);
        var headerCell2 = headerRow.insertCell(1);
        var headerCell3 = headerRow.insertCell(2);
    
        headerCell1.innerHTML = 'Name';
        headerCell2.innerHTML = 'Amount';
        headerCell3.innerHTML = 'Time';
    
        flag1=1;
    
      }


      for (var i = 0; i < tableOne.rows.length; i++) {
        var currentRow = tableOne.rows[i];
  
        // Assuming you want to update based on the content of the second cell (index 1)
        var cellValue = currentRow.cells[0].innerHTML;
  
        // Check if the current row matches the search criteria
        if (cellValue === names) {
          // Update the content of the cell with the new value
          currentRow.cells[1].innerHTML = content.get(names);
          var currentDate = new Date();
          var date = currentDate.toLocaleDateString();
          var time = currentDate.toLocaleTimeString();
          
          currentRow.cells[2].innerHTML=date+" "+time;
          // Break the loop if you only want to update the first matching row
          // Remove this line if you want to update all matching rows
          change=1;
          break;
        }
        
      
        // cell3.innerHTML = date + " " + time;
      }
     
        if(change==0)
        {

            let tableRow = tableOne.insertRow();
    
            var cell1 = tableRow.insertCell(0);
            var cell2 = tableRow.insertCell(1);
            var cell3 = tableRow.insertCell(2);


        cell1.innerHTML = names;
        cell2.innerHTML = content.get(names);

        var currentDate = new Date();
        var date = currentDate.toLocaleDateString();
        var time = currentDate.toLocaleTimeString();
      
        cell3.innerHTML = date + " " + time;
        }
    change=0;


}



function list(names, amount) {

  if (flag === 0) {
    var caption =tableTwo.createCaption();
    caption.innerHTML="History";

    var thead = tableTwo.createTHead();
    var headerRow = thead.insertRow();

    var headerCell1 = headerRow.insertCell(0);
    var headerCell2 = headerRow.insertCell(1);
    var headerCell3 = headerRow.insertCell(2);

    headerCell1.innerHTML = 'Name';
    headerCell2.innerHTML = 'Amount';
    headerCell3.innerHTML = 'Time';

    flag=1;

  }

  let tableRow = tableTwo.insertRow();

  var cell1 = tableRow.insertCell(0);
  var cell2 = tableRow.insertCell(1);
  var cell3 = tableRow.insertCell(2);

  cell1.innerHTML = names;
  cell2.innerHTML = amount;

  var currentDate = new Date();
  var date = currentDate.toLocaleDateString();
  var time = currentDate.toLocaleTimeString();

  cell3.innerHTML = date + " " + time;
}
