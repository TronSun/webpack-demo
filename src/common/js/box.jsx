import React from 'react'

import '../css/box.css'

class Box extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div className="title">
            这是一个react组件......
            <img src={require("../images/dog.jpg")}/>
        </div>
    }
}
export default Box