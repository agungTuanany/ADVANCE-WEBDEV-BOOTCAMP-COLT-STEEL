17, July 2018. Tue 21:17

## === OBJECTIVE ====

    1. Use D3 to calculate extreme Values in a data set
    2. Use D3 to scale data
    3. Build scatterplots using D3 and SVG
    4. Use D3 to add axes and gridlines to graphs
    5. Build histogram using D3 and SVG
    6. Build pie charts using D3 and SVG

### Extrema and Scales

Last time we build **D3 Birth Chart** to visualize births around the world by
month and by year. There are view issues came up when building this visualization
we have:

    1. Finding Extreme values manually
        - Inspect a data set find the first and last years.
        - Manually idendtify the largers value in data set.

    2. Scaling data manually
        - Doing arithmetic in order to make sure all of rectangle always fit inside the SVG

We will modifying the **app.js**. The first helper method we look at is **d3.max()**

#### Extreme Values

     d3.max(dataArr[,callback])

Which takes some array return the largest value in the array. You can also pass
in an optional callback specifying how you want to associate values to elements
in the array. This can extremely helpful if you have an array of object and want
to find a **max** value base on particular key.

![Extrema-and-Scales-1.jpg](./Extrema-and-Scales/images/Extrema-and-Scales-1.jpg)

Similarly there is **d3.min()** function which find the **smallest**
value instead the largest.

    d3.min(dataArr[,callback])

Here a view examples:

If I just past an array of number into **d3.max()** I get the max, and surprisingly
something similar happen when I use **d3.min()**, in this case I get the smallest
value instead the largest.

    d3.max([1,2,3,5,8,5])

    >> 8

    d3.min([1,2,3,5,8,5])

    >> 1

Now lets suppose I have an array of people object where each person has an **name**
and an **age**. If I want to find the largest **age** in my data-set I can use
**d3.max()** and pass in a callback to grab each person age. I can do something
similar if I want find the **shortest name** in the data-set.

    var people = [
      { name: "Breet", age: 40 },
      { name: "Mackenxie", age:30 },
      { name: "Arya", age: 73 },
      { name: "Lee", age: 22 }
    ];

    d3.max(people, function(d) {
      return d.age;
    });

    >> 78

    d3.min(people, function(d) {
      return d.name.length
    });

    >> 3;

Lets apply this function to refactor some of previous code. We can use **d3.max()**
to find the maximum value in our data-set rather then trying to eyeball it by
looking thru all of the values.

    var maxBirths = d3.max(birthData, function(d) {
      return d.births;
    });

We can also refactor our **minYear** and **maxYear** variables to use these D3
helper function.

    var minYear = birthData[0].year;
    var maxYear = birthData[birthData.length - 1].year;

Into:

    var minYear = d3.min(birthData, function(d) {
      return d.year;
    });

    var mmaxYear = d3.max(birthData, function(d) {
      return d.year;
    });

Or in ES6

    var minYear = d3.min(birthData, d => d.year);
    var maxyear = d3.min(birthData, d => d.year);

Once we know the maximum number of birth we can base our scale on it.

#### Scales

There are number of different scales you can use for your data, but the most common
is:

    d3.scaleLinear()
      .domain([num1. num2])
      .range([num3, num4])

**scaleLinear()** return a function that **map** value on the **domain** to value
on the **range**. Before applying this function to our visualization lets look at
an example:

Suppose I want to **map** values one interval, say from **1** to **17** to values
another interval said from **-4** to **52**. With some algebra I could write
a function that would **map** value on the first line to value on the second line,
but this is precisely what D3 scale on your task.

![Extrema-and-Scales-2.jpg](./Extrema-and-Scales/images/Extrema-and-Scales-2.jpg)

Here's the syntax, for the **domain** I pass an array **(1,17)** for the **range**
I pass another interval **(-4, 52)**. This scale will now map value is in the
**domain** to the value in the **range**.

    var scale = d3.scaleLinear()
                .domain([1, 17])
                .range([-4, 52]);

    scale(1);

    >> -4

    sclae(17)

    >> 52


Every value in between "1" to "17" get map to appropriate value

    var scale = d3.scaleLinear()
                .domain([1, 17])
                .range([-4, 52]);

    scale(5)

    >> 10

    scale(9)

    >> 24

    scale(10.23)

    >> 28.305

We can use **scale** linear to create a scale mapping our data-values to our SVG
dimension. Here what looks like.

    var yScale = d3.scaleLinear()
                  .domain([0, maxBirths])
                  .range([height, 0]);

There's one small change we made to the **scale** compare to previous example.
Note that we map **0** to SVG **height** and **maxBirths** to **0**. This has
effect of flipping the **y** axis, in this way **y** scale of **0** gets map
into the bottom of the SVG. This make reasoning about coordinates a bit easier
since after scaling **y** value increase when you go up not down. 

Now we've created **scale** lets use it to modify data so that the bars all fit
in SVG.

    d3.select("svg")
    .....
    .....
    .enter()
    .append("rect")
    ......
    ......
    .attr("height", function(d) {
      return d.births / maxBirths * height;
    })
    .attr("y", function(d) {
      return height - d.births / maxBirths * height;
    })
    ......

    d3.select(input)
      .on(input, function() {
      var year = d3.event.target.value;
      ......
      .....

      .attr("height", function(d) {
        return d.births / maxBirths * height;
      })
      .attr("y", function(d) {
        return height - d.births / maxBirths * height;
      })

Into:

    d3.select("svg")
    .....
    .....
    .enter()
    .append("rect")
    ......
    ......
    .attr("height", function(d) {
      return height - yScale(d.births);
    })
    .attr("y", function(d) {
      return yScale(d.births);
    })
    ......
    ......

    d3.select(input)
      .on(input, function() {
      var year = d3.event.target.value;
      ......
      .....
      .attr("height", function(d) {
        return height - yScale(d.births);
      })
      .attr("y", function(d) {
        return yScale(d.births);
      });
