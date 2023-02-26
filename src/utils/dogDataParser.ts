export const getValidID = (num: any): number => {
  if (typeof +num === "number" && !isNaN(num)) return num;

  throw new Error("Invalid ID");
};

export const getValidName = (name: unknown): string => {
  if (typeof name === "string") return name;
  throw new Error("Invalid name");
};

export const randomID = (): number => {
  return Math.round(Math.random() * 100);
};
