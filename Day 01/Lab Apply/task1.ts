interface IUser
{
    name: string;
    age: number;
}

let userObj: Pick<IUser, "name"> =
{
    name: "John"
};