/**
 * we create a function class for MessageBoard
 * in our construtor we'll assign 
 * a property call messages to be new map
 * and a property of id to start of as 1.
 * Make sure to attach this property onto keyword 'this'
 * 
 * @param addMessage
 * The first Instance method we implement is addMessage
 * here we going to pass in parameter 
 * and inside the message 'map' set the 'id' and 'value'
 * with parameter pass to the function 
 * we'll then increment the 'id'
 * and return the instance so we can changes the metod
 * (return this, 'this' keywod is explicit to the instance method)
 * 
 * @param findMessagebyId
 * The next instance method we implement is findMessageById
 * here we going to pass in paremeter 
 * which accept some id and return a message 
 * here we just return this.messages and use the get method 
 * and pass in an id
 * 
 * @param FindMessageByValue
 * the next instace method we were build is findMessageByValue
 * here we implement findMessageByValue
 * we passing a value and we need to iterate over all of the values 
 * in the messages 'map'
 * let use for..of loop and see the messages we iteraing over
 * is the same as the value to the function
 * if so we return that found message
 *  
 * @param removeMessage
 * the next instance method we need to implement is removeMessage
 * which accept some 'id'
 * and use a delete method on 'maps' to remove that message
 * lets also return the object created from this class
 * what we also call instance so that we change the method
 * 
 * @param numberOfMessages
 * the next instance method we need to impliment is numberOfMessages
 * which just return this.messages.size
 * REMEMBER 'map' has a 'size' property 
 * to tell us how many element on in it
 * 
 * @param messagesToArray
 * the last instance method we need to implement is messagesToArray
 * here we can use the handy ES2015 Array.from 
 * and pass in the messages.values function 
 * to easily convert 'this' into an array of messages   
 */

class MessageBoard {
    constructor() {
        this.messages = new Map;
        this.id = 1;   
    }
    addMessage(value) {
        this.messages.set(this.id, value);
        this.id++;
        return this;
    }
    findMessageById(id) {
        return this.messages.get(id);
    }
    findMessageByValue(value) {
        for(let msg of this.messages.values()) {
            if(msg === val) return msg;
        }
    }
    removeMessage(id) {
        this.messages.delete(id);
        return this;
    }
    numberOfMessages() {
        return this.messages.size;
    }
    messagesToArray() {
        return Array.from(this.messages.values());
    }
}

/**
 * the next method we need to implement is uniqueValues
 * which's accept an array
 * and return a number of uniqueValues in the array
 * This is the great use-case for the 'set'
 * so let just return a new 'Set' without array pass to it
 * and return the size property 
 * to see how many values are in that 'set'
 * REMEMBER 'set' only contain unique values
 * 
 */

function uniqueValues(arr) {
    return new Set(arr).size;
 }

 /**
  * the next method we need to implement is hasDuplicates
  * which's accept an array
  * we simplt compare size of the 'set' from an array
  * and the length of that array
  * if they are the same this function should return false
  * otherwise it will return true and we have duplicates
  * 
  */

function hasdDuplicates(arr) {
    return new Set(arr).size !== arr.length;
}

/**
 * the last method we need to implement is countPairs
 * what we do here is create a new 'set' 
 * from the array pass to the function 
 * we'll be using this to see if the other pairs exist
 * well than initialize the count to zero 
 * and iterate through the arrray
 * and each value remove that value from that 'set'
 * this will prevent us from dealing with a pairs of the same number
 * well than see if the 'set' has compliment to the pairs 
 * and if it does we'll increment the 'count'
 * once is done iterating we return the 'count' from our function
 * 
 * The algorithm we written will try to find compliment of the pair
 * or what other numbers need to exists to sum to the second paremeter  
 */

 function countPairs(arr, num) {
     var cache = new Set(arr);
     var count = 0;
     for(let val of arr) {
         cache.delete(val);
         if(cache.delete(val)) {
             count++;
         }
     }
     return count;
 }