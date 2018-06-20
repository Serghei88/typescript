
import { expect } from 'chai';
import {TimeDuration} from '../src/main';
describe("TimeDuration", () => {
    describe("transform", () => {
        it("Should return right output", () => {
          let timeFormat = new TimeDuration();

          expect(timeFormat.transform(1)).to.equal("1 second");
          expect(timeFormat.transform(62)).to.equal("1 minute and 2 seconds");

          expect(timeFormat.transform(120)).to.equal("2 minutes");

          expect(timeFormat.transform(3600)).to.equal("1 hour");

          expect(timeFormat.transform(3662)).to.equal("1 hour, 1 minute and 2 seconds");

        });
    })
});