function Show(props){
  return (
    <h3>
      Name is {props.name} 
    </h3>
  );
}

function App(){
  return (
  <main>
      <Show name="이상현"/>
      <Show name="조현영"/>
      <Show name="김지숙"/>
  </main>
  );
}

Show.defaultProps = {
  name : '홍길동'
}

const element = <App/>;
ReactDOM.render(element,document.getElementById('root'));