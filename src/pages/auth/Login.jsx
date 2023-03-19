import React from 'react';
import { signIn } from '../../services/auth.service.js';

const Login = () => {
    const handleLogin = () => {
        signIn();
    };

    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <button onClick={handleLogin}>Anmelden</button>
            </div>
        </div>
    );
};

export default Login;
