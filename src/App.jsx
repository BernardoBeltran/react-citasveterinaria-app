import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

// Obtener pacientes, si devuelve null, crea un nuevo arreglo vacío
const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];

function App() {
    const [pacientes, setPacientes] = useState(pacientesLS);
    const [paciente, setPaciente] = useState({}); // Estado para controlar la funcionalidad de Editar

    // Agregar pacientes a localStorage cada que pacientes cambie
    useEffect(() => {
        localStorage.setItem("pacientes", JSON.stringify(pacientes));
    }, [pacientes]);

    // Eliminar Registro
    const eliminarPaciente = (id) => {
        const pacientesFiltrados = pacientes.filter(
            (paciente) => paciente.id !== id
        );
        setPacientes(pacientesFiltrados);
    };

    return (
        <div className="container mx-auto mt-20">
            <Header />
            <div className="mt-12 md:flex">
                <Formulario
                    pacientes={pacientes}
                    setPacientes={setPacientes}
                    paciente={paciente}
                    setPaciente={setPaciente}
                />
                <ListadoPacientes
                    pacientes={pacientes}
                    setPaciente={setPaciente}
                    eliminarPaciente={eliminarPaciente}
                />
            </div>
        </div>
    );
}

export default App;
