import { useState } from "react";

export default function CommentPage() {
	const [comments, setComments] = useState([]);

	const fetchComments = async () => {
		const response = await fetch("/api/comments");
		const data = await response.json();
		setComments(data);
	};
	return (
		<>
			<button onClick={fetchComments}>Load comments</button>
			{comments.map((comment) => {
				return (
					<div key={comment.id}>
						{comment.id} {comment.text}
					</div>
				);
			})}
		</>
	);
}
