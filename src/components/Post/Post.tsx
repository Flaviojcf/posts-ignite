import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";
import styles from "./Post.module.css";
import { v4 as uuidv4 } from "uuid";

import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { FormEvent, useState } from "react";

interface AuthorProps {
  name: string;
  role: string;
  avatarUrl: string;
}

interface ContentProps {
  type: string;
  content: string;
}

interface PostProps {
  author: AuthorProps;
  content: Array<ContentProps>;
  publishedAt: Date;
}

export function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState([
    {
      id: uuidv4(),
      comment: "Post muit bacana, hein?",
    },
  ]);
  const [newComment, setNewComment] = useState("");
  const isNewCommentDisabled = !newComment || !newComment.trim();

  const publisehdDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'ás' HH:mm'h' ",
    {
      locale: ptBR,
    }
  );

  function handleCreateNewComment(event: FormEvent) {
    event?.preventDefault();

    const createNewComment = {
      id: uuidv4(),
      comment: newComment,
    };

    if (!newComment || !newComment.trim()) return;
    const newComments = createNewComment;
    setComments([...comments, newComments]);
    setNewComment("");
  }

  function handleDeleteComment(id: string) {
    const deleteComments = comments.filter((comments) => comments.id !== id);

    setComments(deleteComments);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} hasBorder />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title="30 de agosto às 13:37" dateTime="2022-08-30 13:37:50">
          {publisehdDateFormatted}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else {
            return (
              <a key={line.content} href="#">
                {line.content}
              </a>
            );
          }
        })}
      </div>

      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Deixe um comentário"
          value={newComment}
          required
        ></textarea>

        <footer>
          <button type="submit" disabled={isNewCommentDisabled}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            content={comment.comment}
            handleDeleteComment={handleDeleteComment}
            id={comment.id}
          />
        ))}
      </div>
    </article>
  );
}
