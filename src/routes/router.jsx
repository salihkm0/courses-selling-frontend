import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "../components/instructor/InstructorSignup";
import { AdminLayout } from "../layout/AdminLayout";
import { InstuctorLayout } from "../layout/InstuctorLayout";
import { UserLayout } from "../layout/UserLayout";
import { AdminHomePage } from "../pages/admin/AdminHomePage";
import { CoursesPage } from "../pages/admin/CoursesPage";
import { InstructorPage } from "../pages/admin/InstructorPage";
import { AllCoursesPage } from "../pages/AllCoursesPage";
import { InstructorDashboard } from "../pages/instructor/InstructorDashboard";
import SigninPage from "../pages/instructor/SigninPage";
import SignupPage from "../pages/instructor/SignupPage";
import { ViewCourse } from "../pages/instructor/ViewCourse";
import { ProfilePage } from "../pages/ProfilePage";
import { CartPage } from "../components/user/CartPage";
import { UserCourses } from "../pages/user/UserCourses";
import { UserDashboard } from "../pages/user/UserDashboard";
import UserSigninPage from "../pages/user/UserSigninPage";
import UserSignupPage from "../pages/user/UserSignupPage";

export const router = createBrowserRouter([
  // admin routes
  {
    element: <AdminLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <AdminHomePage />,
      },
      {
        path: "/admin/signin",
        element: <div>Admin Sign in</div>
      },
      {
        path: "/admin/view-instructor",
        element: <InstructorPage/>
      },
      {
        path: "/admin/view-course",
        element: <CoursesPage/>
      },
      {
        path: "/admin/profile",
        element: <ProfilePage/>
      },

    ],
  },

  // instructor routes
  {
    element: <InstuctorLayout />,
    children: [
      {
        path: "/instructor/dashboard",
        element: <InstructorDashboard />,
      },
      {
        path: "/instructor/signup",
        element: <SignupPage />,
      },
      {
        path: "/instructor/signin",
        element: <SigninPage />,
      },
      // {
      //   path: "/instructor/view-instructor",
      //   element: <InstructorPage/>
      // },
      {
        path: "/instructor/view-course",
        element: <ViewCourse/>
      },
      {
        path: "/instructor/profile",
        element: <ProfilePage/>
      },
    ],
  },

  // user routes
  {
    element: <UserLayout />,
    children: [
      {
        path: "/user/",
        element: <UserDashboard />,
      },
      {
        path: "/user/signin",
        element: <UserSigninPage />,
      },
      {
        path: "/user/signup",
        element: <UserSignupPage />,
      },
      {
        path: "/user/courses",
        element: <AllCoursesPage />,
      },
      {
        path: "/user/my-courses",
        element: <UserCourses />,
      },
      {
        path: "/user/profile",
        element: <ProfilePage />,
      },
      // {
      //   path: "/user/cart",
      //   element: <CartPage />,
      // },
    ],
  },
]);
