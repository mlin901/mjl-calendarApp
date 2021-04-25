# mjl-calendarApp

This assigment was to create a calendar app to save tasks for different timeblocks in the current day. To add a task, the user enters the task in the form field for one of the timeblocks and then clicks the save button for that timeblock. The task remains displayed and is saved to local storage. When the app page is refreshed, saved tasks are retrieved from local storage and displayed in their respective timeblock input fields. 

This app was implemented using a number of web developement techologies, including

* Moment.js for the date display and to determine which timeblocks should be grey (past), red (current), and green (future)
* Font Awsome for the icon on Save buttons
* Bootstrap for other elements of timeblocks (label, input field, save button)
* Bootstrap classes to control input field colors
* JavaScript and jQuery to acess/manipulate DOM elements

I chose to use Bootstrap classes to control input field colors, even though they're not ideal for this app. (They're too bright and the class names don't reflect their purpose in this context.) I chose them just to get more experience in using Bootstrap features. In other cases, though, I used styles in style.css to customize Bootstrap colors and formatting.

Links:

* [Published app](https://mlin901.github.io/mjl-calendarApp/)
* [Screen capture (below)]()

There are no media queries in this app because the primary elements are Bootstrap components, so Bootstrap does the work of making this app responsive. And it is responsive: Chrome developer tools indicates that it works fine down to about 350px wide (when set to "Responsive"), and it works fine for most device settings (the items under "Responsive" in the dropdown list--e.g., iPad).

A couple of features are, of course, glaringly absent: the ability to change days and a feature to clear tasks. To implement the former, there would need to be a calendar selector field, the displayDate() function would need to be updated to display the chosen date (the current date by default), and the get/set code for local storage would need to be updated to include the date in the local storage keys. As for a feature to clear tasks, I think that's a usability question. Add a "remove task" button to each timeblock, or add just one "clear" button at the bottom of the page to clear out all timeblocks for the day? Or maybe both. 

Another thing that might really help the app is to have focus move to the next timeblock input field when the user presses enter in a timblock input field*****





From original readme: ***********

# 05 Third-Party APIs: Work Day Scheduler

## Your Task

Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

The following animation demonstrates the application functionality:

![A user clicks on slots on the color-coded calendar and edits the events.](./Assets/05-third-party-apis-homework-demo.gif)


## Grading Requirements

This homework is graded based on the following criteria: 

### Technical Acceptance Criteria: 40%

* Satisfies all of the above acceptance criteria plus the following:

  * Uses a date utility library to work with date and time

### Deployment: 32%

* Application deployed at live URL

* Application loads with no errors

* Application GitHub URL submitted

* GitHub repo contains application code

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate

* Application user interface style is clean and polished

* Application resembles the mock-up functionality provided in the homework instructions

### Repository Quality: 13%

* Repository has a unique name

* Repository follows best practices for file structure and naming conventions

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages

* Repository contains quality README file with description, screenshot, and link to deployed application

## Review

You are required to submit the following for review:

* The URL of the deployed application

* The URL of the GitHub repository, with a unique name and a README describing the project

- - -
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
