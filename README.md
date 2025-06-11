 📝 Formulario de Registro con Validación usando Zod

Este proyecto es un formulario de registro web sencillo que utiliza la biblioteca [Zod](https://zod.dev/) para validar los datos ingresados por el usuario en el navegador.

🚀 Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (ES Modules)
- [Zod](https://esm.sh/zod@3) (importado vía CDN con ES Modules)

📋 Funcionalidades

- Validación de campos con mensajes personalizados:
  - **Nombre** obligatorio.
  - **Correo electrónico** debe ser válido.
  - **Contraseña** con mínimo 6 caracteres.
- Muestra errores directamente debajo de los campos.
- Limpia el formulario y muestra un mensaje de éxito si todo es válido.

🧩 Estructura del proyecto
registro-zod/
├── index.html
├── script.js
├── style.css
└── README.md


 🔍 Vista previa

![preview](https://github.com/Celvy92/registro-zod/assets/preview.png) <!-- Puedes subir una captura y reemplazar esta URL -->

🛠 Cómo usar

1. Clona este repositorio:

```bash
git clone https://github.com/Celvy92/registro-zod.git

Abre el archivo index.html en tu navegador o usa una extensión como Live Server en VS Code.
Llena el formulario y observa las validaciones.
Importación de Zod

Zod se importa como módulo desde un CDN moderno:

import { z } from 'https://esm.sh/zod@3';
Esto permite usarlo directamente en el navegador sin instalación adicional.

