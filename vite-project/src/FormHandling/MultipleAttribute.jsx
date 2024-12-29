import React, { useState } from 'react'

const MultipleAttribute = () => {
    let [state,setstate]=useState({
        name:"",
        subject:"",
        age:"",
        gender:"",
        designation:"",
       
    })

    let {name,subject,age,gender,designation}=state

    let [lang,setlang]=useState("")

    let handleChange=(e)=>{
        let {name,value}=e.target

        setstate({...state,[name]:value})

    }

    let handleLang=(e)=>{
        let {value}=e.target
        setlang(()=>{  
            return [...lang,value]
        })
        // lang.push(e.target.value)

        // let {name,value}=e.target

        // setstate({lang,name:[value]})
    }

    let handleSubmit=(e)=>{
        e.preventDefault()
        try{
            console.log({...state});
            console.log([...lang]);
        }catch(err){
            console.log(err);
        }
    }


  return (
    <div>
        <form action="" method="get" onSubmit={handleSubmit}>
            <label htmlFor="">Name: </label>
            <input type="text" name="name" value={name} id="" onChange={handleChange}/> <br /><br />

            <label htmlFor="">Subject: </label>
            <input type="text" name="subject" value={subject} id="" onChange={handleChange} /> <br /><br />

            <label htmlFor="">Age: </label>
            <input type="number" name="age" value={age} id="" onChange={handleChange} /> <br /><br />

            <label htmlFor="">Gender: </label>
            <input type="radio" name="gender" value="MALE" id="" onChange={handleChange} />MALE
            <input type="radio" name="gender" value="FEMALE" id="" onChange={handleChange} />FEMALE 
            <br /><br />

            <label htmlFor="">designation: </label>
            <select name="designation"  id="" onChange={handleChange}>
                <option>select</option>
                <option value="developer">Developer</option>
                <option value="tester">Tester</option>
                <option value="HR">HR</option>
                <option value="trainee">Trainee</option>
            </select>
            <br /><br />

            <label htmlFor="">Language: </label> <br />
            KANNADA<input type="checkbox" name="lang" value="kannada" id="" onChange={handleLang} /><br />
            TELUGU<input type="checkbox" name="lang" value="telugu" id="" onChange={handleLang} /><br />
            ENGLISH<input type="checkbox" name="lang" value="english" id="" onChange={handleLang}/><br />
            HINDI<input type="checkbox" name="lang" value="hindi" id="" onChange={handleLang}/><br />
            <br />

            <button>Submit</button>
        </form>

        {/* <h1>{name}</h1>
        <h1>{subject}</h1>
        <h1>{age}</h1> */}

        <span>{name},&nbsp;</span><span>{subject},&nbsp;</span><span>{age},&nbsp;</span><span>{gender},&nbsp;</span><span>{designation}</span>

    </div>
  )
}

export default MultipleAttribute