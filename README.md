# Práctica 13 - La Tienda: Composición, Eventos y Estado

Proyecto desarrollado con **React**, **TypeScript** y **Vite** para la materia de Tópico de Aplicaciones Web (ITSON).

---

## Descripción

Aplicación interactiva de tienda en línea que utiliza el concepto de composición de componentes en React, paso de funciones mediante `props`, y manejo de estado local (`useState`).

### Funcionalidades
- **Layout genérico:** Estructura fija con encabezado, contenido principal y pie de página.
- **Catálogo de productos:** Visualización dinámica de productos con nombre, imagen, precio y existencias.
- **Filtrado por categoría:** Botones interactivos para filtrar entre *todas*, *calzado*, *ropa* y *accesorios*.
- **Carrito de compras:** Adición de productos al carrito controlando stock agotado y calculando total acumulado y piezas en tiempo real.

---

## Tecnologías Utilizadas

- **React 18 / 19**
- **TypeScript**
- **Vite**
- **CSS3**

---

## Cuestionario de la Práctica

### Ejercicio 1: El marco de la página
> **Pregunta:** ¿Por qué el `Layout` no necesita saber que es una tienda?
>
> **Respuesta:** El componente `Layout` actúa como un contenedor de diseño genérico (*wrapper*). Su única responsabilidad es definir el marco visual y la estructura base (encabezado, pie de página y área de contenido central). Al recibir el contenido dinámico mediante la propiedad `children`, no depende de la lógica de negocio ni de la estructura de datos del catálogo, lo que lo hace completamente reutilizable en cualquier otra parte o página de la aplicación.

---

### Ejercicio 2: El catálogo
> **Pregunta:** ¿Qué pasa si escribes `onClick={onAgregar(producto)}` sin la flecha?
>
> **Respuesta:** Si no se utiliza la sintaxis de función flecha (`() => onAgregar(producto)`), la función `onAgregar(producto)` se **ejecutará inmediatamente** durante la fase de renderizado del componente. Esto provoca que el evento no espere al clic del usuario y, si la función modifica un estado que provoca un nuevo renderizado, generará un bucle infinito (*infinite re-render loop*) que bloqueará la aplicación.

---

### Ejercicio 3: Filtrar y agregar al carrito
> **Pregunta:** ¿Por qué con `carrito.push(...)` el contador no se mueve y no sale ningún error?
>
> **Respuesta:** React detecta cambios en el estado comparando las referencias en memoria de las variables (*shallow comparison*). Al usar `.push()`, se muta directamente el arreglo existente en memoria sin cambiar su referencia. Dado que la referencia sigue siendo exactamente la misma, React asume que el estado no ha cambiado y omite el re-renderizado del componente (por eso el contador no se actualiza). Tampoco marca un error explícito porque la mutación de arreglos es sintaxis completamente válida en JavaScript.

---
