/* eslint-disable @typescript-eslint/no-explicit-any */
import { produce } from "immer";
import { cloneDeep, set } from "lodash-es";
import { expect, test } from "vitest";

const formData = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  gender: "Male",
  address: {
    street: "123 Main Street",
    city: "Anytown",
    state: "CA",
    postalCode: "12345",
  },
  email: "john.doe@example.com",
  phone: "555-123-4567",
  isStudent: false,
  hobbies: [
    { name: "Reading", level: "Intermediate" },
    { name: "Hiking", level: "Advanced" },
    { name: "Cooking", level: "Beginner" },
    { name: "Gardening", level: "Intermediate" },
    { name: "Painting", level: "Advanced" },
    { name: "Swimming", level: "Beginner" },
    { name: "Cycling", level: "Intermediate" },
    { name: "Photography", level: "Advanced" },
    { name: "Chess", level: "Beginner" },
    { name: "Yoga", level: "Intermediate" },
    // Add more hobbies as needed
  ],
  friends: [
    { name: "Alice", age: 28 },
    { name: "Bob", age: 32 },
    { name: "Eve", age: 29 },
    { name: "Charlie", age: 27 },
    { name: "David", age: 31 },
    { name: "Grace", age: 30 },
    { name: "Frank", age: 33 },
    { name: "Helen", age: 29 },
    { name: "Isabel", age: 28 },
    { name: "Jack", age: 31 },
    // Add more friends as needed
  ],
  job: {
    title: "Software Engineer",
    company: {
      name: "TechCo",
      location: {
        city: "Techville",
        state: "CA",
        country: "USA",
        prop1: {
          city: "Techville 1",
          state: "CA 1",
          country: "USA 1",
          prop2: {
            city: "Techville 2",
            state: "CA 2",
            country: "USA 2",
            prop3: {
              city: "Techville 3",
              state: "CA 3",
              country: "USA 3",
              prop4: {
                city: "Techville 4",
                state: "CA 4",
                country: "USA 4",
                prop5: {
                  val: "THE END IS HERE HOPEFULLY",
                },
              },
            },
          },
        },
      },
    },
    yearsOfExperience: {
      total: 5,
      currentCompany: 3,
    },
    responsibilities: ["Coding", "Testing", "Design"],
    benefits: {
      healthInsurance: true,
      retirementPlan: true,
      flexibleHours: true,
    },
  },
  hasPets: true,
  favoriteColor: "Blue",
};

const formDataField = "job.company.location.prop1.prop2.prop3.prop4.prop5.val";

const nativeSetter = (data: any, field: string, value: string | boolean) => {
  const copy = structuredClone(data);
  const keys = field.split(".");
  keys.reduce((obj, key, index) => {
    if (index === keys.length - 1) {
      obj[key] = value;
    } else {
      obj[key] = obj[key] || {};
    }
    return obj[key];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, copy as any);
  return copy;
};

const lodashSetter = (data: any, field: string, value: string | boolean) => {
  const copy = cloneDeep(data);
  set(copy, field, value);
  return copy;
};

const immerSetter = (data: any, value: string | boolean) => {
  return produce(data, (draftState: any) => {
    draftState.job.company.location.prop1.prop2.prop3.prop4.prop5.val = value;
  });
};

test("nativeSetter", () => {
  const numberOfRuns = 10;
  let totalExecutionTime = 0;
  const times = []

  for (let i = 0; i < numberOfRuns; i++) {
    const startTime = performance.now();

    nativeSetter(formData, formDataField, 'NEW VALUE');
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    totalExecutionTime += executionTime;
    times.push(executionTime)
  }

  // Calculate the average execution time
  const averageExecutionTime = totalExecutionTime / numberOfRuns;
  // console.table(times)
  console.log(
    `nativeSetter: Average execution time over ${numberOfRuns} runs: ${averageExecutionTime} milliseconds.`
  );

  expect(true).toBeTruthy();
});

test("lodashSetter", () => {
  const numberOfRuns = 10;
  let totalExecutionTime = 0;
  const times = []

  for (let i = 0; i < numberOfRuns; i++) {
    const startTime = performance.now();

    lodashSetter(formData, formDataField, 'NEW VALUE');
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    totalExecutionTime += executionTime;
    times.push(executionTime)
  }

  // Calculate the average execution time
  const averageExecutionTime = totalExecutionTime / numberOfRuns;
  // console.table(times)
  console.log(
    `lodashSetter: Average execution time over ${numberOfRuns} runs: ${averageExecutionTime} milliseconds.`
  );

  expect(true).toBeTruthy();
});


test("immerSetup", () => {
  const numberOfRuns = 10;
  let totalExecutionTime = 0;
  const times = []

  for (let i = 0; i < numberOfRuns; i++) {
    const startTime = performance.now();

    immerSetter(formData, 'NEW VALUE');
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    totalExecutionTime += executionTime;
    times.push(executionTime)
  }

  // Calculate the average execution time
  const averageExecutionTime = totalExecutionTime / numberOfRuns;
  // console.table(times)
  console.log(
    `immerSetup: Average execution time over ${numberOfRuns} runs: ${averageExecutionTime} milliseconds.`
  );

  expect(true).toBeTruthy();
});
