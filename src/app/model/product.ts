export class Product {
  constructor(initData?: Partial<Product>) {
    Object.assign(this, initData);
  }

  id!: number;

  name!: String;

  authors!: String[];

  company!: String;

  isShow!: boolean;

  imgUrl!: String;

  price!: number;
}
