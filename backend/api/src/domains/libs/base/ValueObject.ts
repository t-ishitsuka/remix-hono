import type { DomainObject } from "~/domains/libs/base/DomainObject";

export abstract class ValueObject<T>
  implements DomainObject<T, ValueObject<T>>
{
  constructor(protected readonly value: T) {}

  get(): T {
    return this.value;
  }

  equals(vo: ValueObject<T>): boolean {
    return this.constructor.name === vo.constructor.name
      ? JSON.stringify(this.get()) === JSON.stringify(vo.get())
      : false;
  }
}
