const form = document.getElementById("registro-form");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const password = document.getElementById("password");
const mensajeExito = document.getElementById("mensaje-exito");

// Errores específicos
const errorNombre = document.getElementById("error-nombre");
const errorCorreo = document.getElementById("error-correo");
const errorPassword = document.getElementById("error-password");

const schema = z.object({
  nombre: z.string().min(1, "El nombre es obligatorio"),
  correo: z.string().email("Correo no válido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Limpiar mensajes anteriores
  mensajeExito.textContent = "";
  errorNombre.textContent = "";
  errorCorreo.textContent = "";
  errorPassword.textContent = "";

  const datos = {
    nombre: nombre.value.trim(),
    correo: correo.value.trim(),
    password: password.value.trim(),
  };

  const resultado = schema.safeParse(datos);

  if (!resultado.success) {
    const errores = resultado.error.flatten().fieldErrors;

    if (errores.nombre) {
      errorNombre.textContent = errores.nombre[0];
    }
    if (errores.correo) {
      errorCorreo.textContent = errores.correo[0];
    }
    if (errores.password) {
      errorPassword.textContent = errores.password[0];
    }
    return;
  }

  mensajeExito.textContent = "✅ ¡Formulario enviado con éxito!";
  mensajeExito.style.color = "green";
  form.reset();
});
