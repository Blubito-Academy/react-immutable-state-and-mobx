import { autorun, reaction } from "mobx";
import "./App.css";
import FormSection from "./examples/FormSection/FormSection";
import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { RootStoreContext } from "./main";
import { Watcher } from "./examples/FormSection/Watcher";

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {/* <blockquote
        style={{
          textAlign: "left",
          maxWidth: "700px",
          margin: "0 auto 3rem auto",
        }}
      >
        "Hello, fellow wanderer - can you help me with this little thingamajig?"
        <ul>
          <li>Connect the form to a state</li>
          <li>Make the state logic clean and efficiant</li>
          <li>
            Subcategory should have a different options, depending on the
            selected Category
          </li>
        </ul>
        <footer>
          <cite>- Some random old traveling magician</cite>
        </footer>
      </blockquote> */}
      <FormSection />
      {visible ? <Watcher /> : <></>}
      <button onClick={() => setVisible(!visible)}>Toggle watcher</button>
    </>
  );
};

export default App;
