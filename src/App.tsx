import TodoTask from "./components/TodoTask/TodoTask";
import {useState} from "react"
import './styles/styles.css'
import {ITask} from "./interfaces"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	//o state task será uma string pois temos as "" dentro dos parenteses no useState
	//ty
	const [task, setTask] = useState<string>("");
	//aqui é onde vamos guardar anossa lista de tasks
	const [todoList, setTodoList] = useState<ITask[]>([]);

	function addTask() {
		if (task ===""){
			toast.error("Please write a task")
		}else{
			//Math floor dá numeros inteiros
		const idRandom = (num:number) => Math.floor(Math.random()* num)
		
		const newTask = {
			id: idRandom(9999999999999), 
			nameTask : task,
		}
		//vou mostrar as task que ja temos, mais a nova task
		setTodoList([...todoList, newTask])

			toast.success("Your task was added to the list")
		}

		

		
	}

	function deleteTask(deleteTaskById:number):void {
		setTodoList(todoList.filter((taskName)=> taskName.id !== deleteTaskById))
	}
	return (
		<div className="App">
			<ToastContainer
		// 2 segundos e meio
			autoClose={2500}
			// o toast nao para se fizermos o hover no toast
			pauseOnHover={false}
			/>
			<header>
				<h2>Lists</h2>
				<input
					type="text" autoComplete="off" 
					placeholder="write a task..." 
					name="task"
					className="input"
					value= {task}
					onChange={(event)=> setTask (event.target.value)}
				/>
				<button type="submit" onClick={addTask} className="btn-header">Add a Task</button>
			</header>
			
			<div className="line"></div>
			{todoList.map((task,key) => (
			//vamos passar as props para saber as tasks
					<TodoTask key={key} task ={task} deleteTask = {deleteTask}/>

			))}
			


			
		</div>
	);
}

export default App;
