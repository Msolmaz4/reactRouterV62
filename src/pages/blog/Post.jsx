import { useParams } from "react-router-dom"

const Post = () => {
  //const params = useParams()
 // console.log(params)

 const {url ,id} = useParams()
 console.log(url,id)
  return (
    <div>Post</div>
  )
}

export default Post