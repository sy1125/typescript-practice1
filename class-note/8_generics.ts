// function logText(text) {
//     console.log(text);
//     return text;
// }
// logText(10); // 숫자
// logText('하이'); // 문자열
// logText(true); // 진위값

// function logText<T>(text: T):T {
//     console.log(text);
//     return text;
// }
// logText<string>('하이');

// function logText(text: string) {
//     console.log(text);
//     // text.split('').reverse().join('');
//     return text;
// }

// function logNumber(num: number) {
//     console.log(num);
//     return num;
// }

// function logText(text: string | number) {
//     console.log(text);
//     return text;
// }

// const a = logText('a');
// logText(10);
// const num = logNumber(10);
// logText(true);

//제네릭
function logText<T>(text: T): T {
    console.log(text);
    return text;
}
const str = logText<string>('abc');
str.split('')
const login = logText<boolean>(true);

// logText('a')
// logText(10)