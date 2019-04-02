function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log(username)
    if (username == "" || password == ""){
      alert('กรุณากรอกข้อมูลให้ครบถ้วน')
      document.getElementById("password").focus();
      return;
    }
    console.log(username + " " + password);

    var data = {
      username: username,
      password: password
    };
    console.log(data)
  
    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: "http://localhost:3000/login",
      data: JSON.stringify(data),
      dataType: "json",
      success: function (customer) {
        var result = JSON.stringify(customer);
        console.log(result);
        if (JSON.stringify(customer) == "true") {
          alert("Login Successful!");
          window.location = "./../../main.html";
        } else {
          alert("Login Incorrect!");
          document.getElementById("username").focus();
        }
      },
      error: function (e) {
        console.log("ERROR: ", e);
      }
    });
  }
  