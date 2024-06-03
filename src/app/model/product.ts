export class Product {
  constructor(initData?: Partial<Product>) {
    Object.assign(this, initData);
    this.createDate = new Date();
  }

  id!: number;

  name!: String;

  authors!: String[];

  company!: String;

  isShow!: boolean;

  imgUrl!: String;

  createDate!: Date;

  price!: number;
}
