angular
  .module("myApp")
  .service("plannerService", function ($http) {

    var _events = []
    var _eventId = 0

    var Event = function (id, firstName, lastName, type, date, time) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.type = type;
      this.date = new Date(date);
      this.time = time;
    }

    _events.push(new Event(_eventId++, "Ryan", "Beardshear", "Birthday Party", "07/03/17", "9:00 AM"))
    _events.push(new Event(_eventId++, "Tyler", "Beardshear", "Wedding", "11/21/19", "4:00 PM"))

    this.getEvents = function () {
      return _events
    }

    this.addEvent = function (firstName, lastName, type, date, time) {
      _events.unshift(new Event(_eventId++, firstName, lastName, type, date, time))
    }

    this.saveEvent = function (currentEventIndex, currentEventId, firstName, lastName, type, date, time) {
      _events.splice(currentEventIndex, 1, new Event(currentEventId, firstName, lastName, type, date, time))
    }

    this.deleteEvent = function (event) {
      for (var i = 0; i < _events.length; i++) {
        if (_events[i] == event) {
          _events.splice(i, 1)
        }
      }
    }
  })