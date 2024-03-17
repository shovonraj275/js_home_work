console.log ('Answer to the Qustion : 1')
const A = [50, 107, 'jack', 83,'killer', 'son', true];
const result = A.filter(chack => typeof chack === 'string');
console.log("new straing array : " +result)

// ------------------------------------------------------------------------------

console.log ('Answer to the Qustion : 2')
const result2 = A.filter(chack => typeof chack === 'number');
console.log("new numbere array: " + result2)
resusltsort= result2.sort(function(a, b){return a-b});
console.log("the array sort by small to large number: "+ resusltsort)
// ---------------------------------------------------------------------
console.log ('Answer to the Qustion : 3')
console.log("Main string array " + result)
const reversed = result.reverse();
console.log('reversed:', reversed);
// -------------------------------------------------------
console.log ('Answer to the Qustion : 4')
console.log('Arrey One: '+result);
console.log('Arrey two : '+result2);
const combaine = result.concat(result2);
console.log('New make arrey : '+combaine)
// --------------------------------------------
console.log ('Answer to the Qustion : 5')
console.log('The combained arrey : ' + combaine)
console.log("Remove last 3 element : " +combaine.slice(0, -3));
// ------------------------------------------------------------------
console.log ('Answer to the Qustion : 6')
console.log('The combained arrey : ' + combaine)
console.log('The  arrey vlaus lass than  100 : ' + combaine.filter(lessItem => lessItem < 100));
// -----------------------------------------------------
console.log ('Answer to the Qustion : 7')
console.log('The combained arrey : ' + combaine)
const stringData = ' str';
const addString = result.map(addstringTO => addstringTO.slice(0, -3) + stringData);
console.log('new arrey : '+addString);
