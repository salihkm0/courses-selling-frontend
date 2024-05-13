import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "../components/instructor/InstructorSignup";
import { AdminLayout } from "../layout/AdminLayout";
import { AdminHomePage } from "../pages/admin/AdminHomePage";
import UserSigninPage from "../pages/user/UserSigninPage";
import UserSignupPage from "../pages/user/UserSignupPage";

export const router = createBrowserRouter([


  // admin routes
  {
    element : <AdminLayout/>,
    children: [
        {
          path: "/admin/dashboard",
          element: <AdminHomePage/>,
        }
    ]
  },

  // instuctor routes

  {
    path: "/instuctor/signup",
    element: <Signup/>,
  },


  // user routes
    {
      path: "/user/signin",
      element: <UserSigninPage/>,
    },
    {
      path: "/user/signup",
      element: <UserSignupPage/>,
    },
    
   
   
  ]);