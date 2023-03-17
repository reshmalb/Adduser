import React,{useState} from "react";
import Button from "../UI/Button";
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import ErrorModal from "../UI/ErrorModal";

const AddUser=(props)=>{
    const [enterUsername,setEnterUsername]=useState('');
    const [enterAge,setEnterAge]=useState('');    
    const [error,setError]=useState();

    const enterUsernameHandler=(event)=>{
        setEnterUsername(event.target.value);
    }
    const enterAgeHandler=(event)=>{
        setEnterAge(event.target.value);

    }

    const addUserHandler=(event)=>{
        event.preventDefault();
        if(enterUsername.trim().length===0|| enterAge.trim().length===0){
            setError({
                title:"Invalid Input",
                message:"please enter a valid Username and Age(non-empty values)."
            })
            return;
        }
        if(+enterAge<1){
            setError({
                title:"Invalid age",
                message:"Please enter a valid Age(non-empty values)."
            })
            return;
        }
        props.onAddUserDetails(enterUsername,enterAge)

        setEnterAge('');
        setEnterUsername('');

    }
    const addErrorHandler=()=>{
        setError(null)
    }
     
    return(
        <div>
           {error &&  <ErrorModal title={error.title}
            message={error.message}
            onConfirm={addErrorHandler}></ErrorModal>}
   <Card className={classes.input} >
            <form onSubmit={addUserHandler}>
            <label htmlFor="username" >Username </label>
            <input id="username" type="text"value={enterUsername} onChange={enterUsernameHandler}></input>
            <label htmlFor="age">Age</label>
            <input id="age" type="number" value={enterAge} onChange={enterAgeHandler}></input>
            <Button type="submit">Add User</Button>

        </form>
        </Card>
       
        </div>
        
     
    )
}
export default AddUser;
