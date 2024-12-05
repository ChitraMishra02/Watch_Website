// jquert starts
$("span").click(function(){

      $("ul").slideToggle();



})

// javascript starts

function validation(){


        let user = document.getElementById("User").value;
        let phone= document.getElementById("Phone").value;
        let email= document.getElementById("Email").value;
        let message= document.getElementById("message").value;

        if(user== ""){
              alert("Your Name is Required");
              return false;
        }
        if (phone==""){
               alert("Phone Number is Required");
               return false;
        }
        if (email==""){
              alert("Email is Required");
              return false;

        }
       if (message==""){
           alert("Fill The Message Box");
           return false;

       }
       else{
             document.write("Congratulations Your Message Is Send");
       }


}



