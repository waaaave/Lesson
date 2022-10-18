// interface Say{
//     (name: String): void;
// }

// let say : Say = (name:String) : void => {

// }

interface NumberArray{
    [index: number]: number;
}

let fibonacci:NumberArray = [1,1,2,3,5]

interface PersonalIntl{
    name: String
    sayHi (name: string): string
}