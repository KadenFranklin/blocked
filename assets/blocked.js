// first thing should be a call to the twitter api to get the # of blocked accounts
// store that in a variable and send it to _func()  intToString(integ){ }

var digitsOld = [], digitsNew = [], list0 = ["0", "0", "0", "0"], list1 = ["3", "8", "9", "6"], list2 = ["0", "0", "0", "0"];

makeUL(list0, "list0");
makeUL(list0, "list1");
makeUL(list2, "list2");

function intToList(n){
  digits = String(n)
  .split('')
  .map(n);
  return digits;
}

function makeUL(array, varName) {
  var listView = document.createElement("ul");
  listView.id = varName;
  var x = [];
  if (array.length > 3) {
    x = [3];
  }
  if (array.length > 6) {
    x = [3, 6];
  }
  if (array.length > 9) {
    x = [3, 6, 9];
  }
  if (array.length > 12) {
    x = [3, 6, 9, 12];
  }
  if (array.length > 15) {
    x = [3, 6, 9, 12, 15];
  }
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < x.length; j++) {
      if (i == x[j]) {
        var listViewItem = document.createElement("li");
        listViewItem.className = "seperator";
        if (listView.id != "list1") {
          listViewItem.style.opacity = 0;
        } else {
          listViewItem.style.opacity = 1;
        }
        // set position x and y
        listViewItem.appendChild(document.createTextNode(","));
        listView.appendChild(listViewItem);
      }
    }
    var listViewItem = document.createElement("li");
    listViewItem.className = "";
    if (listView.id != "list1") {
      listViewItem.style.opacity = 0;
    } else {
      listViewItem.style.opacity = 1;
    }
    // set position x and y
    listViewItem.appendChild(document.createTextNode(array[i]));
    listView.appendChild(listViewItem);
  }
  return document.getElementById("wrap").appendChild(listView);
}

function checkLists(x, y) {
  for (var i = 0, c = x.length; i < c; i++) {
    if (x[i] != y[i]) {
      animate(i, x[i], y[i]);
    }
  }
}

function animate(id, digitOld, digitNew) {
  var sumChange = digitNew - digitOld;
  if (sumChange <= 0) {
    sumChange = digitOld - digitNew;
  }
  if (id >= 15) {
    id += 1;
  }
  if (id >= 12) {
    id += 1;
  }
  if (id >= 9) {
    id += 1;
  }
  if (id >= 6) {
    id += 1;
  }
  if (id >= 3) {
    id += 1;
  }
  if (digitOld.length == digitNew.length) {
    for (i = 0; i < sumChange; i++) {
      if ( document.getElementById("list2 li:nth-child(" + id + ")").innerText ==",") {
        document.getElementById("list2").children[id].innerHTML = digitNew;
      }
      if ( document.getElementById("list1").children[id].innerHTML != digitOld) {
        document.getElementById("list1").children[id].innerHTML = digitOld;
      }
    }
    if (digitNew > digitOld) {
      doMove(id, "list1", "list2");
    }
    if (digitOld > digitNew) {
      moveDown(id, "list1", "list0");
    }
  }
}

function reset(id, name1, name2){
  var val1 =   document.getElementById(name1).children[id].innerHTML;
  val2 = document.getElementById(name2).children[id].innerHTML;
  document.getElementById(name1).children[id].innerHTML = val2;
  document.getElementById(name2).children[id].innerHTML = val1;  
  document.getElementById(name1).children[id].style.top = 0 +'px';
  document.getElementById(name2).children[id].style.top = 0 +'px';
  document.getElementById("list0").children[id].style.opacity = 0;
  document.getElementById("list1").children[id].style.opacity = 1;
  document.getElementById("list2").children[id].style.opacity = 0;
}

function doMove(id, name1, name2) {
  document.getElementById(name2).children[id].style.opacity = 0.01;
  let pos = 0;
  idInt = setInterval(frame, 20);
  function frame() {
    if (pos == 100) {
      reset(id, name1, name2);
      clearInterval(idInt);
    } else {
      pos++;
      opac2 = parseFloat(document.getElementById(name2).children[id].style.opacity);
      document.getElementById(name1).children[id].style.opacity -= 1/100;
      document.getElementById(name2).children[id].style.opacity = opac2 + 0.01;
      document.getElementById(name1).children[id].style.top = -pos + "px";
      document.getElementById(name2).children[id].style.top = -pos + "px";
    }
  }
}

function moveDown(id, name1, name2) {
  document.getElementById(name2).children[id].style.opacity = 0.1;
  let pos = 0;
  let idInt = setInterval(frame, 20);
  function frame() {
    if (pos == 100) {
      reset(id, name1, name2);
      clearInterval(idInt);
    } else {
      pos ++;
      opac2 = parseFloat(document.getElementById(name2).children[id].style.opacity);
      document.getElementById(name1).children[id].style.opacity -= 1/100;
      document.getElementById(name2).children[id].style.opacity = opac2 + 0.01;
      document.getElementById(name1).children[id].style.top = pos + "px";
      document.getElementById(name2).children[id].style.top = pos + "px";
    }
  }
}

function replaceUL(a0, a1, a2){
  if (a0.length > 3) {
    x0 = [3];
  }
  if (a0.length > 6) {
    x0 = [3, 6];
  }
  if (a0.length > 9) {
    x0 = [3, 6, 9];
  }
  if (a0.length > 12) {
    x0 = [3, 6, 9, 12];
  }
  if (a0.length > 15) {
    x0 = [3, 6, 9, 12, 15];
  }
  if (document.getElementById("list0")){
    var newElement = document.createElement("ul");
    for (var i = 0; i < a0.length; i++) {
      for (var j = 0; j < x0.length; j++) {
        if (i == x0[j]) {
          var listViewItem = document.createElement("li");
          listViewItem.className = "seperator";
          listViewItem.style.opacity = 0;
          // set position, x and y
          listViewItem.appendChild(document.createTextNode(","));
          newElement.appendChild(listViewItem);
        }
      }
      var listViewItem = document.createElement("li");
      listViewItem.className = "";
      listViewItem.style.opacity = 0;
      // set position, x and y
      listViewItem.appendChild(document.createTextNode(a0[i]));
      newElement.appendChild(listViewItem);
    }
    newElement.id = "list0";
    var lis0 = document.getElementById('list0');
    lis0.replaceWith(newElement);
  }
  if (a1.length > 3) {
    x1 = [3];
  }
  if (a1.length > 6) {
    x1 = [3, 6];
  }
  if (a1.length > 9) {
    x1 = [3, 6, 9];
  }
  if (a1.length > 12) {
    x1 = [3, 6, 9, 12];
  }
  if (a1.length > 15) {
    x1 = [3, 6, 9, 12, 15];
  }
  if (document.getElementById("list1")){
    var newElement = document.createElement("ul");
    for (var i = 0; i < a1.length; i++) {
      for (var j = 0; j < x1.length; j++) {
        if (i == x1[j]) {
          var listViewItem = document.createElement("li");
          listViewItem.className = "seperator";
          listViewItem.style.opacity = 1;
          // set position, x and y
          listViewItem.appendChild(document.createTextNode(","));
          newElement.appendChild(listViewItem);
        }
      }
      var listViewItem = document.createElement("li");
      listViewItem.className = "";
      listViewItem.style.opacity = 1;
      // set position, x and y
      listViewItem.appendChild(document.createTextNode(a1[i]));
      newElement.appendChild(listViewItem);
    }
    newElement.id = "list1";
    var lis1 = document.getElementById('list1');
    lis1.replaceWith(newElement);
  }
  if (a2.length > 3) {
    x2 = [3];
  }
  if (a2.length > 6) {
    x2 = [3, 6];
  }
  if (a2.length > 9) {
    x2 = [3, 6, 9];
  }
  if (a2.length > 12) {
    x2 = [3, 6, 9, 12];
  }
  if (a2.length > 15) {
    x2 = [3, 6, 9, 12, 15];
  }
  if (document.getElementById("list2")){
    var newElement = document.createElement("ul");
    for (var i = 0; i < a2.length; i++) {
      for (var j = 0; j < x2.length; j++) {
        if (i == x2[j]) {
          var listViewItem = document.createElement("li");
          listViewItem.className = "seperator";
          listViewItem.style.opacity = 0;
          // set position, x and y
          listViewItem.appendChild(document.createTextNode(","));
          newElement.appendChild(listViewItem);
        }
      }
      var listViewItem = document.createElement("li");
      listViewItem.className = "";
      listViewItem.style.opacity = 0;
      // set position, x and y
      listViewItem.appendChild(document.createTextNode(a2[i]));
      newElement.appendChild(listViewItem);
    }
    newElement.id = "list2";
    var lis2 = document.getElementById('list2');
    lis2.replaceWith(newElement);
  }
  if ( a0[a0.length - 1] > a1[a1.length - 1]){
    checkLists(a0, a1);
  }
  if ( a1[a1.length - 1] < a2[a2.length - 1]){
    checkLists(a1, a2);
  }
}

// setTimeout('', 3000);
replaceUL(list0, list1, list2);
