import { useState } from "react";
import { getEmptyFilm } from "../../constants/EmptyVideo";
import CodeBlock from "./CodeBlock";
import Form from "./Form";

function FormSection() {
  const [data, setData] = useState(getEmptyFilm());
  // const [shikiData, setShikiData] = useState<IThemedToken[][]>([])

  return (
    <div className="myGrid">
      <Form />
      <CodeBlock code={data} />
    </div>
  );
}

export default FormSection;
