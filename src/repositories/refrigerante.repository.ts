import { knex } from "../database/knex.js";
import { CriarRefri } from "../types/refrigerante.js";

class RefriRepository{
  async create(req:Request<CriarRefri>, res:Response){

  }
}
export const refriRepository = new RefriRepository()