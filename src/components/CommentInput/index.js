import { useState } from "react";
import styles from "./style.js";
import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import CancelIcon from "@material-ui/icons/Cancel";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(styles);

const CommentInput = (props) => {
  const classes = useStyles();
  const [emojiModal, setEmojiModal] = useState(false);
  const [comment, setComment] = useState("");

  return (
    <form className={classes.postCommentBox}>
      <button
        type="submit"
        className={classes.emojiPicker}
        onClick={(e) => {
          e.preventDefault();
          setEmojiModal(!emojiModal);
        }}
      >
        {emojiModal ? <CancelIcon /> : <InsertEmoticonIcon />}
      </button>
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
        disabled={comment.localeCompare("") === 0 ? true : false}
        onClick={(e) => {
          e.preventDefault();
          if (comment.localeCompare("") != 0) props.postComment(comment);
          setComment("");
        }}
      >
        Post
      </button>
      {emojiModal ? (
        <div style={{ position: "absolute", bottom: 60, right: 0 }}>
          <Picker
            disableSkinTonePicker
            pickerStyle={{ boxShadow: "none" }}
            onEmojiClick={(e, value) => {
              setComment(comment + value.emoji);
            }}
            disableAutoFocus={true}
            skinTone={SKIN_TONE_MEDIUM_DARK}
            groupNames={{ smileys_people: "PEOPLE" }}
            native
          />
        </div>
      ) : null}
    </form>
  );
};

export default CommentInput;
