// Inicializar Iconos de Lucide
lucide.createIcons();

// Cambio de Secciones (Sistema de Tabs)
function showSection(id) {
    document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

    document.getElementById(id).classList.add('active');

    document.querySelectorAll('.nav-item').forEach(btn => {
        if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(id)) {
            btn.classList.add('active');
        }
    });

    if (id === 'terminal') {
        setTimeout(() => document.getElementById('term-input').focus(), 100);
    }

    // Resetear revelado al cambiar sección
    initScrollReveal();
}

// =========================================
// Sistema de Scroll Reveal (Expert Version)
// =========================================
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
}
window.addEventListener('load', initScrollReveal);

// Lógica de Modo Claro/Oscuro con Cambio de Logos
const themeBtn = document.getElementById('themeBtn');
const mainLogo = document.getElementById('main-logo');
const themeBtnLogo = document.getElementById('theme-btn-logo');

if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');

        if (isLight) {
            if (mainLogo) mainLogo.src = 'img/logo-C-negro.png';
            if (themeBtnLogo) themeBtnLogo.src = 'img/logo-C-negro.png';
        } else {
            if (mainLogo) mainLogo.src = 'img/logo-C-blanco.png';
            if (themeBtnLogo) themeBtnLogo.src = 'img/logo-C-blanco.png';
        }
        lucide.createIcons();
    });
}

// =========================================
// WilmerOS Shell v7.5 - Motor Lógico
// =========================================
const input = document.getElementById('term-input');
const output = document.getElementById('term-output');
const history = [];
let historyIndex = -1;
const commands = ['help', 'bio', 'projects', 'neofetch', 'ls', 'tree', 'cat', 'color', 'theme', 'matrix', 'clear', 'face', 'avatar', 'logo', 'snake'];

const socialLinks = {
    'github': 'https://github.com/wilmerwass',
    'linkedin': 'https://linkedin.com/in/wilmerwass',
    'tiktok': 'https://tiktok.com/@wilmerwass',
    'instagram': 'https://instagram.com/wilmerwass'
};

if (input) {
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const val = input.value.trim().toLowerCase();
            if (val) {
                history.unshift(val);
                historyIndex = -1;
                processCommand(val);
            }
            input.value = "";
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (historyIndex < history.length - 1) {
                historyIndex++;
                input.value = history[historyIndex];
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex > 0) {
                historyIndex--;
                input.value = history[historyIndex];
            } else {
                historyIndex = -1;
                input.value = "";
            }
        } else if (e.key === 'Tab') {
            e.preventDefault();
            const current = input.value.toLowerCase();
            const match = commands.find(c => c.startsWith(current));
            if (match) input.value = match;
        }
    });
}

function processCommand(val) {
    let res = "";
    let cmd = "";
    let args = [];

    if (val.includes('/') && !val.includes(' ')) {
        const parts = val.split('/');
        cmd = parts[0];
        args = [cmd, parts.slice(1).join('/')];
    } else {
        args = val.split(' ');
        cmd = args[0];
    }

    output.innerHTML += `<div><span style="color:var(--primary)">root@wilmerwass:~#</span> <span style="color:white">${val}</span></div>`;

    switch (cmd) {
        case 'help':
            res = `Sistema de Navegación Directa:<br>
                   - <span style="color:var(--primary)">ls / tree</span>: Listar archivos y estructura de directorios<br>
                   - <span style="color:var(--primary)">[nombre]</span>: Escribe el nombre de una carpeta (ej: <span style="color:var(--primary)">tiktok</span>, <span style="color:var(--primary)">bio</span>)<br>
                   - <span style="color:var(--primary)">cat [archivo]</span>: Leer contenido de un archivo de texto<br>
                   - <span style="color:var(--primary)">neofetch</span>: Estadísticas del sistema<br>
                   - <span style="color:var(--primary)">color [light/dark]</span>: Cambiar el tema del sitio<br>
                   - <span style="color:var(--primary)">matrix</span>: Entrar al vacío digital<br>
                   - <span style="color:var(--primary)">snake</span>: Jugar WilmerSnake (8-bit)<br>
                   - <span style="color:var(--primary)">clear</span>: Limpiar terminal`;
            break;
        case 'github':
        case 'linkedin':
        case 'tiktok':
        case 'instagram':
            window.open(socialLinks[cmd], '_blank');
            res = `Abriendo ${cmd}... Conexión establecida.`;
            break;
        case 'bio':
            res = "Wilmer Solano (23). Técnico en Sistemas con enfoque en desarrollo moderno.";
            break;
        case 'projects':
        case 'proyectos':
            showSection('proyectos');
            res = "Cambiando a la sección de proyectos...";
            break;
        case 'social':
            res = `Redes Sociales:<br>- github<br>- linkedin<br>- tiktok<br>- instagram`;
            break;
        case 'resume.pdf':
        case 'cv':
        case 'cv.pdf':
            res = "Ejecutando archivo binario... Descargando CV.";
            window.open('cv.pdf', '_blank');
            break;
        case 'neofetch':
            res = `<div style="display: flex; gap: 20px; flex-wrap: wrap;">
                    <div style="color: var(--primary); font-family: monospace; white-space: pre; font-size: 0.7rem;">
   .--.  
  |o_o | 
  |:_/ | 
 //   \\ \\ 
(|     | )
/'\\_   _/ \`\\
\\___)=(___/ </div>
                    <div style="font-size: 0.85rem;">
                        <span style="color:var(--primary)">wilmer@wass</span><br>
                        <span>-----------</span><br>
                        <span style="color:var(--primary)">OS</span>: WilmerOS v7.5 Carbon<br>
                        <span style="color:var(--primary)">Kernel</span>: Premium-Web-V8<br>
                        <span style="color:var(--primary)">Uptime</span>: 23 years of evolution<br>
                        <span style="color:var(--primary)">Shell</span>: zsh (AI Optimized)
                    </div>
                   </div>`;
            break;
        case 'tree':
            res = `<span style="color:var(--primary)">.</span><br>├── bio/ <br>├── projects/ <br>├── social/ <br>└── resume.pdf`;
            break;
        case 'ls':
            res = "<span style='color:var(--secondary)'>bio/  projects/  social/</span>  resume.pdf";
            break;
        case 'cat':
            const file = args[1] ? args[1].replace('bio/', '').replace('/', '') : '';
            if (!file) res = "Uso: cat [nombre_archivo]";
            else if (file === 'about_me.txt') res = "Wilmer Wass: Técnico en Sistemas e innovador en IA.";
            else if (file === 'resume.pdf') { window.open('cv.pdf', '_blank'); res = "Descargando..."; }
            else res = `Archivo '${file}' no encontrado.`;
            break;
        case 'face':
            res = `<div style="margin-top:10px;"><img src="img/wass.jpg" style="width:150px; border-radius:15px;"></div>Conectando...`;
            break;
        case 'avatar':
            res = `<div style="margin-top:10px;"><img src="img/yo_en_ia_dev.png" style="width:150px; border-radius:15px;"></div>Modo IA activado...`;
            break;
        case 'logo':
            const currentLogo = document.body.classList.contains('light-mode') ? 'img/logo-C-negro.png' : 'img/logo-C-blanco.png';
            res = `<div style="margin-top:10px;"><img src="${currentLogo}" style="height:50px;"></div>Logo sincronizado.`;
            break;
        case 'color':
        case 'theme':
            const mode = args[1];
            if (mode === 'light') { document.body.classList.add('light-mode'); res = "Modo Claro activado."; }
            else if (mode === 'dark') { document.body.classList.remove('light-mode'); res = "Modo Oscuro activado."; }
            else res = "Uso: color [light/dark]";
            break;
        case 'snake':
            const originalContent = output.innerHTML;
            const originalInputStyle = input.style.display;
            input.style.display = 'none';
            new SnakeGame('term-output', () => {
                output.innerHTML = originalContent;
                input.style.display = originalInputStyle;
                input.focus();
                output.innerHTML += `<div><span style="color:var(--primary)">root@wilmerwass:~#</span> <span style="color:white">exit_game</span></div>`;
                output.innerHTML += `<div style="color:#10b981; margin: 5px 0 15px 15px; border-left: 2px solid #10b981; padding-left: 10px;">Sesión de juego finalizada. Bienvenido de nuevo, Root.</div>`;
                document.getElementById('terminal-box').scrollTop = output.scrollHeight;
            });
            return;
        case 'clear':
            output.innerHTML = "";
            return;
        default:
            if (['bio', 'projects', 'social'].includes(cmd)) {
                if (cmd === 'projects') showSection('proyectos');
                res = `Redirigiendo a /${cmd}`;
            } else {
                res = `Comando '${cmd}' no encontrado. Escribe 'help'.`;
            }
    }

    if (res) {
        const responseDiv = document.createElement('div');
        responseDiv.style.color = "#10b981";
        responseDiv.style.margin = "5px 0 15px 15px";
        responseDiv.style.borderLeft = "2px solid #10b981";
        responseDiv.style.paddingLeft = "10px";
        responseDiv.innerHTML = res;
        output.appendChild(responseDiv);
    }

    document.getElementById('terminal-box').scrollTop = output.scrollHeight;
}

// Efecto Matrix Canvas
function triggerMatrix() {
    const canvas = document.getElementById('matrix-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.style.display = 'block';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()";
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = [];
    for (let i = 0; i < columns; i++) drops[i] = 1;

    function draw() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#0f0";
        ctx.font = fontSize + "px arial";

        for (let i = 0; i < drops.length; i++) {
            const text = letters[Math.floor(Math.random() * letters.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        }
    }

    const matrixInterval = setInterval(draw, 33);
    setTimeout(() => {
        clearInterval(matrixInterval);
        canvas.style.display = 'none';
    }, 6000);
}

// Pantalla de Carga (Preloader)
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 1000);
        }, 2500);
    }
});

// Efecto Tilt 3D
const tiltCards = document.querySelectorAll('.tilt-card');

document.addEventListener('mousemove', (e) => {
    tiltCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
});

document.addEventListener('mouseleave', () => {
    tiltCards.forEach(card => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
        card.style.transition = 'transform 0.5s ease';
    });
});

document.addEventListener('mouseenter', () => {
    tiltCards.forEach(card => {
        card.style.transition = 'none';
    });
});
