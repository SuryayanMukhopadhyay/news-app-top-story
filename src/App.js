import "./App.css";
import { Navbar } from "./components/Navbar";
import { News } from "./components/News";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  // const apiKey = process.env.API_KEY_1;
  // const apiKey = process.env.API_KEY_2;
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <News
            key="general"
            country="in"
            category="general"
            headline=""
            // apiKey={apiKey}
          />
        </>
      ),
    },
    {
      path: "/sports",
      element: (
        <>
          <Navbar />
          <News
            key="sports"
            country="in"
            category="sports"
            headline="Sports"
            // apiKey={apiKey}
          />
        </>
      ),
    },
    {
      path: "/entertainment",
      element: (
        <>
          <Navbar />
          <News
            key="entertainment"
            country="in"
            category="entertainment"
            headline="Entertainment"
            // apiKey={apiKey}
          />
        </>
      ),
    },
    {
      path: "/health",
      element: (
        <>
          <Navbar />
          <News
            key="health"
            country="in"
            category="health"
            headline="Health"
            // apiKey={apiKey}
          />
        </>
      ),
    },
    {
      path: "/science",
      element: (
        <>
          <Navbar />
          <News
            key="science"
            country="in"
            category="science"
            headline="Science"
            // apiKey={apiKey}
          />
        </>
      ),
    },
    {
      path: "/business",
      element: (
        <>
          <Navbar />
          <News
            key="business"
            country="in"
            category="business"
            headline="Business"
            // apiKey={apiKey}
          />
        </>
      ),
    },
    {
      path: "/technology",
      element: (
        <>
          <Navbar />
          <News
            key="technology"
            country="in"
            category="technology"
            headline="Technology"
            // apiKey={apiKey}
          />
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
