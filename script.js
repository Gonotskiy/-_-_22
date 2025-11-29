// Инициализация EmailJS с твоим публичным ключом (замени на свой!)
emailjs.init("ZesbRxMI5g0ZSYcEx");  // Пример: "user_abc123def456"

// Функция для отправки формы (вызывается при submit)
function sendEmail(event) {
    event.preventDefault();  // Останавливает стандартную отправку формы (чтобы не перезагружалась страница)

    // Собираем данные из полей формы. Убедись, что у твоих input'ов такие же ID!
    const templateParams = {
        from_name: document.getElementById('name').value,  // Значение из поля имени
        from_email: document.getElementById('email').value,  // Значение из поля email
        message: document.getElementById('message').value  // Значение из поля сообщения
    };

    // Отправляем email через EmailJS
    emailjs.send('Legal_services.22', 'template_qmzsrxb', templateParams)  // Замени на свои ID
        .then(function(response) {
            console.log('Успех!', response.status, response.text);  // Лог в консоль для отладки
            alert('Спасибо! Твоё сообщение отправлено. Я свяжусь с тобой скоро!');  // Уведомление пользователю
            document.getElementById('contact-form').reset();  // Очищаем форму после отправки
        }, function(error) {
            console.log('Ошибка при отправке:', error);  // Лог ошибки
            alert('Ой, что-то пошло не так. Проверь интернет и попробуй снова.');  // Уведомление об ошибке
        });
}

// Привязываем функцию к форме: когда пользователь жмёт "Отправить", вызывается sendEmail
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', sendEmail);
    }
});
