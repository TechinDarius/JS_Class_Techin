/* eslint-disable react/prop-types */
function Todo({myData}) {

    const{userId,id,title,completed}=myData;

    return(<div  className='box'>
        <span>{userId}  </span>
        <span>{id}  </span>
        <span>{title}  </span>
        <span>{completed}</span>
        </div>
    )
}


export default Todo;