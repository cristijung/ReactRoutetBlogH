import styles from './Post.module.css';

//todas as imagens deverão ter o mesmo nome e extensão -- linha 11
//{/** Btn provisório */} 
             
export default function PostCard({ post }) {
    return(
        <>
        <div className={styles.post}>
            <img 
                className={styles.capa}
                src={`/assets/posts/${post.id}/img.jpg`}  
                alt="Imagem do Post"
            />
            <h2 className={styles.titulo}>{post.titulo}</h2>
            <button className={styles.botaoLer}>Ler</button>        
            
        </div>

        </>
    )
}