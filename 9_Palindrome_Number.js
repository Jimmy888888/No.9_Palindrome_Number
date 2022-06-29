/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let ss = x.toString();
    let len = ss.length - 1;
    let hlen = (len + 1) / 2;
    for(let i = 0; i < hlen; i++)
    {
        if( ss[i] !== ss[len - i])
        {
            return false;
        }
    }
    return true;
};
