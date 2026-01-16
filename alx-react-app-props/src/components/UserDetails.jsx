import { useContext } from 'react';
import UserContext from '..'
function UserDetails() {
    const userData = UserContext(UserContext);
    return (
        <div>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
        </div>
    );
}
export default UserDetails;