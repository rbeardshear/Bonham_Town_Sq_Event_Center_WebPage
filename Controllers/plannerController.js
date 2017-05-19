angular
  .module("myApp")
  .controller("plannerController", function ($scope, plannerService) {

    $scope.events = plannerService.getEvents()

     $scope.addButton = true;

    $scope.firstName = "";
    $scope.lastName = "";
    $scope.type = "";
    $scope.eventDate = "";
    $scope.time = "";


    $scope.addEvent = function () {
      plannerService.addEvent($scope.firstName, $scope.lastName, $scope.type, $scope.eventDate, $scope.time)

      $scope.firstName = "";
      $scope.lastName = "";
      $scope.type = "";
      $scope.eventDate = "";
      $scope.time = "";

    }

    
    // Update User fills the fields with the existing data and changes the button from Submit to Save
    $scope.updateEvent = function(event) {
      for (var i = 0; i < $scope.events.length; i++) {
        if($scope.events[i] ==  event) {
          // setting a var equal to current users index so when the user saves, we know which user we are updating
          currentEventIndex = i
          currentEventId = event.id

          $scope.firstName = event.firstName;
          $scope.lastName = event.lastName;
          $scope.type = event.type;
          $scope.eventDate = event.date;
          $scope.time = event.time;
        }
      }
      // hiding submit, showing save
      $scope.addButton = false;
      $scope.saveButton = true;
    }

    // Save User updates the changes that were made to the user inside of the user input fields.
    $scope.saveEvent = function() {
      plannerService.saveEvent(currentEventIndex, currentEventId, $scope.firstName, $scope.lastName, $scope.type, $scope.eventDate, $scope.time)

      // hiding save, showing submit
      $scope.addButton = true;
      $scope.saveButton = false;

      // reseting scoped variables
      $scope.firstName = "";
      $scope.lastName = "";
      $scope.type = "";
      $scope.eventDate = "";
      $scope.time = "";
    }

     // Delete User removes the user from the array entirely
    $scope.deleteEvent = function(event) {
      plannerService.deleteEvent(event)
    }


  })