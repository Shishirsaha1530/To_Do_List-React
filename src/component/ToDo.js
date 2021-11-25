import React from 'react';
import { useState } from 'react';
import todoimg from '../image/571-5717473_to-do-list-checklist-clipart-hd-png-download.png';
import './todo.css'
import Swal from 'sweetalert2'
const ToDo = () => {
    let [task, setTask] = useState('');
    let [items, setItems] = useState([]);

    let addItem=()=>{
        if(!task){
            return Swal.fire(
                    '',
                    'Please Write Task Name!!',
                    'error'
                    )
        }
        else{
            setItems([...items, task]);
            setTask('');
            Swal.fire(
                    '',
                    'Task Added Successfully',
                    'success'
                    )
        }
    }

    const handleDelete=(id)=>{
        Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
            const remained = items.filter((elem, ind)=> {
                    return  id !== ind
                })
        setItems(remained); 
        Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
        )
    }
})       
}

    const handleDeleteAll=()=>{
         Swal.fire({
        title: 'Are you sure to deletel All Task?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete All!'
        }).then((result) => {
            if (result.isConfirmed) {
                setItems([])
                Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
                )
        }
    })      
        
    }

    return (
        <>
           <div className='main-div'>
                <div className='child-div'>
                    <figure>

                        <img src={todoimg} alt="" className='todoImg' />
                        <figcaption>Add Your List Here ✍️ </figcaption>

                    </figure>

                    <div className='addItems'>

                        <input type="text" placeholder="Add Items... ✍️" onChange={(e)=>setTask(e.target.value)} value={task} />
                        
                        <i className="fa fa-plus add-btn" title="Add Item" onClick={addItem}></i> 

                    </div>

                    <div className='showItems'>

                        {
                            items.map((elem, index)=>{
                                return (
                                    <div className='eachItem' key={index}>
                                         <h3> {elem} </h3>
                                          <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={()=>handleDelete(index)}></i>
                                    </div>
                                )
                            })
                        }

                    </div>

                    <div className='showItems'>

                        <button className='btn effect04' data-sm-link-text="Remove All" onClick={handleDeleteAll}> CHECK LIST </button>

                    </div>
                </div>
           </div> 
        </>
    );
};

export default ToDo;