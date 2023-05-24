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
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = require("mysql2/promise");
class UserModel {
    constructor() {
        this.config(); //aplicamos la conexion con la BD.
    }
    config() {
        return __awaiter(this, void 0, void 0, function* () {
            this.db = yield (0, promise_1.createPool)({
                host: 'localhost',
                user: 'root',
                password: '',
                database: 'bdprovincia',
                connectionLimit: 10
                //host:'bxqorjm2x4whcm29z6vn-mysql.services.clever-cloud.com' ,
                //user:'udpjgpm11l3pjdsi' ,
                //password: 'tdKIvVKnro1ICxhBWbUj',
                //database: 'bxqorjm2x4whcm29z6vn' ,
                //connectionLimit: 10
            });
        });
    }
    /* Nota: Aqui cada uno tiene que setear los parametros de su propio servidor MySQL / MariaDB.*/
    listar() {
        return __awaiter(this, void 0, void 0, function* () {
            //const db=this.connection;
            const [usuarios] = yield this.db.query('SELECT * FROM usuarios');
            console.log(usuarios[0]);
            //console.log(usuarios[0]);
            //devuelve tabla mas propiedades. Solo debemos devolver tabla. Posicion 0 del array devuelto.
            return usuarios;
        });
    }
    //Devuelve un objeto cuya fila en la tabla usuarios coincide con id.
    //Si no la encuentra devuelve null
    buscarId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [encontrado] = yield this.db.query('SELECT * FROM usuarios WHERE id = ?', [id]);
            //Ojo la consulta devuelve una tabla de una fila. (Array de array) Hay que desempaquetar y obtener la unica fila al enviar
            if (encontrado[0])
                return encontrado[0];
            return null;
        });
    }
    //Devuelve un objeto cuya fila en la tabla usuarios coincide con nombre.
    //Si no la encuentra devuelve null
    buscarNombre(nombre) {
        return __awaiter(this, void 0, void 0, function* () {
            const encontrado = yield this.db.query('SELECT * FROM usuarios WHERE nombre = ?', [nombre]);
            //Ojo la consulta devuelve una tabla de una fila. (Array de array) Hay que desempaquetar y obtener la unica fila al enviar
            if (encontrado.length > 1)
                return encontrado[0][0];
            return null;
        });
    }
    //Devuelve 1 si logro crear un nuevo usuario de la tabla usuarios
    crear(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = (yield this.db.query('INSERT INTO usuarios (nombre,email, password,rol) VALUES(?,?,?,?)', [usuario.nombre,
                usuario.email,
                usuario.password,
                usuario.rol]))[0].affectedRows;
            console.log(result);
            return result;
        });
    }
    //Devuelve 1 si logro actualizar el usuario indicado por id
    actualizar(usuario, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = (yield this.db.query('UPDATE usuarios SET ? WHERE ID = ?', [usuario, id]))[0].affectedRows;
            console.log(result);
            return result;
        });
    }
    //Devuelve 1 si logro eliminar el usuario indicado por id
    eliminar(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = (yield this.db.query('DELETE FROM usuarios WHERE ID = ?', [id]))[0].affectedRows;
            console.log(user);
            return user;
        });
    }
}
//Exportamos el objeto userModel con 
const userModel = new UserModel();
exports.default = userModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlck1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZGVscy91c2VyTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBNEM7QUFLNUMsTUFBTSxTQUFTO0lBRWQ7UUFDQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxrQ0FBa0M7SUFDbEQsQ0FBQztJQUVLLE1BQU07O1lBQ1gsSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLElBQUEsb0JBQVUsRUFBQztnQkFDMUIsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLElBQUksRUFBRSxNQUFNO2dCQUNaLFFBQVEsRUFBRSxFQUFFO2dCQUNaLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixlQUFlLEVBQUUsRUFBRTtnQkFDbkIsK0RBQStEO2dCQUMvRCwyQkFBMkI7Z0JBQzNCLG1DQUFtQztnQkFDbkMsb0NBQW9DO2dCQUNwQyxxQkFBcUI7YUFDckIsQ0FBQyxDQUFDO1FBQ0osQ0FBQztLQUFBO0lBQ0QsK0ZBQStGO0lBR3pGLE1BQU07O1lBQ1gsMkJBQTJCO1lBQzNCLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDakUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QiwyQkFBMkI7WUFDM0IsNkZBQTZGO1lBQzdGLE9BQU8sUUFBUSxDQUFDO1FBQ2pCLENBQUM7S0FBQTtJQUVELG9FQUFvRTtJQUNwRSxrQ0FBa0M7SUFDNUIsUUFBUSxDQUFDLEVBQVU7O1lBQ3hCLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBUSxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLHFDQUFxQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMzRiwwSEFBMEg7WUFDMUgsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixPQUFPLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLElBQUksQ0FBQztRQUNiLENBQUM7S0FBQTtJQUNELHdFQUF3RTtJQUN4RSxrQ0FBa0M7SUFDNUIsWUFBWSxDQUFDLE1BQWM7O1lBQ2hDLE1BQU0sVUFBVSxHQUFRLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMseUNBQXlDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2pHLDBIQUEwSDtZQUMxSCxJQUFJLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFDeEIsT0FBTyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekIsT0FBTyxJQUFJLENBQUM7UUFDYixDQUFDO0tBQUE7SUFHRCxpRUFBaUU7SUFDM0QsS0FBSyxDQUFDLE9BQWdCOztZQUMzQixNQUFNLE1BQU0sR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsbUVBQW1FLEVBQ3ZHLENBQUMsT0FBTyxDQUFDLE1BQU07Z0JBQ2YsT0FBTyxDQUFDLEtBQUs7Z0JBQ2IsT0FBTyxDQUFDLFFBQVE7Z0JBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsT0FBTyxNQUFNLENBQUM7UUFDZixDQUFDO0tBQUE7SUFFRCwyREFBMkQ7SUFDckQsVUFBVSxDQUFDLE9BQWdCLEVBQUUsRUFBVTs7WUFDNUMsTUFBTSxNQUFNLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLG9DQUFvQyxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7WUFDMUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixPQUFPLE1BQU0sQ0FBQztRQUNmLENBQUM7S0FBQTtJQUVELHlEQUF5RDtJQUNuRCxRQUFRLENBQUMsRUFBVTs7WUFDeEIsTUFBTSxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLG1DQUFtQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztZQUM5RixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLE9BQU8sSUFBSSxDQUFDO1FBQ2IsQ0FBQztLQUFBO0NBQ0Q7QUFFRCxxQ0FBcUM7QUFFckMsTUFBTSxTQUFTLEdBQWMsSUFBSSxTQUFTLEVBQUUsQ0FBQztBQUM3QyxrQkFBZSxTQUFTLENBQUMifQ==