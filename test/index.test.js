const { describe, expect, it, beforeAll, afterAll } = require("@jest/globals");
const ClienteService = require("../src/services/cliente");
const connection = require("../src/database");

describe("Testes", () => {
  const service = new ClienteService();
  let save;

  beforeAll(async () => {
    save = await connection.transaction();
  });

  afterAll(async () => {

    await save.rollback();
  });

  it("Deve dar get em uma pessoa", async () => {
    const result = await service.GetById(1, save);

    expect(result.id).toBe(1);
    expect(result.nome).toBe("Alexandre"); 
    expect(result.telefone).toBe("47991952941");
  });
});
