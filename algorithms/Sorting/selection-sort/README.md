## Selection sort 

If we have input like 7,8,1,2,3,0,4

In selection sort we sort a particular position first.

Consider the element at ith index and find the minimum element from i+1th index to end of array.
Compare the element and minimum element found. If minimum elemnet is greater swap the elements. Continue till the end of array.

For given input 

In first pass compare 7 and the min element among the values 8,1,2,3,0,4 is 0. So swap 7 and 0.

1st pass -> 0,8,1,2,3,7,4
2nd pass -> 0,1,8,2,3,7,4
3rd pass -> 0,1,2,8,3,7,4
4th pass -> 0,1,2,3,8,7,4
5th pass -> 0,1,2,3,4,7,8
6th pass -> 0,1,2,3,4,7,8

Time complexity 
Best case O(n*n)
worst case O(n*n)

Space complexity 
O(1)