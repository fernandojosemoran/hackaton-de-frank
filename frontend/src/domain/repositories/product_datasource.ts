import Product from "@domain/entities/Product";

abstract class ProductDatasource {
    abstract getProducts(page: number): Array<Product>;
    abstract searchProductByCategory(category: string, page: number): Array<Product>;
}

export default ProductDatasource;