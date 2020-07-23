app.controller('userLoginCtrl', function($state,$scope,userLoginService,$window) {

alert("HIII");


$scope.loginobj={};

$scope.list=[];

$scope.register=function(loginobj){

  userLoginService.LoginUser(loginobj).then(function(response){
    if (response.data.statusCode == 200)
     {

      alert('Logged in Succesfully');
      $scope.list=response.data.result;
      // alert(JSON.stringify($scope.list));


      $window.sessionStorage.setItem('UserId',$scope.list[0].userId);
      $window.sessionStorage.setItem('Email',$scope.list[0].userEmailAddress);
      $window.sessionStorage.setItem('Phone',$scope.list[0].userPhoneNumber);
      $window.sessionStorage.setItem('Password',$scope.list[0].userPassword);
      
        $state.go('editProfileMaster');

     }
    else
    {
      alert('Failed');
    }
  })
}
});



app.service('userLoginService',function($http){

		this.LoginUser=function(loginobj){
    
    return $http.post(hostUrl+"Login",loginobj);
  }

});
