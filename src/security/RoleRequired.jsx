import { Navigate } from 'react-router-dom';

function RoleRequired({children, requiredRole}) {
    const role = localStorage.getItem('role');

    return requiredRole.includes(role)?
        children
        :
        <Navigate to="/YouDontHaveAccessToThisPageBecauseYouDontHavePermissionDuhStupidUserGoOut" replace />;
}
export default RoleRequired;