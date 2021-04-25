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
// DONE - width of text column
// DONE - Spacing between "rows"
// NO - Reset
// DONE - Add main [DONE], form[DONE], etc. - semantic HTML
// NO - Add clear tasks button?
// Q --- Why does button remain clicked?   ********


var rootEl = $('#root'); 
var dayDisplayEl = $('#currentDay');
var timeDisplayEl = $('#currentTime');
var formEl = $('.input-group');
var inputFileEl = $('.form-control');
var mainEl = $('.container');

// Adapted from 9-Ins_Event-Delegation class activity
function renderTimeblocks() {
    var hours = [
      ['07', '7 AM'],
      ['08', '8 AM'],
      ['09', '9 AM'],
      ['10', '10 AM'],
      ['11', '11 AM'],
      ['12', '12 AM'],
      ['13', '1 AM'],
      ['14', '2 AM'],
      ['15', '3 AM'],
      ['16', '4 AM'],
      ['17', '5 AM'],
    ];
  
    // Dynamically create timeblocks
    // Create a for-loop to iterate through the hours array.
    for (var i = 0; i < hours.length; i++) {
        // Create form
        var hoursForm = $('<form>');
        // Assign attributes
        hoursForm.addClass('input-group mb-3');
        hoursForm.attr('id', hours[i][0]);
        // Append form
        mainEl.append( hoursForm );

        // Create label span
        var hoursSpan = $('<span>');
        // Assign attributes
        hoursSpan.addClass('input-group-text');
        hoursSpan.attr('id', 'basic-addon1')
        // Display hours text
        hoursSpan.text(hours[i][1]);
        // Append lable span
        hoursForm.append(hoursSpan);

        // Create input field
        var hoursInput = $('<input>');
        // Assign attributes
        hoursInput.attr('type', 'text');
        hoursInput.addClass('form-control text-white');
        hoursInput.attr('id', hours[i][0] + 'f');
        hoursInput.attr('placeholder', 'Add task');
        hoursInput.attr('aria-describedby', 'button-addon2');
        // Append input field
        hoursForm.append(hoursInput);

        // Create button
        var hoursButton = $('<button>');
        // Assign attributes
        hoursButton.addClass('btn btn-outline-secondary saveBtn');
        hoursButton.attr('type', 'submit');
        hoursButton.attr('id', 'button-addon2')
        // Append button
        hoursForm.append(hoursButton);

        // Create icon
        // Create icon element (icon tag and class) in one step, 
        //    unlike the above, which were created without attributes
        //    and then had attributes added to them.
        var hoursIcon = $('<i class="far fa-save"></i>')
        hoursButton.append(hoursIcon);
    }
}

// Function - display the date and time
function displayDate() {
    var today = moment().format('dddd, MMMM Do YYYY');
    var time = moment().format('h:mm a');
    dayDisplayEl.text(today);
    timeDisplayEl.text(time);
    timeDependentColor(today);
}

// Function - change input field colors based on past, present, future
function timeDependentColor() {
    var hour = moment().format('HH');  
    // var hour = 12;
    var inputGroupEl = $('.input-group');
    inputGroupEl.each(function() {
        var id = this.id;
        // console.log(this);
        // console.log(id);
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
    var inputFormEl = $('.form-control');
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

renderTimeblocks();
timeDependentColor();

// Call function that loads saved tasks from local storage
loadTasks();

setInterval(timeDependentColor, 6000);
