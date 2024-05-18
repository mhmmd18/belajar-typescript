import { Seller } from "../src/seller"

describe('interface', function () {
    it('should interface', function () {
        const seller: Seller = {
            id: 1,
            name: "Mamad",
            address: "Jl. Pangeran Antasari"
        }
        console.info(seller);
    })
})