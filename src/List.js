import React from "react"



function List(props){
   

    console.log(props)
    const items = props.items;
    var date = props.date;
    console.log("datum taska "+date)
    const listItems = items.map(item =>
        {
            return <div className="list" key={item.key}>
                <p className="Task-txt">{item.text}</p>
                <input type="checkbox" className="checkbox"  name="" value=""/>
                <button type="button" onClick={()=>props.deleteItem(item.key)} className="btn-delete">X</button>
                <span className="time">{item.date}</span>
            </div>
    })
    return (       
       <div>{listItems}</div>
    )
            
}


export default List