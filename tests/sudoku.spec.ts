
import { expect } from 'chai';
import {Sudoku} from '../src/sudoku';
describe("Sudoku", () => {
    describe("check", () => {
        it("Should return right output", () => {
          let sudoku = new Sudoku();
          var testArray = [[1, 2, 3, 6, 7, 8, 9, 4, 3],
          [4, 5, 6, 4, 5, 6, 7, 8, 9],
          [8, 9, 7, 4, 5, 6, 7, 8, 9],
          [1, 2, 3, 4, 5, 6, 7, 8, 9],
          [1, 2, 3, 4, 5, 6, 7, 8, 9],
          [1, 2, 3, 4, 5, 6, 7, 8, 9],
          [1, 2, 3, 4, 5, 6, 1, 5, 9],
          [1, 2, 3, 4, 5, 6, 2, 4, 7],
          [1, 2, 3, 4, 5, 6, 3, 6, 8]]
            var validSudoku = [[4, 3, 5, 2, 6, 9, 7, 8, 1],
            [6, 8, 2, 5, 7, 1, 4, 9, 3],
            [1, 9, 7, 8, 3, 4, 5, 6, 2],
            [8, 2, 6, 1, 9, 5, 3, 4, 7],
            [3, 7, 4, 6, 8, 2, 9, 1, 5],
            [9, 5, 1, 7, 4, 3, 6, 2, 8],
            [5, 1, 9, 3, 2, 6, 8, 7, 4],
            [2, 4, 8, 9, 5, 7, 1, 3, 6],
            [7, 6, 3, 4, 1, 8, 2, 5, 9]]


          expect(sudoku.check(validSudoku)).to.equal(true);
          expect(sudoku.check(testArray)).to.equal(false);
        });
    })
});