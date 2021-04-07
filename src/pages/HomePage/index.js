import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Post from "../../components/Post";
import { Modal } from "@material-ui/core";

function Homepage({ posts, user }) {
	const history = useHistory();
	const [Id, setId] = useState("");
	const [modalExp, setModal] = useState(false);
	const [value, setValue] = useState({});
	const [isVal, setIsVal] = useState(false);
	const [modalComments, setModalComments] = useState([]);

	useEffect(() => {
		if (history.location.pathname === "/") history.replace("/home");
	}, []);

	useEffect(() => {
		posts.forEach((post) => {
			if (post.id === Id) {
				console.log(Id + " " + post.id);
				setValue((prev) => ({ ...prev, ...post }));
				setIsVal(true);
			}
		});
		// if (isVal) console.log(value.post.username);
	}, [Id]);

	return (
		<>
			{isVal && (
				<Modal open={modalExp}>
					<div>
						<h1 onClick={() => setModal(false)}>✖</h1>
						<div>
							<h1>{value.post.username}</h1>
							<img src={value.post.imageUrl} />
						</div>
						<div>
							{modalComments &&
								modalComments.map((comment, index) => (
									<p key={`comment-index-${index}`}>
										<strong> {comment.username} </strong> {comment.text}
									</p>
								))}
						</div>
					</div>
				</Modal>
			)}

			{posts.map(({ id, post }) => (
				<Post
					setId={setId}
					setModal={setModal}
					setModalComments={setModalComments}
					key={id}
					postId={id}
					user={user}
					username={post.username}
					imageUrl={post.imageUrl}
					caption={post.caption}
				/>
			))}
		</>
	);
}

export default Homepage;
