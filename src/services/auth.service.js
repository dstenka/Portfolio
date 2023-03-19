import axios from 'axios';

const API_URL = 'http://localhost:8000';

const signIn = async (username, password) => {
    username = 'test1';
    password = 'test1';

    const headers = {
        'Content-Type': 'application/json',
        'api-key': 'api-key-1',
    };

    axios
        .post(
            `${API_URL}/login`,
            {
                username,
                password,
            },
            {
                headers: headers,
            }
        )
        .then((response) => {
            localStorage.setItem(
                'access-token',
                JSON.stringify(response.data.accessToken)
            );
        })
        .catch((error) => {
            console.log(error);
        });
};

const logout = () => {
    localStorage.removeItem('access-token');
};

const getCurrentUser = () => {
    const headers = {
        'Content-Type': 'application/json',
        'api-key': 'api-key-1',
        Authorization: `Bearer ${JSON.parse(
            localStorage.getItem('access-token')
        )}`,
    };

    axios
        .get(`${API_URL}/jwt`, { headers: headers })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
};

export { signIn, logout, getCurrentUser };
