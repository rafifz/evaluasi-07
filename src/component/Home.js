import React from 'react'
import "./Home.css"

const Home = ({childrenCont,childrenSidebar}) => {
    return (
            <div className='containerhome'> 
                <div className='cont header'>NEWS</div>
                <div className='cont sidebar'>{childrenSidebar}</div>

                <div className='cont content'>
                    {childrenCont}
                </div>
                
            </div>
    )
}

export default Home
