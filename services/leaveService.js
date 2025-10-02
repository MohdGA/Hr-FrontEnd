const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/Hrs`;


const create = async (formData, employeeId) => {
    try{
        const res = await fetch(`${BASE_URL}/${employeeId}/leaves`, {
            method: "POST",
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
}

const deleteLeave = async (leaveId) => {
    try{
        const res = await fetch(`${BASE_URL}/leaves/${leaveId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        });

        return res.json();
    } catch(error){
        console.log(error)
    }
}



export{
    create,
    deleteLeave,
}