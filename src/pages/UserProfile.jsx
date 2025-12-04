import React, { useEffect, useState } from "react";
import { getUser, updateUser } from "../services/UserService";

const UserProfile = () => {
    
    const username = localStorage.getItem('username');
    const [user, setUser] = useState(null);
    const [message, setMessage] = useState("");

    useEffect(() => {
        getUser(username)
            .then(res => setUser(res.data))
            .catch(err => console.error(err));
    }, []);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

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

    if (!user) return <p>Cargando...</p>;

    return (
        <div style={{ maxWidth: "400px", margin: "0 auto" }}>
            <h2>Editar Perfil</h2>

            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleChange}
                />

                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                />

                <label>Tipo de usuario</label>
                <input
                    type="text"
                    name="typeUser"
                    value={user.typeUser}
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
                    value={user.range}
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
        </div>
    );
};

export default UserProfile;
