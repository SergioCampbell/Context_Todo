import React, { useState, createContext } from 'react'
import propTypes from 'prop-types'

export default function Create(props: any) {
    //const handleSubmit: any = useState({props})
   
    
    return(
            <div className='form-group mt-5'>
            <input type="file" 
                className='mb-3 form-control'
                name="Avatar"
                value={props.avatar}
                />
            <input type="text" 
                placeholder='Cat name'
                className='form-control mb-3'
                name='catName'
                value={props.catName}
              // onChange={(e: any) => (props.setCatName(e.target.value))}
            />
            <input type="text" 
                placeholder='Cat resume'
                className='form-control mb-3'
                name='resume'
                value={props.resume}
              // onChange={(e: any) => (props.setResume(e.target.value))}
            />

            <button  className="btn btn-primary" >create +</button>
            </div>
    )
}

/* Create.propTypes = {
    handleSubmit: propTypes.func.isRequired
} */