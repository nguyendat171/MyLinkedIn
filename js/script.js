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
            $scope.myskill = response.data.skill;
            $scope.myproject = response.data.project;
            $scope.myeducation = response.data.education;
        });
    $scope.AddSummary=function()
    {
        $scope.mySummary.push({summary:$scope.summary});
        $scope.visiblesummary=false;
        $scope.summary="";

    };
    $scope.AddExperience=function()
    {
        $scope.myData.experience.push({value:$scope.experience});
        $scope.visibleexperience=false;
        $scope.experience="";
    };
    $scope.AddProject=function()
    {
        $scope.myData.PROJECT.push({value:$scope.project});
        $scope.visibleproject=false;
        $scope.project="";
    };
    $scope.AddLanguage=function()
    {
        $scope.myData.PROJECT.push({value:$scope.language});
        $scope.visiblelanguage=false;
        $scope.language="";
    };
    $scope.AddSkill=function()
    {
        $scope.myData.SKILL.push({value:$scope.skill});
        $scope.visibleskill=false;
        $scope.skill="";
    };
    $scope.AddEducation=function()
    {
        $scope.myData.EDUCATION.push({value:$scope.education});
        $scope.visibleeducation=false;
        $scope.education="";
    };


});
