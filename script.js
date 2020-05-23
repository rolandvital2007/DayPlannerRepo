$(document).ready(function () {

  var now = moment().format('MMMM Do YYYY');//the reason we have this is to put it on the top of the page

  var nowHour24 = parseInt(moment().format('H'));//we have this, to get the current time, and change all the DIVs relative to the current time     
  //we console log to see the current time, and write everythign below based on oit
  var $dateHeading = $('#currentDay');
  $dateHeading.text(now);
  //write a function that goes through all the DIVs and identifies the last digit relative to the current time
  //if nowHour24 = 12, everything before is red, everything after is green

  var divArray = document.getElementsByTagName('div') //we used getElementByTagName to get an array of all the divs. 


  for (i = 0; i < divArray.length; i++) {//we write a for loop to go through all the divs, and change the colors/classname based on the current time

    if (divArray[i].id > nowHour24) {
      divArray[i].classList.add("future")
    }
    else if (divArray[i].id < nowHour24) {
      divArray[i].classList.add("past")
    }
    else if (divArray[i].id == nowHour24) {
      divArray[i].classList.add("present")
    }
  }
  
  //hint for localStorage
  //use the ID of hwat you're saving, and use (whatever textArea variable) -- you're going to have to set a variable for each textbox
  //use the .value method to get the input. 
  //use localStorage.setItem("label","value") - in this case, "value" should be replaced with whatever the value of the textarea is next to it. you can use Sibling (a javascript function) to detect what is next to the save button you're pressing. i would also set the "label" to be the ID
  //use localStorage.getItem - to get what is saved before, and write. put this at the beginning of the document


  $(".saveBtn").on("click", function () {
    var input = $(this).parent().children(".description").val();
    console.log(input);
    var hour = $(this).parent().attr("id")
    localStorage.setItem(hour, input);

  })
  var hour9Text = $("#9").children(".description")
  var hour9Val = localStorage.getItem("9")
      hour9Text.val(hour9Val)

  var hour10Text = $("#10").children(".description")
  var hour10Val = localStorage.getItem("10")
      hour10Text.val(hour10Val)

  var hour11Text = $("#11").children(".description")
  var hour11Val = localStorage.getItem("11")
      hour11Text.val(hour11Val)

  var hour12Text = $("#12").children(".description")
  var hour12Val = localStorage.getItem("12")
      hour12Text.val(hour12Val)

  var hour13Text = $("#13").children(".description")
  var hour13Val = localStorage.getItem("13")
      hour13Text.val(hour13Val)

  var hour14Text = $("#14").children(".description")
  var hour14Val = localStorage.getItem("14")
      hour14Text.val(hour14Val)

  var hour15Text = $("#15").children(".description")
  var hour15Val = localStorage.getItem("15")
      hour15Text.val(hour15Val)

  var hour16Text = $("#16").children(".description")
  var hour16Val = localStorage.getItem("16")
      hour16Text.val(hour16Val)

  var hour17Text = $("#17").children(".description")
  var hour17Val = localStorage.getItem("17")
      hour17Text.val(hour17Val)

})