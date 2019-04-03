function manageStudent(){
    var data = {
        username : username,
        type : type
    }
    console.log(data)
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "http://localhost:8000/main/user/manageStudent",
        data: JSON.stringify(data),
        dataType: "json",
        success: function (customer) {
          // var result = JSON.stringify(customer);
          console.log(customer);
          if (customer != "") {
            alert("Login Successful!");
            window.location = "./../../main/user/addStudent.html?"
          } else {
            alert("Login Incorrect!");
          }
        },
        error: function (e) {
          console.log("ERROR: ", e);
        }
      });
}