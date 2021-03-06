/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-317.js
 * @description Object.defineProperty - 'O' is an Arguments object, 'P' is generic own data property of 'O', test TypeError is thrown when updating the [[Value]] attribute value of 'P' which is not writable and not configurable (10.6 [[DefineOwnProperty]] step 4)
 */


function testcase() {
        return (function () {
            Object.defineProperty(arguments, "genericProperty", {
                value: 1001,
                writable: false,
                configurable: false
            });
            try {
                Object.defineProperty(arguments, "genericProperty", {
                    value: 1002
                });
            } catch (e) {
                return e instanceof TypeError &&
                    dataPropertyAttributesAreCorrect(arguments, "genericProperty", 1001, false, false, false);
            }
            return false;
        }(1, 2, 3));
    }
runTestCase(testcase);
