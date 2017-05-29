(function() {
  angular
    .module("WebAppMaker")
    .config(Config);

  function Config($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "views/user/templates/login.view.client.html",
        controller: "LoginController",
        controllerAs: "model"
      })
      .when("/login", {
        templateUrl: "views/user/templates/login.view.client.html",
        controller: "LoginController",
        controllerAs: "model"
      })
      .when("/register", {
        templateUrl: "views/user/templates/register.view.client.html",
        controller: "RegisterController",
        controllerAs: "model"
      })
      .when("/user/:userId", {
        templateUrl: "views/user/templates/profile.view.client.html",
        controller: "ProfileController",
        controllerAs: "model"
      })
      .when("/user/:userId/website", {
        templateUrl: "views/website/templates/website-list.view.client.html",
        controller: "WebsiteListController",
        controllerAs: "model"
      })
      .when("/user/:userId/website/new", {
        templateUrl: "views/website/templates/website-new.view.client.html",
        controller: "NewWebsiteController",
        controllerAs: "model"
      })
      .when("/user/:userId/website/:websiteId", {
        templateUrl: "views/website/templates/website-edit.view.client.html",
        controller: "EditWebsiteController",
        controllerAs: "model"
      })
      .when("/user/:userId/website/:websiteId/page", {
        templateUrl: "views/page/templates/page-list.view.client.html",
        controller: "PageListController",
        controllerAs: "model"
      })
      .when("/user/:userId/website/:websiteId/page/new", {
        templateUrl: "views/page/templates/page-new.view.client.html",
        controller: "NewPageController",
        controllerAs: "model"
      })
      .when("/user/:userId/website/:websiteId/page/:pageId", {
        templateUrl: "views/page/templates/page-edit.view.client.html",
        controller: "EditPageController",
        controllerAs: "model"
      })
      .when("/user/:userId/website/:websiteId/page/:pageId/widget", {
        templateUrl: "views/widget/templates/widget-list.view.client.html",
        controller: "WidgetListController",
        controllerAs: "model"
      })
      .when("/user/:userId/website/:websiteId/page/:pageId/widget/new", {
        templateUrl: "views/widget/templates/widget-chooser.view.client.html",
        controller: "NewWidgetController",
        controllerAs: "model"
      })
      .when("/user/:userId/website/:websiteId/page/:pageId/widget/:widgetId", {
        templateUrl: "views/widget/templates/widget-edit.view.client.html",
        controller: "EditWidgetController",
        controllerAs: "model"
      })
  }
})();