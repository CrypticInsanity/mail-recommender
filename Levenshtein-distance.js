'use strict'
//Author Tiisetso Tjabane
// This functions will be sused to calculate how similar two strings are.
//wiki - https://en.wikipedia.org/wiki/Levenshtein_distance


// will compare string firstString and secondString
function LevenshteinDistance(firstString,firstLen, secondString, secondLen)
{
    let cost = 0;
    if (firstLen == 0) return firstLen;
    if (secondLen == 0) return secondLen;

    if (firstString[firstLen-1] === secondString[secondLen-1])
        cost = 0;
    else
        cost = 1;

    return Math.min(LevenshteinDistance(firstString, firstLen - 1, secondString, secondLen    ) + 1,
                    LevenshteinDistance(firstString, firstLen    , secondString, secondLen - 1) + 1,
                    LevenshteinDistance(firstString, firstLen - 1, secondString, secondLen - 1) + cost);
}
var ans = LevenshteinDistance(one,one.length,two,two.length);