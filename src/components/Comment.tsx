import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';


interface CommentProps{
    content: string;
    onDeleteComment:(comment:string) => void;
}



export function Comment({content,onDeleteComment}:CommentProps){
    const [likeCount,setLikeCount] = useState(0);

    function handleDeleteComment(){
        console.log('Remover')

        onDeleteComment(content)
    }

    function handleLikeComment(){
        setLikeCount((state)=>{
            return state + 1
        });
    }


    return(
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                src="https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" 
                alt="" 
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Paulo Lima</strong>
                            <time 
                                title="30 de Junho de 2022" dateTime="2022-06-30 19:00:00">Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}