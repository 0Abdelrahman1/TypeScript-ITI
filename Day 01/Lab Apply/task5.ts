interface IPerson
{
    name: string;
    age: number;
    email: string;
}

type PersonWithoutAge = Omit<IPerson, 'age'>;
let PersonWithoutAgeObj : PersonWithoutAge =
{
    name: "john",
    email: "john@john.john",
    //age:2 //error
}