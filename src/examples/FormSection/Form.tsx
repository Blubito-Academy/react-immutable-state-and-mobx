import { cloneDeep, set } from "lodash-es";
import formLayout, { Block } from "../../constants/FormLayout";
import { Movie } from "../../types/Movie";
import { produce } from "immer";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { RootStoreContext } from "../../main";

const BlockRenderer = ({
  block,
  options = [],
  setter,
}: {
  block: Block;
  options?: string[];
  setter: (field: string, value: string | boolean) => void;
}) => {
  switch (block.component) {
    case "input":
      return (
        <input
          type="text"
          name={block.field}
          placeholder={block.name}
          required
          onChange={(e) => setter(block.field, e.target.value)}
        />
      );
    case "numInput":
      return (
        <input
          type="number"
          name={block.field}
          placeholder={block.name}
          required
          step={5}
          min={1}
        />
      );
    case "select":
      return (
        <select name={block.field} required>
          <option value="">{block.name}</option>
          {(block.options ?? options).map((category, idx) => (
            <option key={`category-${idx}`} value={category}>
              {category}
            </option>
          ))}
        </select>
      );
    case "switch":
      return (
        <>
          <input
            type="checkbox"
            id={block.field}
            name={block.field}
            role="switch"
          />
          {block.name}
        </>
      );
  }
};

const Form = observer(() => {
  // const nativeSetter = (field: string, value: string | boolean) => {
  //   const copy = structuredClone(data);
  //   const keys = field.split(".");
  //   keys.reduce((obj, key, index) => {
  //     if (index === keys.length - 1) {
  //       obj[key] = value;
  //     } else {
  //       obj[key] = obj[key] || {};
  //     }
  //     return obj[key];
  //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //   }, copy as any);
  //   onChange(copy);
  // };

  // const lodashSetter = (field: string, value: string | boolean) => {
  //   const copy = cloneDeep(data);
  //   set(copy, field, value);
  //   onChange(copy);
  // };

  // const immerSetter = (field: string, value: string | boolean) => {
  //   const newState = produce(data, draft=>{
  //     set(draft, field, value);
  //   })
  //   onChange(newState)
  // }

  const rootStore = useContext(RootStoreContext);
  // rootStore.form.somethingElse
  return (
    <form>
      <div className="myGrid">
        {formLayout.map((block) => (
          <label key={block.field} htmlFor="">
            {block.name}

            {BlockRenderer({ block, setter: rootStore.form.updateFormData })}
          </label>
        ))}
      </div>

      <div className="grid">
        <button type="submit">Submit</button>
        <button type="button" onClick={rootStore.form.reset}>Reset</button>
      </div>
    </form>
  );
});

export default Form;
