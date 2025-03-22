import { ValueObject } from "~/domains/libs/base/ValueObject";

export class StringValueObject<
  StrictStringType extends string = string
> extends ValueObject<StrictStringType> {
  override get(): StrictStringType {
    return super.get() as StrictStringType;
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  override equals(vo: StringValueObject<any>): boolean {
    return super.equals(vo);
  }
}
