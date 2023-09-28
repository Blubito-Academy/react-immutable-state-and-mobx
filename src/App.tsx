import "./App.css";
import FormSection from "./components/FormSection/FormSection";

const App = () => {
  return (
    <>
      <blockquote
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
      </blockquote>
      <FormSection />
    </>
  );
};

export default App;
