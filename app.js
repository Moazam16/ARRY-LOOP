// Chapter 17 to 20 ARRAY & LOOP
//Tassk # 1
let multidimesionalArray = [[]];
//task# 2
let multidiArrary = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
];
for (var index in multidiArrary) {
  for (var data of multidiArrary[index]) {
    document.write(data + " ");
  }
  document.write("<br>");
}
//task # 3
for (var i = 1; i <= 10; i++) {
  document.write(i);
  document.write("</br>");
}
// task 4
let table_no = +prompt("Enter a number to show its multiplication table");
let length = +prompt("Enter length mutiplication table");
for (var i = 1; i <= length; i++) {
  document.write(table_no + "*" + i + "=" + table_no * i);
  document.write("</br>");
}
// task 5
let fruits = [
  "apple",
  "banana",
  "mango",
  "orange",
  "strawberry",
  "cantaloupe",
  "boysenberry",
];
for (var index in fruits) {
  for (var data of fruits[index]) {
    document.write(data);
  }
  document.write("</br>");
}
{
  document.write("Element at index 0 is " + fruits[0] + "</br>");
  document.write("Element at index 1 is " + fruits[1] + "</br>");
  document.write("Element at index 2 is " + fruits[2] + "</br>");
  document.write("Element at index 3 is " + fruits[3] + "</br>");
  document.write("Element at index 4 is " + fruits[4] + "</br>");
  document.write("Element at index 5 is " + fruits[5] + "</br>");
  document.write("Element at index 6 is " + fruits[6] + "</br>");
}
// Task 6
var Counting = "COUNTING:";
document.write("</br >" + Counting + "</br></br> ");
for (var i = 1; i <= 15; i++) {
  if (i == 15) {
    document.write(i + "</br>");
  } else {
    document.write(i + ", ");
  }
}
var RECounting = " REVERSE COUNTING:";
document.write("</br >" + RECounting + "</br></br>");
for (var i = 10; i > 0; i--) {
  if (i == 1) {
    document.write(i + "</br>");
  } else {
    document.write(i + ", ");
  }
}
var EVEn = "EVEN:";
document.write("</br >" + EVEn + "</br> </br>");
for (var i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    if (i == 20) {
      document.write(i + "</br>");
    } else {
      document.write(i + ", ");
    }
  }
}
var odd = "ODD:";
document.write("</br >" + odd + "</br></br >");
for (var i = 0; i <= 20; i++) {
  if (i % 2 != 0) {
    if (i == 19) {
      document.write(i + "</br>");
    } else {
      document.write(i + ", ");
    }
  }
}
var SERIRES = "SERIES:";
document.write("</br >" + SERIRES + "</br ></br >  ");
for (var i = 2; i <= 20; i++) {
  if (i % 2 == 0) {
    if (i == 19) {
      document.write(i + "</br>");
    } else {
      document.write(i + "k, ");
    }
  }
}
//Task 7
var search = prompt(" Welcome to IT Bakers: Enter what do you want");
var foodList = ["cake", "apple pie", "cookie", "chips", "patties"];
for (var index in foodList) {
  if (search == foodList[index]) {
    document.write("This item is present at index " + index + "</br>");
    break;
  } else {
    document.write("This item is not availble </br>");
  }
}
//task 8
let arry = [24, 53, 78, 91, 12];
document.write(" </br>Array items:" + arry + "</br> ");
let largeNum = arry[0];

for (let data of arry) {
  if (largeNum < data) {
    largeNum = data;
  }
}
document.write("The largest number is: " + largeNum + " </br> </br>");
//task 9
let arry2 = [24, 53, 78, 91, 12];
document.write("Array items: " + arry2 + "</br>");
let smallestNum = arry2[0];
for (let data of arry2) {
  if (smallestNum > data) {
    smallestNum = data;
  }
}
document.write("The smallest number is: " + smallestNum + "</br> </br>");

//task 10
for (var i = 5; i <= 100; i = i + 5) {
  if (i == 100) {
    document.write(+i);
  } else {
    document.write(i + ", ");
  }
}
