import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Container from "./components/Container";
import AboutUs from "./pages/about/AboutUs";
import Tour from "./pages/tourPage/Tour";
import ContactUs from "./pages/contactUs/ContactUs";

const router = createBrowserRouter([
  { path: "/", element: <Container /> },
  { path: "/about", element: <AboutUs /> },
  { path: "/tour", element: <Tour /> },
  { path: "/contact", element: <ContactUs /> },
]);
function App() {
  return <RouterProvider router={router}/>;
}

export default App;

// const router = createBrowserRouter([
//   { path: "/", element: <Home /> },
//   { path: "/about", element: <About /> },
//   { path: "/wishes", element: <Wishes /> },
//   { path: "/gallery", element: <Gallery /> },
//   {
//     path: "/admin",
//     element: <AdminLayout />,
//     children: [{ index: true, element: <Dashboard /> }],
//   },
// ]);
// function App() {
//   return <RouterProvider router={router} />;
// }
