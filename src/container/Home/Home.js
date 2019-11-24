import React, { Component } from 'react'
import Home from '../../component/Home'
import { getData } from '../../Services/Home'
import "./Home.css"
import {Redirect} from 'react-router-dom'

export class HomeContainer extends Component {
    constructor(){
        super()
        this.state = {
          data: []
        }
      }
    
      
      componentDidMount(){
        getData()
        .then(res=>this.setState({data: res}))
        .catch(err=>console.log(err))
      }
      remove=()=>{
        localStorage.removeItem('token')
    }

    
    render() {
        if(localStorage.getItem('token') === null){
            return <Redirect to='/' />
        }
        return (
            <div>
                <Home 
                
                childrenCont={this.state.data.map((item,index) => {
                      return(
                        <div className="Berita">
                                <img src={item.thumbnail} alt='#'/>
                                <div>
                                    <p><b>{item.title}</b></p>
                                    <p>{item.pubDate}</p>
                                    <a href={item.link}>baca selengkapnya</a>
                                </div>
                            </div>
                      )})}
                      childrenSidebar={
                        <form onSubmit={this.remove}>
                            <button type='submit' > Log out </button>
                        </form>
                      }
                />
            </div>
        )
    }
}

export default HomeContainer
