export  class Sudoku {
  constructor() {}

  public check(sudoku: Array<Array<number>>): boolean {
    var result = this.linesValid(sudoku) && this.columnsValid(sudoku);
    var quadrantSize = 3;

    var i = 0;
    while (i < sudoku.length) {
      var j = 0;
      while (j < sudoku.length) {
        result = result && this.quadrantValid(sudoku, i, j);
        j += quadrantSize;
      }
      i += quadrantSize;
    }

    return result;
  }
  private lineValid(a: Array<number>): boolean {
    return JSON.stringify(a.slice().sort()) == JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  }

  private linesValid(sudoku: Array<Array<number>>): boolean {
    var self = this;
    var result = true;
    sudoku.forEach(function(line) {
      if (!self.lineValid(line)) {
        result = false;
      }
    });
    return result;
  }
  private getCol(sudoku: Array<Array<number>>, col: number): Array<number> {
    var column = [];
    for (var i = 0; i < sudoku.length; i++) {
      column.push(sudoku[i][col]);
    }
    
    return column;
  }
  private columnsValid(sudoku: Array<Array<number>>): boolean {
    var self = this;
    var result = true;
    var columnsNumber = sudoku[0].length;
    var i: number = 0;
    for (i = 0; i < columnsNumber; i++) {
      var column = self.getCol(sudoku, i);
      if (!self.lineValid(column)) {
        result = false;
      }
    }
    return result;
  }
  private quadrantValid(
    sudoku: Array<Array<number>>,
    i: number,
    j: number
  ): boolean {
    var temp = Array<number>();
    var r: number = i;
    var k: number = j;
    for (r = i; r < i + 3; r++) {
      for (k = j; k < j + 3; k++) {
        temp.push(sudoku[r][k]);
      }
    }
    return this.lineValid(temp);
  }
}
