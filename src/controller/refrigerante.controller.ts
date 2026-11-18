import { CriarRefri } from "../types/refrigerante.js";
import { type Request, type Response } from "express"
import { refriService } from "../service/refrigerante.service.js";

class RefriController {

  async create(req: Request<CriarRefri>, res: Response) {
    try {
      const refri = await refriService.create(req.body)
      return res.json(refri)
    } catch (error) {
      console.error(error)
      return res.json({ message: "Erro interno do servidor" })
    }
  }
}
export const refriController = new RefriController()