

var findAllElementsThree = function(collection){
    var foundColllectionWithElement = [];
    //Example 1
   // if((arguments.length != 1) || !Array.isArray(collection)){
     //   return foundColllectionWithElement;
   // }
    if (arguments.length != 1){
        return foundColllectionWithElement;
    }

    if(!Array.isArray(collection)){
        return foundColllectionWithElement;
    }

    for (var i=0; i < collection.length; i++){
        if(collection[i] == 3) {
            foundColllectionWithElement.push(Math.pow(collection[i],2));
        }
    }
    return foundColllectionWithElement;
};

// var CollectionUtil = {
//     forEach :function(){

//     }
// };
var CollectionUtil = {};
CollectionUtil.forEach = function(collection, callback){

    for(var i=0; i < collection.length; i++){
        callback(collection[i],collection);
        // dynamic logic
        // console.log(collection[i]);
    }
};
CollectionUtil.forEach([1,2,3,4,5,6,7],function(numberElement){
    console.log('** ' +numberElement+ '** ');
});

CollectionUtil.forEach([1,2,3,4,5,6,7],function(numberElement){
    console.log('Element of collection is ' +numberElement);
});

CollectionUtil.forEach([1,2,3,4,5,6,7],function(numberElement,innerFunctionCollection){
    console.log("Collection original:");
    console.log(innerFunctionCollection);
    console.log('Element of collection is ' +numberElement);


});

  CollectionUtil.filter = function(collection,callback){
      var callbackResult=null;
      var resultFilterCollection=[];
    for(var i=0; i< collection.length; i++){
        // Example in body 1
        // if(collection[i]>5){
        //     resultFilterCollection.push(collection[i]);
        // }
        // Example in body 2
        // if(collection[i] %2 == 0){
        //     resultFilterCollection.push(collection[i]);
        // }

        //Example with callback

        callbackResult = callback(collection[i]);
        if(callbackResult != undefined){
        resultFilterCollection.push(collection[i]);
        }
    }
    return resultFilterCollection;
};
console.log("Filter Example: 1");
var resultFilterCollection = CollectionUtil.filter([1,2,3,4,5,6,7,8,9,10], function(element){

    // if(element === undefined){
    //     return;
    // }
    if(element>5){
        return element;
    }
});
console.log(resultFilterCollection);



CollectionUtil.map = function(collection,callback){
    var resultCollection=[];
    for(var i=0; i<collection.length; i++){
        resultCollection.push(callback(collection[i]));
    }
    return resultCollection;
};

var mapResult = CollectionUtil.map([1,2,3,4,5,6,7,8], function(element){
    return element * 2;
});
console.log(mapResult);

