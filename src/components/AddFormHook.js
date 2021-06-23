import React, { useState } from 'react'
import ListHook from './ListHook'
const AddFormHook = () => {
    const [currentItem,setCurrentItem] = useState("")
    const [itemList,updateItemList] = useState([])
    const handleInput = (e) => {
        setCurrentItem(e.target.value)
    }
    const addItem = (e) => {
        e.preventDefault()
        updateItemList([...itemList, {text:currentItem, key: 1+Date.now()}])
        setCurrentItem("")
    }
    return (
        <div>
            <form className="addForm" onSubmit={addItem}>
                <h1>React Todo(Hook)</h1>
                <br/>
                <input
                    type="text"
                    placeholder="Add something ..."
                    value={currentItem}
                    onChange={handleInput}
                />
                <button
                    className="add"
                    type="submit"
                    disabled={!currentItem.length}
                >
                    add
                </button>
                <div className="list">
                    <ListHook itemList={itemList} updateItemList={updateItemList} />
                </div>
            </form>
        </div>
    )
}

export default AddFormHook