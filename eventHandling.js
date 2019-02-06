class EventHandling extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      isToggleOn : true
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick= () => {
    this.setState(state =>({
      isToggleOn : !this.state.isToggleOn
    }))
    console.log("이벤트 처리");
  }
  render(){
    return(
      <button onClick={this.handleClick}>
        {this.state.isToggleOn? 'ON':'OFF'}</button>
    );
  }
}

ReactDOM.render(<EventHandling/>, document.getElementById('root'));