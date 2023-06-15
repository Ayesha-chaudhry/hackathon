export interface slugType{
    _type: string,
    current: string,
};

export interface assetImageType{
    _type: string,
    _ref: string,
};

export interface imageType{
    asset: assetImageType,
    _type: string,
    _key: string,
}

export interface oneProductType{
    slug: slugType,
    quantity: number,
    _rev: string,
    _type: string,
    productName: string,
    _createdAt: string,
    _id: string,
    _updatedAt: string,
    image: Array<imageType>,
    description: any,
    productTypes: Array<string>,
    size: Array<string>,
    price: number,
}

export interface responseType{
    result: Array<oneProductType>
}