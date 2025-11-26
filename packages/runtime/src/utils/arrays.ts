export function withoutNull<T>(arr: T[]): NonNullable<T>[] {
  return arr.filter((item) => item != null);
}
