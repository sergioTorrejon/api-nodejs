export const setColors = {
    gray:30,
    red:31,
    green:32,
    yellow:33,
    blue:34,
    purple:35,
    magenta:36,
    white:37,
    backRed:41        
}
const colors = {
    gray:30,
    red:31,
    green:32,
    yellow:33,
    blue:34,
    purple:35,
    magenta:36,
    white:37,
    backRed:41        
}

const setLevelColor = (text:string, color:number) => {
    return '\u001b[' + color + 'm' +'[' + text + ']' + '\u001b[0m'
}

export const setPrintColor = (text:string, color:number) => {
    return '\u001b[' + color + 'm' + text + '\u001b[0m'
}

export let setColor:any = {}

setColor.gray = (text:string) => setLevelColor((text).toUpperCase(),colors.gray);
setColor.red = (text:string) => setLevelColor((text).toUpperCase(),colors.red);
setColor.green = (text:string) => setLevelColor((text).toUpperCase(),colors.green);
setColor.blue = (text:string) => setLevelColor((text).toUpperCase(),colors.blue);
setColor.yellow = (text:string) => setLevelColor((text).toUpperCase(),colors.yellow);
setColor.purple = (text:string) => setLevelColor((text).toUpperCase(),colors.purple);
setColor.magenta = (text:string) => setLevelColor((text).toUpperCase(),colors.magenta);
setColor.white = (text:string) => setLevelColor((text).toUpperCase(),colors.white);
setColor.backRed = (text:string) => setLevelColor((text).toUpperCase(),colors.backRed);