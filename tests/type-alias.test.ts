import { Category, Product } from "../src/type-alias"

describe('type-alias', function () {
    it('should must declare', function () {
        const category: Category = {
            id: 1,
            name: "Handphone"
        }

        const product: Product = {
            id: "satu",
            name: "Samsung",
            price: 1000000,
            category
        }

        console.info(category);
        console.info(product);

    })
})