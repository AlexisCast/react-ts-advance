import CourseGoal from "./CourseGoal.tsx";
import { type CourseGoal as CGoal } from "../App.tsx";

type CoursGoalListProps = {
	goals: CGoal[];
};

const CourseGoalList = ({ goals }: CoursGoalListProps) => {
	return (
		<ul>
			{goals.map((goal) => (
				<li key={goal.id}>
					<CourseGoal title={goal.title}>
						<p>{goal.description}</p>
					</CourseGoal>
				</li>
			))}
		</ul>
	);
};

export default CourseGoalList;
