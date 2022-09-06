import { Header } from "./components/Header/Header";
import "./styles/global.css";

import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Post } from "./components/Post/Post";

function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: "https://avatars.githubusercontent.com/u/71460942?v=4",
        name: "Flávio Costa",
        role: "Full Stack Student",
      },
      content: [
        { type: "paragraph", content: "Fala galera" },
        {
          type: "paragraph",
          content:
            " Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        { type: "paragrah", content: "jane.design/doctorcare" },
      ],
      publishedAt: new Date("2022-08-31 13:17:00"),
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://avatars.githubusercontent.com/u/71460942?v=4",
        name: "Flávio Costa",
        role: "Full Stack Student",
      },
      content: [
        { type: "paragraph", content: "Fala galera" },
        {
          type: "paragraph",
          content:
            " Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        { type: "link", content: "jane.design/doctorcare" },
      ],
      publishedAt: new Date("2022-08-31 13:17:00"),
    },
  ];

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
