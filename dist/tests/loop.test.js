"use strict";
describe('loop', function () {
    it('should loop', function () {
        const names = ["Muhammad", "Agus", "Subagio"];
        for (let i = 0; i < names.length; i++) {
            console.info(names[i]);
        }
        for (const name of names) {
            console.info(name);
        }
        for (const index in names) {
            console.info(names[index]);
        }
    });
    // while loop
    it('should while loop', function () {
        let counter = 0;
        while (counter < 10) {
            console.info(counter);
            counter++;
        }
    });
    // do while
    it('should do while', function () {
        let counter = 0;
        do {
            console.info(counter);
            counter++;
        } while (counter < 10);
    });
});
