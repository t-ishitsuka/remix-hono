import { ValueObject } from "~/domains/libs/base/ValueObject";

describe("ValueObject", () => {
  describe("get", () => {
    it.each`
      description    | value               | expected
      ${"string"}    | ${"test"}           | ${"test"}
      ${"number"}    | ${123}              | ${123}
      ${"boolean"}   | ${true}             | ${true}
      ${"null"}      | ${null}             | ${null}
      ${"undefined"} | ${undefined}        | ${undefined}
      ${"array"}     | ${[1, 2, 3]}        | ${[1, 2, 3]}
      ${"object"}    | ${{ key: "value" }} | ${{ key: "value" }}
    `(
      "should return the same $description",
      ({ description, value, expected }) => {
        const vo = new TestValueObject(value);

        expect(vo.get()).toEqual(expected);
      }
    );
  });

  describe("equals", () => {
    it.each`
      description    | value1              | value2              | expected
      ${"string"}    | ${"test"}           | ${"test"}           | ${true}
      ${"number"}    | ${123}              | ${123}              | ${true}
      ${"boolean"}   | ${true}             | ${true}             | ${true}
      ${"null"}      | ${null}             | ${null}             | ${true}
      ${"undefined"} | ${undefined}        | ${undefined}        | ${true}
      ${"array"}     | ${[1, 2, 3]}        | ${[1, 2, 3]}        | ${true}
      ${"object"}    | ${{ key: "value" }} | ${{ key: "value" }} | ${true}
      ${"different"} | ${{ key: "value" }} | ${{ key: "other" }} | ${false}
    `(
      "should return $expected for $description",
      ({ description, value1, value2, expected }) => {
        const vo1 = new TestValueObject(value1);
        const vo2 = new TestValueObject(value2);

        expect(vo1.equals(vo2)).toEqual(expected);
      }
    );
  });
});

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
class TestValueObject extends ValueObject<any> {
  equals(vo: TestValueObject): boolean {
    return super.equals(vo);
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  get(): any {
    return super.get();
  }
}
