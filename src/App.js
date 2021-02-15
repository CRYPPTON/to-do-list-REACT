import React from "react"
import List from "./List"


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: [],
            currentItem:{
                text:'',
                key:'',
                date: ''
            }        
        }

        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        
    }

    handleInput(e){ //  input this...
        this.setState({
            currentItem:{
                text: e.target.value,
                key: Date.now(),   
                date:  new Date().toISOString()    
            }
        }) 
    }
    

    addItem(e){  // form onSubmit this...
        e.preventDefault();
        const newItem = this.state.currentItem;  
        console.log(newItem)
        if(newItem.text!==""){
            const newItems =[...this.state.items,newItem]
            this.setState({
                items: newItems,
                currentItem : {
                    text: '',
                    key: '',
                    date :  ''   
                }
            })
        }
        console.log(this.state.items)
    }
    deleteItem(key){
        const filteredItems = this.state.items.filter(item =>
            item.key!==key);
            this.setState({
                items : filteredItems
            })
    }

    render(){
        return (
            <div className="app" id="app_">
                <header className="header">
                    <form onSubmit={this.addItem}>
                        <input className="input-task" placeholder="Enter the task"
                        value={this.state.currentItem.text} 
                        onChange={this.handleInput}/> 
                         <button className="btn" type="submit"><strong>Create Task</strong></button>
                    </form>
                </header >
                <div id="tasks_">
                </div>
                <List items = {this.state.items}
                deleteItem = {this.deleteItem}
                ></List>
                </div>     
        )
    }  
}




export default App


/*treba sve u studenst*/ 