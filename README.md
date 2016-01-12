# AlAdhan API JQuery Plugin for Prayer Times
This Plugin uses the AlAdhan.com prayer times API (http://aladhan.com/rest-api) to get prayer times. It has a handful of methods, which are explained and discussed below. There's also an example.html file to show you usage of the plugin.

## Getting started
As this is a JQuery plugin, you will to include both JQuery and the plugin (in the head or body tag), as shown below:

```
<script src="https://code.jquery.com/jquery-1.12.0.js"></script>
<script src="aladhanapi.jquery.js"></script>
```

For a list of methods and what the parameters are for the init method, please see http://aladhan.com/rest-api.

## Usage

### If you already know your co-ordinates
```
var app = $.alAdhanApi.init(51.34312, 52.4234423, 'Europe/London', 2);
// Get the current timestamp.
app.timeStamp();

// Wait one second for the timestamp to load
setTimeout(function() {
    var timestamp = app._timestamp;
    app._prayerTimes(app._timestamp);
}, 1000);

// Let's also get the calendar
app._prayerTimesCalendar(02, 2016);

// Timings will now be available after another second in app._timings and the calendar in app._calendar.
```

### If you do not know your co-ordinates
```
// Instantiate with dummy co-ordinates
var app = $.alAdhanApi.init(100, 100, 'Europe/London', 2);

// Calculate co-ordinates, these will automtically update them in the object from google geocoding.
x.coOrdinates('Istanbul, Turkey');

// Get the current timestamp.
app.timeStamp();

// Wait one second for the timestamp and co-ordinates to load
setTimeout(function() {
    var timestamp = app._timestamp;
    app._prayerTimes(app._timestamp);
}, 1000);

// Let's also get the calendar
app._prayerTimesCalendar(02, 2016);

// Timings will now be available after another second in app._timings and the calendar in app._calendar.
```

#### NOTE
This is currently quite a basic plugin with no error handling. Feel free to contribute an enhancement.
