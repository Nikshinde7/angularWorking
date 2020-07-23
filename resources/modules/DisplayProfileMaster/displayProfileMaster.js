app.controller('displayProfileCtrl', function($state,$scope,$window,displayProfileService) {




$scope.userId=$window.sessionStorage.getItem('UserId');

 $scope.displayProfileList=[];

	$scope.displayProfileDetails = function(userId)
     {
     
         displayProfileService.getDisplayProfile(userId).then(function(response)
         {
          
            
                 
                 $scope.displayProfileList=response.data.result;
                
          
             
         });
     }


$scope.displayProfileDetails($scope.userId);




});


app.service('displayProfileService',function($http){


  this.getDisplayProfile=function(userId){
    
    return $http.get(hostUrl+"/getDisplayProfile/"+userId);
  }

})