import { useState } from "react";

import CourseGoal from "./components/CourseGoal.tsx";
import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header.tsx";

type CoursGoal = {
	title: string;
	description: string;
	id: number;
};

export default function App() {
	const [goals, setGoals] = useState<CoursGoal[]>([]);

	const handleAddGoal = () => {
		setGoals((prevGoals) => {
			const newGoal: CoursGoal = {
				id: Math.random(),
				title: "Learn React + TS",
				description: "Learn it in depth!",
			};
			return [...prevGoals, newGoal];
		});
	};

	return (
		<main>
			<Header image={{ src: goalsImg, alt: "A list of Goals" }}>
				<h1>Your Course Goals</h1>
			</Header>
			<button onClick={handleAddGoal}>Add Goal</button>
			<ul>
				{goals.map((goal) => (
					<li key={goal.id}>
						<CourseGoal title={goal.title}>
							<p>{goal.description}</p>
						</CourseGoal>
					</li>
				))}
			</ul>
		</main>
	);
}
