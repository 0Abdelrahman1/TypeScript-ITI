type Colors = "red" | "green" | "blue";
let RGBObj: Record<Colors, string> = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff"
};
console.log(RGBObj.red); // valid
console.log(RGBObj["red"]); // valid
// console.log(RGBObj.orange); // invalid
// console.log(RGBObj["orange"]); // invalid