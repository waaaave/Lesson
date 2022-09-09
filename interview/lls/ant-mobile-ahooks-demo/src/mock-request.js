import { sleep } from 'antd-mobile/es/utils/sleep' 

let count = 0;

export async function mockRequest(){
    if(count >= 5 ) {
        return []
    }
    await sleep(2000)
    count++
    return [
        'q',
        'w',
        'e',
        'r',
        't',
        'y',
        'u',
        'i',
        'o',
        'p',
        'l',
        'k',
        'j',
        'h',
        'g',
        'f',
        'd',
        's',
        'a',
        'z',
        'x',
        'c',
        'v',
        'b',
        'n',
        'm',
    ]
}