import { useRef, type FormEvent } from "react";

const NewGoal = () => {
	const goal = useRef<HTMLInputElement>(null);
	const summary = useRef<HTMLInputElement>(null);

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const enteredGoal = goal.current!.value;
		const enteredSummary = summary.current!.value;

		// new FormData(event.currentTarget); -> input needs 'name' property
	};

	return (
		<form onSubmit={handleSubmit}>
			<p>
				<label htmlFor="goal">Your goal</label>
				<input id="goal" type="text" ref={goal} />
			</p>
			<p>
				<label htmlFor="summary">Your goal</label>
				<input id="summary" type="text" ref={summary} />
			</p>
			<p>
				<button>Add Goal</button>
			</p>
		</form>
	);
};

export default NewGoal;