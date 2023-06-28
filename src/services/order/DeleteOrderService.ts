import prismaClient from "../../prisma";

interface DeleteOrderRequest {
  order_id: string;
}

class DeleteOrderService {
  async execute({ order_id }: DeleteOrderRequest) {
    const order = await prismaClient.order.delete({
      where: {
        id: order_id,
      },
    });

    return order;
  }
}

export { DeleteOrderService };
