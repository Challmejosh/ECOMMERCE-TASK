export interface ProductType {
    title: string
    reviews?: number
    price?: number
    description: string
    color?: string[]
    size: "xs"|"m"|"s"|"l"|"xl"
    image: string[]
    stars: number
    id: string 
    discount?: number
    thumbnail: string
    percent?: number
    news?: string
    stock: "in stock"|"out of stock"
}
export interface CartType {
    title: string
    reviews?: number
    price?: number
    description: string
    color?: string[]
    size: "xs"|"m"|"s"|"l"|"xl"
    image: string[]
    stars: number
    id: string
    discount?: number
    thumbnail: string
    percent?: number
    news?: string
    quantity: number
    uid: string
    stock: "in stock"|"out of stock"
}