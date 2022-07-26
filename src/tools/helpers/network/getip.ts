import { functionsArrays } from '../arrays/op.array';

export const  getIPLocal = () => { 
    const ips = require('child_process').execSync("ifconfig | grep inet | grep -v inet6 | awk '{gsub(/addr:/,\"\");print $2}'").toString().trim().split("\n")
   
    return  functionsArrays.arrayToString(ips)
};
