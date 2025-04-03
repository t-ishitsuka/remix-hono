import { ValueObject } from "~/domains/libs/base/ValueObject";

export class NumberValueObject<
  StrictNumberType extends number = number
> extends ValueObject<StrictNumberType> {
  override get(): StrictNumberType {
    return super.get() as StrictNumberType;
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  override equals(vo: NumberValueObject<any>): boolean {
    return super.equals(vo);
  }
}
