import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styles from "./style.js";
import Post from "../../components/Post";
import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

function Homepage({ posts, user }) {
	const classes = useStyles();
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
	}, [Id]);

	return (
		<>
			{isVal && (
				<Modal className={classes.modal} open={modalExp}>
					<div className={classes.modalContainer}>
						<div className={classes.modalHeader}>
							<h1 className={classes.modalUsername}>{value.post.username}</h1>
							<h1
								className={classes.closeModal}
								onClick={() => setModal(false)}
							>
								✖
							</h1>
						</div>
						<div className={classes.modalMain}>
							<div className={classes.postImageHolder}>
								<div className={classes.postImageContainer}>
									<img
										src={value.post.imageUrl}
										className={classes.postImage}
									/>
								</div>
							</div>

							<aside className={classes.commentContainer}>
								<div className={classes.postComments}>
									{modalComments &&
										modalComments.map((comment, index) => (
											<p key={`comment-index-${index}`}>
												<strong> {comment.username} </strong> <br></br>
												{comment.text}
											</p>
										))}
								</div>
							</aside>
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
