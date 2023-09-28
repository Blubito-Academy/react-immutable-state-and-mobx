import { Movie } from "../../types/Movie";

function CodeBlock(props: { code: Movie }) {
  return (
    <pre>
      <code>{JSON.stringify(props.code, null, 2)}</code>
    </pre>
  );
}

export default CodeBlock;
