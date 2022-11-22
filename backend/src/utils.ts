export const isEmpty = (any: any) => {
  if (any !== 0 && !any) {
    return true;
  } else if (any.length === 0) {
    return true;
  } else {
    return false;
  }
};

export class HttpError extends Error {
  constructor(message: string, code: number) {
    super(message);
    (this as any).code = code;
  }
}
