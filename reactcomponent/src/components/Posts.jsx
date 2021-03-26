import {Post} from './Post'
export function Posts(props){
    return <div>
        {
            props.posts.map(post=>(
                <Post 
                    key={post.id} 
                    name = {post.name} 
                    id = {post.id} 
                    cb={props.cb}
                />
            ))
        }
    </div>
}