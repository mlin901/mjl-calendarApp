// DONE -> get date from moment and display at top of page
// DONE -> Add timeblocks for business hours
// DONE -> Color code timeblocks depending on past, present, future
//        Add bootstrap color classes: 
//              bg-danger (red) for current
//              bg-success (green) for future
//              bg-secondary (grey) for past
// DONE -:> Update color coding with each minute
// IP - CSS cleanup
//      variables for colors 
//      Remove or comment out unused
// DONE - Enable item to be typed in timeblock
// DONE - Add save button for each timeblock 
// IP - Add event listener for save buttons
// make save button save timeblock item 
//  (if there is one) to local storage
// Make save timeblock items show up when page is refreshed (getItem, or
//  something like that)
// Use Google fonts
// width of text column
// Reset
// IP - Add main [DONE], form, etc. - semantic HTML

var rootEl = $('#root'); //?????
var dayDisplayEl = $('#currentDay');
var inputFormEl = $('.form-control');
var inputGroupEl = $('.input-group');
// *********
var formEl = $('.input-group');
var inputFileEl = $('.form-control');
var mainEl = $('.container');



// Function - display the date
function displayDate() {
    var today = moment().format('MMM DD, YYYY');
    // var today = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    dayDisplayEl.text(today);
    timeDependentColor(today);
}

// Function - change input field colors based on past, present, future
function timeDependentColor() {
    var hour = moment().format('HH');  
    // var hour = 12;
    inputGroupEl.each(function() {
        var id = this.id;
        if (id == hour) {
            $(this).children('input').addClass('bg-danger');
            console.log('if statement');
        } else if (id < hour){
            console.log('else statement 1');
            $(this).children('input').addClass('bg-secondary');
        } else {
            console.log('else statement 2');
            $(this).children('input').addClass('bg-success');
        }
    });
}

// Event listener for <main>
mainEl.on('click', 'button', function (event) {
    event.preventDefault();

    var greatGpId = event.currentTarget.parentElement.id +'f';
    var inputForm = $('#' + greatGpId);
    inputFormValue = inputForm[0].value;
    console.log(inputFormValue);
    localStorage.setItem('mjlCalendar_' + greatGpId, inputFormValue);
  
    // DONE ----get value from correct input field
    // THEN ----Store/get-display values in local storage
    // Q --- Why does button remain clicked?

});
  

//Call the function to display the date
displayDate();
setInterval(timeDependentColor, 60000);
// timeDependentColor();
