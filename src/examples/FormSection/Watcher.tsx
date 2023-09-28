import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { RootStoreContext } from "../../main";
import { autorun, reaction } from "mobx";

export const Watcher = observer(() => {
  const rootStore = useContext(RootStoreContext);

  useEffect(() => {
    const cleaner = autorun(() => {
      console.log("autorun", rootStore.form.formData);
    });

    const remover = reaction(
      () => rootStore.form.formData.languages.en.title,
      (data) => {
        console.log("reaction", data);
      }
    );

    return () => {
      cleaner();
      remover();
    };
  }, []);
  return <h3>Watcher</h3>;
});
