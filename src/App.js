import "./App.css";
/* import Search from './components/Search'; */
import React from "react";

const LazyAbout = React.lazy(() => import(`./components/Search`));

function App() {
  return (
    <div>
      <React.Suspense fallback="Loading">
        <LazyAbout />
      </React.Suspense>
    </div>
  );
}

export default App;
