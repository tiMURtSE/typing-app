export class TestParemeters {
    // constructor() {
    //     this.time = 0;
    //     this.mistakeCounter = 0;
    //     this.isFirstTimeWrongPress = true;
    // }

    static time = 0
    static mistakeCounter = 0
    static isFirstTimeWrongPress = true;

    static setTime() {
        this.time = Date.now();
    }

    static stopTime() {
        this.time = 0;
        this.mistakeCounter = 0;
        this.isFirstTimeWrongPress = true;
    }
}

// let testParemeters = {};

// export const getTestParameters = () => {
//     testParemeters = (testParemeters !== undefined) ? testParemeters : new TestParemeters();

//     return o;
// };

