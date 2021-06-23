import React from 'react'
import {Link} from 'react-router-dom'
import AddForm from '../components/AddForm'

const ListPage = () => {
    return(
        <div className="container">
            <AddForm />
            <Link to="/"><button className="btn">Back</button></Link>
        </div>
    )
}
export default ListPage