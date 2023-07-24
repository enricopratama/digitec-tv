$(document).ready(function () {
    // Function to toggle password visibility
    function togglePasswordVisibility() {
      var passwordInput = $("#passwordInputBox");
      var toggleIcon = $("#togglePassword");
      var type = passwordInput.attr("type");
      if (type === "password") {
        passwordInput.attr("type", "text");
        toggleIcon.removeClass("fa-eye-slash").addClass("fa-eye");
      } else {
        passwordInput.attr("type", "password");
        toggleIcon.removeClass("fa-eye").addClass("fa-eye-slash");
      }
    }

    $("#togglePassword").click(function () {
      togglePasswordVisibility();
    });
  });