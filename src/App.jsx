import { createRoot } from "react-dom/client";
const App = () => {
  return <header>Data School Frontend</header>;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
