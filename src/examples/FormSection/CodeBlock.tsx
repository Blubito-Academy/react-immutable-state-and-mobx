import { useContext } from "react";
import { Movie } from "../../types/Movie";
import { RootStoreContext } from "../../main";
import { observer } from "mobx-react-lite";

const CodeBlock = observer(() => {
  const rootStore = useContext(RootStoreContext);
  return (
    <pre>
      <code>{JSON.stringify(rootStore.form.formData, null, 2)}</code>
    </pre>
  );
});

export default CodeBlock;
