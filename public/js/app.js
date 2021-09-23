"use strict";

/*
=============== 
NAV
===============
*/
var containerSub = document.querySelectorAll('.container-sub');
var btnDown = document.querySelectorAll('.btn-down');
btnDown.forEach(function (btn) {
  var id;
  btn.addEventListener('click', function (e) {
    id = e.target.getAttribute("data-id");
    containerSub[id].classList.toggle('container-show');
  });
});
/*
=============== 
Data Format
===============
*/

var dataFormatElement = document.querySelectorAll('.dataFormat');

if (dataFormatElement !== null) {
  dataFormatElement.forEach(function (dataFormat) {
    var df = dataFormat.textContent.split(/[: -]/);
    var newFormatDate = "".concat(df[2], " ").concat(df[1], " ").concat(df[3]);
    dataFormat.textContent = newFormatDate;
  });
}

;
/*
=============== 
Data Format
===============
*/

var dataNow = document.getElementById('dataNow');

if (dataNow !== null) {
  var data = new Date().toLocaleString();
  dataNow.innerHTML = data;
}

;
/*
=============== 
CATEGORY TRIM
===============
*/

var categoryTableImgElement = document.querySelectorAll('.category__table-img');

if (categoryTableImgElement !== null) {
  categoryTableImgElement.forEach(function (categoryTable) {
    var substr = categoryTable.textContent.substr(0, 50);
    categoryTable.textContent = "".concat(substr, "...");
  });
}

;