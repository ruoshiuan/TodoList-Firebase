import React from 'react'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faBackspace} from '@fortawesome/free-solid-svg-icons'
library.add(faBackspace)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ListHook  = (props) => {
    const items = props.itemList
    const deleteItem = (key) => {
        const filteredItems = items.filter((item)=>{
            return item.key !== key
        })
        props.updateItemList(filteredItems)
    }
    const listItems = items.map(item => {
        return (
            <div className="todos" key={item.key}>
                <p>{item.text}
                    <span>
                        <FontAwesomeIcon
                        className="faicons"
                        icon="backspace"
                        onClick={() => deleteItem(item.key)}
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
export default ListHook