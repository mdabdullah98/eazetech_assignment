import "./app.css";

import Sidebar from "./components/sidebar/Sidebar";

import Analytics from "./components/analytics/Analytics";

function App() {
  return (
    <>
      <main className="analytics-main">
        <div className="analytics-inner">
          <Sidebar />
          <Analytics />
        </div>
      </main>
    </>
  );
}

export default App;
