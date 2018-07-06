% D3 and the DOM
% Agung Tuanany
% June 24, 2018

# === OBJECTIVE ===

1.  Select elements in the DOM using d3.select and d3.selectAll
2.  set attributes, inner text, and style properties on D3 selection
3.  Get attributes and property values on D3 selection
4.  Chain D3 method together to make more complex changes to the DOM
5.  Add event listener using the 'on' method
6.  use d3.event to access the event object inside of an event listener
7.  add and remove DOM element with D3

## == LOADING D3 ==

    <!DOCTYPE html>
    <html lang='en'>
    <head>
        <meta charset="UTF-8">
        <titile>Your Awesome title</title>
    </head>
    <body>
    <!-- HTML goes here - check the links for an example! -->

    <! -- add this for D3.js on your html -->
    <script src="https://d3js.org/d3.v4.js"></script>
    </body>
    </html>

## == SELECTION METHODS ==

##### d3.select - single element.

      d3.select("#page-title")

##### d3.selectAll - multiple elements.

       d3.selectAll("li")

both accept a valid CSS selector.

## == ACCESSING NODES ==

- selection.nodes() - return an array of matching HTML elements

      d3.selectAll("li").nodes();

- selection.node() - return the first (non-null) HTML element

      d3.selesctAll("li").node();

## == MANIPULATING SELECTIONS ==

style, attr, text, and html methods

    selection.style(property [,newValue])
    selection.atrr(attribute [,newValue])
    selection.text([newValue])
    selection.html([newValue])

Note: These (and other!) D3 methods will works as getter if no newValue is passed
in

real-world example:

    d3.select("page-title")
        .style("background-color", "#00fab")
        .style("color", "#ffffff")
        .attr("class", "new-class")
        .text("D3 is cool!");

classed method

    selection.classed(classList [,shouldClassesBeSet])
                        ^               ^
                space-separated list    ^
                                check wheter classes should be added or removed

## == SELECTION AND CALLBACKS ==

this is useful when you got selection with multiple elements because the
callback function will run once for each callback in the selection

    selection.style(property [, callback])
    selection.style(attribute, [, callback])
    selection.text([callback])
    selection.html([callback])

e.g:

    d3.selectAll("li")
        .style("font-size", function() {
            return Math.random() \* 40 + "px";
    })

callback Structure

    function (_ , idx) {
              ^    ^
              ^   Index of current element in the selection
              ^
    Dont wory about the first argument for now
    }

e.g:

    d3.selectAll("li")
        .style(background-color, function(_, idx) {
            return idx % 2 === 0 ? "lightgrey" : "white";
        })

##### D3 indentation

This common D3 convention for helping code readable.

- using 4 space indentation for method that return the current selection
- using 2 space indentation for method return a new selection

        d3.select(".outer")
            .style("color", "purple")
          .select("div")
            .style("font-size", "30px")
            .style("background-color", "orange")
          .select("div")
            .style("border", "8px solid blue")

there's nothing we've done here we couldn't done using vanilla JavaScript but
when you start using D3 its good the get the habit using the method that D3
provides and once we start using more functionality that set the D3 apart form
other libraries being comfortable with these fundamentals will be essential.

## == EVENT LISTENER IN D3 ==

##### Adding Event Listener

    selection.on(eventType, callback)
                    ^           ^
            Type of event       ^
                    Code to run when event is triggered

e.g:

    d3.selection("h1").on("click", function() {
        console.log("event listener are added in D3");
    })

##### Remove Event Listener

    d3.select("h1").on("click", null);

##### The event Object

    d3.event

this property on d3 will contain all of the event information when references inside of an event handler

##### Appending Elements

    selection.append(tagname)

- append a new element of type **_tagname_** to every element in the selection.
- Returns a new d3 selection.

##### Accessing Properties

    selection.property(name [,newValue])

access a property (e.g an input value) which is not accessible as an element
attribute.

##### Removing Elements

    selection.remove()
