function formatInfo(student){
  return student.name + "[" + student.id + "]";
}

const student = {
  id: "201203142",
  name: "sanghyun lee",
  color: 'blue'
}

const element = (
  <h3 class={student.color}>
    {formatInfo(student)}
  </h3>
);

ReactDOM.render(element, document.getElementById('root'));