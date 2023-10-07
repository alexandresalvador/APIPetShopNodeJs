const Cachorro = require("../models/cachorro.js");

class CachorroRepository {
  async GetAll() {
    return await Cachorro.findAll();
  }

  async GetById(id) {
    return await Cachorro.findOne({
      where: { id },
    });
  }

  async Add(cachorro) {
    await Cachorro.create(cachorro);
  }

  async Update(id, cachorro) {
    await Cachorro.update(cachorro, {
      where: { id },
    });
  }

  async Delete(id) {
    await Cachorro.destroy({
      where: { id },
    });
  }
}

module.exports = CachorroRepository;
