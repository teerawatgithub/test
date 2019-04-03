function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
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
      url: "http://localhost:8000/login",
      data: JSON.stringify(data),
      dataType: "json",
      success: function (customer) {
        // var result = JSON.stringify(customer);
        console.log(customer);
        if (customer != "") {
          alert("Login Successful!");
          window.location = "./../../main/index.html?"+customer[0].username+" "+customer[0].type;
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
  