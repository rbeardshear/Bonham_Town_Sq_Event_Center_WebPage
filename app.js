var app = angular.module("myApp", ["ui.router"])

app.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "./views/home.html",
      controller: "homeController"
    })
    .state("planner", {
      url: '/planner',
      templateUrl: "./views/planner.html",
      controller: "plannerController"
    })
    .state("faq", {
      url: "/faq",
      templateUrl: "./views/faq.html",
      controller: "faqController"
    })
    .state("gallery", {
      url: "/gallery",
      templateUrl: "./views/gallery.html",
      controller: "galleryController"
    })
})