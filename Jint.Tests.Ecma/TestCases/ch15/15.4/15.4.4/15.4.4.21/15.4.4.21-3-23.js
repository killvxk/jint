/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.21/15.4.4.21-3-23.js
 * @description Array.prototype.reduce uses inherited valueOf method - 'length' is an object with an own toString and inherited valueOf methods
 */


function testcase() {

        var valueOfAccessed = false;
        var toStringAccessed = false;

        function callbackfn(prevVal, curVal, idx, obj) {
            return (curVal === 11 && idx === 1);
        }

        var proto = {
            valueOf: function () {
                valueOfAccessed = true;
                return 2;
            }
        };

        var Con = function () { };
        Con.prototype = proto;

        var child = new Con();

        child.toString = function () {
            toStringAccessed = true;
            return '1';
        };

        var obj = {
            1: 11,
            2: 9,
            length: child
        };

        return Array.prototype.reduce.call(obj, callbackfn, 1) === true && valueOfAccessed && !toStringAccessed;
    }
runTestCase(testcase);
