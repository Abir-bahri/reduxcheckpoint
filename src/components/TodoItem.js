import React from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { toggleComplete , deleteTodo } from '../redux/todoSlice';
import EditTodo from './EditTodo';


const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();
	const handlecompleteclick = () => {
		dispatch(toggleComplete({id : id, completed: !completed }))
	}
	const handleDeleteClick = () => {
		dispatch(deleteTodo({ id : id }));
	};
	const todos = useSelector((state)=>state.todos);

	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input type='checkbox' className='mr-3' checked={completed} onChange={handlecompleteclick}></input>
					{title}
				</span>
				<button className='btn btn-danger' onClick={handleDeleteClick}>Delete</button>
			</div>

			<div className={todos.length === 0 ? "active" : ""} >
			 
        {todos
          .filter((val) => {
            
              if (val.completed === true) {
                return val;
              }
            else if 
              (val.completed=== false) {
                return val;
              }
            
          })
		}
		// </div>
			<EditTodo id={id} />
			
		</li>
	);
};

export default TodoItem;
