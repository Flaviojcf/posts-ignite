import { PencilLine } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";
import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="/assets/backgroundImage.png"
        alt="Imagem de background"
      />
      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/71460942?v=4" hasBorder/>
        <strong>Flávio Costa</strong>
        <span>Full Stack Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
