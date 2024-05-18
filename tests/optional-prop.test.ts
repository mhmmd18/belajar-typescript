import { Biodata } from "../src/optional-prop";

describe('optional-prop', function() { 
    it('should optional-prop', function() {
        const person: Biodata = {
            id: 1,
            name: "Mamad",
            age: 21,
            // address boleh di isi maupun tidak, karena address? = optional
            // address: "Jl. Pangeran Antasari"
        }
        console.info(person.address);
    })
})