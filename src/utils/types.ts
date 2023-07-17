import { StaticImageData } from "next/image";

export type Product = {
    id: number;
    name: string;
    basetagline: string,
    price: number;
    category: string;
    image: StaticImageData | string;
};