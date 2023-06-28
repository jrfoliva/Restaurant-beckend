import prismaClient from "../../prisma";

interface ProductRequest {
  name: string;
  price: string;
  description: string;
  banner: string;
  category_id: string;
}

class CreateProductService {
  async execute({
    name,
    description,
    category_id,
    price,
    banner,
  }: ProductRequest) {
    const product = await prismaClient.product.create({
      data: {
        name: name,
        description: description,
        category_id: category_id,
        price: price,
        banner: banner,
      },
    });

    return product;
  }
}

export { CreateProductService };
