//let x3: number[]=[4, 5, 7];
//console.log(x3[3]);
//Name of Cleanest Cities
let cleanCity: string[]= ['Multan','Karachi','Lahore', 'Peshawar', 'Islamabad'];
//for(i=0; i<5; i++);{
//console.log(cleanCity[1]);
//let canCity: string = cleanCity[1] + cleanCity[3];
//console.log(canCity,'/n');
//cleanCity.push('Wah');
//console.log(cleanCity);
//cleanCity.splice(2);
//console.log(cleanCity);
//pop() removes last element of array
//shift() removes first element of array
//unshift add new ele at first position
//pop.element will let you know the removed element
//slice() gives a subset of array
//let sC=cleanCity.slice(1,3);
//console.log(sC);
//splice remove an element and replaces new if you wnat to
console.log("Before Splice", cleanCity );
cleanCity.splice(3,2,'Taxila');
console.log("After Splice", cleanCity);

