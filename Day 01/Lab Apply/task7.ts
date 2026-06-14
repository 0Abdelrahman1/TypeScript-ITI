type Colors = "red" | "green" | "blue" | "yellow";
type ColorsWithOnlyRedAndBlue = Extract<Colors, "red"|"blue">;
let colorsWithOnlyRedAndBlueObj : ColorsWithOnlyRedAndBlue;
colorsWithOnlyRedAndBlueObj = "red";
colorsWithOnlyRedAndBlueObj = "blue";
// colorsWithOnlyRedAndBlueObj = "green"; // error
// colorsWithOnlyRedAndBlueObj = "yellow"; // error