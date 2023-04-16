import HelloWorld from "./components/Hello.js";
import Logo from "./components/Logo.js";
import { Frase } from "./components/Frase.js";
import { LoremIpsom } from "./components/LoremIpsom.js";

export function App() {
  return (
    <div className="App">
      <Logo />
      <HelloWorld />
      <Frase />
      <LoremIpsom />
    </div>
  );
}
