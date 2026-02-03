import { RefreshCcw } from "lucide-react";
import { Logo } from "./components/shared/logo";

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div>
        <div className="my-5 flex flex-col gap-4">
          <Logo />
        </div>

        <div className="my-5 flex flex-col gap-4">
          <button className="btn-primary">Primary Button</button>
          <button className="btn-secondary">
            Secondary Button
            <RefreshCcw />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
