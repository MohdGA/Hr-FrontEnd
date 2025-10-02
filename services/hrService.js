const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/Hrs`;

const index = async () => {
    try{
        const res  = await fetch(BASE_URL, {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
        });

        return res.json();
    } catch(error){
        console.log(error)
    }
};

const show = async (employeeId) => {
    try{
        const res = await fetch(`${BASE_URL}/${employeeId}`, {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
        });
        return res.json();
    } catch(error){
        console.log(error)
    }
    
}

const create = async (formData) => {
    try{
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        return res.json();
    } catch(error){
        console.log(error)
    }
};

const deleteHr = async (hrId) => {
    try{
        const res = await fetch(`${BASE_URL}/${hrId}`,{
            method: "DELETE",
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        });

        return res.json();

    } catch(error){
        console.log(error);
    }
};

const update = async (hrId, hrFormData) => {
    try{
        const res = await fetch(`${BASE_URL}/${hrId}`, {
            method: "PUT",
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(hrFormData),
        });

        return res.json();
    } catch(error){
        console.log(error);
    }
}

export {
    index,
    show,
    create,
    deleteHr,
    update,
}