var isValidSudoku = function(board) {
  var map = new Map()
  var isgood = true
    board.forEach((num1, index1) => {
      // console.log(num, index1);
      num1.forEach((num2, index2) =>{
        if (num2 != '.') {
          map.set([index1,index2],num2)
        }
      })
    });
    if (map.size == 0) {
      isgood = false
    }
    for (const [key1, val1] of map) {
      for (const [key2, val2] of map){
        if(val1 == val2 && key1 != key2 ){
          if (key1[0] == key2[0] || key1[1] == key2[1] || (Math.floor(key1[0]/3)+1 == Math.floor(key2[0]/3)+1 && Math.floor(key1[1]/3)+1 == Math.floor(key2[1]/3)+1)) {
            isgood = false
          } 
        }
        
      }

    }
    return isgood
  };

console.log(isValidSudoku(
  [[".",".","4",".",".",".","6","3","."],
   [".",".",".",".",".",".",".",".","."],
   ["5",".",".",".",".",".",".","9","."],
   [".",".",".","5","6",".",".",".","."],
   ["4",".","3",".",".",".",".",".","1"],
   [".",".",".","7",".",".",".",".","."],
   [".",".",".","5",".",".",".",".","."],
   [".",".",".",".",".",".",".",".","."],
   [".",".",".",".",".",".",".",".","."]]));