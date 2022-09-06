import styles from "./Avatar.module.css";

interface AvatarProps {
  src: string;
  hasBorder?: boolean;
}

export function Avatar({ src, hasBorder = false }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarBorder : styles.avatar}
      src={src}
      alt="Imagem de perfil"
    />
  );
}
