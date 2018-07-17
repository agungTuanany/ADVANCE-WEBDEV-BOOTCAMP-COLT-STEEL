12 July, 2018. Thu 20:06

##  === OBJECTIVE ===

    1. Compare and contrast raster and vector graphics
    2. Create SVG elements in the DOM
    3. Draw lines using SVG
    4. Create groups of SVG elements.
    5. Draw rectangles, polygons, and circles using SVG
    6. Write text on SVG
    7. Use D3 to build an SVG bar chart

## SVG | Introduction to SVG

SVG stand for: **Scalable Vector Graphic**

When you dealing graphic with computer there two different types:
1. Vector graphic

Vector graphic in other hand use **line** and **curve** as their fundamental
building blocks.

2. Raster graphic

The fundamental block of Raster images is the **pixels**. Many common picture format
like 'gif', 'jpeg' and 'png'.

The big different between **Vector** and **Raster** graphic has to do behavior under
scaling if you zoom in in Raster image you increasing the size of the pixels so
the image become **pixelated** and **granny**. Vector graphic however is scale
without any degradation quality. SVG is markup language base on **XML**. That
allow us to draw vector graphic in HTML. The Mozilla Developer Network (MDN)
summarize well. **SVG is essentially to graphic what HTML is to text**

### The SVG Element

    <svg version ="1.1"
         baseProfile="full"
         xmlns="http://www.w3.org/2000/svg">
    </svg>

### Line Elements
line determine by full points.

    * x1 -x-coordinate of first endpoint
    * y1 -y-coordinate of first endpoint
    * x2 -x-coordinate of second endpoint
    * y2 -y-coordinate of second endpoint

==============================================

    <svg version ="1.1"
         baseProfile="full"
         xmlns="http://www.w3.org/2000/svg">
         <line x1="100" y1="100" x2="700" y2="350"/>
    </svg>

By default line has no width to make line visible we need to set the
**stroke-width** we can also set the color with the **stroke attribute**.

    <line x1="100" y1="100" x2="700" y2="350" stroke-width="5px" stroke="blue"/>

![SVG-1.jpg](./images/SVG-1.jpg)

If you look carefully of the line you might notice something strange our line
start x1="100" y1="100" goes to x2="700" y2="350". If you drew this in
high school math class it would have positive slope but the line on SVG slope
downward. To understand why slope goes down we need to understand how
**Coordinates** work on SVG.

### Coordinates in SVG

Typically when you graph things in math class positive number increase from left
to right aling the *x-axis* and bottom to top along the *y-axis*. But with SVG
the *y-axis* is reverse value increase is you **go down** not is you **go up**.
Put in another way in math class the point coordinate **0,0** typically in lower
left corner system. But in SVG this point is in the **upper left** corner. As you
move to the right the first coordinates increases and as you move down the
second coordinates increases.

The Fact why the *y-axis* is flip is little bit confusing, but D3 have
functionality that would allow us *y-axis* flip back to the orientation you maybe
comfortable with it, for now we left with it.

![SVG-2.jpg](./images/SVG-2.jpg)

Let draw another line to format "**X**"

    <svg version ="1.1"
         baseProfile="full"
         xmlns="http://www.w3.org/2000/svg">
        <line x1="100" y1="100" x2="700" y2="350" stroke-width="5px" stroke="blue"/>
        <line x1="100" y1="350" x2="700" y2="100" stroke-width="5px" stroke="blue"/>
    </svg>

Now we get this "**X**" on the SVG we may want to thinks of two lines not is
independent pieces but is a group that form the single "**X**". If you want to
take this approach you can wrap both line in **g-element**.

![SVG-3.jpg](./images/SVG-3.jpg)

### g Elements

**g** stand for "group"

The advantage to this is you can set certain attributes bit functionality the
group level instead duplicating the attributes each element the of the group.

In this example we can move stroke-width and stroke setting in **g-tag**.

    <svg version ="1.1"
         baseProfile="full"
         xmlns="http://www.w3.org/2000/svg">
        <g stroke-width="5px" stroke="blue">
        <line x1="100" y1="100" x2="700" y2="350"/>
        <line x1="100" y1="350" x2="700" y2="100"/>
        </g>
    </svg>

### Rectangle Elements


Rather then drawing four line to create rectangle we can also draw rectangle by
using **rect element**. The location and size rectangle is determines by four
attributes

    * x - x-coordinate of upper-left corner
    * y - y-coordinate of upper-left corner
    * width - width of rectangle
    * height - height of rectangle
    * stroke - border color
    * stroke-width - border thickness
    * fill - interior color

Lets draw rectangle on SVG

    <svg version ="1.1"
         baseProfile="full"
         xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="50" width="300" height="200" fill="#ffc107"
        stroke="2196f3" stroke-width="8px" />
      <rect x="100" y-"200" width="300" height="400" fill="e91e63"
        stroke="#795548" stroke-width="8px"/>
      </svg>

A couple of things to notice here, First if your shape exist the bound of SVG it
will get crop element. Non SVG don't extend the bound of SVG. Second there is
some overlap between our rectangles.

In this case the second rectangle is sitting on top of the first rectangle. But
what if that was not we want? what if we want the second rectangle to sitting
behind the first rectangle?

![Rectangle-1.jpg](./images/Rectangle-1.jpg)

You might think we need to adjust the **z-index** or some other property on the
element. But there's no "z-index" property at SVG elements instead shape on SVG
are draw appear in the document.

If we want to draw the red rectangle behind the orange rectangle we have to draw
the orange rectangle as a second rectangle.

![Rectangle-2.jpg](./images/Rectangle-2.jpg)

One last thing we can also round the corner of rectangle using **rx** adn **ry**
attributes.

##### More rectangle Attributes

    * rx - round corner in x direction
    * ry - round corner in y direction

The bigger the values the more rounded the corner. When the values are the same you
get circular corner. When the values are different the corner surrounded in oval
or electrical shape. Every rectangle were sharp corner it is example of the
polygon. An SVG polygon as initiate by straight line edges. You can draw an
arbitrary polygon by using polygon element.

### Polygon Element

Polygon Attributes:

    * points - space-separated list of points representing vertices of the
      polygon
    * points are of the form "x1, y1 x2,y2,.."

Here we rewrite existing code use **polygon** elements instead of **rectangle**.

    <svg version ="1.1"
         baseProfile="full"
         xmlns="http://www.w3.org/2000/svg">
      <polygon points="50,50 350,50 350,250 50, 250" fill="#ffc107"
      stroke="2196f3" stroke-width="8px" />
      <polygon points="100,200 400,200 400,500 100, 500" height="400" fill="e91e63"
      stroke="#795548" stroke-width="8px"/>
    </svg>

We got one attributes instead of four, but we have to do some arithmetic to
compute coordinate the four corners of rectangle. All polygon are rectangle
and not all rectangle are polygon.

Here an example that rectangle isn't polygon:

    <svg version ="1.1"
         baseProfile="full"
         xmlns="http://www.w3.org/2000/svg">
      <polygon
        fill="yellow"
        stroke="black"
        stroke-width="8px"
        points="400, 21.5 450.5, 177 614, 177 481.5, 273 532.5, 428.5 400, 332.5
        267.5, 428.5 318.5, 273 186, 177 349.5, 177"
        />
    </svg>

![Polygon-1.jpg](./images/Polygon-1.jpg)

### Circle Elements

Circle Attributes:

    * cx - x-coordinate of center
    * cy - y-coordinate of center
    * r - radius of circle

Lets draw some circle:

    <svg version ="1.1"
         baseprofile="full"
         xmlns="http://www.w3.org/2000/svg">
      <polygon
        fill="yellow"
        stroke="black"
        stroke-width="8px"
        points="400, 21.5 450.5, 177 614, 177 481.5, 273 532.5, 428.5 400, 332.5
        267.5, 428.5 318.5, 273 186, 177 349.5, 177"
        />
        <cirlce cx="400" cy="250" r="60" fill="black" />
        <cirlce cx="400" cy="250" r="65" fill="yellow" />
        <cirlce cx="370" cy="210" r="10" fill="black" />
        <circle cx="430" cy="210" r="10" fill="red" />
    </svg>

![Circle-1.jpg](./images/Circle-1.jpg)

### Text Elements in SVG

When you use **text** element at minimum you should specify where you want to be
using the **x** and **y** attributes.

##### Text attributes

    * x - x-coordinate of lower-left corner
    * y - y-coordinate of lower-left corner

The **x** and **y** coordinate pass in refer to the position of the bottom left
corner of the text, as you can see this can make for text element that off
center.

    <svg version ="1.1"
         baseprofile="full"
         xmlns="http://www.w3.org/2000/svg">
         <polygon .../>
         <text x="400" y="430">Starry staryy SVG</text>
    </svg>

![Text-1.jpg](./images/Text-1.jpg)

If you want center the text there are a couple ways to do it. One is to use
**dx** or **dy** attributes to shift the text element from anchor point
horizontally or vertically. However this require you before hand the amount you
need to shift by.

##### More text attributes

    * dx - x-coordinate of lower-left corner
    * dy - y-coordinate of lower-left corner

![Text-2.jpg](./images/Text-2.jpg)

     <text x="400" y="430" dx="60">Starry staryy SVG</text>

The simpler approach to use the text anchor property which you can set either as
an attributes the element or using CSS 

Text anchor have 3 possible values.

##### Text element CSS Properties | text-anchor

    * start
    * middle
    * end

![Text-3.jpg](./images/Text-3.jpg)

If you set it to **midldle** well refer to position the bottom-middle of the element.
If you set it to **end** the coordinate will refer to the position of the bottom
right corner.

     <text x="400" y="430" text-anchor="middle">Starry staryy SVG</text>

##### Text element CSS Properties | Alignment-baseline

    * hanging
    * middle
    * baseline

![Text-4.jpg](./images/Text-4.jpg)

    <text x="400" y="430" alignment-baseline="middle">Starry staryy SVG</text>

We can also set other CSS properties like **font-size** and **font-family**. We
can even can set **color**. However unlike font outside of SVG we need to set
**color** with **fill** and **stroke** just like other SVG elements.

    <text x="400" y="430" text-anchor="middle" font-size="1.5em"
      font-family="sans-serif" fill="white" stroke-width="1px" stroke="black">
    Strayy starry SVG</text>

We can also **rotate** text this is particularly helpful if you try to label
axis and need text to be vertically align.

##### Text element CSS Properties | transform

    * rotate(degree x,y)

![Text-5.jpg](./images/Text-5.jpg)

In order to rotate you should specify degree of rotation and the coordinate
point that you want to rotate around.

e.g:

    <text x="400" y="430" text-anchor="middle" font-size="1.5em"
      font-family="sans-serif" fill="white" stroke-width="1px" stroke="black"
      transform=rotate(-10 400, 430)
    >
    Strayy starry SVG</text>

![Text-6.jpg](./images/Text-6.jpg)

**The same technique can be use to rotate other shape we've look at like
_circle_ and _polygon_**.

### Path Element in SVG

 This is the most complex element we will discuss. And can be tough is brought
 generalization of  **line, circle, rect, polygon** in fact you can draw all of
 shape we all ready drawn with just **path** element.

![Path-1.jpg](./images/Path-1.jpg)

With great power often comes a new syntax and syntax of creating **path** is
difficult to read. In general if you working with SVG frequently you more likely
to using program to sketch the SVG and then export it. So relevant **path**
command automatically generated. However it's good to know what this command
doing.

![Path-2.jpg](./images/Path-2.jpg)

##### Path Elements | "d" Attributes commands

The most important path attributes is "d" attributes command. This is we
describe the **path** will be drawing. You can thinking drawing a **path**
similar to draw **path** with a pencil with a piece of paper. Our job now is to
describe to computer how we wanna move the pencil.

There are six  fundamental command to draw a **path**

    * M- (move)
    * L - (line)
    * S - (close path)
    * Q - (quadratic Bezier curve)
    * C - (cubic Bezier curve)
    * A - (circular arc)

##### Path Element | Move command

    * Syntax: M X Y
    * Moves the cursor to position X, Y
    * Does not Draw anything

This is like you lifting your pencil off the paper and putting it down in a new
location. The M command not draw anything it's simple move the cursor.

If we want move the cursor with "x"coordinate: **400** and "y"-coordinate: **100**
this is what we write.

    <svg version ="1.1"
         baseprofile="full"
         xmlns="http://www.w3.org/2000/svg">
     <path
        d="M400 100"
     />
     </svg>

This move cursor **400** pixels over and **100** pixels down.

##### Path Elements | Line command

    * Syntax: L X Y
    * Draws a line from the cursor's current position
    * The Line will end at position X,Y
    * Can be chained together to draw multiple line segments.

By chaining **L** command together we essentially get same functionality that we
have at **polygon** command from before.

Here example we can draw **triangle** for instance:

    <svg version ="1.1"
         baseprofile="full"
         xmlns="http://www.w3.org/2000/svg">
     <path
        d="M400 100
           L500 300   >> drawing line down into the right
           L300 300   >> drawing line down into the left
           L400 100"  >> drawing line up into the right
        stroke="red"
        stroke-width="3px"
     </svg>

![Path-3.jpg](./images/Path-3.jpg)

Notice that both this command use Uppercase letters the are lowercase
equivalent but come with important different.

##### Uppercase vs Lowercase

    * UPPERCASE X Y - X and Y represent the "location" you want to go to.
    * lowercase X Y - X and Y represent "how far" you want to go from your current
      position.

![Path-4.jpg](./images/Path-4.jpg)

The cursor start to 0,0 so there's no different with **M** and **m** for the
first command. Moving to the point coordinate 500,300 is equivalent to moving
100 pixels over and 200 pixels down you can compare the last two command in the
similar way.

##### Path Elements | line command shortcut

    * Z / z - close the path with a line
    * H / h - draw a horizontal line
    * V / v - draw a vertical line

So we can simplify our previous **path** example.


    <svg version ="1.1"
         baseprofile="full"
         xmlns="http://www.w3.org/2000/svg">
     <path
        d="M400 100
           l100 200
           h-200
           z"
        stroke="red"
        stroke-width="3px"
     </svg>

![Path-5.jpg](./images/Path-5.jpg)

#### Path Elements | curve command

    * Q - quadratic curve
    * C - cubic bezier curve
    * A - circular arc

##### Path Elements | quadratic curve

    * Q - cx cy, x y

![Path-6.jpg](./images/Path-6.jpg)

    <svg version ="1.1"
         baseprofile="full"
         xmlns="http://www.w3.org/2000/svg">
      <g fill="none" stroke-width="10px">
        <path d="M0 225 Q 400 0 225" stroke="red" />
        <path d="M100 100 Q700 200 700 350" stroke="blue" />
      </g>
     </svg>

=====================================================

        <path d="M0 225 Q 400 0 225" stroke="red" />
                        ^     ^
                        ^  (x y)Destination
            (cx cy)Control point
or

        <path d="M100 100 Q700 200 700 350" stroke="blue" />
                          ^         ^
                          ^  (x y) Destination
            (Q cx cy) Control point

If you want more find tune control over the curve save then you can pass
**three** parameter of coordinate into **C**-command.

##### Path Elements | cubic bezier curve
The **C** command takes in **two control point** instead of **one**. Allowing
you to draw a large family of curves.

    C cx1 cy1, cx2 cy2, x y

![Path-7.jpg](./images/Path-7.jpg)

e.g:

    <svg version ="1.1"
         baseprofile="full"
         xmlns="http://www.w3.org/2000/svg">
      <g fill="none" stroke-width="10px">
        <path d="M0 225 C 200 450 400 0 800 225" stroke="red" />
        <path d="M0 100 C 600 450 400 0 800 225" stroke="orange" />
        <path d="M100 100 C0 0 700 200 700 350" stroke="blue" />
      </g>
     </svg>

![Path-9.jpg](./images/Path-9.jpg)

        <path d="M0 225 C 200 450 400 0 800 225" stroke="red" />
                          ^       ^     ^
                          ^       ^   (x,y)Destinantion
                          ^ (C cx2, cy2) Control point
                    (C cx1, cy2) Control point


##### Path elements | circular arc

This one is little bit tricky because the value you should to pass in. There are
seven value you need to out command some easier to describe then the other.

    * A rx ry - when this value are equal you draw the arc of "circle" otherwise
                you draw the arc of "ellips".
    * x y - specify your destination.
    * Let ignore the middle three parameter for now.

![Path-8.jpg](./images/Path-8.jpg)

Imagine you have SVG with these three element inside of it. A path with
**arc**-command one circle with the start of the **arc** and another at the end.
As you can see this give small green circular **arc** with two black circle an
either end.

    <svg version ="1.1"
         baseprofile="full"
         xmlns="http://www.w3.org/2000/svg">
        <path d="M300 250 A100 100 0 0 0 480 300" fill="green" />
        <circle cx="300" cy="250" r="5" />
        <circle cx="400" cy="300" r="5" />
     </svg>

Lets look up at an example imagine you have an SVG with these three element
inside of it a path with an **arc** command one circle at the start the **arc**
and another at the end. As you can see this give us small green circular **arc**
with two black circle an either end.

![Path-10.jpg](./images/Path-10.jpg)

However this choice of **arc** is some of arbitrary, there actually four possible
**arc** that can be made with this two points because there two circle you can
draw base on that points and for each circle you can choose weather to draw the
larger **arc** or the smaller **arc**.

The **arc** thicket drawn is determine by the fourth and fifth argument, which
both take on value of "**0**" or "**1**".

Here all four possible combination these arguments.

    <svg version ="1.1"
      baseProfile="full"
      xmlns="http://www.w3.org/2000/svg">
        <path d="M300 250 A100 100 0 1 0 480 300" fill="red" />
        <path d="M300 250 A100 100 0 1 1 480 300" fill="purple" />
        <path d="M300 250 A100 100 0 0 0 480 300" fill="green"  />
        <path d="M300 250 A100 100 0 0 1 480 300" fill="blue"/>
        <circle cx="300" cy="250" r="5" />
        <circle cx="480" cy="300" r="5" />
    </svg>

![Path-11.jpg](./images/Path-11.jpg)

What about that third value? This control rotation of the **arc**. For
circular **arc** they won't have an effect since circle are symmetric. But if
you make **Radian** different so you get an ellipse changing this value will
rotate the ellipse.


      <path d="M300 250 A100 100 0 1 0 480 300" fill="red" />
                                 ^ ^
                                 ^ ^
      <path d="M300 250 A100 200 90 1 0 480 300" fill="red" />
                          ^   ^  ^  ^ ^
                          ^   ^  ^  ^ sweep the "arc"
                          ^   ^  ^  largeArc
                          ^   ^  rotate
                          ^   y radius
                          x radius

![Path-12.jpg](./images/Path-12.jpg)

## Exercise and Solution SVG Flags

##### Bahamas Flags

We can do this by joining three rectangles and triangles but to make things
a little simpler, I instead set a background-color in SVG which is same with
blue color with flags. At this way I only need two shape a rectangle and
triangle.

For the rectangle I'll use the **rect** element instead the following attributes:

    <rect x="0" y="100" width="600" height="100" fill="#FFC72C">

For the triangle I'll use **polygon** element. Here I just declare the point
I need:

    <polygon points="0 0, 260 150, 0 300" />
                      ^       ^     ^
                      ^       ^   The bottom left corner
                      ^       ^  one in the middle
                      ^ One in the top left corner

The code will be:

    <svg version ="1.1"
         baseProfile="full"
         xmlns="http://www.w3.org/2000/svg"
         id="bahamas">
      <rect x="0" y="100" width="600" height="100" fill="#FFC72C" />
      <polygon points="0 0, 260 150, 0 300" />
    </svg>

![Bahama-flag.jpg](./Exercise-SVG-Flags/images/Bahama-flag.jpg)

##### Jamaica Flags

In Jamaica flags I use same background trick here, I'll set it to black. For
the green and yellow part of flag I could create it a bunch different
**polygon**, **path** elements, but instead I just create two.One for each green
triangle.

To add the yellow of the flag I'll set the **stroke**, **width** and **polygon**.
Since both polygon have same color-style I create a **group** inside of it
**stroke**, **stroke-wdith** and **fill** attributes at the group level. Inside
of my group I create a **polygon** for the top triangle. Note that if I put
triangle of the corner of SVG the yellow **Stroke** also applies to the top
which i don't want, to fix this I back-up the top corners, so if they fall
outside the bounce of the SVG.


    <g stroke="#FED100" fill="#009B3A" stroke-width="50">
      <polygon points="-300 -150, 300 150, 900 -150" />
    </g>

Now I can do something similar for bottom triangle just with different **y**
coordinates.

      <polygon points="-300 450, 300 150, 900 -150" />

The all code will be:

    <svg version ="1.1"
         baseProfile="full"
         xmlns="http://www.w3.org/2000/svg"
         id="jamaica">
      <g stroke="#FED100" fill="#009B3A" stroke-width="50">
        <polygon points="-300 -150, 300 150, 900 -150" />
        <polygon points="-300 450, 300 150, 900 450" />
      </g>
    </svg>

![Jamaica-flag.jpg](./Exercise-SVG-Flags/images/Jamaica-flag.jpg)

##### Macedonia Flag

For Macedonia I set the background-color to "red" shape, and then I create
a **group** who's **fill** the yellow color.

To get raise coming out the circles I just make four **polygon**.

1. One for each diagonal
2. One for the vertical raise
3. One for the horizontal once

    <g fill="#FFE600">
      <polygon points="0 0, 600 300, 510 300, 90 0" />
      <polygon points="330 0, 270 300, 330 300, 270 0" />
      <polygon points="600 0, 0 300, 90 300, 510 0" />
      <polygon points="0 120, 600 180, 600 120, 0 180" />
    </g>

Next I place the circle at the middle of the flag and give it the red
**stroke** so that the raise of separated from your circle.

    <circle cx="300" cy="150" r="50" stroke="#D20000" stroke-width="10" />

The all code will be:

    <svg version ="1.1"
         baseProfile="full"
         xmlns="http://www.w3.org/2000/svg"
         id="macedonia">
      <g fill="#FFE600">
        <polygon points="0 0, 600 300, 510 300, 90 0" />
        <polygon points="330 0, 270 300, 330 300, 270 0" />
        <polygon points="600 0, 0 300, 90 300, 510 0" />
        <polygon points="0 120, 600 180, 600 120, 0 180" />
        <circle cx="300" cy="150" r="50" stroke="#D20000" stroke-width="10" />
      </g>
    </svg>


![Macedonia-flag.jpg](./Exercise-SVG-Flags/images/Macedonia-flag.jpg)

##### South Korea Flag

This one is definitely little bit tricky. First Let me Focus on the "black
bars", to draw them I create a group inside it **stroke** **stroke-wdith** and
**transform** attributes on the group. And transforming to the center of the SVG
because I'm going to create this line vertically and then rotate them. And
I want to be sure I rotated about the center of SVG not the origin which is
upper-left corner.

    <g stroke="black" sroke-width="15" transform="translate(300,200)">
    <g/>

So that I can practice with **path** let me use **path** elements for most of
this. First I draw the three line to the upper left and the six line in to the
bottom right of the flag.

Here the **solid-line** and the **dash-line** I wrote:

    <path d="M-200 -50v100m25 0v-100m25 0v100 M140-50v45m0 10v45m25 0v-45m0 -10v-45m25 0v45m0 10v45"
              ^     ^     ^     ^   ^   ^     ^     ^       ^   ^      ^      ^    ^    ^  ^    ^
              ^     ^     ^     ^   ^   ^     ^     ^       ^   ^      ^      ^    ^    ^  ^  6 dash-line in 3rd row
              ^     ^     ^     ^   ^   ^     ^     ^       ^   ^      ^      ^    ^    ^  move the cursor for the same line
              ^     ^     ^     ^   ^   ^     ^     ^       ^   ^      ^      ^    ^    5th dash-line in 3rd row
              ^     ^     ^     ^   ^   ^     ^     ^       ^   ^      ^      ^  move the cursor for 3rd short line
              ^     ^     ^     ^   ^   ^     ^     ^       ^   ^      ^  4th dash-line 2nd row
              ^     ^     ^     ^   ^   ^     ^     ^       ^   ^ 3rd dash-line 2nd row
              ^     ^     ^     ^   ^   ^     ^     ^       ^  move the cursor for 2nd short line
              ^     ^     ^     ^   ^   ^     ^     ^  2nd dash-line same row
              ^     ^     ^     ^   ^   ^     ^     1st dash-line
              ^     ^     ^     ^   ^   ^   move the cursor for short line
              ^     ^     ^     ^   ^   3rd solid line
              ^     ^     ^     ^   move over
              ^     ^     ^   2nd solid line
              ^     ^     move over
              ^     1st solid line
              move the cursor for solid line

      transform="rotate(30)">

Hint:

    M - m   : move the cursor
    V - v   : vertical line

Next I do something very similar for the second set of line, I just need to
adjust the **solid-line** and **dash-line** are.

    <path d="M-200 -50v100m25 0v-45m0-10v-45m25 0v100 M140-50v45m0 10v45m25
      0v-100m25 0v45m0 10v45" transform="rotate(-30)"/>

Once I got this I rotate in the opposite direction. Now I need to do is put the
**circle** on the center. I use three different elements to do this, but if you
are awesome SVG **path** you can do with your elements. 

First I just draw the red-circle on the middle.

    <circle cx="300" cy="200" fill="#CD2E3A" r="90" />

Next I draw the blue **arc** to get part of the lower half of the blue area.
From the end point of this blue **arc**, I just draw a second blue **arc** to
the tale of the blue shape. Like before I use lower case letter, so I don't need
to calculate absolute position of this coordinates.

    <path fill="#0047A0" d="M300 200a45 45 0 0 1 78 45A90 90 0 1 1 300 110" />

I make one more element a red **Path** to cover the extra area I created with my
blue **path**. I start with creating for the head of red area and then create
one more **arc** to cover up the rest of unknown necessary blue area.

    <path fill="#CD2E3A" d="M300 200a45 45 0 0 1 -78 -45A90 90 0 0 1 300 110" />

The all code will be:

    <svg version ="1.1"
         baseProfile="full"
         xmlns="http://www.w3.org/2000/svg"
         id="south-korea">
      <g stroke="black" stroke-width="15" transform="translate(300,200)">
      <path d="M-200 -50v100m25 0v-100m25 0v100 M140-50v45m0 10v45m25 0v-45m0
        -10v-45m25 0v45m0 10v45" transform="rotate(30)"/>
      <path d="M-200 -50v100m25 0v-45m0-10v-45m25 0v100 M140-50v45m0 10v45m25
        0v-100m25 0v45m0 10v45" transform="rotate(-30)"/>
      </g>
      <circle cx="300" cy="200" fill="#CD2E3A" r="90" />
      <path fill="#0047A0" d="M300 200a45 45 0 0 1 78 45A90 90 0 1 1 300 110" />
      <path fill="#CD2E3A" d="M300 200a45 45 0 0 1 -78 -45A90 90 0 0 1 300 110" />
    </svg>

![South-Korea-flag.jpg](./Exercise-SVG-Flags/images/South-Korea-flag.jpg)

## Introduction to SVG and D3

We combine a knowledge SVG and D3 to create a simple **bar-chart**. Lets start
by putting data and data visualization. Here I got some data from the **UN**  on
the number of birth around the world by _year_ and _month_. The data got from
**1967** to **2014**. Our goal is to make a simple bar-chart along with the way
to adjust the year and see the bar-chart is update.

The first thing I do is grab the first and last year and update the min and max
and value attributes on our input. This code it seems come from the first
elements from my data site the last year is come from the last data site.

    var minYear = birthData[0].year;
    var maxYear = birthData[birthData.length - 1].year;

    d3.select("input")
        .property("min", minYear)
        .property("max", maxYear)
        .property("value", minYear);

Typically I write this code inside on the **eventListener** that wait for the
DOM content to load, however for these tutorial I would like be able easily to
look it my variable on the console. For that reason I just make everything global
for now. In your own project thought you should be wrap your code inside in
**eventListener** so you don't pollute the global scope with the bunch variables.

Next lets set **width** and **high** for SVG and try to append some **rectangles**.
Since the input current value is for the first year 1967 I only one to joint data
from that year to my **rectangles** I use a **filter** to remove any data that
isn't form that first year, there is also a helper method call **d3.nest()**
which will allow use restructure our data.

    var width = 600;
    var height = 600;

    d3.select("svg")
        .attr("width", width)
        .attr("height", height)
      .selectAll("rect")
      .data(birthData.filter(function(d) {
        return d.year === minYear;
      }))
      .enter()
      .append("rect")
      ....
      ....

I need to figure out what attributes to set on each rectangles. One of the hardest
part using D3 to visualize data usually is not **data binding**, is figuring out
how to translate the joint data into the appropriate visual. Before we get actual
bar-chart lets first try to render the **bars** on the SVG with **sum** width and
height.

I pick a width for each rectangle, and for now lets have them span full high of
SVG, this mean that the **y** coordinate each rectangle should be zero. What
about the **x** coordinate?

      var barWidth = 25;

      .append("rect")
        .attr("width", barWidth)
        .attr("height", height)
        .attr("y", 0)
        ....
        ....

Well we want first rectangle to be on the left the next one to be "25px" over,
and the next one will be "25px" again and so on.

![SVG-and-D3-1.jpg](./Introduction-to-SVG-and-D3/images/SVG-and-D3-1.jpg)

We can express this mathematically if we can keep track of the index of our current
piece data in the birth data array. We can then use this index to **offset** each
**bar** base on the **bar** width.

      var barWidth = 25;

      .append("rect")
        .attr("width", barWidth)
        .attr("height", height)
        .attr("y", 0)
        .attr("x", function(d,i) {
          return barWidth * i;
      })

![SVG-and-D3-2.jpg](./Introduction-to-SVG-and-D3/images/SVG-and-D3-2.jpg)

We might look like we got one rectangle on the SVG, but these actually all of
rectangle squish together. If we want to give space a bit we can add some **padding**
and then shift **x** coordinate over by the **barWidth**  plus the amount padding.
Let me also change the default **fill** for the rectangle. Now it's clear there
are multiple rectangle in SVG.

      var barWidth = 25;
      var barPadding = 10;

      .append("rect")
        .attr("width", barWidth)
        .attr("height", height)
        .attr("y", 0)
        .attr("x", function(d,i) {
          return (barWidth + barPadding) * i;
        })
        .attr("fill", "purple")

![SVG-and-D3-3.jpg](./Introduction-to-SVG-and-D3/images/SVG-and-D3-3.jpg)

Setting the bar width "25px" which fairly arbitrary and in this case we want end
up with the bunch unuse space on the SVG, very often we see barWidth is depend
on the width of SVG it self along with the amount padding you want between bars.
In this case better approach will be take the SVG width divide by the number bar
we have and subtract the amount of padding, this way the total width the number
of bars plus the amount of padding per bar will be the same as the SVG width.

    var barPadding = 10;
    var numBars = 12;
    var barWidth = width / numBars - barPadding;

Now lets tackle the height with this rectangle. This part is bit tricky because
the **y** coordinate work with SVG. Remember that **0,0** point it's upper
left-corner of the SVG not the lower left-corner. This doesn't matter so much of
the height attributes which we know should be base number of birth. Lets just make
**height** equal to the value the birth properties for each piece of data.

    .enter()
    .append("rect")
      .attr("width", barWidth)
      .attr("height", function(d){
        return d.births;
      })
      .....
      .....

What about the **width** value? It isn't **0** instead we need the value
for this attributes to be the **y** coordinate of the upper left-corner of the bar
this means we need to take the height of SVG and subtract of desire bar height
in order to obtain the correct **y** coordinate.

![SVG-and-D3-4.jpg](./Introduction-to-SVG-and-D3/images/SVG-and-D3-4.jpg)


    .append("rect")
      .attr("width", barWidth)
      .attr("height", function(d){
        return d.births;
      })
      .attr("y", function(d) {
        return height - d.births;
      })
      .....
      .....

If we refresh the page things don't look right at all. Total birth is recorded
since 1967 where relatively low, especially compare to now. But all these bars
with the same height as before. If we looking on the element tabs we can find
the problem. Because our **height** and **y** coordinate are tight directly to
birth numbers, there value are much much larger then dimension of the SVG. What we
need to do is **scale** the data so they fit properly with in a bounce of the SVG.

![SVG-and-D3-5.jpg](./Introduction-to-SVG-and-D3/images/SVG-and-D3-5.jpg)

For now lets do this manually. In the next we will run how to automate this
process. No month have more then 2.5 million birth so if we divide all of birth
number with 2.5 million and then multiple by the SVG **height** we get value
between **0** and **600**. 

    .append("rect")
      .attr("width", barWidth)
      .attr("height", function(d){
        return d.births / 2.5e6 * height;
      })
      .attr("y", function(d) {
        return height - d.births / 2.5e6 * height;
      })
      ....
      ....

The last step is to get that range working. We use D3 to add listener for input
event on the input. The event target value will be the year from 1967 to 2014
and we want that convert to the number. Once we now the new year we just grab
each rectangle and update **height** and **width** attributes base of number
monthly birth for that year. Be sure to scale your data appropriately.

![SVG-and-D3-6.jpg](./Introduction-to-SVG-and-D3/images/SVG-and-D3-6.jpg)

There's plenty more we can do here for example the graph isn't label at all, it
would be nice to have label or at least have label for individual bars so it clear
what they represent. We also have to do a lot of math to figure out how to drop
this rectangles, fortunately D3 can help us out with some out arithmetic quit
a bit.

## Exercise and Solution Character Frequencies Revisited

Before we get into JavaScript lets first make some small tweaks to the HTML and
CSS. In my HTML I made the change of some **id** of **letters** from a "div" to
an SVG elements.

    <svg
      version="1.1"
      baseProfile="full"
      xmlns="https://www.we.org/2000/svg"
      id="letters">
    </svg>

Next I can make slight modification to this CSS file. For one I set the SVG in
my JavaScript so I can remove this width property base on **id** of **letters**.

    #letters {
      margin: 20px auto 0;
      width: 800px;
    }

    into:

    #letters {
      margin: 20px auto 0;
    }

Next since the element with the class of **letter** will now the SVG rectangles
I can remove these property, the only thing I care is the color which should now
be the value of **fill** property not the value of **background-color** property.

    .letter {
      display: inline-block;
      text-align: center;
      background-color: #FFC800;
      vertical-align: bottom;
    }

Into:

     .letter {
       fill: #FFC800;
     }

I also update m styling for my **.new** class since I want to use **text** label
to start for now I indicate is new just by updating the **fill** on **rect**
element.

    .new{
      font-size: 1.5en;
      color: #FFFFFF;
    }

Into:

    .new {
      fill : #00FF00;
    }


Now lets start with updating JavaScript. I just set a variable **width**, **height**.
I also set **barPadding**. Now  that I have **width** and **height** let me set
this attributes on the SVG and store the selection into variables.

    var width = 800;
    var height = 400;
    var barPadding = 10;
    var svg = d3.select("svg")
                    .attr("width", width)
                    .attr("height", height);

Next lets Hub into **eventListener** for the form submission. This shouldn't
look different from before one thing I do differently thought is the result my
"getfrequncies()" function call inside the variable. That way I can use same
pattern we saw in D3 and SVG video to calculate the **barWidth** base on the number
of rectangle and trying to draw along with **barPadding** also since I already
store D3 SVG selection as variable, I can replace my **d3.select** call with
that variable.

We almost done with basic variable functionality.

    d3.select("form")
        on("submit", function() {
          d3.event.preventDefault();
          var input = d3.select("input");
          var text = input.property("value");

          var letters = d3.select("#letters")
                          .selectAll("letter")
                          .data(getFrequencies(text), function(d) {
                            return d.character;
                              });
          ......
          ......
        })

Into:

    d3.select("form")
        .on("submit", function() {
          d3.event.preventDefault();
          var input = d3.select("input");
          var text = input.property("value");
          var data = getFrequencies(text);
          var barWidth = width / data.length - barPadding;

          var letters = svg
                          .selectAll(".letter")
                          .data(data, function(d) {
                            return d.character;
                          });
          .......
          .......
        });

We almost done with basic functionality. We don't need change the **exit** selection
and for the **enter** selection, we just need to change what we are **appending**
from a "div" to **rect** element.

    d3.select("form")
    .....
    .....

      var letters = d3.select("#letters")
                    ......
                    ......

      letters()
        .enter()
        .append("div")
        .classed("letter", true)
        .....

Into



    d3.select("form")
    .....
    .....

      var letters = d3.select("#letters")
                    ......
                    ......

      letters()
        .enter()
        .append("rect")
        .classed("letter", true)
        .....

Now all it's left is to changes what we do with the **merge** selection. Since I',m
not working with "div" anymore some of the attributes I want to update will be
different. Let me start with the "width" this attributes I want to keep but it's
value should now equal with **barWidth** I calculate above. I also still need
a **height** attributes, I just leave just as is, the well I change is remove
the "**px**" attributes.

    .merger(letters)
      .style("width" "20px")
      .style("line-height", "20px")
      .style("height", function(d) {
        return d.count * 20 + "px";
          })
      .text(function(d) {
        return d.character;
        });

Into:

    ......
    ......
      .merge(letter)
        .style("width", barWidth)
        .style("line-height", "20px")
        .style("margin-right", "5px")
        .style("height", function(d) {
            return d.count * 20;
        })
        .......
        .......

Setting a fix **height** could be problematic if we enter a string which is
really high frequency count for particularly character. But giving a what we now
so far by D3 I don't think is worth try to count for this potential issue.

Setting inner text in rectangle is not make sense. So we can remove this line.

    .....
    .....
    .text(function(d) {
      return d.character;
    });

We can also remove the **line-height** and **margin-right**

    .....
    .....
    .merge(letter)
      .style("width", barWidth)
      .style("line-height", "20px")   << remove this
      .style("margin-right", "5px")   << remove this
    ......
    ......

Instead we need **x** and **y** attributes on our rectangles. The value for **x**
attributes should look the same as in D3 and SVG. Each **x** coordinate should be
**offSet** by another multiple the **barWidth** + the **barPadding**. As for the
**y** coordinate it's should just equal for the SVG **height** minus the height
of the bar, in other word it should equal the SVG **height - d.count * 20**


      letters
        .enter()
        .append("rect")
          .....
          .....
        .merge(letters)
          .....
          .....
          .attr("x", function(d, i) {
            return (barWidth + barPadding) * i;
          })
          .attr("y", function(d) {
            return height - d.count * 20;
          })

Lets refresh the page, when I enter a **phrase** I see the bar showing up.

![Character-Frequencies-Revisited-1.jpg](./Character-Frequencies-Revisited/images/Character-Frequencies-Revisited-1.jpg)

The second **phrase** we see the result.

![Character-Frequencies-Revisited-2.jpg](./Character-Frequencies-Revisited/images/Character-Frequencies-Revisited-2.jpg)

Now lets briefly tackle the bonus. There are several way to do this, but it's
little tricky because for each data-point you now need a couple of thing's for
the user to see a **rectangle** and **text** element. For now we **append** the
**group (g)** elements for each data-point. Now inside this group I want to
append the **text** element and **rect** element, to do this I also store the
**enter** selection in variable which I call **letterEnter** rather then merging
right away.

    var letterEnter = letters
        .enter()
        .append("g")
          .classed("letter", true)
          .classed("new", true);

Let me first **append** twice for each element and in the **enter** selection.

    letterEnter.append("rect");
    letterEnter.append("text");

I also need two **merge** selection one for **rect** and one for **text** element.
Lets do for rectangle first since basically we have written this code, the only
thing I need to do is select each **rect** inside each **group (g)** in the **merge**
selection before updating attributes there's specific to the rectangle.

    letterEnter.merge(letters)
      .select("text")
      .attr("x", function(d, i) {
        return ( barWdith + barPadding ) * i;
      })
      .attr("y", function(d) {
        return height - d.count + 20;
      })

Next I use similar pattern for the **text** element, once I've selected these
elements I set the **x** coordinates to be the **mid-point** each bar and the
**y** coordinate to be a little higher then the top of the bar. I also set the
inner text.

    letterEnter.merge("letters")
      .select("text")
      .attr("x", function(d, i) {
        return ( barWidth + barPadding ) * i + barWidth / 2;
      })
      .attr("text-anchor", "middle")
      .attr("y", function(d) {
        return height - d.count * 20 -10;
      })
      .text(function(d) {
        return d.character;
      })

Last thing I do update some of CSS style, these fill property I just want to set
only for rectangle not for entire group. For the text I do some similar to what
we did before by making new character a bit large by making new character a bit
larger.

    .letter {
      fill: FFC800;
    }

    .new {
      fill: #00FF00;
    }

Into

    .letter rect {
      fill: #FFC800;
    }

    .new rect {
      fill fill: #OOFFOO;
    }

    .new text {
      font-size: 1.5em;
    }

Lets look the result.

![Character-Frequencies-Revisited-3.jpg](./Character-Frequencies-Revisited/images/Character-Frequencies-Revisited-3.jpg)

The second **phrase** we see the result.

![Character-Frequencies-Revisited-4.jpg](./Character-Frequencies-Revisited/images/Character-Frequencies-Revisited-4.jpg)
