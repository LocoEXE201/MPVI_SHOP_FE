export interface Product {
    categoryId: number
    categoryName: string;
    image: string;
    priceIn: number;
    rate: number;
    superCategoryName: string;
}

export interface CartItem {
    product: Product;
    quantity: number;
}