document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const rememberMe = document.getElementById("remember-me").checked;

    const data = {
      username: username,
      password: password,
      rememberMe: rememberMe,
    };

    fetch("https://httpbin.org/post", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Обработка успешного ответа от сервера
        alert("Авторизация успешна!");
      })
      .catch((error) => {
        // Обработка ошибки
        console.error("Произошла ошибка при отправке данных:", error);
        throw error;
      });
  });
