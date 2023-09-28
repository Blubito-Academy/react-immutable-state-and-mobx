import { makeAutoObservable } from "mobx";
import { Movie } from "../types/Movie";
import { getEmptyFilm } from "../constants/EmptyVideo";
import { set } from "lodash-es";

export class FormStore {
  private _formData: Movie = getEmptyFilm();
  somethingElse: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  get formData() {
    return this._formData;
  }

  updateFormData = (field: string, value: string | boolean) => {
    set(this._formData, field, value);
  };

  reset = () => {
    this._formData = getEmptyFilm();
  };



  private _tableData:Product[] = generateRandomProducts();

  get tableData() {
    return this._tableData;
  }
}



interface Product {
  productName: string;
  productPrice: number;
  productQuantity: number;
  dateCreated: Date;
  dateLastUpdate: Date;
}

function generateRandomDate(minDate: Date, maxDate: Date): Date {
  const minTimestamp = minDate.getTime();
  const maxTimestamp = maxDate.getTime();
  const randomTimestamp = Math.random() * (maxTimestamp - minTimestamp) + minTimestamp;
  return new Date(randomTimestamp);
}

function generateRandomProducts(): Product[] {
  const currentDate = new Date();
  const products: Product[] = [];

  for (let i = 0; i < 1000; i++) {
    const productName = `Product ${i + 1}`;
    const productPrice = Math.random() * 1000; // Random price between 0 and 1000
    const productQuantity = Math.floor(Math.random() * 100); // Random quantity between 0 and 100
    const dateCreated = generateRandomDate(new Date(currentDate.getFullYear() - 5, 0, 1), currentDate);
    const dateLastUpdate = generateRandomDate(dateCreated, currentDate);

    products.push({
      productName,
      productPrice,
      productQuantity,
      dateCreated,
      dateLastUpdate,
    });
  }

  return products;
}
