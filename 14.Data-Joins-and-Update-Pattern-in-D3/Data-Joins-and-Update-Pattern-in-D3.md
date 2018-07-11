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

##### Enter() and Exit() method from D3

Using D3's _enter_ and _exit_ selections method, you can create new nodes for
incoming data and remove outgoing nodes that are no longer needed. in here we
learn using 'enter()' method.

e.g

    d3.select("quotes")
        .style("list-style", "none")
      .selectAll("li")
      .data(quotes)
      .enter()          << bound data to a selection.
      .append("li")
        .text(d => `" d.quote" _ d.movie (d.year) `);

## Exit Selection and Key Function

we learn how to remove element from the DOM, when those elements not bound to
data.


##### exit() method
we can use D3 to select the element to remove it, but then our page will out
 of sync with the data since the quote array still have the quote init. The
 common approach is let the data is single quote of true and then update the
 view

We want to remove  the quote of 'Finding Nemo'. Since the 'Finding Nemo' is the
last array we can call 'pop' to remove it.

    quotes.pop()

    >> Object { quote: "Just keep swimming. Just keep swimming. Swimming, swimming,
    swiming.", movie: "Finding Nemo", year: 2003, rating: "G" }" }

This will remove 'Finding Nemo' quotes from the data site but we still see it on
the page. Next we need update the data binding to tell D3 to remove any list item
have no longer corresponding of piece of data.

Take a look what happen when we update the data binding

    d3.selectAll("li")
      .data(quotes)

    >> Object { _groups: (1) […], _parents: (1) […], _enter: (1) […], _exit: (1) […] }

    // the complete syntax.
    d3.selectAll("li")
      .data(quotes)
      .exit()
      .remove()

Instead removing the last quote, we want to remove "R" quotes that came from
array of movies

    var nonRQuotes = quotes.filter(function(movie) {
      return movie.rating !== "R"
    });

    nonRQuotes;

    >> (3) […]
        0: {…}
          movie: "The Sixth Sense"
          quote: "I see dead people."
          rating: "PG-13"  << This we filter the data
          year: 1999
        <prototype>: Object { …  }
        1: {…}
          movie: "Star Wars: Episode IV - A New Hope"
          quote: "May the force be with you."
          rating: "PG"    << This we filter the data
          year: 1977
        <prototype>: Object { …  }
        2: {…}
          movie: "Finding Nemo"
          quote: "Just keep swimming. Just keep swimming. Swimming, swimming, swiming."
          rating: "G"     << This we filter the data
          year: 2003
        <prototype>: Object { …  }
        length: 3

Now we bind this "li" and then remove the extra elements

    d3.selectAll("li")
      .data(nonRQuotes)
      .exit()
      .remove();

There is a problem we didn't actually remove the two "R" quotes from the DOM. We
just remove the last two list item from unordered list.

Interestingly if we select all of the "li" and call ".data" in our selection we
can see the data is correct, there are no "R" quote here.

    d3.selectAll("li")
      .data();

    >> (3) […]
      0: Object { quote: "I see dead people.", movie: "The Sixth Sense", year:
        1999, …  }
      1: Object { quote: "May the force be with you.", movie: "Star Wars: Episode
        IV - A New Hope", year: 1977, …  }
      2: Object { quote: "Just keep swimming. Just keep swimming. Swimming,
        swimming, swiming.", movie: "Finding Nemo", year: 2003, … }
    length: 3
    <prototype>: Array []" }

So what went wrong? The issue here has to do how data to get bounds element in
D3. By default data is join on the element is by index.

![image-1](/Basic-data-Joins-and-Enter-Selection/images/pic-1.jpg)

* the first elements in the non "R" quotes array is match of first list item
* the second elements in the non "R" quotes array is match to the second list item and so on.

This mean is the first three elements on page get match with the three quotes
and the last two list items get move to the exit selection since no data left
over for them. But the last element on the page have a quote that we want to keep.

There's two ways to fix this problems.

One is restyle the elements after we join the new data using the same code we
get before.

    var colors = {
      "G": "#3cff00",
      "PG": "#f9ff00",
      "PG-13": "#ff9000",
      "R": "#ff0000"
    };

    d3.selectAll("li")
      .text(d => '"' + d.quote + '"_ ' + d.movie + '(' + d.year + ')')
      .style("margin", "20px")
      .style("padding", "20px")
      .style("font-size", d => d.quote.length < 25 ? "2em" : "1em")
      .style("background-color", d => colors[d.rating])
      .style("border-radius", "8px")

Essentially we encounter this problem because D3 didn't know should be removing
list item base on the content of the quotes. Which is neither there three quotes
left and so remove the last two elements. But we joint data the element, however
we can also specify D3 should match data and element together.

The second approach is we using 'keyFunction'. We do this by passing which call
a *Key Function* in as the second parameter to the ".data" method. The return
value from 'keyFunction' is then what use to match data rather then default
behavior matching by index.


##### Key Function

    selection.data(dataArr [,keyFunction])
                              ^
              Return value used to join elements and data

The second approach :

    var nonRQuotes = quotes.filter(function(movie) {
      return movie.rating !== "R";
    });

    d3.selesctAll("li")
      .data(nonRQuotes, function(d) {
        return d.quote;
      })
      .exit()
      .remove();

![image-2](/Basic-data-Joins-and-Enter-Selection/images/pic-2.jpg)

In this case *Key Function* tells D3 that the first elements in the quotes array
should be match whatever list item corresponds that quotes and so on for the
second and the third quotes. When data is bound this way the two list items
without any data will be precisely the list item containing outrated quotes.


## General Update Pattern

When you appending a new element on an update, make sure you select the parent
element you like to append to before selecting the children, otherwise by
default your new element will be appended to the HTML tag.

    d3.selectAll("li")  << this the issue
      .data(quotes)
      .enter()
      .append("li")
        .text()

In this case we need update our initial selection so that were first selecting
the unordered list before creating the selection of list item.

    d3.select("quotes")   << add parent element
      .selectAll("li")
      .enter()
      .append("li")
        .text();

Note: any changes you make to selection will only affect the new list item, this
because we pass in to the enter selection.

##### Selection Types

![Selection Types](/General-Update-Pattern/images/D3-selection.jpg)

    * Enter selection: correspond pieces of data that don't yet have element on the page

    * Exit selection: correspond the element on the page that no longer have pieces of data

    * Update selection: correspond the element on the page that successfully join the data

This separation between **Enter** and **Update** selection can be helpful if we
want to style one group differently then the other. But what if we want to apply
the same of changes above selection? We could just grab each group individually
and apply the changes we want. D3 provides a method called **Merge()**

##### Merging Selection

    selection.merge(otherSelection)

Merges _**selection**_ and _**otherSelection**_ together into a new selection

e.g:

Let's apply our existing style rules to the _**newQuotes**_ but after merging lets
changes the font-color every quotes on the pages.

First we binding existing **listItem** to our new data and storing the
selection. Since we haven't call enter() or exit() this represent the **Update**
selection.

    var listItems = d3.select("#quotes")
      .selectAll("li")
      .data(quotes);

Next happing (take place) to **Enter** selection appending the new listItems and styling them
appropriately

    ListItems
      .enter()
      .append("li")
        .text()
        .style("background-color", d => colors[d.rating])
        .style("border-radius", "8px")
      .merge(listItems)    << this is why we store the Update selection into a variable
        .style("color", "#5599ff");

We updating the style at every listItems in that selection not just the new one.

##### 4 steps General Update Pattern

1. Grab the update selection, make any changes unique to that selection, and
   store the selection in a variable.
2. Grab the exit selection and remove any unnecessary elements.
3. Grab the enter selection and make any changes unique to that selection
4. Merge the enter and update selections, and make any changes that you want to
   be shared across both selections.
