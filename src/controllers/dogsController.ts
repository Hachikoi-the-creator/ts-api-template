import data from "../data.json";
import { DogArrOrEmpy, Dog, DogOrEmpty } from "../types/dogData";
import { getValidID, getValidName, randomID } from "../utils/dogDataParser";

// ! Helper functions
// * Find id of dog
export const getIndexByID = (id: any): number => {
  const validID = getValidID(id);
  // Error since the dog.id is a string and validID is a number...
  const res = data.findIndex((dog: Dog) => dog.id == validID);
  return res;
};

// ! Controller functions
// * GET all
export const getAllDoggos = (): DogArrOrEmpy => {
  return data.length ? data : [];
};

// * GET one
export const getDoggo = (id: any): DogOrEmpty => {
  const validID = getValidID(id);
  const res = data.filter((dog: Dog) => dog.id == validID);

  if (!res.length) return [];
  return res[0];
};

// * POST one
export const addDoggo = (name: any): Dog => {
  const newDoggo = {
    id: randomID(),
    name: getValidName(name),
    age: 13,
    breed: "poggers",
    goodBoy: true,
  };

  data.push(newDoggo);
  return newDoggo;
};

// * UPDATE one
export const updateDoggo = (id: any, name: any): DogOrEmpty => {
  const index = getValidID(id);
  const validName = getValidName(name);

  const doggo = data.find((dog: Dog) => dog.id == index);
  if (!doggo) throw new Error("Doggo not found");
  doggo.name = validName;
  return doggo;
};

// * DELETE one
// ! This do not work as intended :c
export const deleteDoggo = (id: any): DogOrEmpty => {
  const index = getIndexByID(id);

  if (index === -1) return {};
  return data.splice(index, 1);
};
