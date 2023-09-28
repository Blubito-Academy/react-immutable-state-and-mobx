import CodeBlock from "./CodeBlock";
import Form from "./Form";

const FormSection = () => {
  // const [data, setData] = useState(getEmptyFilm());
  // const rootStore = useContext(RootStoreContext);

  return (
    <div className="myGrid">
      <Form />
      <CodeBlock />
    </div>
  );
};

export default FormSection;
