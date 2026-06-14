type MayBeString = string | null | undefined;
type MustBeString = NonNullable<MayBeString>;
let str : MustBeString;
str = "asd";
// str = null; // error
// str = undefined; // error
