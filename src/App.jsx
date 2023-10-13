import { Routes , Route , Link ,NavLink} from 'react-router-dom'


import Post from './pages/blog/Post'
import Home from './pages/Home'
import BlogLayout from './pages/blog'
import Blog from './pages/blog/Blog'




function App() {
  

  return (
    <>

    <nav>
      {/* navlink bize aktiv classi eklmememise yarar */}
      {/* classNmae = {({isActive})=>isActive && 'aktif'} boylede yapillabilir */}
      <NavLink to='/' >Anasayfa</NavLink>
      <NavLink to='/contact'> Contact</NavLink>
      <NavLink to='/blog'> blog</NavLink>
    </nav>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/blog' element= {<BlogLayout/>}>
        <Route index={true} element= {<Blog/>}></Route>
        <Route path='post/:id/:url' element={<Post/>}></Route>
      </Route>
    </Routes>
      hello
    </>
  )
}

export default App
