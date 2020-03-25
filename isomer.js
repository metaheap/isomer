// c u l8er

var Point  = Isomer.Point;
var Path   = Isomer.Path;
var Shape  = Isomer.Shape;
var Vector = Isomer.Vector;
var Color  = Isomer.Color;

var iso = new Isomer(document.getElementById("canvas"));

// colors
var white = new Color(255,255,255);
var black = new Color(0, 0, 0);

var base = new Color(120, 120, 120);
var base19 = new Color(255, 255, 0);

var red = new Color(255, 0, 0);
var yellow = new Color(255, 255, 0);
var green = new Color(0, 255, 0);
var blue = new Color(0, 255, 255);
var indigo = new Color(0, 0, 255);
var violet = new Color(255, 0, 255);


// white center
iso.add(Shape.Prism(Point(9, 16, -12)), white);
iso.add(Shape.Prism(Point(9, 16, -11)), white);
iso.add(Shape.Prism(Point(9, 16, -10)), white);
iso.add(Shape.Prism(Point(9, 16, -9)), white);
iso.add(Shape.Prism(Point(9, 16, -8)), white);
iso.add(Shape.Prism(Point(9, 16, -7)), white);
iso.add(Shape.Prism(Point(9, 16, -6)), white);
iso.add(Shape.Prism(Point(9, 16, -5)), white);

// white bottom
iso.add(Shape.Prism(Point(14, 7, -10)), white);
iso.add(Shape.Prism(Point(13, 7, -10)), white);
iso.add(Shape.Prism(Point(12, 7, -10)), white);
iso.add(Shape.Prism(Point(11, 7, -10)), white);
iso.add(Shape.Prism(Point(10, 7, -10)), white);
iso.add(Shape.Prism(Point(9, 7, -10)), white);
iso.add(Shape.Prism(Point(8, 7, -10)), white);
iso.add(Shape.Prism(Point(7, 7, -10)), white);

// white top
iso.add(Shape.Prism(Point(10, 3, 1)), white);
iso.add(Shape.Prism(Point(10, 4, 1)), white);
iso.add(Shape.Prism(Point(10, 5, 1)), white);
iso.add(Shape.Prism(Point(10, 6, 1)), white);
iso.add(Shape.Prism(Point(10, 7, 1)), white);
iso.add(Shape.Prism(Point(10, 8, 1)), white);
iso.add(Shape.Prism(Point(10, 9, 1)), white);
iso.add(Shape.Prism(Point(10, 10, 1)), white);

// black center
iso.add(Shape.Prism(Point(11, 4, -7)), black);
iso.add(Shape.Prism(Point(11, 4, -6)), black);
iso.add(Shape.Prism(Point(11, 4, -5)), black);
iso.add(Shape.Prism(Point(11, 4, -4)), black);
iso.add(Shape.Prism(Point(11, 4, -3)), black);
iso.add(Shape.Prism(Point(11, 4, -2)), black);
iso.add(Shape.Prism(Point(11, 4, -1)), black);
iso.add(Shape.Prism(Point(11, 4, 0)), black);

// black bottom
iso.add(Shape.Prism(Point(7, 14, -10)), black);
iso.add(Shape.Prism(Point(7, 13, -10)), black);
iso.add(Shape.Prism(Point(7, 12, -10)), black);
iso.add(Shape.Prism(Point(7, 11, -10)), black);
iso.add(Shape.Prism(Point(7, 10, -10)), black);
iso.add(Shape.Prism(Point(7, 9, -10)), black);
iso.add(Shape.Prism(Point(7, 8, -10)), black);
iso.add(Shape.Prism(Point(7, 7, -10)), black);

// black top
iso.add(Shape.Prism(Point(16, 16, -5)), black);
iso.add(Shape.Prism(Point(15, 16, -5)), black);
iso.add(Shape.Prism(Point(14, 16, -5)), black);
iso.add(Shape.Prism(Point(13, 16, -5)), black);
iso.add(Shape.Prism(Point(12, 16, -5)), black);
iso.add(Shape.Prism(Point(11, 16, -5)), black);
iso.add(Shape.Prism(Point(10, 16, -5)), black);
iso.add(Shape.Prism(Point(9, 16, -5)), black);

// big base box
// 19:1
iso.add(Shape.Prism(Point(16, 16, -6)), base);
iso.add(Shape.Prism(Point(15, 16, -6)), base);
iso.add(Shape.Prism(Point(14, 16, -6)), base);
iso.add(Shape.Prism(Point(13, 16, -6)), base); // id
iso.add(Shape.Prism(Point(12, 16, -6)), base);
iso.add(Shape.Prism(Point(11, 16, -6)), base);
iso.add(Shape.Prism(Point(10, 16, -6)), base);

// J:1
iso.add(Shape.Prism(Point(10, 16, -12)), base);
iso.add(Shape.Prism(Point(10, 16, -11)), base);
iso.add(Shape.Prism(Point(10, 16, -10)), base);
iso.add(Shape.Prism(Point(10, 16, -9)), base); // id
iso.add(Shape.Prism(Point(10, 16, -8)), base);
iso.add(Shape.Prism(Point(10, 16, -7)), base);
iso.add(Shape.Prism(Point(10, 16, -6)), base); // color

// 19:2
iso.add(Shape.Prism(Point(16, 15, -6)), base);
iso.add(Shape.Prism(Point(15, 15, -6.2)), base19);
iso.add(Shape.Prism(Point(14, 15, -6.2)), base19);
iso.add(Shape.Prism(Point(13, 15, -6.2)), base19);
iso.add(Shape.Prism(Point(12, 15, -6.2)), base19); // id
iso.add(Shape.Prism(Point(11, 15, -6.2)), base19);
iso.add(Shape.Prism(Point(10, 15, -6)), base);

// J:2
iso.add(Shape.Prism(Point(10, 15, -12)), base);
iso.add(Shape.Prism(Point(9.8, 15, -11)), base19);
iso.add(Shape.Prism(Point(9.8, 15, -10)), base19);
iso.add(Shape.Prism(Point(9.8, 15, -9)), base19);
iso.add(Shape.Prism(Point(9.8, 15, -8)), base19); // id
iso.add(Shape.Prism(Point(9.8, 15, -7)), base19);
iso.add(Shape.Prism(Point(10, 15, -6)), base); //color

// 19:3
iso.add(Shape.Prism(Point(16, 14, -6)), base);
iso.add(Shape.Prism(Point(15, 14, -6)), base);
iso.add(Shape.Prism(Point(14, 14, -6)), base);
iso.add(Shape.Prism(Point(13, 14, -6)), base);
iso.add(Shape.Prism(Point(12, 14, -6)), base); // id
iso.add(Shape.Prism(Point(11, 14, -6)), base);
iso.add(Shape.Prism(Point(10, 14, -6)), base);

// J:3
iso.add(Shape.Prism(Point(10, 14, -12)), base);
iso.add(Shape.Prism(Point(9.8, 14, -11)), base19);
iso.add(Shape.Prism(Point(10, 14, -10)), base);
iso.add(Shape.Prism(Point(10, 14, -9)), base); 
iso.add(Shape.Prism(Point(10, 14, -8)), base); // id
iso.add(Shape.Prism(Point(9.8, 14, -7)), base19);
iso.add(Shape.Prism(Point(10, 14, -6)), base); // color

// 19:4
iso.add(Shape.Prism(Point(16, 13, -6)), base);
iso.add(Shape.Prism(Point(15, 13, -6.2)), base19);
iso.add(Shape.Prism(Point(14, 13, -6.2)), base19);
iso.add(Shape.Prism(Point(13, 13, -6.2)), base19);
iso.add(Shape.Prism(Point(12, 13, -6.2)), base19); // id
iso.add(Shape.Prism(Point(11, 13, -6.2)), base19);
iso.add(Shape.Prism(Point(10, 13, -6)), base);

// J:4
iso.add(Shape.Prism(Point(10, 13, -12)), base);
iso.add(Shape.Prism(Point(9.8, 13, -11)), base19);
iso.add(Shape.Prism(Point(10, 13, -10)), base);
iso.add(Shape.Prism(Point(10, 13, -9)), base);
iso.add(Shape.Prism(Point(10, 13, -8)), base); // id
iso.add(Shape.Prism(Point(9.8, 13, -7)), base19);
iso.add(Shape.Prism(Point(10, 13, -6)), base); // color

// 19:5
iso.add(Shape.Prism(Point(16, 12, -6)), base);
iso.add(Shape.Prism(Point(15, 12, -6.2)), base19);
iso.add(Shape.Prism(Point(14, 12, -6)), base);
iso.add(Shape.Prism(Point(13, 12, -6.2)), base19);
iso.add(Shape.Prism(Point(12, 12, -6)), base); // id
iso.add(Shape.Prism(Point(11, 12, -6.2)), base19);
iso.add(Shape.Prism(Point(10, 12, -6)), base);

// J:5
iso.add(Shape.Prism(Point(10, 12, -12)), base);
iso.add(Shape.Prism(Point(9.8, 12, -11)), base19);
iso.add(Shape.Prism(Point(10, 12, -10)), base);
iso.add(Shape.Prism(Point(10, 12, -9)), base);
iso.add(Shape.Prism(Point(10, 12, -8)), base); // id
iso.add(Shape.Prism(Point(9.8, 12, -7)), base19);
iso.add(Shape.Prism(Point(10, 12, -6)), base); // color

// 19:6
iso.add(Shape.Prism(Point(16, 11, -6)), base);
iso.add(Shape.Prism(Point(15, 11, -6.2)), base19);
iso.add(Shape.Prism(Point(14, 11, -6.2)), base19);
iso.add(Shape.Prism(Point(13, 11, -6.2)), base19);
iso.add(Shape.Prism(Point(12, 11, -6.2)), base19); // id 
iso.add(Shape.Prism(Point(11, 11, -6.2)), base19);
iso.add(Shape.Prism(Point(10, 11, -6)), base);

// J:6
iso.add(Shape.Prism(Point(10, 11, -12)), base);
iso.add(Shape.Prism(Point(9.8, 11, -11)), base19);
iso.add(Shape.Prism(Point(10, 11, -10)), base);
iso.add(Shape.Prism(Point(10, 11, -9)), base);
iso.add(Shape.Prism(Point(10, 11, -8)), base); // id
iso.add(Shape.Prism(Point(9.8, 11, -7)), base19);
iso.add(Shape.Prism(Point(10, 11, -6)), base);

// S:7
iso.add(Shape.Prism(Point(16, 10, -12)), base);
iso.add(Shape.Prism(Point(16, 10, -11)), base);
iso.add(Shape.Prism(Point(16, 10, -10)), base);
iso.add(Shape.Prism(Point(16, 10, -9)), base);
iso.add(Shape.Prism(Point(16, 10, -8)), base); //id
iso.add(Shape.Prism(Point(16, 10, -7)), base);
iso.add(Shape.Prism(Point(16, 10, -6)), base); // color

// S:6
iso.add(Shape.Prism(Point(15, 10, -12)), base);
iso.add(Shape.Prism(Point(15, 9.8, -11)), base19);
iso.add(Shape.Prism(Point(15, 9.8, -10)), base19);
iso.add(Shape.Prism(Point(15, 9.8, -9)), base19);
iso.add(Shape.Prism(Point(15, 10, -8)), base); // id
iso.add(Shape.Prism(Point(15, 9.8, -7)), base19);
iso.add(Shape.Prism(Point(15, 10, -6)), base); // color

// S:5
iso.add(Shape.Prism(Point(14, 10, -12)), base);
iso.add(Shape.Prism(Point(14, 9.8, -11)), base19);
iso.add(Shape.Prism(Point(14, 10, -10)), base);
iso.add(Shape.Prism(Point(14, 9.8, -9)), base19);
iso.add(Shape.Prism(Point(14, 10, -8)), base); // id
iso.add(Shape.Prism(Point(14, 9.8, -7)), base19);
iso.add(Shape.Prism(Point(14, 10, -6)), base); // color

// S:4
iso.add(Shape.Prism(Point(13, 10, -12)), base);
iso.add(Shape.Prism(Point(13, 9.8, -11)), base19);
iso.add(Shape.Prism(Point(13, 10, -10)), base);
iso.add(Shape.Prism(Point(13, 9.8, -9)), base19);
iso.add(Shape.Prism(Point(13, 10, -8)), base); // id
iso.add(Shape.Prism(Point(13, 9.8, -7)), base19);
iso.add(Shape.Prism(Point(13, 10, -6)), base); // color

// S:3
iso.add(Shape.Prism(Point(12, 10, -12)), base);
iso.add(Shape.Prism(Point(12, 9.8, -11)), base19);
iso.add(Shape.Prism(Point(12, 10, -10)), base);
iso.add(Shape.Prism(Point(12, 9.8, -9)), base19);
iso.add(Shape.Prism(Point(12, 10, -8)), base);
iso.add(Shape.Prism(Point(12, 9.8, -7)), base19);
iso.add(Shape.Prism(Point(12, 10, -6)), base); // color

// S:2
iso.add(Shape.Prism(Point(11, 10, -12)), base);
iso.add(Shape.Prism(Point(11, 9.8, -11)), base19);
iso.add(Shape.Prism(Point(11, 10, -10)), base);
iso.add(Shape.Prism(Point(11, 9.8, -9)), base19);
iso.add(Shape.Prism(Point(11, 9.8, -8)), base19); // id
iso.add(Shape.Prism(Point(11, 9.8, -7)), base19);
iso.add(Shape.Prism(Point(11, 10, -6)), base);

// S:1
iso.add(Shape.Prism(Point(10, 10, -12)), base);
iso.add(Shape.Prism(Point(10, 10, -11)), base);
iso.add(Shape.Prism(Point(10, 10, -10)), base);
iso.add(Shape.Prism(Point(10, 10, -9)), base);
iso.add(Shape.Prism(Point(10, 10, -8)), base); // id
iso.add(Shape.Prism(Point(10, 10, -7)), base);
iso.add(Shape.Prism(Point(10, 10, -6)), base); // center