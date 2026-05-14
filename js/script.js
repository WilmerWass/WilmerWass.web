document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // Efecto de Máquina de Escribir (Typewriter)
    // ==========================================
    const textElement = document.getElementById('typewriter');

    // TODO: Aquí puedes agregar o cambiar las frases que aparecen debajo de tu nombre
    const phrases = [
        'Wilmer Wass',
        'Desarrollador Full Stack',
        'Arquitecto de Software',
        'Innovador Tecnológico'
    ];

    let phraseIndex = 0; // Índice de la frase actual
    let charIndex = 0;   // Índice del carácter actual
    let isDeleting = false; // Estado: ¿estamos borrando?
    let typeSpeed = 100; // Velocidad de escritura

    function type() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            // Borrando texto
            textElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50; // Borra más rápido
        } else {
            // Escribiendo texto
            textElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100; // Escribe a velocidad normal
        }

        // Lógica de cambio de estado
        if (!isDeleting && charIndex === currentPhrase.length) {
            // Terminó de escribir la frase completa
            isDeleting = true;
            typeSpeed = 2000; // Espera 2 segundos antes de borrar
        } else if (isDeleting && charIndex === 0) {
            // Terminó de borrar todo
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length; // Pasa a la siguiente frase (bucle)
            typeSpeed = 500; // Pequeña pausa antes de empezar a escribir la nueva
        }

        setTimeout(type, typeSpeed);
    }

    // Iniciar el efecto
    type();

    // ==========================================
    // Efecto de Inclinación 3D (Tilt Effect)
    // ==========================================
    const card = document.querySelector('.glass-card');
    const container = document.querySelector('.container');

    // Evento: Mover el mouse sobre el contenedor
    container.addEventListener('mousemove', (e) => {
        // Calcula la rotación basada en la posición del mouse
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;

        // Aplica la transformación
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    // Evento: Entrar al área (quita la transición para que sea instantáneo el movimiento)
    container.addEventListener('mouseenter', (e) => {
        card.style.transition = 'none';
    });

    // Evento: Salir del área (restaura la posición original suavemente)
    container.addEventListener('mouseleave', (e) => {
        card.style.transition = 'all 0.5s ease';
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
});
