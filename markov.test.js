const markov = require("./markov");

describe("markov make text", function () {

    test("make text w/o argument", function () {
        let mm = new markov.MarkovMachine("the cat in the hat");
        let result = mm.makeText()
        expect(result).not.toEqual("");
    })

    test("make test with argument", function () {
        let mm = new markov.MarkovMachine("the cat in the hat");
        let result = mm.makeText(50);
        console.log(result)
        expect(result).not.toEqual("");
        expect(result.length).toBeLessThanOrEqual(50);
    })
})