/* Given an object, write a function to swap its keys with its values and return that object.*/

// My plan is to go through each key in the object using a for-in loop and then update a new object with the key-value pair switched, then return that new object. Also, below I'll write an additional function to swap the key-value pair in place by making use of the 'delete' key word - for that version I'll just add the swapped key-value pair and delete the previous one.

function invertHash (object) {
  let newObject = {};
  for (let key in object) {
    newObject[object[key]] = key;
  }
  return newObject;
}

//The version of the function below will overwrite the existing object; I've included this because the prompt is somewhat ambiguous about whether the swapped object is new or in place.

function invertHashInPlace (object) {
  for (let key in object) {
    object[object[key]] = key;
    delete object[key];
  }
  return object;
}
