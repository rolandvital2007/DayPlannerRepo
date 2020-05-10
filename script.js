$(document).ready(function() {

    const now = moment().format('MMMM Do YYYY');//the reason we have this is to put it on the top of the page

    let nowHour24 = parseInt(moment().format('H'));//we have this, to get the current time, and change all the DIVs relative to the current time     
    //we console log to see the current time, and write everythign below based on oit
    let $dateHeading = $('#currentDay');
    $dateHeading.text(now);
    //write a function that goes through all the DIVs and identifies the last digit relative to the current time
    //if nowHour24 = 12, everything before is red, everything after is green

var divArray = document.getElementsByTagName('div') //we used getElementByTagName to get an array of all the divs. 


for(i=0;i<divArray.length;i++){//we write a for loop to go through all the divs, and change the colors/classname based on the current time
    
    if(divArray[i].id > nowHour24 ){
        divArray[i].classList.add("future")
    }
    else if (divArray[i].id < nowHour24){
        divArray[i].classList.add("past")
    }
    else if (divArray[i].id == nowHour24){
        divArray[i].classList.add("present")
}}

//$(".btnSaveBtn").on("click", function(){
    //localStorage.input = $(".btnSaveBtn");
  //console.log(input)
  //localStorage.setItem(hour, input);
  //const hour = $(this).parent().attr("id")
    //console.log(hour)
    //const input = $(this).parent().siblings(".task").val();
    //console.log(input)
    //localStorage.setItem(hour, input);
//}//)
$(document).on('click','i', function(event) {
    event.preventDefault();  

    if (test) { console.log('click pta before '+ planTextArr); }

    let $index = $(this).attr('save-id');

    let inputId = '#input-'+$index;
    let $value = $(inputId).val();

    planTextArr[$index] = $value;


    if (test) { console.log('value ', $value); }
    if (test) { console.log('index ', $index); }
    if (test) { console.log('click pta after '+ planTextArr); }

    // remove shawdow pulse class
    $(`#saveid-${$index}`).removeClass('shadowPulse');
    localStorage.setItem("storedPlans", JSON.stringify(planTextArr));
  });  
  
  // function to color save button on change of input
  $(document).on('change','input', function(event) {
    event.preventDefault();  
    if (test) { console.log('onChange'); }
    if (test) { console.log('id', $(this).attr('hour-index')); }

    // neeed to check for save button

    let i = $(this).attr('hour-index');

    // add shawdow pulse class
    $(`#saveid-${i}`).addClass('shadowPulse');
  });



} )
