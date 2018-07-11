July 11, 2018

# === OBJECTIVE ===
    1. Join data to d3 selection using the data method.
    2. Target nodes to append to the DOM via the enter selection.
    3. Target nodes to remove the DOM via the exit selection.
    4. Perform more advance data joins by using a key function.
    5. Update existing DOM elements with new data.
    6. Merge update and enter selection, and descrine D3's general update pattern.

## Basic Data Joins and Enter Selections

##### callback Structure

    function (d, i) {
              ^  ^
              ^  Index of the current element in the selection
    Data bound to the current element

    }

when we pass the callback function in D3 method the first parameter in the
callback function is always refer to "data-bound" to the current element by D3.
By convention the argument is typically we call " _d_ " for data, should need the
index piece of data in the array of data is made for you available as the second
argument in the callback
