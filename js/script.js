// Script para agregar funcionalidad adicional (opcional)
document.addEventListener('DOMContentLoaded', () => {
  // Ejemplo: Agregar animación al hacer scroll
  const sections = document.querySelectorAll('.section');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated', 'animate__fadeInUp');
      }
    });
  }, {
    threshold: 0.5,
  });

  sections.forEach((section) => {
    observer.observe(section);
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Inicializa EmailJS con tu User ID
    emailjs.init('user_1234567890abcdef'); // Reemplaza YOUR_USER_ID con tu ID de EmailJS

    const serviceID = 'sservice_jgkt3q8'; // Reemplaza YOUR_SERVICE_ID con el ID de tu servicio
    const templateID = 'template_g3a0nw4'; // Reemplaza YOUR_TEMPLATE_ID con el ID de tu template

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        formMessage.textContent = '¡Tu mensaje ha sido enviado!';
        formMessage.style.color = '#28a745'; // Color verde para éxito
        form.reset();
      },
      (error) => {
        formMessage.textContent = 'Hubo un error al enviar el mensaje.';
        formMessage.style.color = '#dc3545'; // Color rojo para error
        console.error('Error al enviar el mensaje:', error);
      }
    );
  });
});