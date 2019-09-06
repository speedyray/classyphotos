import React, {Component} from 'react';


class List extends Component{
    // render method from Component
    render(){
    return(<ol> 
             {this.props.shoppingList.map((shop, index) => <li key = {index}> <strong>{shop}</strong></li>)}
          </ol>)
    }
}

export default List