interface Pesron {
    name: string;
    age: number;
}

type Person = {
    name: string;
    age: number;
}

var seho: Person = {
    name: '세호',
    age: 30
}
type MyString = string;
var str: MyString = 'hello';

type Todo= { id: string; title: string; dong: boolean };
function getTodo(todo: Todo) {

}