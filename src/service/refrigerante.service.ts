import { CriarRefri } from "../types/refrigerante.js";
import {type Request, type Response} from "express"
import { refriRepository } from "../repositories/refrigerante.repository.js";

class RefriService {
  async create(req: Request<CriarRefri>, res:Response) {
    await refriRepository.create()
  }
}
export const refriService = new RefriService()