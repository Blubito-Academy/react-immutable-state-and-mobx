import { FormStore } from "./FormStore";

export class RootStore {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: FormStore;
  constructor() {
    this.form = new FormStore();
  }
}
