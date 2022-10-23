import React, { useRef } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import Picker from "emoji-picker-react";
function Comment({ commentFocus }) {
  const [chosenEmoji, setChosenEmoji] = React.useState(false);
  const [comment, setComment] = React.useState("");
  console.log("comment");

  // comment focus
  const inputRef = useRef(null);
  React.useEffect(() => {
    if (commentFocus) {
      inputRef.current.focus();
    }
  }, [commentFocus]);

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex space-x-2">
          <BsEmojiSmile
            className=" my-auto text-xl cursor-pointer"
            onClick={() => setChosenEmoji((prv) => !prv)}
          />
          <input
            ref={inputRef}
            className=" outline-none p-1 "
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder=" Add comment .."
          />
        </div>
        <p className=" font-semibold text-md text-blue-500 cursor-pointer">
          Post
        </p>
      </div>
      {chosenEmoji && (
        <div className=" bottom-14 absolute">
          <Picker
            onEmojiClick={(emojiObject) =>
              setComment(comment + emojiObject.emoji)
            }
          />
          <AiFillCloseCircle
            className=" absolute -top-3 text-3xl -right-5 cursor-pointer"
            onClick={() => setChosenEmoji((prv) => !prv)}
          />
        </div>
      )}
    </div>
  );
}

export default React.memo(Comment);
