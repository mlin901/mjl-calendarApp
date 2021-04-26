var rootEl = $('#root'); 
var dayDisplayEl = $('#currentDay');
var timeDisplayEl = $('#currentTime');
var formEl = $('.input-group');
var mainEl = $('.container');


// Function - Dynamically generate and append (render) timeblocks
//   with labels, input forms, and save buttons. (Adapted from 
//   9-Ins_Event-Delegation class activity.)
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
  
    // Dynamically create timeblocks while iterating through 
    //   the hours array.
    for (var i = 0; i < hours.length; i++) {
        // Create form element
        var hoursForm = $('<form>');
        // Assign attributes to form
        hoursForm.addClass('input-group mb-3');
        hoursForm.attr('id', hours[i][0]);
        // Append form
        mainEl.append( hoursForm );

        // Create label span element
        var hoursSpan = $('<span>');
        // Assign attributes to span
        hoursSpan.addClass('input-group-text');
        hoursSpan.attr('id', 'basic-addon1')
        // Display hours text in span
        hoursSpan.text(hours[i][1]);
        // Append lable span
        hoursForm.append(hoursSpan);

        // Create input field element
        var hoursInput = $('<input>');
        // Assign attributes to input element
        hoursInput.attr('type', 'text');
        hoursInput.addClass('form-control text-white');
        hoursInput.attr('id', hours[i][0] + 'f');
        hoursInput.attr('placeholder', 'Add task');
        hoursInput.attr('aria-describedby', 'button-addon2');
        // Append input field
        hoursForm.append(hoursInput);

        // Create button element
        var hoursButton = $('<button>');
        // Assign attributes to button element
        hoursButton.addClass('btn btn-outline-secondary saveBtn');
        hoursButton.attr('type', 'submit');
        hoursButton.attr('id', 'button-addon2')
        // Append button
        hoursForm.append(hoursButton);

        // Create icon element (icon tag and class) in one step, 
        //    unlike the above, which were created without attributes
        //    and then had attributes added to them.
        var hoursIcon = $('<i class="far fa-save"></i>')
        hoursButton.append(hoursIcon);
    }
}

// Function - display the date and time (uses Moment.js)
function displayDate() {
    var today = moment().format('dddd, MMMM Do YYYY');
    var time = moment().format('h:mm a');
    dayDisplayEl.text(today);
    timeDisplayEl.text(time);
    timeDependentColor(today);
}

// Function - change input field colors based on past, present, future
//  Uses Moment.js.
function timeDependentColor() {
    var hour = moment().format('HH');  
    var inputGroupEl = $('.input-group');
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

// Function - Load saved tasks from local storage when the page is loaded.
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

// Event listener for button clicks in <main>
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

// Display the date
displayDate();
// Dynamically generate timeblocks
renderTimeblocks();
// Color timeblocks based on whether they're in the past, present, or future
timeDependentColor();
// Load saved tasks from local storage
loadTasks();
// With every minute, color timeblocks to indicate past, present, future
setInterval(timeDependentColor, 6000);
