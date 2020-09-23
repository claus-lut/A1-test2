var tabletext = "";
var i, j;

tabletext += "<table>\n";
for (i = 0; i < 5; i++) {
  tabletext += "<tr>\n";
  for (j = 0; j < 5; j++) {
    tabletext += "<th>    </th>";
  }
  tabletext += "</tr>\n";
}
tabletext += "</table>\n";

document.getElementById("board").innerHTML = tabletext;
