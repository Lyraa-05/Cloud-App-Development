import {Friend, Colleague, ColleagueHistory} from './myTypes'

const friend1 = {
  name: "Michal Lyra",
  phone: "087-12345",
  age: 21,
};

const friend2 = {
  name: "Eimear O'Neill",
  phone: "086--12345",
  age: 31,
};


//   -------------------
const colleague1 = {
  name: "Ralph Graham",
  department: "Engineering",
  contact: {
    email: "rgraham@company.com",
    extension: 121,
  },
};

const colleague2 = {
  name: "Patti Burke",
  department: "Finance",
  contact: {
    email: "pburke@company.com",
    extension: 132,
  },
};

const colleague3 = {
  name: "Dean Sullivan",
  department: "HR",
  contact: {
    email: "dos@company.com",
    extension: 125,
  },
};

export const friends = [friend1, friend2]

export const colleagues: ColleagueHistory = {
  current: [colleague1, colleague2, colleague3],
  former: [],
};

// console.log(colleagues.current[0]);
