export enum PostIdType {
  DATABASE_ID = 'DATABASE_ID',
  SLUG = 'SLUG',
}

export type PostIdTypeUnion = keyof typeof PostIdType;
