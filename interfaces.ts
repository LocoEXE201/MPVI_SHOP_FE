export interface Product {
    categoryId: number
    categoryName: string;
    image: string;
    priceIn: number;
    priceSold:number
    rate: number;
    superCategoryName: string;
}

export interface CartItem {
    product: Product;
    quantity: number;
}