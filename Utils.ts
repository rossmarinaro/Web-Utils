/* COMMON UTILS */


class Utils {


    public static numbers = {

        multiplyDecimals: function (a: number, b: number): number
        { 
            return (a * 10 + b * 10);
        },
        inRange: function(x: number, a: number, b: number): boolean
        { 
            return x >= a && x <= b; 
        },
        clamp: function (x: number, a: number, b: number): number 
        {
            return Math.min(Math.max(x, a), b);
        },
        lerp: function (x: number, a: number, b: number): number
        {
            return x * (b - a) + a;
        }
        
    }

    public static strings = {

        joinWithUnderscore: function (a: string, b: string): string
        {
            return a += `_${b}`;
        },

        replaceUnderscore: function(str: any): string
        {
            let strArr: string[] = [];
            for(let i = 0; i < str.length; i++)
                strArr.push(str[i]);          
            return strArr.includes('_') ? str.toString().replaceAll('_', ' ') : str;
        },

        removeUnderscore: function(str: any): string
        {
            let strArr: string[] = [];
            for(let i = 0; i < str.length; i++)
                strArr.push(str[i]);          
            return strArr.includes('_') ? str.toString().replaceAll('_', '') : str;
           
        },

        removeStringPart: async function(str: string, part: string): Promise<string>
        {      
           return str.toString().replace(part, '');
        },

        removeNumbers: async function(str: string): Promise<string>
        {      
            let strArr: string[] = [],
                numArr: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

            for(let char = 0; char < str.length; char++)
                strArr.push(str[char]); 
                    
            const check = async ()=> {
                for(let char = 0; char < strArr.length; char++)
                    if (numArr.includes(strArr[char].toString()))
                    {
                        let _string = strArr.filter(i => isNaN(parseInt(i)));  
                        return _string.join('');
                    }
                    return str;
            }
            const newStr = await check();

            return newStr;
     
        },

        removeJunk: async function(str: any): Promise<string>
        {
            const 
            rmvUnderscore = this.replaceUnderscore(str),
            rmvNumbers = await this.removeNumbers(rmvUnderscore),
            newStr = await this.removeStringPart(rmvNumbers, 'tile');

            return newStr;
        },

        checkSpace: async function(str: string): Promise<string>
        {  
            return str.includes(' ') ? str.replace(' ', '') : str;
        },
        
        checkVowel: async function(str: string): Promise<string>
        {
            const 
                vowels = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'],
                firstChar = str[0];

            let result = vowels.includes(firstChar) ? 'an ' : 'a ';

            if (str.endsWith('s')) //if plural, return empty character
                result = '';

            return result;
        }
    }
        


}


module.exports = { Utils }