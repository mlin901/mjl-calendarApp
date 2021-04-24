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
// DONE - Add event listener for save buttons
// DONE - make save button save timeblock item 
//       (if there is one) to local storage
//  DONE - Make save timeblock items show up when page is refreshed (getItem, or
//          something like that)
// Add date to local storage keys?
// Use Google fonts
// width of text column
// Spacing between "rows"
// Reset
// IP - Add main [DONE], form[DONE], etc. - semantic HTML
// Q --- Why does button remain clicked?   ********
// Add clear tasks button?

// var rootEl = $('#root'); //?????
var dayDisplayEl = $('#currentDay');
var inputFormEl = $('.form-control');
var inputGroupEl = $('.input-group');
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
    //For each input form...
    inputFormEl.each(function() {
        // Get the ID...
        var inputFieldId = this.id;
        // And use it to get data for the field
        var lsItem = localStorage.getItem('mjlCalendar_' + inputFieldId);
        // If there is data for the field, populate the field
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
    inputFormValue = inputForm[0].value;
    // If there's text in the form...
    if (inputFormValue) {
        // Store in local storage using the field ID as the key
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
