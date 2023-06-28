import { Router } from "express";
import multer from "multer";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetaillUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListaCategoryController } from "./controllers/category/ListaCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import uploadConfig from "./config/multer";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { DeleteOrderController } from "./controllers/order/DeleteOrderController";
import { AddItemController } from "./controllers/order/AddItemController";
import { DeleteItemController } from "./controllers/order/DeleteItemController";
import { SendOrderController } from "./controllers/order/SendOrderController";
import { ListOrdersController } from "./controllers/order/ListOrdersController";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

// -- ROTAS USER --
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailUserController().handle);

// -- ROTAS CATEGORY --
router.post("/category", isAuthenticated, new CreateCategoryController().handle);
router.get("/category", isAuthenticated, new ListaCategoryController().handle);

// -- ROTAS PRODUCTS --
router.post("/product", isAuthenticated, upload.single('file'), new CreateProductController().handle);
router.get("/category/product", isAuthenticated, new ListByCategoryController().handle); //Produtos por categoria

// -- ORDERS
router.post("/order", isAuthenticated, new CreateOrderController().handle);
router.delete("/order", isAuthenticated, new DeleteOrderController().handle);
router.put("/order/send", isAuthenticated, new SendOrderController().handle); //Altera draft para false, significa pedido sendo preparado.
router.get("/orders", isAuthenticated, new ListOrdersController().handle); //Listar os pedidos que estão sendo preparados

// -- ITEMS OF ORDERS
router.post("/order/add", isAuthenticated, new AddItemController().handle); // Adiciona produto ao pedido
router.delete("/order/remove", isAuthenticated, new DeleteItemController().handle); //Remover item do pedido

export { router };
