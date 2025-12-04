import React, { useEffect, useState } from "react";
import { getUserById, updateUser } from "../services/UserService";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const UserProfile = () => {

    const { id } = useParams();
    
    const [user, setUser] = useState(null);
    const [message, setMessage] = useState("");

    // 🔍 Cargar datos del usuario por ID
    useEffect(() => {
        if (!id) {
            console.error("No se recibió ID en la URL");
            return;
        }

        const fetchUser = async () => {
            try {
                const res = await getUserById(id);
                console.log("Usuario obtenido:", res);
                setUser(res);
            } catch (err) {
                console.error("Error obteniendo usuario:", err);
            }
        };

        fetchUser();
    }, [id]);

    // 🔄 Manejo de inputs
    const handleChange = (e) => {
        const { name, value } = e.target;

        // manejo especial para valores booleanos
        if (name === "isPremium") {
            setUser({ ...user, [name]: value === "true" });
        } else if (name === "points") {
            setUser({ ...user, [name]: Number(value) });
        } else {
            setUser({ ...user, [name]: value });
        }
    };

    // 💾 Guardar cambios
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateUser(user.id, user);
            setMessage("Datos actualizados correctamente");
        } catch (error) {
            console.error(error);
            setMessage("Error al actualizar");
        }
    };

    // ⏳ Aún cargando
    if (!user) return <><p>Cargando datos del usuario...</p> <Link to="/">Volver al inicio</Link></>;

    return (
        <div style={{ maxWidth: "400px", margin: "0 auto" }}>
            <h2>Editar Perfil</h2>

            <form onSubmit={handleSubmit}>
                
                <label>Username</label>
                <input
                    type="text"
                    name="username"
                    value={user.username || ""}
                    onChange={handleChange}
                />

                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={user.email || ""}
                    onChange={handleChange}
                />

                <label>Rol</label>
                <input
                    type="text"
                    name="role"
                    value={user.role || ""}
                    onChange={handleChange}
                />

                <label>Tipo de usuario</label>
                <input
                    type="text"
                    name="typeUser"
                    value={user.typeUser || ""}
                    onChange={handleChange}
                />

                <label>Puntos</label>
                <input
                    type="number"
                    name="points"
                    value={user.points}
                    onChange={handleChange}
                />

                <label>Rango</label>
                <input
                    type="text"
                    name="range"
                    value={user.range || ""}
                    onChange={handleChange}
                />

                <label>Premium</label>
                <select
                    name="isPremium"
                    value={user.isPremium}
                    onChange={handleChange}
                >
                    <option value={true}>Sí</option>
                    <option value={false}>No</option>
                </select>

                <button type="submit">Guardar Cambios</button>
            </form>

            {message && <p>{message}</p>}
            <p>Cargando datos del usuario...</p> <Link to="/">Volver al inicio</Link>
        </div>
    );
};

export default UserProfile;
