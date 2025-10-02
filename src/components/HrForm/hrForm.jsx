import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as hrService from '../../../services/hrService'

const HrForm = (props) => {

    const {employeeId} = useParams();

    const [formData, setFormData] = useState({
        name: '',
        department: "",
        salary: 200
    });

    useEffect(() => {
        const fetchHr = async () => {
            const hrData = await hrService.show(employeeId);
            setFormData(hrData);
        };

        if(employeeId) fetchHr()

        return () => setFormData({name: '', department: '', salary: 200})

    },[employeeId])

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    };

    const handleSubmit = (event) => {
        event.preventDefault();
       
        if(employeeId){
            props.handleUpdateHr(employeeId, formData)
        }else{
            props.handleAddEmployee(formData)
        }
    }

    return (
        <>
            <main>
                <h1>{employeeId ? 'Edit Employee Data' : 'New Employee'}</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input 
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    />

                    <label htmlFor="dep">Department:</label>
                    <input 
                    type="text"
                    id="dep"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                    />

                    <label htmlFor="salary">Salary:</label>
                    <input 
                    type="number"
                    id="salary"
                    name="salary"
                    value={formData.salary}
                    onChange={handleChange}
                    />

                    <button type="submit">Add</button>
                </form>

            </main>
        </>
    )
}

export default HrForm;