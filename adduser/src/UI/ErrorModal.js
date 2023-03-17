import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from'./ErrorModal.module.css'
import ReactDOM from 'react-dom'
const Backdrop=props=>{
    return <div className={classes.backdrop}
    onClick={props.onConfirm}/>
}
const ModalOverlay=props=>{
  return (<Card className={classes.modal}>
  <header  className={classes.header}>
      <h2 >{props.title}</h2>
  </header>
  <div className={classes.content}>
      <p>
          {props.message}
      </p>
  </div>
  <footer className={classes.actions}
            onClick={props.onConfirm}>
      <Button>Okay</Button>
  </footer>

</Card>);
}

const ErrorModal=props=>{
 <React.Fragment>
    {ReactDOM.createPortal(<Backdrop onClick={props.onConfirm}/>,document.getElementById('backdrop-root'))}

 </React.Fragment>
      

  

}
export default ErrorModal;