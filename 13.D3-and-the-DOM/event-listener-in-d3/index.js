//d3.select("new-note").on("submit", function() {

//    d3.event.preventDefault();
//    var input = d3.select("input");
//})

d3.select('#new-note').on('submit', () => {
    d3.event.preventDefault();

    var input = d3.select('input');
    d3.select('#notes')
        .append('p')
          .classed('note', true)
    //.text(input.text()); // << input element doesn't have inner text
          .text(input.property("value"));
    // using property method as a setter rather then  getter after appending
    // a new notes
    input.property("value", "");
});
