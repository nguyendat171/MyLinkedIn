/**
 * Created by Nguyen_Dat on 24/04/2016.
 */
var app = angular.module("MyCV", ["xeditable"]);
app.run(function(editableOptions) {
    editableOptions.theme = 'bs3';
});

app.controller('Controller', function($scope, $http) {
    $scope.visiblesummary=false;
    $scope.visibleexperience=false;
    $scope.visibleproject=false;
    $scope.visibleskill=false;
    $scope.visibleeducation=false;

    $http.get("JSON/data.json")
        .then(function(response) {
            $scope.myData = response.data.profile;
            $scope.mySummary= response.data.summary;
            $scope.myExperience = response.data.experience;
            $scope.myLanguage = response.data.language;
            $scope.myimage = response.data.images;
            $scope.mySkill = response.data.skill;
            $scope.myProject = response.data.project;
            $scope.myEducation = response.data.education;
        });
    $scope.AddSummary=function()
    {
        $scope.mySummary.push({summary:$scope.summary});
        $scope.visiblesummary=false;
        $scope.summary="";

    };
    $scope.AddExperience=function()
    {
        $scope.myExperience.push({experience:$scope.experience});
        $scope.visibleexperience=false;
        $scope.experience="";
    };
    $scope.AddProject=function()
    {
        $scope.myProject.push({project:$scope.project});
        $scope.visibleproject=false;
        $scope.project="";
    };
    $scope.AddLanguage=function()
    {
        $scope.myLanguage.push({language:$scope.language});
        $scope.visiblelanguage=false;
        $scope.language="";
    };
    $scope.AddSkill=function()
    {
        $scope.mySkill.push({skill:$scope.skill});
        $scope.visibleskill=false;
        $scope.skill="";
    };
    $scope.AddEducation=function()
    {
        $scope.myEducation.push({education:$scope.education});
        $scope.visibleeducation=false;
        $scope.education="";
    };


});
