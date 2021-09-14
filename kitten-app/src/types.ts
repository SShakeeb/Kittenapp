export type APIResult<T = null> = Readonly<{
    data: T | null;
    error: { message: string } | null;
  }>;
export type UnsavedCatname = {
    name: string;
  };
export type AddEntityResponse<T extends string | number = string> = Readonly<{
  id: T;
}>;
