// App.jsx

// Import the Shadcn Button component
import { Button } from "./components/ui/button";

// Import global styles (TailwindCSS)
import "./App.css";

function App() {
  return (
    <>
      {/* A large heading styled with Tailwind utility classes */}
      <h1 className="font-bold text-5xl shadow">Integrating Shadcn</h1>

      {/* A Shadcn Button with customized styling using Tailwind classes */}
      <Button className="p-4 rounded-2xl mt-7 bg-red-700 text-white hover:bg-red-800">
        Go to Docs
      </Button>
    </>
  );
}

export default App;
