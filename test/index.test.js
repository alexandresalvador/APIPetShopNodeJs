const { describe, expect, it, beforeAll, afterAll } = require("@jest/globals");
const clienteService = require("../src/services/cliente");
const connection = require("../src/database");

describe("Testes do primeiro exercício", () => {
  const service = new clienteService();
  let save;

  beforeAll(async () => {
    this.save = await connection.transaction();
  });

  afterAll(async () => {
    this.save.rollback();
  });

  it("Deve pegar uma pessoa", async () => {
    const result = await service.GetById(1, this.save);

    expect(result.id).toBe(1);
    expect(result.name).toBe("Alexandre Salvador");
    expect(result.telephone).toBe("47991952941");
  });
});
