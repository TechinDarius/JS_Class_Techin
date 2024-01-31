import data from './todos.jsx'
import Todo from './Todo.jsx'


function AllTodos() {
    return(
        <div>
       {data.map((todo)=>
       <Todo myData={todo} key={todo.id}/>)}
            </div>
    )
    
}

export default AllTodos;