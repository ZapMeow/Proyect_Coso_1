import React, { useEffect, useState } from "react";
import { getUserById, updateUser } from "../services/UserService";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../css/UserProfile.css";
import Logo from "../assets/Level-Up.png";
import FooterPage from "../components/FooterPage";
import { logout } from "../services/AuthService";


const UserProfile = () => {
    const navigate = useNavigate();

    const { id } = useParams();
    
    const [user, setUser] = useState(null);
    const [message, setMessage] = useState("");

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
    if (!user) {
        return (
            <div className="user-profile-loading">
                <p>Cargando datos del usuario...</p>
                <Link to="/">Volver al inicio</Link>
            </div>
        );
    }

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-black border-bottom border-secondary">
            <div className="container-fluid" >
        
                <div className="collapse navbar-collapse justify-content-center current-nav-bar" id="navbarNav">
                <ul className="navbar-nav gap-3" >
                    <li className="nav-item">

                    <Link to="/">Pagina principal</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">
                        <img src={Logo} alt="Logo" width="120" />
                        </Link>
                    </li>
                    
                    <li className="nav-item">
                    <button onClick={() => { logout(); navigate("/"); }}>Cerrar sesion</button>
                    </li>
                </ul>
                </div>
            </div>
            </nav>



        <div className="user-profile-container">
            <h2>Editar Perfil</h2>

            <form onSubmit={handleSubmit} className="user-profile-form">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        value={user.username || ""}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={user.email || ""}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="role">Rol</label>
                    <input
                        id="role"
                        type="text"
                        name="role"
                        value={user.role || ""}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="typeUser">Tipo de usuario</label>
                    <input
                        id="typeUser"
                        type="text"
                        name="typeUser"
                        value={user.typeUser || ""}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="points">Puntos</label>
                    <input
                        id="points"
                        type="number"
                        name="points"
                        value={user.points}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="range">Rango</label>
                    <input
                        id="range"
                        type="text"
                        name="range"
                        value={user.range || ""}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit">Guardar Cambios</button>
            </form>

            {message && <p className="user-profile-message">{message}</p>}
            <div className="user-profile-footer">
                <Link to="/">Volver al inicio</Link>
            </div>
        </div>

        <FooterPage links={false} />

        </>
    );
};

export default UserProfile;
