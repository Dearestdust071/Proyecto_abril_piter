import ServerConfig from "./config/server/ServerConfig";
import bodyParser from "body-parser";
import cors from "cors";
import UserRouter from "./routes/UserRoute";
import { log } from "console";
import { SERVER_PORT } from "./global/Environment";

const server = ServerConfig.instance;

// bodyParser sirve para quitar el cors o algo asi 
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());
server.app.use(cors()); // Añadí el uso del CORS middleware

// Opciones para todas las rutas
server.app.options('*');

// Rutas de los servicios
server.app.use("/users", UserRouter);

server.start(() => {
    console.log(`Servidor corriendo en el puerto: ${server.port}`);
});
