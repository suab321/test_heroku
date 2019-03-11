import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import Pop from './Pop'

class App extends Component {

  constructor(){
    super();
    this.detail=this.detail.bind(this);
    this.state={data:[],showdetail:null}
  }

  componentDidMount(){
    console.log(this.state.data)
    Axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
      this.setState({data:res.data});
    })
  }

  detail(id){
    this.state.data.forEach(i=>{
      if(i.id === id){
        this.setState({showdetail:i})
        return;
      }
    })
  }

  render() {
    if(this.state.data.length === 0){
      return(
        <h1>Loading</h1>
      );
    }
    else{
      const list=this.state.data.map(i=>{
        return(
          <div style={{display:"flex"}}>
            <h4 onMouseEnter={()=>this.detail(i.id)} onMouseLeave={()=>this.setState({showdetail:null})}>{i.name}</h4>
            <h4 style={{paddingLeft:"30%"}}>{i.username}</h4>
          </div>
        )
      })
    if(this.state.showdetail){
    return (
      <div>
      <div><Pop data={this.state.showdetail}/></div>
      {list}
      </div>
    );
    }
    else{
      return (
        <div>
        {list}
        </div>
      );
    }
  }
}
}

export default App;
