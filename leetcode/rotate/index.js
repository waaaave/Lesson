var rotate = function(matrix) {
  const max = matrix.length;
  for (let i = 0; i < Math.floor(max / 2); ++i) {
      for (let j = 0; j < Math.floor((max + 1) / 2); ++j) {
          const temp = matrix[i][j];
          matrix[i][j] = matrix[max - j - 1][i];
          matrix[max - j - 1][i] = matrix[max - i - 1][max - j - 1];
          matrix[max - i - 1][max - j - 1] = matrix[j][max - i - 1];
          matrix[j][max - i - 1] = temp;
      }
  }
  return matrix
};

console.log(rotate(
  [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]))