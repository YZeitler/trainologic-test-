var app = angular.module('test', []);


app.controller('mainController', function($scope) {
    var myValue = true;

    var value2 = true;

    $scope.click = function (){
        if (myValue){
            myValue = !myValue;
        }
    }

    $scope.click2 = function (){
        if (value2){
            value2 = !value2;
        }
    }
   
       $scope.contacts = [
           {
               id:1,
               name: "Friends",
               type: "Group",
               contacts: [
                   {id:2, name: "Udi", type: "Contact"},
                   {id:3, name: "Tommy", type: "Contact"},
                   {
                       id:6,
                       name: "Old Friends",
                       type: "Group",
                       contacts: [
                           {id:7, name: "Itay", type: "Contact"},
                       ]
                   },
               ]
           },
           {
               id:4,
               name: "Family",
               type: "Group",
               contacts: [
                   {id:5, name: "Roni", type: "Contact"},
               ]
           },
           {id: 8, name: "Ori", type: "Contact"},
       ];
});