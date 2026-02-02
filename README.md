# 🧮 Calculadora Pro - Arquitectura MVC

Este proyecto es una calculadora web robusta desarrollada con **TypeScript** y **Node.js**. La aplicación está estructurada bajo el patrón de diseño **Modelo-Vista-Controlador (MVC)**, lo que garantiza un código organizado, escalable y fácil de mantener.



[Image of MVC architectural pattern diagram]


## 🛠️ Tecnologías utilizadas

* **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
* **Entorno de ejecución:** [Node.js](https://nodejs.org/)
* **Arquitectura:** Pattern MVC (Model-View-Controller)
* **Bundler/Herramientas:** NPM, TSC (TypeScript Compiler)

## 🏗️ Estructura del Proyecto (MVC)

El proyecto se divide en tres capas fundamentales:

1.  **Modelo (`CalculatorModel.ts`):** Contiene toda la lógica aritmética y el estado de la aplicación. Es totalmente independiente de la interfaz visual.
2.  **Vista (`CalculatorView.ts`):** Se encarga exclusivamente de la manipulación del DOM, capturar eventos de usuario y renderizar los datos en pantalla.
3.  **Controlador (`Controller.ts`):** Actúa como el cerebro conector. Escucha las acciones de la Vista, le pide al Modelo que procese los datos y devuelve el resultado a la Vista.

```CALCULADORA-TS
src/
├── controller/
│   └── Controller.ts
├── model/
│   └── CalculatorModel.ts
├── view/
│   └── CalculatorView.ts
└── index.ts  # Punto de entrada
```
**🛠️ Tecnologías utilizadas**

- Node.js (sin frameworks)
- TypeScript
- Programación Orientada a Objetos (OOP)
- Patrón MVC

**⚙️ Instalación y ejecución**

**Clonar el repositorio:**

git clone https://github.com/LuissVi/Calculadora-Type-Script.git
cd tu-repositorio

## 📄 Documentación detallada

Se incluyen PDFs explicativos por clase y patrón MVC:

- [Modelo - Calculator](docs/CalculatorModel.pdf)  
- [Vista - View](docs/CalculatorView.pdf)  
- [Controlador - Controller](docs/Controller.pdf)  