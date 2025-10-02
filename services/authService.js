const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}`;

const signup = async (formData) => {
    try{

        const res = await fetch(`${BASE_URL}/register`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        });

        const data = await res.json();

        if(!res.ok) throw new Error(data.detail || 'Something went Wrong');
        return data; 

    } catch(error){
        throw error;
    }
};


const signin = async (formData) => {
    try{
        const res = await fetch(`${BASE_URL}/login`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        });

        const data = await res.json();

        if(!res.ok) throw new Error(data.detail || 'Something went Wrong');

        if(data.token){
            localStorage.setItem('token', data.token);
            const decodedToken = JSON.parse(atob(data.token.split('.')[1]));
            return {...decodedToken, id: decodedToken.sub}
        }

    } catch(error){
        throw error
    };
};

const getUser = () => {
    const token = localStorage.getItem('token');

    if(token){
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        return {...decodedToken, id: decodedToken.sub, username: decodedToken.username};
    };

    return null
};

export {
    signup,
    signin,
    getUser,
}