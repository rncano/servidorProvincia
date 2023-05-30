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
class ProvinciaModel {
    constructor() {
        this.config(); //aplicamos la conexion con la BD.
    }
    config() {
        return __awaiter(this, void 0, void 0, function* () {
            this.db = yield (0, promise_1.createPool)({
                //host: 'localhost',
                //user: 'root',
                //password: '',
                //database: 'bdprovincia',
                //connectionLimit: 10
                host: 'bxqorjm2x4whcm29z6vn-mysql.services.clever-cloud.com',
                user: 'udpjgpm11l3pjdsi',
                password: 'tdKIvVKnro1ICxhBWbUj',
                database: 'bxqorjm2x4whcm29z6vn',
                connectionLimit: 10
            });
        });
    }
    /* Nota: Aqui cada uno tiene que setear los parametros de su propio servidor MySQL / MariaDB.*/
    listarProvincia() {
        return __awaiter(this, void 0, void 0, function* () {
            //const db=this.connection;
            const provincias = yield this.db.query('SELECT * FROM provincias');
            //console.log(provincias[0]);
            //devuelve tabla mas propiedades. Solo debemos devolver tabla. Posicion 0 del array devuelto.
            return provincias[0];
        });
    }
    //Devuelve un objeto cuya fila en la tabla provincias coincide con id.
    //Si no la encuentra devuelve null
    buscarIdProvincia(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const encontrado = yield this.db.query('SELECT * FROM provincias WHERE id = ?', [id]);
            //Ojo la consulta devuelve una tabla de una fila. (Array de array) Hay que desempaquetar y obtener la unica fila al enviar
            if (encontrado.length > 1)
                return encontrado[0][0];
            return null;
        });
    }
    //Devuelve un objeto cuya fila en la tabla usuarios coincide con nombre.
    //Si no la encuentra devuelve null
    buscarNombreProvincia(nombre) {
        return __awaiter(this, void 0, void 0, function* () {
            const encontrado = yield this.db.query('SELECT * FROM provincias WHERE nombre = ?', [nombre]);
            //Ojo la consulta devuelve una tabla de una fila. (Array de array) Hay que desempaquetar y obtener la unica fila al enviar
            if (encontrado.length > 1)
                return encontrado[0][0];
            return null;
        });
    }
    //Devuelve 1 si logro crear una nueva provincia  de la tabla provincias
    crearProvincia(provincia) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = (yield this.db.query('INSERT INTO provincias (nombre,capital, descripcion,imagen) VALUES(?,?,?,?)', [provincia.nombre,
                provincia.capital,
                provincia.descripcion,
                provincia.imagen]))[0].affectedRows;
            console.log(result);
            return result;
        });
    }
    //Devuelve 1 si logro actualizar el usuario indicado por id
    actualizarProvincia(provincia, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = (yield this.db.query('UPDATE provincias SET ? WHERE ID = ?', [provincia, id]))[0].affectedRows;
            console.log(result);
            return result;
        });
    }
    //Devuelve 1 si logro eliminar el usuario indicado por id
    eliminarProvincia(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const provincia = (yield this.db.query('DELETE FROM provincias WHERE ID = ?', [id]))[0].affectedRows;
            console.log(provincia);
            return provincia;
        });
    }
}
//Exportamos el objeto userModel con 
const provinciaModel = new ProvinciaModel();
exports.default = provinciaModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmluY2lhTW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kZWxzL3Byb3ZpbmNpYU1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsNENBQTRDO0FBRzVDLE1BQU0sY0FBYztJQUVuQjtRQUNDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLGtDQUFrQztJQUNsRCxDQUFDO0lBRUssTUFBTTs7WUFDWCxJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sSUFBQSxvQkFBVSxFQUFDO2dCQUMxQixvQkFBb0I7Z0JBQ3BCLGVBQWU7Z0JBQ2YsZUFBZTtnQkFDZiwwQkFBMEI7Z0JBQzFCLHFCQUFxQjtnQkFDckIsSUFBSSxFQUFDLHNEQUFzRDtnQkFDM0QsSUFBSSxFQUFDLGtCQUFrQjtnQkFDdkIsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsZUFBZSxFQUFFLEVBQUU7YUFDbkIsQ0FBQyxDQUFDO1FBQ0osQ0FBQztLQUFBO0lBQ0QsK0ZBQStGO0lBQ3pGLGVBQWU7O1lBQ3BCLDJCQUEyQjtZQUMzQixNQUFNLFVBQVUsR0FBRyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7WUFDbkUsNkJBQTZCO1lBQzdCLDZGQUE2RjtZQUM3RixPQUFPLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixDQUFDO0tBQUE7SUFFRCxzRUFBc0U7SUFDdEUsa0NBQWtDO0lBQzVCLGlCQUFpQixDQUFDLEVBQVU7O1lBQ2pDLE1BQU0sVUFBVSxHQUFRLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsdUNBQXVDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzNGLDBIQUEwSDtZQUMxSCxJQUFJLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFDeEIsT0FBTyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekIsT0FBTyxJQUFJLENBQUM7UUFDYixDQUFDO0tBQUE7SUFDRCx3RUFBd0U7SUFDeEUsa0NBQWtDO0lBQzVCLHFCQUFxQixDQUFDLE1BQWM7O1lBQ3pDLE1BQU0sVUFBVSxHQUFRLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsMkNBQTJDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ25HLDBIQUEwSDtZQUMxSCxJQUFJLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFDeEIsT0FBTyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekIsT0FBTyxJQUFJLENBQUM7UUFDYixDQUFDO0tBQUE7SUFFRCx1RUFBdUU7SUFFakUsY0FBYyxDQUFDLFNBQW9COztZQUN4QyxNQUFNLE1BQU0sR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsNkVBQTZFLEVBQ2pILENBQUMsU0FBUyxDQUFDLE1BQU07Z0JBQ2pCLFNBQVMsQ0FBQyxPQUFPO2dCQUNqQixTQUFTLENBQUMsV0FBVztnQkFDckIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7WUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixPQUFPLE1BQU0sQ0FBQztRQUNmLENBQUM7S0FBQTtJQUVELDJEQUEyRDtJQUNyRCxtQkFBbUIsQ0FBQyxTQUFvQixFQUFFLEVBQVU7O1lBQ3pELE1BQU0sTUFBTSxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxzQ0FBc0MsRUFBRSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1lBQzlHLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsT0FBTyxNQUFNLENBQUM7UUFDZixDQUFDO0tBQUE7SUFFRCx5REFBeUQ7SUFDbkQsaUJBQWlCLENBQUMsRUFBVTs7WUFDakMsTUFBTSxTQUFTLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLHFDQUFxQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztZQUNyRyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3ZCLE9BQU8sU0FBUyxDQUFDO1FBQ2xCLENBQUM7S0FBQTtDQUVEO0FBRUQscUNBQXFDO0FBRXJDLE1BQU0sY0FBYyxHQUFtQixJQUFJLGNBQWMsRUFBRSxDQUFDO0FBQzVELGtCQUFlLGNBQWMsQ0FBQyJ9