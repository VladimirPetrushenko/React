import React from 'react'

class Form extends React.Component{
    constructor(){
        super();
        this.state = {
            firstName: '',
            email:'',
            lastName:'',
            message:'',
            select:'',
            subscription: false,
            gender: '',
            card:'',
            emailA: '',
        }
        this.cardRef = React.createRef();
        this.emailRef = React.createRef();
    }
    

    handleChange = (event) =>{
        this.setState({[event.target.name]: event.target.value}, () =>{
            if(this.state.card.length>=16)
                this.emailRef.current.focus();
        });
    }

    handleCheckboxChange = (event) =>{
        this.setState({[event.target.name]: event.target.checked})
    }

    handleRadiobuttonChange = (event) =>{
        this.setState({[event.target.name]: event.target.value})
    }

    validateName = () =>{
        if(this.state.firstName.length<2){
            alert('Your first can\'t be less than 2 letters');
        }
    }

    validateEmail = () =>{
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(this.state.email))
            alert('Your email is not valid');
    }

    componentDidMount(){
        console.log(this.cardRef);
        this.cardRef.current.focus();
    }

    render(){
        const {firstName, message, subscription} = this.state;
        return <div>
            <input 
                type="text" 
                name="firstName" 
                placeholder="Enter your First Name" 
                value = {firstName} 
                onChange = {this.handleChange}
                onBlur = {this.validateName}
            />
            <input 
                type="email" 
                name="email" 
                placeholder="Enter your email" 
                value = {this.state.email} 
                onChange = {this.handleChange}
                onBlur = {this.validateEmail}
            />
            <br />
            <textarea 
                name="message" 
                value={message} 
                cols="30" 
                rows="10"
                onChange = {this.handleChange}
                >
            </textarea><br/>
            <select name="select" value={this.state.select} onChange = {this.handleChange}>
                <option value="" disabled></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select><br/>
            <label htmlFor="subscription">
            <input 
                id="subscription"
                type="checkbox" 
                name="subscription" 
                checked={subscription}
                onChange = {this.handleCheckboxChange}
            />
                Subscription
            </label> <br/>

            <input type="radio" name="gender" value="male" 
            onChange={this.handleChange}
            /> Male 
            <input type="radio" name="gender" value="female" 
            onChange={this.handleChange}
            /> Female 
            <br/><br/><br/><br/><br/>
            <input type="text" name="emailA" ref={this.emailRef} onChange={this.handleChange} value = {this.state.emailA}/><br/><br/>
            <input type="text" name="card" onChange={this.handleChange} ref={this.cardRef} value = {this.state.card}/> 
        </div>
    }
}

export {Form}