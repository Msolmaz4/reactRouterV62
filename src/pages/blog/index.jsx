//alltaki sayfalari v=cagirmak icin 
//omcedden burasi blog sayfasi ifid somra her sayfa acilfidihnda burasi calisavak burasi navbar gibi dudunduk
import { Outlet  } from "react-router-dom"

const BlogLayout = () => {
  return (
    <div>

   <Outlet/>

    </div>
  )
}

export default BlogLayout