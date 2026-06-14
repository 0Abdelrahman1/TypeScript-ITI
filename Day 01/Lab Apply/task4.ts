interface IPerson
{
    name: string;
    age: number;
    email: string;
}

type PersonWithoutAge = Pick<IPerson, 'name'|'email'>
let PersonWithoutAgeObj : PersonWithoutAge =
{
    name: "john",
    email: "john@john.john",
    //age:2 //error
}