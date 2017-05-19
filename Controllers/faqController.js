angular
  .module("myApp")
  .controller("faqController", function ($scope) {


    $scope.nameReq = false
    $scope.emailReq = false
    $scope.msgReq = false
    $scope.msgSent = false
    $scope.contactName = ""
    $scope.contactEmail = ""
    $scope.contactMsg = ""

    $scope.contactSubmit = function () {
      if ($scope.contactName == "") {
        $scope.nameReq = true;
      }
      else if ($scope.contactName != "") {
        $scope.nameReq = false;
      }
      if ($scope.contactEmail == "") {
        $scope.emailReq = true;
      }
      else if ($scope.contactEmail != "") {
        $scope.emailReq = false;
      }
      if ($scope.contactMsg == "") {
        $scope.msgReq = true;
      }
      else if ($scope.contactMsg != "") {
        $scope.msgReq = false;
      }
      if($scope.nameReq | $scope.emailReq | $scope.msgReq == true) {
        $scope.msgSent = false;
      }
      else{
        $scope.msgSent = true;
      }
    }

  })
