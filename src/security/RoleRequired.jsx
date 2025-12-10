import { Navigate } from 'react-router-dom';

function RoleRequired({children, requiredRole}) {
    const role = localStorage.getItem('role');

    return requiredRole.includes(role)?
    <>
        {alert("Acceso concedido para el rol: " + role)}
        {children}
    </>
    :
    <>
    {alert("Acceso denegado para el rol: " + role)}
    <Navigate to="/YouDontHaveAccessToThisPageBecauseYouDontHavePermissionDuhStupidUserGoOut" replace />;
    </>
}
export default RoleRequired;