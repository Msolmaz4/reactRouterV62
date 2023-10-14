import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import AuthLayout from "./pages/auth";
import Login from "./pages/auth/Login";
import BlogLayout from "./pages/blog";
import Blog from "./pages/blog/Blog";
import Categories from "./pages/blog/Categories";
import Post from "./pages/blog/Post";
import Profile from "./pages/blog/Profile";

const routes = [

    {
        path:'/',
        element:<Home/>
        
    },
    {
        path:'blog',
        element:<BlogLayout/>,
        children :[
            {
               index:true ,
               element:<Blog/>
            },
            {
                path:'categories',
                element:<Categories/>
            },
            {
                path:'post/:id',
                element:<Post/>
            }
            

        ]
    },
    {
        path:'profil',
        element:<PrivateRoute><Profile/></PrivateRoute>
    },
    {
        path:'/auth',
        element:<AuthLayout/>,
        children:[
            {
                path:'login',
                element:<Login/>
            }
        ]
    }
]
export default routes