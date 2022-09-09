import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "../Avatar/Avatar";
import styles from "./Comment.module.css";

interface CommentProps {
  content: string;
  handleDeleteComment: (id: string) => void;
  id: string;
}

export function Comment({ content, handleDeleteComment, id }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment() {
    setLikeCount((state) => state + 1);
  }
  return (
    <div className={styles.comment}>
      <Avatar src="https://avatars.githubusercontent.com/u/71460942?v=4" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Flávio Costa</strong>
              <time
                title="30 de agosto às 13:37"
                dateTime="2022-08-30 13:37:50"
              >
                Cerca de 1hr atrás
              </time>
            </div>
            <button
              title="Deletar comentário"
              onClick={() => handleDeleteComment(id)}
            >
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
