function updateStudents(){

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "http://localhost:8000/updateStudents",
        dataType: "json",
        success: function (customer) {
          // var result = JSON.stringify(customer);
          console.log(customer);
          if (customer != "") {
            alert("Update Successful!");
           
          } else {
            alert("Update Incorrect!");
          }
        },
        error: function (e) {
          console.log("ERROR: ", e);
        }
      });
}