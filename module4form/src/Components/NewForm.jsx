import React from 'react'

class Form extends React.Component{
    constructor(){
        super();

        this.cardRef = React.createRef();
        this.emailRef = React.createRef();
    }
    

    handleSubmit = (event) =>{
        event.preventDefault();
        if(this.cardRef.current.value.length < 16){
            alert('invalid card number');
            return ;
        }
        if(this.emailRef.current.value.length<5){
            alert('invalid email');
            return;
        }

        this.cardRef.current.value='';
        this.emailRef.current.value='';
    }

    render(){
        return <form onSubmit = {this.handleSubmit}>
            <input 
                type="email" 
                name="email" 
                placeholder="Enter your email" 
                ref={this.emailRef}
            />
            <br />
            <input 
                type="text" 
                name="card" 
                placeholder="card" 
                ref={this.cardRef} 
            /> <br/>
            <button>Send</button>
        </form>
    }
}

export {Form}