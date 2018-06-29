% D3 and the DOM
% Agung Tuanany
% June 24, 2018

# === OBJECTIVE ===

1.  Select elements in the DOM using d3.select and d3.selectAll
2.  set attributes, inner text, and style properties on D3 selection
3.  Get attributes and property values on D3 selection
4.  Chain D3 method together to make more complex changes to the DOM
5.  Add event listener using the 'on' method
6.  use d3.event to acces the event object inside of an event listener
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

    <script src="https://d3js.org/d3.v4.js"></script>
    </body>
    </html>

## == SELECTION METHODS ==

-   d3.select - single element.

        d3.select("#page-title")

-   d3.selectAll - multiple elements.

         d3.selectAll("li")

both accept a valid CSS selector.

## == ACCESSING NODES ==

-   selection.nodes() - return an array of matching HTML elements

        d3.selectAll("li").nodes();

-   selection.node() - return the first (non-null) HMTL element

        d3.selesctAll("li").node();

## == MANIPULATING SELECTIONS ==

style, attr, text, and html methods

    selection.style(property [,newValue])
    selection.atrr(attribute [,newValue])
    selection.text([newValue])
    selection.html([newValue])

Note: These(and other!)D3 methods will works as getter if no newValue is passed
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
