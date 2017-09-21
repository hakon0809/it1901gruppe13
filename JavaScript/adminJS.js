/**
 * Created by fredriksvendsen on 19/09/17.
 */
//$('#myTable > tbody:last-child').append('<tr><td></td><td></td><td></td></tr>');


//document.getElementById('addBtn').addEventListener('click', function_test);

function function_test(){
    var name = $("#nameInput").val();
    if (name.length<2) {
        alert("wrong name input");
        return;
    }
    var selectedElement = document.getElementById("jobInput");
    var job = selectedElement.options[selectedElement.selectedIndex].value;
    name = capitalizeName(name);
    job = capitalizeName(job);
    if (job == "Arrangor"){
        job = "Arrangør";
    }
    var hehe = '<tr><td>' + name + '</td><td>' + "?" + '</td><td>' + job + '</td></tr>';
    $('#myTable > tbody:last-child').append(hehe);
}

function capitalizeName(str) {
    str = str.toLowerCase();
    var splittedName = str.split(" ");
    var i = 0;
    var newName = "";
    for (;splittedName[i];){
        if (i>0){
            newName += " ";
        }
        newName += splittedName[i].charAt(0).toUpperCase() + splittedName[i].slice(1);
        i++;
    }
    return newName
}

/*function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}*/

document.getElementById("BTN").addEventListener('click', tester);

function tester(){
    document.getElementById("demo").innerHTML = "hei";
}

function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    /*Make a loop that will continue until
     no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.getElementsByTagName("TR");
        /*Loop through all table rows (except the
         first, which contains table headers):*/
        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
             one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[2];
            y = rows[i + 1].getElementsByTagName("TD")[2];
            //check if the two rows should switch place:
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                //if so, mark as a switch and break the loop:
                shouldSwitch= true;
                break;
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
             and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}