# Learning Roadmap — WilmerWass

## 🎯 Objetivo

Aprender desarrollo de software de forma práctica y progresiva, utilizando los proyectos reales de WilmerWass como entorno principal de aprendizaje.

La ruta **no está organizada por semanas**. Está organizada por **temas y subtemas**, y el avance depende del dominio de cada concepto, no del tiempo transcurrido.

### Principio de aprendizaje

> **Aprender → aplicar en un proyecto real → revisar → corregir → demostrar comprensión → avanzar.**

La IA se utilizará como herramienta de explicación, revisión y orientación, **no como sustituto del aprendizaje ni de la escritura del código**.

---

# 📚 1. HTML

**Nivel inicial:** Intermedio

### 1.1 Estructura HTML5
- [x] `<!DOCTYPE html>`
- [x] `<html>`
- [x] `<head>`
- [x] `<body>`
- [x] `lang`
- [x] `meta charset`
- [x] `meta viewport`
- [ ] Estructura correcta y validación HTML

### 1.2 HTML semántico
- [x] `<header>`
- [x] `<nav>`
- [x] `<main>`
- [x] `<section>`
- [x] `<footer>`
- [ ] `<article>`
- [ ] `<aside>`
- [ ] Diferencia entre elementos semánticos y contenedores genéricos
- [ ] Jerarquía correcta de encabezados

### 1.3 Enlaces y navegación
- [x] Enlaces internos
- [x] Enlaces externos
- [x] `mailto:`
- [ ] Atributos de enlaces
- [ ] Navegación accesible

### 1.4 Imágenes y multimedia
- [x] `<img>`
- [x] `src`
- [x] `alt`
- [ ] Imágenes responsivas
- [ ] `<picture>`
- [ ] Optimización de imágenes

### 1.5 Formularios
- [x] `<form>`
- [x] `<label>`
- [x] `<input>`
- [x] `<textarea>`
- [x] `required`
- [ ] Tipos de `input`
- [ ] Validación nativa
- [ ] Accesibilidad de formularios
- [ ] Envío de datos a un backend

### 1.6 SEO y metadatos
- [x] `title`
- [x] `description`
- [x] Open Graph
- [ ] Canonical URL
- [ ] Robots
- [ ] Sitemap
- [ ] SEO técnico básico

### 1.7 Accesibilidad
- [ ] Semántica accesible
- [ ] Jerarquía de encabezados
- [ ] `alt` apropiado
- [ ] Formularios accesibles
- [ ] Navegación mediante teclado
- [ ] ARIA: cuándo utilizarlo y cuándo NO utilizarlo

### 1.8 Proyecto aplicado
**Proyecto principal:** WilmerWass.web

Objetivo:
- Revisar el `index.html` existente.
- Identificar errores estructurales.
- Corregirlos manualmente.
- Entender por qué cada modificación es necesaria.
- Dejar una estructura HTML sólida antes de avanzar.

---

# 🎨 2. CSS

**Nivel inicial:** Intermedio

### 2.1 Fundamentos
- [x] Selectores
- [x] Clases
- [x] IDs
- [x] Box Model
- [ ] Especificidad
- [ ] Cascada
- [ ] Herencia

### 2.2 Layout
- [x] Flexbox
- [ ] Flexbox avanzado
- [x] Grid
- [ ] Grid avanzado
- [ ] Positioning
- [ ] Stacking context
- [ ] `z-index`

### 2.3 Responsive Design
- [ ] Media queries
- [ ] Mobile-first
- [ ] Unidades relativas
- [ ] `clamp()`
- [ ] Diseño adaptable
- [ ] Tipografía responsiva

### 2.4 Arquitectura CSS
- [ ] Organización del CSS
- [ ] Variables CSS
- [ ] Componentización
- [ ] Convenciones de nombres
- [ ] Evitar estilos difíciles de mantener

### 2.5 Proyecto aplicado
**Proyecto:** WilmerWass.web

Objetivo:
- Analizar `css/style.css`.
- Identificar problemas de organización.
- Mejorar el responsive design.
- Construir componentes visuales reutilizables.
- Mantener el código escrito manualmente.

---

# 🟨 3. JavaScript

**Nivel inicial:** Conceptual / básico

> Este será uno de los bloques principales de aprendizaje.

### 3.1 Fundamentos del lenguaje
- [ ] Variables
- [ ] `let`
- [ ] `const`
- [ ] Tipos de datos
- [ ] Operadores
- [ ] Condicionales
- [ ] Bucles
- [ ] Funciones
- [ ] Scope
- [ ] Hoisting

### 3.2 Estructuras de datos
- [ ] Arrays
- [ ] Objetos
- [ ] Métodos de arrays
- [ ] Destructuring
- [ ] Spread / Rest
- [ ] Map
- [ ] Filter
- [ ] Reduce

### 3.3 DOM
- [ ] Qué es el DOM
- [ ] Seleccionar elementos
- [ ] Modificar elementos
- [ ] Crear elementos
- [ ] Eventos
- [ ] Event listeners
- [ ] Event delegation

### 3.4 JavaScript en el navegador
- [ ] Formularios
- [ ] Validación
- [ ] LocalStorage
- [ ] SessionStorage
- [ ] Manipulación de clases
- [ ] Interactividad

### 3.5 Asincronía
- [ ] Callbacks
- [ ] Promises
- [ ] `async`
- [ ] `await`
- [ ] `fetch()`
- [ ] JSON
- [ ] Manejo de errores

### 3.6 Módulos
- [ ] `import`
- [ ] `export`
- [ ] Organización del código

### 3.7 Proyecto aplicado
**Proyecto:** WilmerWass.web

Posibles aplicaciones:
- Menú interactivo
- Cambio de tema
- Slider de proyectos
- Formularios
- Animaciones controladas por JavaScript
- Consumo de APIs
- Componentes interactivos

---

# 🔷 4. TypeScript

**Nivel inicial:** Conceptual

### 4.1 Fundamentos
- [ ] Qué es TypeScript
- [ ] Diferencias entre JavaScript y TypeScript
- [ ] Tipos
- [ ] Inferencia de tipos
- [ ] Interfaces
- [ ] Type aliases
- [ ] Unions
- [ ] Enums

### 4.2 TypeScript avanzado
- [ ] Generics
- [ ] Utility Types
- [ ] Narrowing
- [ ] Type guards
- [ ] Modules
- [ ] Configuración con `tsconfig.json`

### 4.3 Proyecto aplicado
Introducir TypeScript únicamente cuando el proyecto tenga una necesidad real que justifique su uso.

---

# 🌐 5. Web APIs y desarrollo frontend

### 5.1 HTTP
- [ ] Qué es HTTP
- [ ] Request
- [ ] Response
- [ ] Headers
- [ ] Métodos HTTP
- [ ] Códigos de estado

### 5.2 APIs
- [ ] Qué es una API
- [ ] REST
- [ ] JSON
- [ ] Consumir una API
- [ ] Crear una API

### 5.3 Herramientas del navegador
- [ ] DevTools
- [ ] Console
- [ ] Network
- [ ] Application
- [ ] Lighthouse
- [ ] Debugging

---

# 🌿 6. Git y GitHub

**Nivel inicial:** Práctico

### 6.1 Fundamentos
- [ ] Repository
- [ ] Working tree
- [ ] Staging area
- [ ] Commit
- [ ] Branch
- [ ] Merge

### 6.2 Flujo de trabajo
- [ ] Crear ramas
- [ ] Commits significativos
- [ ] Pull
- [ ] Push
- [ ] Pull Requests
- [ ] Resolución de conflictos

### 6.3 Git aplicado al aprendizaje
- [ ] Registrar avances
- [ ] Revisar historial
- [ ] Comparar versiones
- [ ] Identificar cuándo y por qué se rompió una implementación
- [ ] Documentar cambios

---

# 🟦 7. C#

**Nivel inicial:** Conceptual

### 7.1 Fundamentos
- [ ] Variables
- [ ] Tipos
- [ ] Operadores
- [ ] Condicionales
- [ ] Bucles
- [ ] Métodos

### 7.2 Programación orientada a objetos
- [ ] Clases
- [ ] Objetos
- [ ] Propiedades
- [ ] Métodos
- [ ] Constructores
- [ ] Encapsulación
- [ ] Herencia
- [ ] Polimorfismo
- [ ] Abstracción
- [ ] Interfaces

### 7.3 C# moderno
- [ ] LINQ
- [ ] Generics
- [ ] Delegates
- [ ] Events
- [ ] Async/Await
- [ ] Manejo de excepciones

### 7.4 Proyecto aplicado
Aplicar C# sobre los proyectos existentes en C# cuando cada concepto sea necesario.

---

# 🟪 8. .NET

**Nivel inicial:** Conceptual

### 8.1 Fundamentos
- [ ] Qué es .NET
- [ ] SDK
- [ ] Runtime
- [ ] CLI
- [ ] Proyecto .NET
- [ ] NuGet

### 8.2 ASP.NET Core
- [ ] HTTP en .NET
- [ ] Minimal APIs
- [ ] Controllers
- [ ] Routing
- [ ] Dependency Injection
- [ ] Middleware
- [ ] Configuration

### 8.3 APIs
- [ ] Crear una API REST
- [ ] CRUD
- [ ] DTOs
- [ ] Validación
- [ ] Manejo de errores

### 8.4 Persistencia
- [ ] Bases de datos
- [ ] Entity Framework Core
- [ ] Migrations
- [ ] Relaciones
- [ ] Consultas

---

# 🧪 9. Testing y calidad

- [ ] Qué es una prueba
- [ ] Unit testing
- [ ] Integration testing
- [ ] Assertions
- [ ] Mocking
- [ ] Debugging
- [ ] Code review
- [ ] Refactoring

---

# 🔐 10. Seguridad

- [ ] HTTPS
- [ ] CORS
- [ ] XSS
- [ ] CSRF
- [ ] Inyección
- [ ] Manejo seguro de credenciales
- [ ] Variables de entorno
- [ ] Autenticación
- [ ] Autorización

---

# 🚀 11. Deploy y producción

- [ ] Build
- [ ] Hosting
- [ ] Dominio
- [ ] DNS
- [ ] HTTPS
- [ ] Variables de entorno
- [ ] CI/CD
- [ ] GitHub Actions
- [ ] Monitoreo básico

---

# 🧠 12. Ingeniería de software

- [ ] Principios SOLID
- [ ] DRY
- [ ] KISS
- [ ] Separación de responsabilidades
- [ ] Arquitectura
- [ ] Patrones de diseño
- [ ] Documentación
- [ ] Mantenibilidad
- [ ] Escalabilidad

---

# 📊 Estado del aprendizaje

Estados utilizados:

- ⬜ Pendiente
- 🟡 En aprendizaje
- 🔵 En práctica
- 🟢 Dominado
- 🔴 Necesita repaso

**Regla:** un tema no se considera dominado simplemente porque se haya leído o explicado. Debe poder utilizarse de forma razonablemente autónoma en un proyecto.

---

# 🧭 Proyecto principal de aprendizaje

## WilmerWass.web

Este proyecto funcionará como el primer laboratorio práctico de aprendizaje.

### Orden inicial

1. HTML — revisar y fortalecer estructura.
2. CSS — revisar y fortalecer diseño.
3. JavaScript — comenzar aprendizaje práctico.
4. Git/GitHub — mejorar flujo de trabajo.
5. TypeScript — introducirlo cuando corresponda.
6. Web APIs — cuando JavaScript esté preparado.
7. Posteriormente conectar conocimientos con proyectos C#/.NET.

---

# 🤖 Reglas para trabajar con IA

La IA puede:

- Explicar conceptos.
- Analizar errores.
- Hacer preguntas.
- Proponer ejercicios.
- Revisar código.
- Dar pistas.
- Explicar documentación.
- Ayudar a investigar un problema.

La IA no debe:

- Escribir automáticamente todo el proyecto.
- Resolver un ejercicio sin explicar el razonamiento.
- Introducir tecnologías porque sí.
- Cambiar el orden de aprendizaje arbitrariamente.
- Saltar a conceptos avanzados sin fundamento.
- Convertir cada problema en código generado para copiar y pegar.

### Regla principal

**El código importante debe ser escrito y comprendido por WilmerWass.**

---

# 📌 Próximo punto de estudio

## HTML — Revisión del `index.html`

Antes de comenzar JavaScript, revisar el `index.html` actual de `WilmerWass.web`.

Objetivos:

1. Identificar errores de estructura.
2. Identificar elementos HTML no válidos o mal utilizados.
3. Revisar semántica.
4. Revisar accesibilidad.
5. Revisar metadatos.
6. Revisar formularios.
7. Corregir manualmente.
8. Entender cada corrección.
9. Confirmar que la estructura está lista para continuar con CSS y JavaScript.