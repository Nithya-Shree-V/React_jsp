import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    let [state, setState] = useState({
        name: "",
        subject: ""
    })

    let navigate = useNavigate()

    let { name, subject } = state;

    let handleChange = (e) => {

        let { name, value } = e.target

        setState({ ...state, [name]: value })

    }



    let handleSubmit = async (e) => {

        e.preventDefault()


        try {
            let payload = { name, subject }
            let { data } = await axios.post("http://localhost:5000/users", payload)
            console.log({ data });
            navigate("/details")

        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <br />
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">NAME: </label>
                <input type="text" name="name" value={name} id="" onChange={handleChange} />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <label htmlFor="">SUBJECT: </label>
                <input type="text" name="subject" id="" value={subject} onChange={handleChange} />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default LoginPage