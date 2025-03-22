// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export interface DomainObject<ReturnGetType = any, CompareObjectType = any> {
  get(): ReturnGetType;
  equals(compareObject: CompareObjectType): boolean;
}
