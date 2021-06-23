import React from 'react'
import List from './List'

class AddForm extends React.Component {
    state = {
        items: [],
        currentItem:{
            text: "",
            key: ""
        }
    }
    handleInput = (e) => {
        this.setState({
            currentItem:{
                text: e.target.value,
                key: 1+Date.now ()
            }
        })
    }
    addItem = (e) => {
        e.preventDefault()
        const newItem = this.state.currentItem
        console.log(newItem)
        if(newItem.text !== ""){
            const newItems = [...this.state.items,newItem]
            this.setState({
                items: newItems,
                currentItem:{
                    text: "",
                    key: ""
                }
            })
        }
    }
    deleteItem = (key) => {
        const filteredItems = this.state.items.filter(item => item.key !== key)
        console.log(filteredItems)
        this.setState({
            items: filteredItems
        })
    }
    render() {
        return (
            <form className="addForm" onSubmit={this.addItem}>
                <h1>React Todo(Class)</h1>
                <br/>
                <input
                    type="text"
                    placeholder="Add something ..."
                    value={this.state.currentItem.text}
                    onChange={this.handleInput}
                />
                <button
                    className="add"
                    type="submit"
                    disabled={!this.state.currentItem.text.length}
                >
                    Add
                </button>
                <div className="list">
                    <List items={this.state.items} deleteItem={this.deleteItem} />
                </div>
            </form>
        )
    }
}

export default AddForm