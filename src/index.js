var tabletext = "";
var i, j;
var cursor = "x";
var player = 1;

function cellClick() {
  if (this.innerHTML !== "o" && this.innerHTML !== "x") {
    this.innerHTML = cursor; // The function returns the product of p1 and p2
    checkWinner();
    if (cursor == "o") {
      cursor = "x";
      player = 2;
    } else {
      cursor = "o";
      player = 1;
    }
  }
}

function checkWinner() {
  var table = document.getElementById("ttttable");
  // Check columns
  for (var i = 0; i < 5; i++) {
    var winner = true;
    for (var j = 0; j < 5; j++) {
      if (table.rows[i].cells[j].innerHTML !== cursor) {
        winner = false;
      }
    }
    if (winner) {
      alert("Player " + player + " won!");
    }
  }
  // Check rows
  for (var i = 0; i < 5; i++) {
    var winner = true;
    for (var j = 0; j < 5; j++) {
      if (table.rows[j].cells[i].innerHTML !== cursor) {
        winner = false;
      }
    }
    if (winner) {
      alert("Player " + player + " won!");
    }
  }
  // Check diagonal
  for (var i = 0; i < 5; i++) {
    var winner = true;
    if (table.rows[i].cells[i].innerHTML !== cursor) {
      winner = false;
    }
  }
  if (winner) {
    alert("Player " + player + " won!");
  }
}

tabletext += "<table id=ttttable>\n";
for (i = 0; i < 5; i++) {
  tabletext += "<tr>\n";
  for (j = 0; j < 5; j++) {
    tabletext += "<td>    </td>";
  }
  tabletext += "</tr>\n";
}
tabletext += "</table>\n";

document.getElementById("board").innerHTML = tabletext;

var table = document.getElementById("ttttable");
for (var i = 0, row; (row = table.rows[i]); i++) {
  for (var j = 0, col; (col = row.cells[j]); j++) {
    col.addEventListener("click", cellClick, false);
  }
}
