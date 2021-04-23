//DONE -> get date from moment and display at top of page
//ALMOST DONE -> Add timeblocks for business hours
//Color code timeblocks depending on past, present, future
//   set class to 
//       background-danger (red) for *****
//       background-success (green) for *****
//       background-secondary (grey) for *****
//Enable item to be typed in timeblock
//Add save button for each timeblock 
//make save button save timeblock item 
//   (if there is one) to local storage
//Make save timeblock items show up when page is refreshed (getItem, or
//   something like that)
//Use Google fonts
//width of text column
//Variables for colors

var rootEl = $('#root'); //?????
var dayDisplayEl = $('#currentDay');
var inputFormEl = $('.form-control');
var inputGroupEl = $('.input-group');


// Function - display the date
function displayDate() {
    var today = moment().format('MMM DD, YYYY');
    // var today = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    dayDisplayEl.text(today);
    timeDependentColor(today);
}

// Function - change input field colors based on past, present, future
function timeDependentColor() {
    // var hour = moment().format('HH');   // HOUR - RESTORE
    var hour = 12;
 
    inputGroupEl.each(function() {
        var id = this.id;
        console.log(hour + '    hour');
        console.log(id + '   id');
        if (id == hour) {
            console.log("}}}}}}}}}}}}}}");
            console.log(this);
            // this.children('input').css('background-color', 'blue');  // ***********
            $(this).children('input').addClass('bg-info');

        } else {
            console.log('else statement');
            $(this).children('input').addClass('bg-danger');

        }
      });
    // var x = inputGroupEl[0];
    // console.log($('input-group').attr('id'));
    // console.log(inputGroupEl.attr('id') + "    0000000000");
    // if (inputGroupEl[0].setInterval
    

}


//Call the function to display the date
displayDate();
// setInterval(timeDependentColor, 5000);
timeDependentColor();



