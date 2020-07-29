import { A } from './a';

class SDK {
    isA(a) {
        if (a instanceof A) {
            console.log('a is A');
        } else {
            console.log('a is not A');
        }

    }
}

module.exports = SDK;