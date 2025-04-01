import { StringValueObject } from "~/domains/libs/base/StringValueObject";

describe("StringValueObject", () => {
  describe("get", () => {
    it("should return the value of the StringValueObject", () => {
      const stringValueObject = new StringValueObject("test");
      expect(stringValueObject.get()).toBe("test");
    });
  });

  describe("equals", () => {
    it.each`
      description           | value1    | value2       | expected
      ${"equal values"}     | ${"test"} | ${"test"}    | ${true}
      ${"different values"} | ${"test"} | ${"TEST"}    | ${false}
      ${"different types"}  | ${"test"} | ${123}       | ${false}
      ${"different types"}  | ${"test"} | ${true}      | ${false}
      ${"different types"}  | ${"test"} | ${null}      | ${false}
      ${"different types"}  | ${"test"} | ${undefined} | ${false}
    `(
      "should return $expected between $description",
      ({ value1, value2, expected }) => {
        const stringValueObject1 = new StringValueObject(value1);
        const stringValueObject2 = new StringValueObject(value2);

        expect(stringValueObject1.equals(stringValueObject2)).toBe(expected);
      }
    );
  });
});
