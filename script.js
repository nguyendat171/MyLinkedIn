/**
 * Created by Nguyen_Dat on 24/04/2016.
 */


var app = angular.module('MyCV', []);
app.controller('Controller', function($scope, $http) {
    $http.get("JSON/data.json")
        .then(function(response) {
            $scope.myData = response.data.profile;
            $scope.mySummary= response.data.summary;
            $scope.myExperience = response.data.experience;
            $scope.myLanguage = response.data.language;
            $scope.myimage = response.data.images;
            $scope.myskill = response.data.skill;
            $scope.myproject = response.data.project;
            $scope.myeducation = response.data.education;
        });

});
