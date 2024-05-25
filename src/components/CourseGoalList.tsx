import CourseGoal from "./CourseGoal.tsx";
import { type CourseGoal as CGoal } from "../App.tsx";

type CoursGoalListProps = {
	goals: CGoal[];
	onDeleteGoal: (id: number) => void;
};

const CourseGoalList = ({ goals, onDeleteGoal }: CoursGoalListProps) => {
	return (
		<ul>
			{goals.map((goal) => (
				<li key={goal.id}>
					<CourseGoal
						title={goal.title}
						id={goal.id}
						onDelete={onDeleteGoal}
					>
						<p>{goal.description}</p>
					</CourseGoal>
				</li>
			))}
		</ul>
	);
};

export default CourseGoalList;
