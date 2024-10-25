
import { Decimal128 } from 'mongodb';

type CollectionType = {
    _id:string,
    title:string,
    description:string,
    image:string,
    products:ProductType[];
}
type ProductType = {
    image: string | StaticImport;
    _id:string,
    title:string,
    description:string,
    media:[string],
    category:string,
    collections:[CollectionType],
    tags:[string],
    sizes:[string],
    colors:[string],
    price:number,
    expense:number,
    createdAt:Date,
    updatedAt:Date,
}
type UserType = {
    clerkId: string;
    wishlist: [string];
    orders:[string];
    createdAt: string;
    updatedAt: string;
  };