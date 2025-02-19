$(document).ready(function() {
    // Initialize datepicker
    $("#datepicker").datepicker();

    // Initialize autocomplete for From and To city inputs
    var availableCities = [
        "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", 
        "San Diego", "Dallas", "San Jose", "Austin", "Jacksonville", "Fort Worth", "Columbus", 
        "Charlotte", "Indianapolis", "San Francisco", "Seattle", "Denver", "Washington", "Boston"
    ];

    $("#fromCity, #toCity").autocomplete({
        source: availableCities
    });

    // Search button click event
    $(".search-bar button").click(function() {
        var searchInput = $("#search-input").val();
        // Perform search or other actions
        console.log("Search for: " + searchInput);
    });

    // Product card hover effect
    $(".image-card").hover(
        function() {
            $(this).css({
                transform: "scale(1.1)",
                boxShadow: "0 8px 12px rgba(0, 0, 0, 0.2)"
            });
        },
        function() {
            $(this).css({
                transform: "scale(1)",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
            });
        }
    );

    // Form submission event
    $(".flight-booking-section form").submit(function(event) {
        event.preventDefault();
        var fromCity = $("#fromCity").val();
        var toCity = $("#toCity").val();
        var date = $("#datepicker").val();
        // Perform form submission or other actions
        console.log("From: " + fromCity + ", To: " + toCity + ", Date: " + date);
    });
});

$(document).ready(function(){
    // Animation for the appointment form
    $('.appointment-section').hide().fadeIn(1000); // Fade in the appointment section
    $('#appointment-form').hide().slideDown(1000); // Slide down the form
});
