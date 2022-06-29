#include <iostream>
#include <string> 

using namespace std;

class Solution {
public:
    bool isPalindrome(int x) {
        string ss = to_string(x);
        int len = ss.size() - 1 ;
        int hlen = (len + 1) / 2;
        for(int i=0; i < hlen; i++)
        {
            if( ss[i] != ss[len - i])
            {
                return false;
            }
        }

        return true;
    }
};


// int main()
// {
//     Solution stest;
//     int x = 121;
//     bool t = stest.isPalindrome(x);
//     cout << t;
// }