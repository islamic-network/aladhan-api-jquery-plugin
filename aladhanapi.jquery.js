jQuery( document ).ready( function( $ ) {
    $.alAdhanApi = {
        _lat: '',
        _lng: '',
        _timezonename: '',
        _method: '',
        _month: '',
        _year: '',
        _times: '',
        _calendar: '',
        _timestamp: '',
        _xx: '',
        init: function(lat, lng, timezone, method) {
            this._lat = lat;
            this._lng = lng;
            this._timezonename = timezone;
            this._method = method;
            return this;
        },
        prayerTimes: function(timestamp) {
            var gc = this;
            if (gc._lat !== '' && gc._lng !== '') {
                var credentials = {
                    latitude: gc._lat,
                    longitude: gc._lng,
                    timezonestring: gc._timezonename,
                    method: gc._method
                };
                // Send to API
                gc._times = 'Awaiting result from API ...';
                $.getJSON(
                    "http://api.aladhan.com/timings/" + timestamp,
                    credentials,
                    function(result) {
                        // Return timings
                        gc._times = result.data;
                    }
                );
            }
        },
        timeStamp: function()
        {
            var gc = this;
            gc._timestamp = 'Awaiting result from API ...';
             $.getJSON(
                    "http://api.aladhan.com/currentTimestamp/",
                    {
                        zone: gc._timezonename
                    },
                    function(result) {
                        // Return timings
                        gc._timestamp = result.data;
                    }
                );
        },
        coOrdinates: function(address) {
            var gc = this;
            var data = {
                sensor: false,
                address: address
            };
            
            $.getJSON(
            'http://maps.googleapis.com/maps/api/geocode/json',
            data,
            function(result) {
                gc._lat = result.results[0].geometry.location.lat;  
                gc._lng = result.results[0].geometry.location.lng;
                }
            );
        },
        prayerTimesCalendar: function(month, year) {
            var gc = this;
            gc._month = month;
            gc._year = year;
            gc._calendar = 'Awaiting result from API ...';
            if (gc._lat !== '' && gc._lng !== '') {
                var credentials = {
                    latitude: gc._lat,
                    longitude: gc._lng,
                    timezonestring: gc._timezonename,
                    method: gc._method,
                    month: gc._month,
                    year: gc._year
                };
                // Send to API
                 $.getJSON(
                     "http://api.aladhan.com/calendar/",
                     credentials,
                     function(result) {
                        gc._calendar = result.data;
                        }
                 );
            }
        },
    }
});


