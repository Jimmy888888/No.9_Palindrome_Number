/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let ss = x.toString();
    let len = ss.length - 1;
    for(let i = 0; i <= len; i++)
    {
        if( ss[i] !== ss[len - i])
        {
            return false;
        }
    }
    return true;
};