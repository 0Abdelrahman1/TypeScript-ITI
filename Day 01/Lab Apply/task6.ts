type Colors = "red" | "green" | "blue" | "yellow";
type ColorsWithoutYellow = Exclude<Colors, "yellow">;
let colorsWithoutYellowObj : ColorsWithoutYellow;

colorsWithoutYellowObj = "red";
// colorsWithoutYellowObj = "yellow"; //error