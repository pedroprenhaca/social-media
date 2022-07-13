import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css"

import './global.css';


const posts = [
{
  id: 1,
  author: {
    avatarUrl: 'https://github.com/pedroprenhaca.png',
    name:'Pedro Prenhaca',
    role:'Web Developer'
  },
  content: [
    { type:'paragraph', content:'Fala galeraa 👋' },
    {  type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
    { type:'link', content:'matheus.arquiteto/doctorcare'},   
  ],
  publishedAt: new Date('2022-07-05 20:00:00'),

  },
{
  id: 2,
  author: {
    avatarUrl: 'https://github.com/maykbrito.png',
    name:'Mayk Brito',
    role:'Educator @Rocketseat'
  },
  content: [
    { type:'paragraph', content:'Fala galeraa 👋' },
    {  type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
    { type:'link', content:'matheus.arquiteto/doctorcare'},   
  ],
  publishedAt: new Date('2022-07-06 20:00:00'),

  },
]


 export function App() {
  return (
  <div>
    <Header/>

    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
        {posts.map(post =>{
          return(
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
        })}
      </main>
      
     </div>
  </div>
  )
}
