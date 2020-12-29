/**
 * author: Blackawn
 * blog: blackawn.me
 * creation time: 2020-12-29
 * modifications: 0
 * change the count: 0
 * */
(function (window, undefined) {
  "use strict"
  const $blackawn$ = {
    _random_: {
      randomArgumentsError: function (...argument) {
        if (argument[0] > argument[1]) throw 'Parameter ' + argument[0] + ' more than the ' + argument[1];
        if (isNaN(argument[0]) || isNaN(argument[1])) throw 'Parameter ' + argument + ' not a Number type';

        return true;
      },
      randomNumber: function (minNumber, maxNumber) {
        if (!this.randomArgumentsError(minNumber, maxNumber)) return false;

        return Math.round(Math.random() * (maxNumber - minNumber)) + minNumber;
      },
      randomArray: function (startNumber, endNumber) {
        if (!this.randomArgumentsError(startNumber, endNumber)) return false;

        let returnArray = [],
            tempArray = [];
        let tempRandomNumber;

        for (let i = startNumber; i < (endNumber + 1); i++) tempArray.push(i);

        while (tempArray.length > 0) {
          tempRandomNumber = this.randomNumber(0, (tempArray.length - 1));
          returnArray.push(tempArray[tempRandomNumber]);
          tempArray.splice(tempRandomNumber, 1);
        }
        return returnArray;
      }
    }
  }
  window.$blackawn$ = window.$blackawn$ = $blackawn$;
}(window));