import "./App.css";
import { useTonConnect } from "./hooks/useTonConnect";
import "@twa-dev/sdk";
import {Connect} from "./components/connect";
import {Score} from "./components/Score";
import {TonConnectButton} from "@tonconnect/ui-react";

function App() {
  const { network } = useTonConnect();

  return (
    <main>
      <main>
        <Connect/>
        <Score/>
        {/*<div>*/}
        {/*  <TonConnectButton/>*/}
        {/*</div>*/}
      </main>
    </main>
  );
}

export default App;
