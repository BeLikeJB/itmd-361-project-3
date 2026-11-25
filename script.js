document.addEventListener("DOMContentLoaded", function () {
  const questionsBtn = document.getElementById("questions-btn");

  if (questionsBtn) {
    questionsBtn.addEventListener("click", function () {
      alert("If you have questions, contact me at:\njordanbrinson2006@gmail.com");
    });
  }
});