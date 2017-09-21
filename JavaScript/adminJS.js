/**
 * Created by fredriksvendsen on 19/09/17.
 */

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
    while (switching) {
        switching = false;
        rows = table.getElementsByTagName("TR");
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[2];
            y = rows[i + 1].getElementsByTagName("TD")[2];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch= true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}