console.log("JS conectado correctamente");

// 1. Capturamos el botón
const btnRegister = document.getElementById("btnRegistro");

// 2. Verificamos que exista
if (btnRegister) {
  btnRegister.addEventListener("click", () => {
    alert("✅ El botón ya funciona");
    console.log("Botón presionado");
  });
} else {
  console.error("❌ No se encontró el botón");
}


