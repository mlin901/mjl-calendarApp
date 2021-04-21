//get date from moment and display at top of page
//Add timeblocks for business hours
//Color code timeblocks depending on past, present, future
//Enable item to be typed in timeblock
//Add save button for each timeblock and make it save timeblock item 
//   (if there is one) to local storage
//Make save timeblock items show up when page is refreshed (getItem, or
//   something like that)

var dayDisplayEl = $('#currentDay');

// Display the date
function displayDate() {
    var today = moment().format('MMM DD, YYYY');
    dayDisplayEl.text(today);
  }

  displayDate();