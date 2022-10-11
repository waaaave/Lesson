// 动态规划

var maxProfit = function(prices) {
    let maxprofit = 0, dp = [] // dpTable 存入第I 天的最优值
    dp[0] = 0
    for(let i = 0; i<prices.length; i++){
        dp[i] = dp[i-1] < prices[i] ? dp[i-1]:prices[i]
        maxprofit = Math.max(prices[i] - dp[i], maxprofit)
    }


    return maxprofit
};

console.time()
console.log(maxProfit([841,636,646,45,682,90,959,900,165,460,994,396,744,959,964,732,165,124,604,576,478,270,871,767,557,107,623,8,313,937,478,888,233,603,859,923,563,760,496,61,976,448,174,587,693,134,113,222,881,396,805,813,350,590,529,981,385,881,17,263,305,744,729,805,721,693,736,520,34,251,18,836,543,232,531,577,49,722,388,278,232,392,773,85,753,461,270,707,931,52,542,573,970,498,362,977,473,941,800,73,979,606,371,592,797,414,92,411,244,283,112,680,880,425,884,539,238,933,106,937,231,490,406,755,70,881,721,667,937,355,390,529,974,566,729,803,790,823,226,90,8,122,240,444,806,111,770,977,46,158,150,745,323,225,174,282,711,739,350,947,634,595,726,658,115,638,477,825,841,539,687,186,339,234,606,359,375,298,928,801,566,746,417,39,574,818,628,920,587,696,356,333,914,576,70,375,459,961,904,788,227,218,862,676,142,393,605,907,603,850,79,251,718,660,227,7,244,977,829,851,200,733,982,376,625,882,693,191,211,873,460,866,544,376,665,215,798,298,755,780,53,273,84,30,546,164,822,345,519,954,287,468,312,469,619,949,283,265,860,818,942,842,531,296,136,162,2,999,207,823,168,718,333,244,19,412,923,508,557,854,889,643,39,656,273,509,686,814,4,631,202,972,836,630,101,818,92,296,128,774,501,283,838,806,656,803,958,438,961,597,570,869,798,476,698,880,742,761,865,673,458,379,775,208,861,904,930,465,208,426,193,648,953,104,784,729,219,316,183,631,303,888,875,548,97,303,101,131,225,191,337,845,990,950,888,879,876,100,390,799,205,738,276,371,542,584,645,261,344,308,437,905,96,897,299,492,68,142,187,653,895,190,252,857,786,33,737,5,9,147,442,994,958,279,896,182,941,615,693,157,216,343,75,352,593,469,977,518,355,219,911,121,721,347,753,400,81,846,742,843,534,627,881,265,302,339,829,269,437,403,845,599,581,234,142,455,114,527,587,228,340,649,665,652,60,942,612,824,315,634,140,445,38,953,747,262,732,712,74,532,631,957,109,978,874,401,918,605,115,190,66,900,558,966,302,35,495,737,498,524,825,69,299,113,174,473,668,204,382,902,369,974,32,814,397,67,555,646,774,987,303,158,305,368,527,317,739,816,821,295,509,872,881,27,874,352,429,105,27,20,237,796,519,509,569,322,760,749,325,911,514,344,79,636,973,880,456,723,993,473,578,862,469,213,184,172,716,714,233,365,208,339,578,304,219,42,596,8,605,756,372,166,950,311,373,545,612,408,87,708,151,172,378,977,839,983,685,345,992,424,302,39,138,660,776,710,945,443,833,623,520,843,688,268,941,249,623,917,784,67,110,924,444,862,604,78,162,128]));
console.timeEnd()