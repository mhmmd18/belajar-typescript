import { sayHello } from "../src/say-hello";
describe('sayHello', function () {
    it('should return hello mamad', function () {
        expect(sayHello('mamad')).toBe('Hello mamad');
    });
});
