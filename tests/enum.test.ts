import { JenisKelamin } from "../src/enum";

describe('enum', function() { 
    it("should enum", function (){
        const person:{id: number, name: string, gender: JenisKelamin} = {
            id: 1,
            name: "Mamad",
            gender: JenisKelamin.lk
        }

        console.info(person);
    });
 })