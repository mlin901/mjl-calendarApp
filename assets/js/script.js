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
// Q --- Why does button remain clicked?   ********


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
        } else if (id < hour){
            $(this).children('input').addClass('bg-secondary');
        } else {
            $(this).children('input').addClass('bg-success');
        }
    });
}

// Adapted from https://stackoverflow.com/questions/38473924/populate-html-form-with-data-saved-on-local-storage
function loadTasks() {
    inputFormEl.each(function() {
        var inputFieldId = this.id;
        var lsItem = localStorage.getItem('mjlCalendar_' + inputFieldId);
        if (lsItem) {
            $('#' + inputFieldId)[0].value = lsItem.trim();
        }
    });
}

// Click event listener for buttons in <main>
mainEl.on('click', 'button', function (event) {
    event.preventDefault();
    // Construct the ID used to get the input form that corresponds
    //   to the clicked button
    var greatGpId = event.currentTarget.parentElement.id +'f';
    var inputForm = $('#' + greatGpId);
    // Get the input text from the input form
    inputFormValue = inputForm[0].value.trim();
    // If there's text in the form...
    if (inputFormValue) {
        // Store in local storage
        localStorage.setItem('mjlCalendar_' + greatGpId, inputFormValue);
    } else {
        alert('Enter a task before clicking the save button');
    }
});


//Call the function to display the date
displayDate();
// Every minute, call the function that sets input field color
//   to indicate past, present, future
setInterval(timeDependentColor, 60000);
// Call function that loads saved tasks from local storage
loadTasks();
