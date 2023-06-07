"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const provinciaRoutes_1 = __importDefault(require("./routes/provinciaRoutes"));
//Creo una clase Servidor
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        //El constructor ejecuta metodos que indicaran configuracion inicial del servidor
        this.config();
        this.routes();
    }
    config() {
        //Configuraciones
        this.app.set('port', process.env.PORT || 3000);
        //Middlewares
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)()); //iniciamos cors
        this.app.options('*', (0, cors_1.default)()); // Agrega esto si necesitas manejar las solicitudes de método OPTIONS
        /* ESTA PARTE LA USABA PARA CONFIGURAR EL LIVE SERVER
        this.app.use(
          cors({
            origin: 'https://dsw-act3.web.app', // Reemplaza esto con tu dominio permitido
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            allowedHeaders: ['Content-Type', 'Authorization'],
          })
        );
          */
        this.app.use(express_1.default.json()); //habilitamos el intercambio de objetos json entre aplicaciones
        this.app.use(express_1.default.urlencoded({ extended: false })); //habilitamos para recibir datos a traves de formularios html.
        //Variables globales
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use("/user", userRoutes_1.default); //user sera un objeto existente en la app. 
        this.app.use("/provincia", provinciaRoutes_1.default); //provincia sera un objeto existente en la app. 
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("Sever escuchando en puerto: " + this.app.get('port'));
        });
    }
}
//Instanciamos el obj Servidor
const server = new Server();
server.start(); //Ejecutamos el metodo start en inica el server
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzREFBNkM7QUFDN0Msb0RBQTRCO0FBQzVCLGdEQUF3QjtBQUN4Qix1RUFBK0M7QUFDL0MscUVBQTZDO0FBQzdDLCtFQUF1RDtBQUd2RCx5QkFBeUI7QUFDekIsTUFBTSxNQUFNO0lBRVg7UUFDQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUEsaUJBQU8sR0FBRSxDQUFDO1FBRXJCLGlGQUFpRjtRQUNqRixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDZixDQUFDO0lBQ0QsTUFBTTtRQUNMLGlCQUFpQjtRQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUM7UUFDeEMsYUFBYTtRQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUEsZ0JBQU0sRUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRzVCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUEsY0FBSSxHQUFFLENBQUMsQ0FBQyxDQUFDLGdCQUFnQjtRQUM1QyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBQSxjQUFJLEdBQUUsQ0FBQyxDQUFDLENBQUMscUVBQXFFO1FBRXBHOzs7Ozs7OztZQVFJO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsK0RBQStEO1FBQzdGLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsVUFBVSxDQUFDLEVBQUMsUUFBUSxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLDhEQUE4RDtRQUV6SCxvQkFBb0I7SUFDbkIsQ0FBQztJQUNELE1BQU07UUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxxQkFBVyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLG9CQUFVLENBQUMsQ0FBQyxDQUFDLDJDQUEyQztRQUM3RSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUMseUJBQWUsQ0FBQyxDQUFDLENBQUMsZ0RBQWdEO0lBQ3pGLENBQUM7SUFDTCxLQUFLO1FBQ0osSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFO1lBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLEdBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNsRSxDQUFDLENBQ0QsQ0FBQztJQUNILENBQUM7Q0FDRDtBQUVELDhCQUE4QjtBQUM5QixNQUFNLE1BQU0sR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO0FBQzVCLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLCtDQUErQyJ9