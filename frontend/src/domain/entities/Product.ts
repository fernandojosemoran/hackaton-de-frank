class Product {
    id: number;
    name: string;
    category: string;
    quantity: string;
    slug: string;
    image: string;
    description: string;

    constructor(id: number, name: string, category: string, quantity: string, slug: string, image: string, description: string) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.quantity = quantity;
        this.slug = slug;
        this.image = image;
        this.description = description;
    }
}

export default Product;