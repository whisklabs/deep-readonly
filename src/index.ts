export type DeepReadonlyArray<T> = readonly DeepReadonly<T>[];

export type DeepReadonlyObject<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
};

export type DeepReadonly<T> = T extends (infer R)[]
  ? DeepReadonlyArray<R>
  : T extends Function // eslint-disable-line @typescript-eslint/ban-types
  ? T
  : T extends object // eslint-disable-line @typescript-eslint/ban-types
  ? DeepReadonlyObject<T>
  : T;
