import "./App.css";
import { useTonConnect } from "./hooks/useTonConnect";
import "@twa-dev/sdk";
import {Connect} from "./components/connect";
import {Score} from "./components/Score";

function App() {
  const { network } = useTonConnect();

  return (
    <main>
      <main>
        <Connect/>
        <Score/>
      </main>
    </main>
  );
}

export default App;
