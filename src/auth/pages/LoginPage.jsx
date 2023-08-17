import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/Authcontext';

export const LoginPage = () => {

    const { login } = useContext( AuthContext )
    const navigate = useNavigate();

    const onLogin = () => {

        login( 'Luis Lopez' );

        navigate('/',{
            replace: true
        });
    }

    return (
        <div className='container'>
            <h1>Login</h1>
            <hr></hr>

            <button 
                className='btn btn-primary'
                onClick={ onLogin }
                >
                Login
            </button>

        </div>
    )
}
