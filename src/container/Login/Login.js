import React, { Component } from 'react'
import axios from 'axios'
import "./Login.css"
import {Redirect} from 'react-router-dom'
import logo from  "./logo.png"
import loading from "./loading.gif"

export class Login extends Component {
    constructor(){
        super()
        this.state={
          username:'',
          password:'',
          token:'',
        }
      }
      onHandleChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
      }
      signIn = (e) => {
        e.preventDefault()
        console.log(`username ${this.state.username}, password ${this.state.password}`
        )

        const dataInput = {
            username:this.state.username,
            password:this.state.password
        }
        this.setState({isLoading:true})

        axios.post('https://penjualanapp-api.herokuapp.com/api/v1/auth/login', dataInput)
        .then(res=>{
            localStorage.setItem('token',res.data.data.token)
            console.log(res)
            this.setState({
                token:res.data.data.token,
                isLoading:false
            })
        })
        .catch(err=>{
            console.log(err)
        })
      }
    
    render() {
        
        if(this.state.isLoading){
            return (
                    <div className='load'>
                        <div className='load1'>
                            <img src={loading} alt="#"/>
                        </div>
                    </div>
            ) 
        }
        else if(localStorage.getItem('token')){
            return <Redirect to='/Home'/>
        }
        return (
            <div className='container'>
                
                <div className='login'>
                    <form onSubmit={this.signIn}>
                        <img src={logo} alt="#"/>
                        <div>
                        <i class="fas fa-lock"></i>
                            <input placeholder='username' name='username' type="text" value={this.state.username} onChange={this.onHandleChange} />
                        </div>
                        <div>
                        <i class="fas fa-user"></i>
                            <input placeholder='password' name='password' type='password' value={this.state.password} onChange={this.onHandleChange} />
                        </div>
                        <button type='submit'>LOGIN</button>
                        <p>Forgot password?</p>
                    </form>
                </div>
            </div>    
        )
    }
}

export default Login
