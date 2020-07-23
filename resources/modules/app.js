var app=angular.module('myApp', ['ngMaterial','ui.router','ui.bootstrap','smart-table','ngSanitize']);


var hostUrl="http://localhost:7687/";


app.config(function($stateProvider, $urlRouterProvider) 
{

	$urlRouterProvider.otherwise('/userRegistrationMaster');
 	$stateProvider

 	



 

.state('userLoginMaster', {
    
    url : '/userLoginMaster',

    templateUrl : 'resources/modules/UserLoginMaster/userLoginMaster.html'

    })


.state('userRegistrationMaster', {
    
    url : '/userRegistrationMaster',

    templateUrl : 'resources/modules/UserRegistrationMaster/userRegistrationMaster.html'

    })


.state('editProfileMaster', {
    
    url : '/editProfileMaster',

    templateUrl : 'resources/modules/EditProfileMaster/editProfileMaster.html'

    })


.state('displayProfileMaster', {
    
    url : '/displayProfileMaster',

    templateUrl : 'resources/modules/DisplayProfileMaster/displayProfileMaster.html'

    })


 });

