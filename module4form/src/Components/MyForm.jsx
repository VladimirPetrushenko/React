import React from 'react' 

class Form extends React.Component{
    state = {
        email:'',
        iAgree: false,
    }

    handleEmailChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleCheckboxChange = (event) => {
        this.setState({[event.target.name]: event.target.checked});
    }

    validateForm = () => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if(!re.test(this.state.email)){
            alert('Please enter a corrected email');
            return ;
        }
        
        if(!this.state.iAgree){
            alert('Please confirm your consent');
            return ;
        }
    
        this.setState({email : '', iAgree : false})
        alert('Thank you for subscription!');
    }

    render(){
        return <div>
            <input 
                type="email" 
                name="email" 
                placeholder="email"
                value={this.state.email}
                onChange = {this.handleEmailChange}
            /> <br/>
            <input 
            type="checkbox"
            name='iAgree'
            onChange={this.handleCheckboxChange}
            checked = {this.state.iAgree}
            /> 
            I agree with terms and conditions
            <br/>
            <button onClick={this.validateForm}>
                Send
            </button>

        </div>
    }

}

export {Form}