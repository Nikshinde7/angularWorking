app.controller('userRegistrationCtrl', function($state,$scope,userRegistrationService) {


$scope.regobj={};



$scope.register=function(regobj){

    

  userRegistrationService.registerUser(regobj).then(function(response){
    if (response.data.statusCode == 200)
     {
      alert('Registered Succesfully');
      $scope.regobj={};
     }
    else
    {
      alert('Failed');
    }
  })
}
});



app.service('userRegistrationService',function($http){

		this.registerUser=function(regobj){
    
    return $http.post(hostUrl+"register",regobj);
  }

});