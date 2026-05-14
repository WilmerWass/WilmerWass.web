/**
 * WilmerOS Snake Game v1.0
 * Estética 8-bit integrada en Shell
 */

class SnakeGame {
    constructor(containerId, onExit) {
        this.container = document.getElementById(containerId);
        this.onExit = onExit;
        this.canvas = null;
        this.ctx = null;
        this.score = 0;
        this.gridSize = 20;
        this.snake = [{ x: 10, y: 10 }];
        this.food = { x: 15, y: 15 };
        this.dx = 1;
        this.dy = 0;
        this.interval = null;
        this.isGameOver = false;

        this.init();
    }

    init() {
        // Crear Canvas con estilo retro
        this.container.innerHTML = '<div id="snake-ui" style="text-align:center;">' +
            '<div style="margin-bottom:10px; font-family:monospace; color:var(--primary);">SCORE: <span id="snake-score">0</span> | PRESS [ESC] TO EXIT</div>' +
            '<canvas id="snake-canvas" width="400" height="300" style="border:2px solid var(--primary); background:#020617;"></canvas>' +
            '</div>';

        this.canvas = document.getElementById('snake-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.scoreElement = document.getElementById('snake-score');

        // Ajustar canvas para móviles si es necesario
        if (window.innerWidth < 450) {
            this.canvas.width = 300;
            this.canvas.height = 200;
        }

        this.bindEvents();
        this.spawnFood();
        this.gameLoop();
    }

    bindEvents() {
        this.keydownHandler = (e) => {
            if (e.key === 'Escape') this.exit();

            const LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;
            const A = 65, W = 87, D = 68, S = 83;

            // Prevenir desplazamiento de pantalla con flechas y WASD durante el juego
            if ([LEFT, UP, RIGHT, DOWN, A, W, D, S].includes(e.keyCode)) {
                e.preventDefault();
            }

            if ((e.keyCode === LEFT || e.keyCode === A) && this.dx === 0) { this.dx = -1; this.dy = 0; }
            if ((e.keyCode === UP || e.keyCode === W) && this.dy === 0) { this.dx = 0; this.dy = -1; }
            if ((e.keyCode === RIGHT || e.keyCode === D) && this.dx === 0) { this.dx = 1; this.dy = 0; }
            if ((e.keyCode === DOWN || e.keyCode === S) && this.dy === 0) { this.dx = 0; this.dy = 1; }
        };
        window.addEventListener('keydown', this.keydownHandler);
    }

    spawnFood() {
        this.food = {
            x: Math.floor(Math.random() * (this.canvas.width / this.gridSize)),
            y: Math.floor(Math.random() * (this.canvas.height / this.gridSize))
        };
    }

    draw() {
        // Limpiar
        this.ctx.fillStyle = '#020617';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Dibujar Comida (Bit de código)
        this.ctx.fillStyle = '#ef4444';
        this.ctx.fillRect(this.food.x * this.gridSize, this.food.y * this.gridSize, this.gridSize - 2, this.gridSize - 2);

        // Dibujar Serpiente
        this.ctx.fillStyle = '#00C4CC'; // Color primario
        this.snake.forEach((part, index) => {
            if (index === 0) this.ctx.fillStyle = '#ffffff'; // Cabeza
            else this.ctx.fillStyle = '#00C4CC';
            this.ctx.fillRect(part.x * this.gridSize, part.y * this.gridSize, this.gridSize - 2, this.gridSize - 2);
        });
    }

    update() {
        if (this.isGameOver) return;

        const head = { x: this.snake[0].x + this.dx, y: this.snake[0].y + this.dy };

        // Colisiones con paredes
        if (head.x < 0 || head.x >= this.canvas.width / this.gridSize ||
            head.y < 0 || head.y >= this.canvas.height / this.gridSize) {
            return this.gameOver();
        }

        // Colisión con sí misma
        if (this.snake.some(part => part.x === head.x && part.y === head.y)) {
            return this.gameOver();
        }

        this.snake.unshift(head);

        // Comer comida
        if (head.x === this.food.x && head.y === this.food.y) {
            this.score += 10;
            this.scoreElement.innerText = this.score;
            this.spawnFood();
        } else {
            this.snake.pop();
        }
    }

    gameOver() {
        this.isGameOver = true;
        clearInterval(this.interval);
        this.ctx.fillStyle = "rgba(0,0,0,0.7)";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = "#fff";
        this.ctx.font = "20px monospace";
        this.ctx.textAlign = "center";
        this.ctx.fillText("SYSTEM CRASH (GAME OVER)", this.canvas.width / 2, this.canvas.height / 2);
        this.ctx.font = "14px monospace";
        this.ctx.fillText("Press ESC to return to Shell", this.canvas.width / 2, this.canvas.height / 2 + 30);
    }

    gameLoop() {
        this.interval = setInterval(() => {
            this.update();
            this.draw();
        }, 140);
    }

    exit() {
        clearInterval(this.interval);
        window.removeEventListener('keydown', this.keydownHandler);
        this.onExit();
    }
}
