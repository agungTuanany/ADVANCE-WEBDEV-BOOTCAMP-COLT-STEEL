22, July 2018 Sun 17:31

## D3 Odds and Ends | Objectives

    1. Define what a tooltip is.
    2. Build tooltips to improve the readability of visualization.
    3. Use D3 transition to animate our graphs.
    4. Explain the D3 transition events.
    6. Use AJAX in D3 to import and format data from external sources.
    7. Use d3.queue to chain multiple request together.

### Tooltips

In early lecture we build **Scatterplot** and include **axes** and **label**
to clarify what exactly what we graph in. What I like to do now is make it when
I hover over any one this circle a **box** appear with more detail information on
a country. This boxes typically call a **tooltips**.

D3 doesn't come much with built in functionality to create tooltips, and while there
tooltips library out there, isn't that hard to create a tooltip from scratch,
before we start coding thought, lest think about what functionality about tooltips
to have. We probably need to create a **div** that isn't invisible until the user
hover it over the circle on the scatterplot, when the user hovers we need move
our tooltip so that is near the circle and update is content base on the data, then
when the user move away from the circle we need hide the tooltip again.

![tooltips-1.gif](./D3-tooltips/images/tooltips-1.gif)

We can implement this functionality with D3 and a bit of CSS, to begin we use D3
to append **div** to the page with the class of **tooltip**, I can write style
and rule in JavaScript to, but I need set a quit few properties.

    var tooltip = d3.select("body")
                    .append("div")
                    .classed("tooltip", true);


So I just create some CSS instead, Well continue to add style as we go, for now
the most important thing is that to set the **opacity** to **0**, and we give
our tooltips **absolute** positioning. The absolute positioning well let us
control where the **div** shows up base on where we place our mouse.

    .tooltip {
      opacity: 0;
      position: absolute;
    }

Next, lets write some code that will update the tooltip when the mouse is hover
over data-point, for this I need to select all circle elements and then I attach
listener for mouse movement, when this event is triggered I take my tooltip
selection, set the **opacity** to **1** and update the text, for now I wouldn't
worrying to display any data, I just hard code the **string** to make sure
something showing up. What about location of tooltip? for this I can set
**left** and **top** property of the **div** base on the event. I use **x** and
**y** properties on D3 event here, which give me the coordinate of the mouse
position. I also need to specify what my units are, in this case there are
**pixels**.

    d3.select("svg")
        .attr("width", width)
        .attr("height", height)
      .selectAll("circle")
      .data(birthData2011)
      .enter()
      .append("circle")
        .attr("cx", d => xScale(d.births / d.population))
        .attr("cy", d => yScale(d.lifeExpectancy))
        .attr("fill", d => colorScale(d.population / d.area))
        .attr("r", d => radiusScale(d.births))
        .on("mousemove", function() {               << add this line
          tooltip
            .style("opacity", 1)
            .style("left", d3.event.x + "px")
            .style("top", d3.event.y + "px")
            .text("HERE IS A TOOLTIP!");
        })
        .on("mouseout", function() {
          tooltip
            .style("opacity", 0);
        });

While I'm here I also add eventListener when I mouse out of the circle, this
eventListener will be pretty simple, I just add tooltip **opacity** back to
**0**. When I refresh the page I see tooltip is working.

![tooltips-2.gif](./D3-tooltips/images/tooltips-2.gif)

Well the tooltip shows up but there's flickering annoying, The problem is, as
soon I mouse over it the circle, the tooltip move to the location of my pointer
causing my pointer to mouse over the tooltip out of the circle. As soon my
tooltip become visible it's become invisible again. The easy way to fix this,
set **pointer-event** to **none** for my tooltip in the CSS. This basically tells
my mouse to ignore the tooltip entirely, so the motion of the tooltip doesn't
cost the mouse out of identifier on the circle. While I'm modifying the CSS lets
style he tooltip little bit more.

I added **background-color, border, border-radius and padding**

    .tooltip {
      opacity: 0;
      position: absolute;
      pointer-events: none;
      background-color: lightblue;
      border: 8px solid blue;
      border-radius: 8px;
      padding: 15px;
    }

Next, lets update the text so that actually show a data the current region. To
do this we need to pass the circle data into our mouse over the callback.

        .on("mousemove", function(d) {
          tooltip
            .style("opacity", 1)
            .style("left", d3.event.x + "px")
            .style("top", d3.event.y + "px")
            .text(d.region);
        })
        .on("mouseout", function() {
          tooltip
            .style("opacity", 0);
        });

