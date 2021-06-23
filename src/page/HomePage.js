import React from 'react'
import {Link} from 'react-router-dom'

const HomePage = () => {
    return(
        <div className="container">
            <div className="top_bar">
                <h1>React Practice</h1>
            </div>
            <div className="content">
                <h2>＊ TodoList ＊</h2>
                <Link to="/todo_class"><button className="btn">use Class</button></Link>
                <Link to="/todo_hook"><button className="btn">use Hook</button></Link>
            </div>
        </div>
    )
}
export default HomePage