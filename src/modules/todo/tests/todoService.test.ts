import { 
  getAllTodo, 
  getTodoById, 
  createTodo, 
  updateTodo, 
  deleteTodo 
} from "../services/todoService";

describe("Todo Service", () => {
  let createdId = "";

  test("createTodo should create a new resource", async () => {
    const input = { name: "Test Todo" };
    const result = await createTodo(input);
    expect(result.name).toBe(input.name);
    createdId = result.id;
  });

  test("getAllTodo should return an array containing the new resource", async () => {
    const result = await getAllTodo();
    expect(result).toEqual(expect.arrayContaining([{ id: createdId, name: "Test Todo" }]));
  });

  test("getTodoById should fetch the created resource by ID", async () => {
    const result = await getTodoById(createdId);
    expect(result).not.toBeNull();
    expect(result?.id).toBe(createdId);
  });

  test("updateTodo should update the resource name", async () => {
    const updates = { name: "Updated Name" };
    const result = await updateTodo(createdId, updates);
    expect(result.name).toBe(updates.name);
  });

  test("deleteTodo should remove the resource", async () => {
    const result = await deleteTodo(createdId);
    expect(result.id).toBe(createdId);

    const fetchResult = await getTodoById(createdId);
    expect(fetchResult).toBeNull();
  });

  afterAll(async () => {
    // Leave a "Test for [resourceName] completed." record in the database
    const testCompleted = { name: "Test for Todo completed." };
    await createTodo(testCompleted);
    console.log(`✅ Added "Test for Todo completed." to the database.`);
  });
});
