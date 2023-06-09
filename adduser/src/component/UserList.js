import React from "react";
import classes from './UserList.module.css'
import Card from "../UI/Card";
const UserList=props=>{
    return(
        <Card className={classes.users}>
            <ul>
                {props.users.map((user)=>(
                    <li key={user.keys}>
                        {user.name}({user.age} years old) {user.college}
                    </li>
                ))}

            </ul>

        </Card>

    )
}
export default UserList;