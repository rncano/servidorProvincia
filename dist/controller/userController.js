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
class UserController {
    //CRUD	
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
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
            console.log("Usuario: ", req.body.usuario);
            console.log("Password: ", req.body.password);
            /*
            if(req.body.usuario=="Pepe"&&req.body.password=="123456")
            res.json({"login":"ok","mensaje":"Bienvenido!!"});
        else//Falta enviar el resultado estilizado a traves de una vista
            res.status(403).json({"login":"incorrecto","mensaje":"Usuario y/o contraseña incorrectos!!"});
            */
            const { usuario, password } = req.body; /* hacemos detrucsturing y obtenemos el ID. Es decir, obtenemos una parte de un objeto JS.*/
            const result = yield userModel_1.default.buscarNombre(usuario);
            console.log(usuario); //comentarios para ver que llegan a la bd 
            console.log(password); //comentarios para ver que llegan a la bd 
            console.log(result); //comentarios para ver que llegan a la bd 
            if (result != null) {
                if (result.nombre == usuario && result.password == password) {
                    res.json({ "login": "ok", "mensaje": "Bienvenido!!" });
                    return;
                }
            }
            res.status(403).json({ "login": "incorrecto", "mensaje": "Usuario y/o contraseña incorrectos!!" });
        });
    }
}
//Instanciamos el objeto controlador y lo exportamos
const userController = new UserController();
exports.default = userController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlci91c2VyQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLG9FQUE0QztBQUc1QyxNQUFNLGNBQWM7SUFFcEIsT0FBTztJQUNNLElBQUksQ0FBQyxHQUFXLEVBQUMsR0FBWTs7WUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEIsTUFBTSxRQUFRLEdBQWEsTUFBTSxtQkFBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEIsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTlCLENBQUM7S0FBQTtJQUVZLE9BQU8sQ0FBQyxHQUFXLEVBQUMsR0FBWTs7WUFDekMsTUFBTSxPQUFPLEdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQztZQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUV0QixNQUFNLFFBQVEsR0FBRyxNQUFNLG1CQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDeEUsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDWCxNQUFNLE1BQU0sR0FBRyxNQUFNLG1CQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM5QyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLENBQUMsQ0FBQzthQUNoRDtZQUNELE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELENBQUM7S0FBQTtJQUVZLElBQUksQ0FBQyxH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