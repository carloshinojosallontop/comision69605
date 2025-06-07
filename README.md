# 🎮 Tienda de Videojuegos - E-commerce React

Este proyecto es una tienda online de videojuegos desarrollada con **React** y **Vite**, que permite a los usuarios navegar por un catálogo de productos, añadirlos al carrito, y realizar un checkout básico. Utiliza Firebase como backend para el almacenamiento de productos y órdenes.

## 🚀 Tecnologías Utilizadas

- ⚛️ React
- ⚡ Vite
- 🔥 Firebase (Firestore)
- 🛒 React Context API (manejo de carrito)
- 🧪 React Hook Form (validación de formularios)
- 📦 SweetAlert2 (alertas de confirmación)
- 🔄 React Router DOM (navegación entre vistas)
- 💅 Bootstrap (estilos)

## 🧰 Funcionalidades Principales

- Listado de productos por categoría
- Vista detallada de cada videojuego
- Agregar y eliminar productos del carrito
- Visualización del total del carrito
- Formulario de compra con validación
- Almacenamiento de órdenes en Firebase
- Alerta de confirmación de compra

## 🔧 Instalación

Clona el repositorio y ejecuta los siguientes comandos:

```bash
npm install
npm run dev
```

> Asegúrate de configurar correctamente tu conexión a Firebase en `/src/service/firebase.js`.

## 💻 Version Host

Si deseas ver el proyecto online puedes ingresar al siguiente link: [TrabajoFinal](https://comision69605.vercel.app/)

## 📁 Estructura del Proyecto

```
entrega-comision69605/
├── components/           # Componentes reutilizables (Navbar, Item, ItemList, etc.)
├── context/              # Contexto del carrito
├── pages/                # Vistas principales (CartView, Checkout, etc.)
├── service/              # Configuración de Firebase
├── App.jsx               # Enrutamiento y layout principal
├── main.jsx              # Punto de entrada
```

## 📝 Notas

- Este proyecto fue realizado como parte de la **Comisión 69605 de Coderhouse**.
- Puedes personalizar las categorías, productos y diseño a tu gusto.
- Se recomienda usar Firebase Authentication y protección de rutas para un entorno de producción.


Desarrollado por Carlos Hinojosa.
