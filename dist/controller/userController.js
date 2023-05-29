"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = __importDefault(require("../models/userModel"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class UserController {
    //CRUD	
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.header("Authorization")); //Observamos el valor del token
            console.log(req.body);
            const usuarios = yield userModel_1.default.listar();
            console.log(usuarios);
            return res.json(usuarios);
        });
    }
    addUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = req.body;
            console.log(req.body);
            const busqueda = yield userModel_1.default.buscarNombre((String)(usuario.nombre));
            if (!busqueda) {
                const result = yield userModel_1.default.crear(usuario);
                return res.json({ mensaje: 'User saved!!' });
            }
            return res.json({ mensaje: 'User exists!!' });
        });
    }
    find(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params.id);
            const { id } = req.params;
            const usuario = yield userModel_1.default.buscarId(id);
            if (usuario)
                return res.json(usuario);
            res.status(404).json({ text: "User doesn't exists" });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const { id } = req.params;
            const result = yield userModel_1.default.actualizar(req.body, id);
            return res.json({ text: 'updating a user ' + id });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const { id } = req.params; // hacemos detrucsturing y obtenemos el ID. Es decir, obtenemos una parte de un objeto JS.
            const result = yield userModel_1.default.eliminar(id);
            return res.json({ text: 'deleting a user ' + id });
        });
    }
    //FIN CRUD
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Datos: ", req.body); //podemos pasar objetos separados por comas para inmprimir.
            console.log("Usuario: ", req.body.nombre);
            console.log("Password: ", req.body.password);
            /*
            if(req.body.usuario=="Pepe"&&req.body.password=="123456")
            res.json({"login":"ok","mensaje":"Bienvenido!!"});
        else//Falta enviar el resultado estilizado a traves de una vista
            res.status(403).json({"login":"incorrecto","mensaje":"Usuario y/o contraseña incorrectos!!"});
            */
            const { nombre, password } = req.body; /* hacemos detrucsturing y obtenemos el ID. Es decir, obtenemos una parte de un objeto JS.*/
            const result = yield userModel_1.default.buscarNombre(nombre);
            console.log(nombre); //comentarios para ver que llegan a la bd 
            console.log(password); //comentarios para ver que llegan a la bd 
            console.log(result); //comentarios para ver que llegan a la bd 
            if (result != null) {
                if (result.nombre == nombre && result.password == password) {
                    const token = jsonwebtoken_1.default.sign({ _id: result.id }, "123456");
                    res.json({ "login": "ok", "mensaje": "Bienvenido " + result.nombre, token: token, "rol": result.rol, "nombre": result.nombre });
                    return;
                }
            }
            res.json({ "login": "incorrecto", "mensaje": "Usuario y/o contraseña incorrectos!!" });
        });
    }
}
//Instanciamos el objeto controlador y lo exportamos
const userController = new UserController();
exports.default = userController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlci91c2VyQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLG9FQUE0QztBQUU1QyxnRUFBK0I7QUFFL0IsTUFBTSxjQUFjO0lBRXBCLE9BQU87SUFDTSxJQUFJLENBQUMsR0FBVyxFQUFDLEdBQVk7O1lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUEsK0JBQStCO1lBQ3hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RCLE1BQU0sUUFBUSxHQUFhLE1BQU0sbUJBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RCLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUU5QixDQUFDO0tBQUE7SUFFWSxPQUFPLENBQUMsR0FBVyxFQUFDLEdBQVk7O1lBQ3pDLE1BQU0sT0FBTyxHQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFdEIsTUFBTSxRQUFRLEdBQUcsTUFBTSxtQkFBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3hFLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ1gsTUFBTSxNQUFNLEdBQUcsTUFBTSxtQkFBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDOUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxDQUFDLENBQUM7YUFDaEQ7WUFDRCxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUNsRCxDQUFDO0tBQUE7SUFFWSxJQUFJLENBQUMsR0FBVyxFQUFDLEdBQVk7O1lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMzQixNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztZQUMxQixNQUFNLE9BQU8sR0FBVyxNQUFNLG1CQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3JELElBQUksT0FBTztnQkFDUCxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDN0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUUsQ0FBQyxDQUFDO1FBQzFELENBQUM7S0FBQTtJQUVZLE1BQU0sQ0FBQyxHQUFXLEVBQUMsR0FBWTs7WUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7WUFDMUIsTUFBTSxNQUFNLEdBQUcsTUFBTSxtQkFBUyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBRXhELE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxrQkFBa0IsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzNELENBQUM7S0FBQTtJQUVZLE1BQU0sQ0FBQyxHQUFXLEVBQUMsR0FBWTs7WUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFaEIsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQywwRkFBMEY7WUFDckgsTUFBTSxNQUFNLEdBQUcsTUFBTSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM1QyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMzRCxDQUFDO0tBQUE7SUFDRCxVQUFVO0lBR0csS0FBSyxDQUFDLEdBQVcsRUFBQyxHQUFZOztZQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQywyREFBMkQ7WUFHOUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRTlDOzs7OztjQUtFO1lBRUYsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsNEZBQTRGO1lBQ25JLE1BQU0sTUFBTSxHQUFXLE1BQU0sbUJBQVMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLDBDQUEwQztZQUMvRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsMENBQTBDO1lBQ2pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQywwQ0FBMEM7WUFDL0QsSUFBSSxNQUFNLElBQUcsSUFBSSxFQUFDO2dCQUNkLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLFFBQVEsSUFBSSxRQUFRLEVBQUM7b0JBQ3ZELE1BQU0sS0FBSyxHQUFRLHNCQUFHLENBQUMsSUFBSSxDQUFDLEVBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUMsRUFBQyxRQUFRLENBQUMsQ0FBQztvQkFDdkQsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFDLGFBQWEsR0FBQyxNQUFNLENBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO29CQUN0SCxPQUFPO2lCQUNWO2FBQ0o7WUFDRCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTyxFQUFDLFlBQVksRUFBQyxTQUFTLEVBQUMsc0NBQXNDLEVBQUMsQ0FBQyxDQUFDO1FBQ3RGLENBQUM7S0FBQTtDQUVBO0FBRUQsb0RBQW9EO0FBQ3BELE1BQU0sY0FBYyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7QUFDNUMsa0JBQWUsY0FBYyxDQUFDIn0=