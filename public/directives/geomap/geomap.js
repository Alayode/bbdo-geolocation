angular.module("BBDO", [])
 .controller("GeoMapCtrl", function () {
    var app = this;

    app.message = "Hello";
})

  .directive("geomap", function () {
    return function (scope, element, attrs) {
        element.text(scope.app.message + " " + attrs.message);
    }
})
