import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {
  async handle(req: Request, res: Response) {
    const { name, description, price, category_id } = req.body;

    if (!req.file) {
      throw new Error("Arquivo de imagem não enviado!");
    } else {
      const { originalname, filename: banner } = req.file;

      const createProductService = new CreateProductService();

      const product = await createProductService.execute({
        name,
        description,
        category_id,
        price,
        banner,
      });

      return res.json(product);
    }
  }
}

export { CreateProductController };
