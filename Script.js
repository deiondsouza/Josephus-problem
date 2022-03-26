//Function to find highest power of 2 smaller than or equal to n.

"use strict";
const ps= require("prompt-sync");
const prompt = ps();

function highestPowerof2(n)
   {
     let res = 0;
     for (let i = n; i >= 1; i--)
        {
         // If i is a power of 2
          if ((i & (i - 1)) == 0)
             {
                  res = i;
                break;
             }
        }
     return res;
   }

// Program to find the last one standing. (Josephus problem)
 let n = prompt("Enter a number: ");
   function Lastonestanding(n)
   {
      let l, winnerSoldier;
      l = n-highestPowerof2(n);
      winnerSoldier = 2*l+1;
   return winnerSoldier;
   }

console.log(Lastonestanding(n));