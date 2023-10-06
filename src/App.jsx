import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
// local imports
import Spinner from "./ui/Spinner";

//dynamic local import
const Home = lazy(() => import("./pages/Homepage/Homepage"));
const ContactUs = lazy(() => import("./pages/ContactUs/ContactUs"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));
const Service = lazy(() => import("./pages/Service/Service"));
const AppLayout = lazy(() => import("./ui/AppLayout"));
const PageNotFound = lazy(() => import("./ui/Error"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="service" element={<Service />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
