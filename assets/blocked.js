
var preset = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
    list0 = ["0", "0", "0", "0"],
    list1 = ["3", "8", "9", "6"],
    list2 = ["0", "0", "0", "0"];

createList("list0", list0);
createList("list1", list1);
createList("list2", list2);

function intToList(n) {
    return String(n).split('').map(function (digit) {
        return +digit;
    });
}

function createList(elementId, items) {
    var listView = document.createElement("ul");
    listView.id = elementId;

    items.forEach(function (item, index) {
        if (preset.includes(index)) {
            var separator = createListItem(',', index, true, elementId == "list1");
            separator.className = "separator";
            separator.opacity = 1;
            listView.appendChild(separator);
        }
        var listViewItem = createListItem(item, index, false, elementId == "list1");
        listView.appendChild(listViewItem);
    });

    var listContainer = document.getElementById("wrap");
    var existingList = document.getElementById(elementId);
    if (existingList) {
        existingList.replaceWith(listView);
    } else {
        listContainer.appendChild(listView);
    }
}
function createListItem(content, index, isSeparator, transparent) {
    var listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(content));
    if (transparent) {
        listItem.style.opacity = 1;
    }
    else {
        listItem.style.opacity = 0;
    }
    return listItem;
}
function checkLists(oldList, newList) {
    oldList.forEach(function (oldItem, index) {
        var newItem = newList[index];
        if (oldItem !== newItem) {
            animate(index, oldItem, newItem);
        }
    });
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
            if (document.getElementById("list1").children[id].innerHTML != digitOld) {
                document.getElementById("list1").children[id].innerHTML = digitOld;
            }
        }
        if (digitNew > digitOld) {
            moveUp(id, "list1", "list2");
        }
        //if (digitOld > digitNew) {
        //    moveDown(id, "list1", "list0");
        //}
    }
}

function moveUp(id, name1, name2) {
    document.getElementById(name2).children[id].style.opacity = 0.01;
    let pos = 0;
    idInt = setInterval(frame, 25);
    function frame() {
        if (pos == 100) {
            clearInterval(idInt);
        } else {
            pos++;
            opac2 = parseFloat(document.getElementById(name2).children[id].style.opacity);
            document.getElementById(name1).children[id].style.opacity -= 1 / 100;
            document.getElementById(name2).children[id].style.opacity = opac2 + 1/100;
            document.getElementById(name1).children[id].style.top = -pos + "px";
            document.getElementById(name2).children[id].style.top = -pos + "px";
        }
    }
}

function moveDown(id, name1, name2) {
    document.getElementById(name2).children[id].style.opacity = 0.1;
    let pos = 0;
    let idInt = setInterval(frame, 25);
    function frame() {
        if (pos == 100) {
            clearInterval(idInt);
        } else {
            pos++;
            opac2 = parseFloat(document.getElementById(name2).children[id].style.opacity);
            document.getElementById(name1).children[id].style.opacity -= 1 / 100;
            document.getElementById(name2).children[id].style.opacity = opac2 + 1/100;
            document.getElementById(name1).children[id].style.top = pos + "px";
            document.getElementById(name2).children[id].style.top = pos + "px";
        }
    }
}

function updateLists(listIds, itemArrays) {
    listIds.forEach(function (listId, index) {
        var listElement = document.getElementById(listId);
        if (listElement) {
            listElement.parentNode.removeChild(listElement);
        }
        createList(listId, itemArrays[index]);
    });

    compareAndAnimate(itemArrays);
}
function compareAndAnimate(itemArrays) {
    var maxLength = Math.max(itemArrays[0].length, itemArrays[1].length, itemArrays[2].length);
    for (var i = 0; i < maxLength; i++) {
        var currentItem = itemArrays[0][i],
            nextItem = itemArrays[1][i];
        if (currentItem !== nextItem) {
            checkLists(itemArrays[0], itemArrays[1]); // comparing list0 and list1
            break;
        }
    }

    for (var i = 0; i < maxLength; i++) {
        var currentItem = itemArrays[1][i],
            nextItem = itemArrays[2][i];
        if (currentItem !== nextItem) {
            checkLists(itemArrays[1], itemArrays[2]); // comparing list1 and list2
            break;
        }
    }
}

updateLists(["list0", "list1", "list2"], [list0, list0, list1]);

