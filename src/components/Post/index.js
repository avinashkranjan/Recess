import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./style.js";
import { db } from "../../firebase";
import firebase from "firebase";
import { Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles(styles);

function Post({
	postId,
	user,
	username,
	caption,
	imageUrl,
	setId
}) {
	const classes = useStyles();
	const postImage = useRef();
	const [comments, setComments] = useState([]);
	const [comment, setComment] = useState("");
	const [temp, setTemp] = useState(classes.showComments);
  const [like, setLike] = useState(false);
  const [likeCounter, setLikeCounter] = useState(0);

	const postComment = (event) => {
		event.preventDefault();

		db.collection("posts").doc(postId).collection("comments").add({
			username: user.displayName,
			text: comment,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		setComment("");
	};

  const onLike = (e) => {
    e.preventDefault();
    if (user) {
      db.collection("posts")
        .doc(postId)
        .collection("likes")
        .doc(user.uid)
        .set({
          username: user.displayName,
        })
        .then(() => {
          setLike(true);
          setLikeCounter(likeCounter + 1);
        })
        .catch((err) => console.log(err));
    }
  };

  const onDislike = (e) => {
    e.preventDefault();
    if (user) {
      db.collection("posts")
        .doc(postId)
        .collection("likes")
        .doc(user.uid)
        .delete()
        .then(() => {
          setLike(false);
          setLikeCounter(likeCounter - 1);
        })
        .catch((err) => console.log(err));
    }
  };

	useEffect(() => {
		postImage.current.onload = () => {
			if (postImage.current.height > postImage.current.width) {
				postImage.current.style.maxHeight = "350px";
			} else if (postImage.current.height < postImage.current.width) {
				postImage.current.style.maxWidth = "100%";
			} else {
				postImage.current.style.maxHeight = "350px";
			}
		};
    // Getting Post's like data and updating like state
    db.collection("posts")
    .doc(postId)
    .collection("likes")
    .onSnapshot((snap) => {
      let documents = [];
      snap.forEach((doc) => {
        documents.push({ userLiked: doc.id });
      });
      setLikeCounter(documents.length);
      if (user) {
        documents.map((u) => {
          if (u.userLiked === user.uid) {
            setLike(true);
          }
        });
      }
    });    
	}, []);

	useEffect(() => {
		let unsubscribe;
		if (postId) {
			unsubscribe = db
				.collection("posts")
				.doc(postId)
				.collection("comments")
				.orderBy("timestamp", "desc")
				.onSnapshot((snapshot) => {
					const tempComments = [];
					for (let doc of snapshot.docs) {
						tempComments.unshift(doc.data());
					}
					setComments(tempComments);
				});
		}

		return () => {
			unsubscribe();
		};
	}, [postId]);

	const handleChange = () => {
		setId(postId);	
	}

	return (
		<div className={classes.post}>
			<div className={classes.postHeader}>
				<Avatar className={classes.avatar} alt="Avinash" src="" />
				<h3 className={classes.username}>{username}</h3>
			</div>

			<div className={classes.postImageHolder}>
				<img
					className={classes.postImage}
					src={imageUrl}
					alt="PostImage"
					ref={postImage}
				/>
			</div>

      <div className={classes.likeContainer}>
        {like ? (
          <FavoriteIcon onClick={onDislike} />
        ) : (
          <FavoriteBorderIcon onClick={onLike} />
        )}
        {likeCounter ? (
          <Typography>{likeCounter}</Typography>
        ) : null}
      </div>

			<div className={classes.postText}>
				<strong>{username}</strong> {caption}
			</div>

			<div
				className={temp}
				onMouseOver={() => setTemp(classes.showCommentsHover)}
				onMouseOut={() => setTemp(classes.showComments)}
				onClick={handleChange}
			>
				View all {comments.length} comments
			</div>

			<div className={classes.postComments}>
				{comments &&
					comments.map((comment, index) => (
						<p key={`comment-index-${index}`}>
							<strong> {comment.username} </strong> {comment.text}
						</p>
					))[0]}
			</div>

			{user && (
				<form className={classes.postCommentBox}>
					<input
						className={classes.postCommentInput}
						type="text"
						placeholder="Add a comment.."
						value={comment}
						onChange={(e) => setComment(e.target.value)}
					/>
					<button
						className={classes.postCommentButton}
						type="submit"
						disabled={!comment}
						onClick={postComment}
					>
						Post
					</button>
				</form>
			)}

			<Link to={`/post/${postId}`} className={classes.viewPostBtn}>
				View Post
			</Link>
		</div>
	);
}

export default Post;
