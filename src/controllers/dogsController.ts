import data from "../data.json";

// * Helper functions
export const getIndexByID = (id: number) => {
  return data.findIndex((e) => e.id === id);
};

// * Controller functions
// * GET all
export const getAllDoggos = () => {
  return data || [];
};

// * GET one
export const getDoggo = (id: number) => {
  const index = getIndexByID(id);

  if (index === -1) return { res: "not found" };
  return data[index];
};

// * POST one
export const addDoggo = (name: string) => {
  const newDoggo = {
    id: Math.round(Math.random() * 100),
    name,
    age: 13,
    breed: "poggers",
    goodBoy: true,
  };

  data.push(newDoggo);
  return newDoggo;
};

// * UPDATE one
export const updateDoggo = (id: number, name: string) => {
  const index = getIndexByID(id);

  if (index === -1) return { res: "not found" };
  data[index].name = name;
  return data[index];
};

// * DELETE one
// ! This do not work as intended :c
export const deleteDoggo = (id: number) => {
  const index = getIndexByID(id);

  if (index === -1) return { res: "not found" };
  return data.splice(index, 1);
};
