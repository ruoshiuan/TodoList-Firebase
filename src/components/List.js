import React from 'react'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
library.add(faTrash)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const List  = (props) => {
    const items = props.items
    const listItems = items.map(item => {
        return (
            <div className="todos" key={item.key}>
                <p>{item.text}
                    <span>
                        <FontAwesomeIcon
                        className="faicons"
                        icon="trash"
                        onClick={()=>props.deleteItem(item.key)}
                        />
                    </span>
                </p>
            </div>
        )
    })
    return (
        <div>{listItems}</div>
    )
}
export default List