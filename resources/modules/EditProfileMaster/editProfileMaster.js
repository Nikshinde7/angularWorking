app.controller('editProfileCtrl', function($state,$scope,editProfileService,$window) {






$scope.userProfileObj={};
 $scope.phoneOtp={};
$scope.mailOtp={};
$scope.displayphno=false;
$scope.displayMail=false;
$scope.displayPassword=false;

$scope.dataFunc=function(userProfileObj)
{
	var path="resources/assets/img/"
    var n=document.getElementById("imgfile").value;
  
    var repl=n.replace("C:\\fakepath\\",path);
    
    $scope.userProfileObj.userProfileImg=repl;
   	alert(JSON.stringify($scope.userProfileObj.userProfileImg));


}


$scope.userProfileObj.userId=$window.sessionStorage.getItem('UserId');


$scope.userProfileObj.userPhoneNumber=$window.sessionStorage.getItem('Phone');


$scope.userProfileObj.userEmailAddress=$window.sessionStorage.getItem('Email');


$scope.userProfileObj.userPassword=$window.sessionStorage.getItem('Password');





// $scope.userPhoneNumber="9087678689";
// $scope.userEmailAddress="pre123@gmail.com";
// $scope.userPassword="pre213";


// For Update Phone Number

$scope.updatePhno=function(userProfileObj){

	// $scope.userProfileObj.userPhoneNumber=$scope.userPhoneNumber;
	// alert("Old Phno  "+JSON.stringify($scope.userPhoneNumber));


  editProfileService.phoneOtp(userProfileObj).then(function(response){
    if (response.data.statusCode == 200)
     {
      alert('send opt Succesfully');

      $scope.phoneOtp=response.data.result;
  	}
  	else
  	{
  		alert("Failed")
  	}
})




	}

$scope.submitNewPhno=function(userProfileObj)
{
	// alert("New Phno  "+$scope.userProfileObj.userPhoneNumber);

        $scope.displayphno=false;
        $scope.userProfileObj.userPhoneNumber=null;


}



// For Update MailAddress

$scope.updateMail=function(userProfileObj){

	
  editProfileService.mailOtp(userProfileObj).then(function(response){
    if (response.data.statusCode == 200)
     {
      alert('send opt Succesfully');

      $scope.mailOtp=response.data.result;
      // alert($scope.mailOtp);
  	}
  	else
  	{
  		alert("Failed")
  	}
})

	}


$scope.submitNewMail=function(userProfileObj)
{
	// alert("New MailAddress  "+$scope.userProfileObj.userEmailAddress);
   $scope.displayMail=false;
  $scope.userProfileObj.userEmailAddress=null;
     
}



// For Update Password

$scope.updatePassword=function(userProfileObj){

	

  editProfileService.passwordOtp(userProfileObj).then(function(response){
    if (response.data.statusCode == 200)
     {
      alert('send opt Succesfully');

      $scope.phoneOtp=response.data.result;
  	}
  	else
  	{
  		alert("Failed")
  	}
})


	}



$scope.submitNewPassword=function(userProfileObj)
{
	// alert("New Password  "+$scope.userProfileObj.userPassword);
   $scope.displayPassword=false;
  $scope.userProfileObj.userPassword=null;
     
	
}


// For Phone Otp




$scope.phoneOtpCheck=function(userProfileObj)
{



		if($scope.userProfileObj.phoneOtp==$scope.phoneOtp)
		{
			$scope.userProfileObj.userPhoneNumber=null;
			$scope.displayphno=true;

					editProfileService.updatePhoneOtp(userProfileObj).then(function(response){
    				if (response.data.statusCode == 200)
     				{
      					alert('update Succesfully');
      				}
    				else
    				{
      					alert('Failed');
    				}
  					})

           

  		}
		else
		{
			alert("Entered OTP is Wrong");
		}
      
}


// Mail Otp


$scope.mailOtpData=function(userProfileObj)
{





		if($scope.userProfileObj.mailOtp==$scope.mailOtp)
		{
			$scope.userProfileObj.userEmailAddress=null;
			$scope.displayMail=true;

					editProfileService.updateEmailOtp(userProfileObj).then(function(response){
    				if (response.data.statusCode == 200)
     				{
      					alert('update Succesfully');
      				}
    				else
    				{
      					alert('Failed');
    				}
  					})

           

  		}
		else
		{
			alert("Entered OTP is Wrong");
		}
    

}






// Password Otp


 

$scope.passwordOtpCheck=function(userProfileObj)
{



 

		if($scope.userProfileObj.phoneOtp==$scope.phoneOtp)
		{
			$scope.userProfileObj.userPassword=null;
			$scope.displayPassword=true;

					editProfileService.updatePhoneOtp(userProfileObj).then(function(response){
    				if (response.data.statusCode == 200)
     				{
      					alert('update Succesfully');
      				}
    				else
    				{
      					alert('Failed');
    				}
  					})

          
  		}
		else
		{
			alert("Entered OTP is Wrong");
		}
 

}








$scope.updateEnquiryDetails=function(userProfileObj)
{


  editProfileService.updateEnquiryRecord(userProfileObj).then(function(response){
    if (response.data.statusCode == 200)
     {
      alert('update Succesfully');
      }
    else
    {
      alert('Failed');
    }
  })


}













});



app.service('editProfileService',function($http){

	this.updateEnquiryRecord=function(userProfileObj){
    
    return $http.post(hostUrl+"updateProfile",userProfileObj);
  }

  this.phoneOtp=function(userProfileObj){
    
    return $http.post(hostUrl+"OtpMobile",userProfileObj);
  }
   this.mailOtp=function(userProfileObj){
    
    return $http.post(hostUrl+"sendMail",userProfileObj);
  }
   this.passwordOtp=function(userProfileObj){
    
    return $http.post(hostUrl+"OtpMobile",userProfileObj);
  }
  
  this.updatePhoneOtp=function(userProfileObj){
  	return $http.post(hostUrl+"PhoneOtpUpdate",userProfileObj)
  }

  this.updateEmailOtp=function(userProfileObj){
  	return $http.post(hostUrl+"EmailOtpUpdate",userProfileObj)
  }

  })
