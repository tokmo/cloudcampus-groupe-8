import React, { useState } from "react"

const Home = () => {
	const [tasks, setTasks] = useState([])
	const [inputTask, setInputTask] = useState('')

	const handleSubmit = e => {
		e.preventDefault()
		setTasks([...tasks, inputTask])
		setInputTask("")
	}

	return (
		<div>
			<h1>Etats</h1>
	
			<form onSubmit={handleSubmit}>
				<input onChange={e => setInputTask(e.target.value)} value={inputTask} type="text" />
				<button type="submit">Ajouter une tache</button>
			</form>

			<ul>
				{
					tasks.map((task, index) => 
						<li key={index}>
							{task}
							<button>x</button>
						</li>
					)
				}
			</ul>
		</div>
	)
}

export default Home
