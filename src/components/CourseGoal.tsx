import { type PropsWithChildren } from "react";

// Option 1 - import type ReactNode
// interface CourseGoalProps {
// 	title: string;
// 	children: ReactNode;
// }

// Option 2 - import type PropsWithChildren
type CourseGoalProps = PropsWithChildren<{
	id: number;
	title: string;
	onDelete: (id: number) => void;
}>;

const CourseGoal = ({ title, id, children, onDelete }: CourseGoalProps) => {
	return (
		<article>
			<div>
				<h2>{title}</h2>
				{children}
			</div>
			<button onClick={() => onDelete(id)}>Delete</button>
		</article>
	);
};

export default CourseGoal;

/* Option for typing - import type FC
const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
	return (
		<article>
			<div>
				<h2>{title}</h2>
				{children}
			</div>
			<button>Delete</button>
		</article>
	);
};

export default CourseGoal;
*/

/* Option for typing 
function CourseGoal({ title, children }: CourseGoalProps) {
	return (
		<article>
			<div>
				<h2>{title}</h2>
				{children}
			</div>
			<button>Delete</button>
		</article>
	);
}

export default CourseGoal;
*/
