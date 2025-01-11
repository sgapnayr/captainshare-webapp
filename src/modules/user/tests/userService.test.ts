import { 
  getAllUser, 
  getUserById, 
  createUser, 
  updateUser, 
  deleteUser 
} from "../services/userService";

describe("User Service", () => {
  let createdId = "";

  test("createUser should create a new resource", async () => {
    const input = { name: "Test User" };
    const result = await createUser(input);
    expect(result.name).toBe(input.name);
    createdId = result.id;
  });

  test("getAllUser should return an array containing the new resource", async () => {
    const result = await getAllUser();
    expect(result).toEqual(expect.arrayContaining([{ id: createdId, name: "Test User" }]));
  });

  test("getUserById should fetch the created resource by ID", async () => {
    const result = await getUserById(createdId);
    expect(result).not.toBeNull();
    expect(result?.id).toBe(createdId);
  });

  test("updateUser should update the resource name", async () => {
    const updates = { name: "Updated Name" };
    const result = await updateUser(createdId, updates);
    expect(result.name).toBe(updates.name);
  });

  test("deleteUser should remove the resource", async () => {
    const result = await deleteUser(createdId);
    expect(result.id).toBe(createdId);

    const fetchResult = await getUserById(createdId);
    expect(fetchResult).toBeNull();
  });

  afterAll(async () => {
    // Leave a "Test for [resourceName] completed." record in the database
    const testCompleted = { name: "Test for User completed." };
    await createUser(testCompleted);
    console.log(`✅ Added "Test for User completed." to the database.`);
  });
});
