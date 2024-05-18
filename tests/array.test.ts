describe('Array', function () {
    // array
    it('should array', function () {
        const names: string[] = ["Mamad", "Iqbal"];
        const values: number[] = [1, 2, 3, 4, 5];

        console.info(names);
        console.info(values);
    })
    // read only array
    it('should read only', function () {
        const hobbies: readonly string[] = ["Membaca", "Menulis"];
        console.info(hobbies);
        console.info(hobbies[0]);
        console.info(hobbies[1]);

        const books: ReadonlyArray<number> = [1, 2, 3, 4, 5];
        console.info(books);
    })
    // tuple
    it('should tuple', function () {
        const person: readonly [string, number] = ["Mamad", 21];
        console.info(person);
        console.info(person[0]);
        console.info(person[1]);
    })
})