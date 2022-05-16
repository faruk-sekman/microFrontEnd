export interface ProductsModel {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    image: string;
    rating: RateModel;
}
export interface RateModel {
    rate: any;
    count: string;
}