import type {PostType} from "../../types/post"
import Post from "../Post";

const Feed = ({ listaPosts }: {listaPosts:PostType []} ) =>{
      return (
        <>
        
          {
                listaPosts.map((post) => (
                    <Post post = {post}/>
                ))
          } 

        </>
    
    )
}

export default Feed;
