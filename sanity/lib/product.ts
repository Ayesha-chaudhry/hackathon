export const product = {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields:[
        {
            name: 'productName',
            type: 'string',
            title: 'ProductName'
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'productName',
                maxLength: 200,
                slugify: (input: any) => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
            }
        },
        {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [
                {type: "block"}
            ]
        },
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [
                {
                    type: 'image',
                    fields: [
                        {
                            name: "alt",
                            type: "text",
                            title: "Alternative text",
                        }
                    ]
                }
            ]
            
        },
        {
            name: 'productTypes',
            title: 'productType',
            type: 'array',
            of: [
                {
                    type: 'string'
                }
            ]
        },
       
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'size',
            title: 'Sizes',
            type: 'array',
            of: [{
                type: 'string'
            }]
        },
        {
            name: 'quantity',
            type: 'number',
            title: 'Quantity'
        },
    ]
}