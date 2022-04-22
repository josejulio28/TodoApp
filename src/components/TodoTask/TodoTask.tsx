import {ITask} from "../../interfaces"
import './styles.css'
// passamos a props task.
//Temos que tipas as props

interface TaskProps {
    task: ITask
    // void é uma função que não returna nada
    deleteTask (deleteTaskById:number): void
}

//desctruturing, a tirar task de taskProps
function TodoTask({task,deleteTask}: TaskProps) {
	
	return (
		<div className="card">
			<div>
                <p>{task.nameTask}</p>
            </div>

            <div className="line2" >
                {/* ao receber o ID pelos parametros */}
            <span className="btn-card" onClick={()=> deleteTask(task.id)}>X</span>
            </div>
		</div>
	);
}

export default TodoTask;
