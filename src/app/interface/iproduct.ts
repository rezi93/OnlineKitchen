export interface IProduct {
    Id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]

}
export interface IProductBaseReponse{
    total: number,
    skip: number,
    limit: number,
    products:IProduct[]
}
export const TOKEN_KEY:string='token'

