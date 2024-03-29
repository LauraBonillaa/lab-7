const tareas = [
    { descripcion: "Comprar queso", completada: false },
    { descripcion: "Estudiar para el examen", completada: false },
    { descripcion: "Comprar pan", completada: false },
    { descripcion: "Escribir guión", completada: false },
    { descripcion: "Limpiar la sala", completada: false },
    { descripcion: "Traer sobrino", completada: false },
    { descripcion: "Ir a clase", completada: false },
    { descripcion: "Comprar pantalón", completada: false },
    { descripcion: "Bañarme", completada: false },
  
];

function mostrarTareas() {
    const contenedorTareas = document.getElementById("contenedorTareas");
    contenedorTareas.innerHTML = "";

    tareas.forEach((tarea, index) => {
        const tareaElemento = document.createElement("div");
        tareaElemento.classList.add("tarea");

        if (!tarea.completada) {
            tareaElemento.textContent = `${index + 1}. ${tarea.descripcion}`;
        } else {
            tareaElemento.textContent = tarea.descripcion;
        }

        tareaElemento.addEventListener("click", () => {
            if (tarea.completada) {
                tarea.completada = false;
                tareaElemento.textContent = `${index + 1}. ${tarea.descripcion}`;
                tareaElemento.classList.remove("completada");
            } else {
                tarea.completada = true;
                tareaElemento.textContent = tarea.descripcion;
                tareaElemento.classList.add("completada");
            }

            actualizarResumen();
        });

        contenedorTareas.appendChild(tareaElemento);
    });

    actualizarResumen();

    function actualizarResumen() {
        const tareasNoCompletadas = tareas.filter(tarea => !tarea.completada).length;
        const tareasCompletadas = tareas.length - tareasNoCompletadas;

        document.getElementById("totalPorHacer").textContent = tareasNoCompletadas;
        document.getElementById("tareasCompletadas").textContent = tareasCompletadas;
    }
}

mostrarTareas();

