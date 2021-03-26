import React, {Component} from "react"
import {Posts} from './components/Posts'

class App extends Component{
  constructor(){
    super();

    this.state = {
      count: 0,
      timer: 0,
      operation: 'Start' ,
      posts : [
        {id: 'abc1', name:'JS Basics'},
        {id: 'abc2', name:'JS Advance'},
        {id: 'abc3', name:'React JS'}
      ]
    };

    this.handleClickSub = this.handleClickSub.bind(this);
    this.handleClickSum = this.handleClickSum.bind(this);
    this.TimerStart = this.TimerStart.bind(this);
    this.TimerReset = this.TimerReset.bind(this);
  }

  DeletePost = (id) => {
    this.setState({posts: this.state.posts.filter(post=> post.id!=id)});
  }


  handleSomething = () =>{
    console.log('App.jsx setState update');
  }

  handleClickSum  ()  {
      this.setState({count: this.state.count + 1});
    // this.setState((prevState) => ({count: prevState.count +1}), ()=>console.log('set state complite'));
  }

  handleClickSub  () {
    this.setState({count: this.state.count - 1});
    // this.setState((prevState) => ({count: prevState.count +1}), ()=>console.log('set state complite'));
  }

  TimerStart  () {
    if(this.state.operation==='Start'){
      this.timerId = setInterval( ()=>this.setState({timer: this.state.timer + 1}) , 1000);
      this.setState( {operation: 'Stop'});
    }
    else{
      clearInterval(this.timerId);
      this.setState( {operation: 'Start'});
    }
    // this.setState((prevState) => ({count: prevState.count +1}), ()=>console.log('set state complite'));
  }
  TimerReset  () {
    clearInterval(this.timerId);
    this.setState({timer: 0});
    // this.setState((prevState) => ({count: prevState.count +1}), ()=>console.log('set state complite'));
  }

  componentDidMount(){
    const locTemp =  localStorage.getItem('timer');
    if(locTemp)
      this.setState({timer: +locTemp});
    else
      this.setState({timer: 0});
  }


  componentDidUpdate(){
    localStorage.setItem('timer', this.state.timer);
  }

  componentWillUnmount(){
    clearInterval(this.timerId);
  }

  render(){
    const {posts} = this.state;
    return (
      <div className="App">
            Hello from React
            <button onClick={this.handleClickSum}>+</button>
            <span style={{margin: "20px"}}>{this.state.count}</span>
            <button onClick={this.handleClickSub}>-</button>

            <h2>React Timer</h2>
            <button onClick={this.TimerStart}>{this.state.operation}</button>
            <span style={{margin: "20px"}}>{this.state.timer}</span>
            <button onClick={this.TimerReset}>Reset</button>

            <Posts posts={posts} cb = {this.DeletePost} />
      </div>
    );
  }
}

export default App;
