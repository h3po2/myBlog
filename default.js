window.onload = function() {
  var myDate = new Date()
  var month = myDate.getMonth() + 1;
  var temp_year_month = myDate.getFullYear() + "/" + month;
  var year_month = document.getElementById('year_month');
  var txt1 = document.createTextNode(temp_year_month);
  year_month.appendChild(txt1);
  var date = document.getElementById('date');
  var txt2 = document.createTextNode(myDate.getDate());
  date.appendChild(txt2);
  var day = document.getElementById('day');
  var txt3 = document.createTextNode(myDate.getDay());
  day.appendChild(txt3);
}
