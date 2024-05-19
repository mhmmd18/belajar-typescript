describe('loop', function () {
    it('should loop', function () {
        const names: string[] = ["Muhammad", "Agus", "Subagio"];
        for (let i = 0; i < names.length; i++) {
            console.info(names[i]);
        }
        for (const name of names) {
            console.info(name);
        }
        for (const index in names) {
            console.info(names[index]);
        }
    })
})