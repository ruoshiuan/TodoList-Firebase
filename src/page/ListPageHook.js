import React from 'react'
import {Link} from 'react-router-dom'
import AddFormHook from '../components/AddFormHook'


const ListPageHook = () => {
    return(
        <div className="container">
            <AddFormHook />
            <Link to="/"><button className="btn">Back</button></Link>
        </div>
    )
}
export default ListPageHook