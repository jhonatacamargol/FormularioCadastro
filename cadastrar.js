document.addEventListener("DOMContentLoaded", function() {
    var usernameInput = document.getElementById("username");
    var emailInput = document.getElementById("email");
  
    usernameInput.addEventListener("input", function() {
      this.value = this.value.toUpperCase();
    });
  
    emailInput.addEventListener("input", function() {
      var email = this.value.trim();
      var isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  
      if (isValidEmail) {
        this.style.borderColor = "green";
      } else {
        this.style.borderColor = "red";
      }
    });
  
    var showHideBtns = document.getElementsByClassName("show-hide-btn");
    for (var i = 0; i < showHideBtns.length; i++) {
      showHideBtns[i].addEventListener("click", function() {
        var passwordInput = this.previousElementSibling;
        if (passwordInput.type === "password") {
          passwordInput.type = "text";
          this.textContent = "Esconder";
        } else {
          passwordInput.type = "password";
          this.textContent = "Mostrar";
        }
      });
    }
  
    document.getElementById("registrationForm").addEventListener("submit", function(event) {
      event.preventDefault();
  
      var username = usernameInput.value;
      var email = emailInput.value;
      var senha = document.getElementById("senha").value;
      var confirmesenha = document.getElementById("confirmesenha").value;
  
      var isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    
      if (!isValidEmail) {
        alert("Por favor, insira um email válido.");
        return;
      }
  
      if (senha !== confirmesenha) {
        alert("A senha e a confirmação de senha não coincidem. Por favor, tente novamente.");
        return;
      }
        
      alert("Cadastro realizado com sucesso!");

         this.reset();
    });
  });
  