$(document).ready(function() {
    var datepickerInput = $('#registerDOBInput');
  
    // Initialize the datepicker with options
    datepickerInput.datepicker({
      showOn: 'focus', // Show the calendar when the input field receives focus
      buttonImageOnly: true, // Hide the default button icon, as we're not using it
      buttonText: "Select date", // Text to display on the non-existent button
      dateFormat: 'dd-mm-yy', // Date format for the calendar display
      maxDate: 0, // Restrict selecting future dates
      changeYear: true, // Enable year dropdown
      yearRange: "-100:+0", // Set the year range from 100 years ago to the current year
    });
  
    // Set the current date as the default date
    datepickerInput.datepicker('setDate', 'today');
  });
  
  // Function to validate the date format (dd-mm-yyyy)
//   function isValidDate(dateString) {
//     var pattern = /^\d{2}-\d{2}-\d{4}$/;
//     return pattern.test(dateString);
//   }
