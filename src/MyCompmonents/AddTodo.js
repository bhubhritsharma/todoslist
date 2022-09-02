import React, { useState } from 'react'
// import { useState } from 'react';

const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("Title Or Description cannot be blank!")
        }
        else{
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
            <form className="container" onSubmit={submit}>
                <h3 className="text-center my-3">Add a Todos</h3>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
                </div>
                <button type="submit" className="btn btn-success btn-sm">Submit</button>
            </form>
    )
}

export default AddTodo
