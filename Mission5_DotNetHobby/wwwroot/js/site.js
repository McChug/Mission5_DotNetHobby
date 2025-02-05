// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    // Add click listener to calculate button
    $('#calculate').click(function () {
        // Get variables from input element values
        let hours = parseFloat($('#hours').val());
        let rate = parseFloat($('#rate').val());

        if (isNaN(hours) || hours <= 0) { // Validate the number inputted to make sure it is above zero and a number
            $('#error').text('Please enter a valid positive number of hours.');
            $('#total').val('');
        } else {
            // Calculate hours times rate and display in the total input element
            $('#error').text('');
            let total = hours * rate;
            $('#total').val(total.toFixed(2));
        }
    });
});