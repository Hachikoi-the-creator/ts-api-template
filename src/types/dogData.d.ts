export type Dog = {
  id: number;
  name: string;
  age: number;
  breed: string;
  goodBoy: boolean;
};

export type DogArrOrEmpy = Dog[] | [];

export type DogOrEmpty = Dog | {};
