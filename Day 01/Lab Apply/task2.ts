interface IProfile
{
    username?: string;
    email?: string;
}

let profileObj: Required<IProfile> =
{
    username: "John",
    email: "john@john.john"
}