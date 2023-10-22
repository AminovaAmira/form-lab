document
  .getElementById("feedback-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const source = document.querySelector('input[name="source"]:checked').value;
    const feedbackType = document.getElementById("feedbackType").value;
    const message = document.getElementById("message").value;
    const consent = document.getElementById("consent").checked;

    const data = {
      fullName: fullName,
      email: email,
      source: source,
      feedbackType: feedbackType,
      message: message,
      consent: consent,
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
        alert(
          "Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время."
        );
      })
      .catch((error) => {
        // Обработка ошибки
        console.error("Произошла ошибка при отправке данных:", error);
        throw error;
      });
  });
