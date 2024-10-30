const getConnection = require('../../../interface/DBconn.js');

// User model
class Sup {
  constructor(nombreCompleto,tipoDocumento,documento,contrasena,rol,estado,correo) {
    this.nombreCompleto = nombreCompleto;
    this.tipoDocumento = tipoDocumento;
    this.documento = documento;
    this.contrasena = contrasena;
    this.rol = rol;
    this.estado = estado;
    this.correo = correo;
  }

  async createSup() {
    const connection = await getConnection();

    try {
      // Ejecuta la consulta de inserción
      const [result] = await connection.query(`INSERT INTO proveedor 
            (NOMBRE_COMPLETO,TIPO_DOCUMENTO,DOCUMENTO,CONTRASENA,ROL,ESTADO,CORREO)
            VALUES (?,?,?,?,?,?,?)`, [this.nombreCompleto, this.tipoDocumento,this.documento,this.contrasena,this.rol,this.estado,this.correo]);

      // Obtén el ID del último registro insertado
      const SupId = result.insertId;

      return { id: SupId }; // Devuelve el ID del nuevo usuario
    } catch (error) {
      console.log(error);
      throw {
        ok: false,
        statusCode: 500,
        data: 'Ocurrió un error al insertar el proveedor'
      };
    } finally {
      connection.release(); // Libera la conexión de vuelta al pool
    }
  }

  async viewSup() {
    const connection = await getConnection();

    try {
      // Ejecuta la consulta de selección
      const [result] = await connection.query(`
        SELECT 
        id,
        NOMBRE_COMPLETO as nombreCompleto,
        TIPO_DOCUMENTO as tipoDocument,
        DOCUMENTO as documento,
        CONTRASENA as contrasena,
        ROL as rol,
        ESTADO as estado,
        CORREO as correo
        FROM proveedor
      `);

      return result; // Devuelve el resultado de la consulta
    } catch (error) {
      console.log(error);
      throw {
        ok: false,
        statusCode: 500,
        data: 'Ocurrió un error al obtener los proveedores'
      };
    } finally {
      connection.release(); // Libera la conexión de vuelta al pool
    }
  }

  async updateSup(SupId) {
    const connection = await getConnection();

    try {
      // Ejecuta la consulta de actualización
      await connection.query(`
        UPDATE proveedor
        SET nombreCompleto = ?,
        tipoDocumento = ?,
        documento = ?,
        contrasena = ?,
        rol = ?,
        estado = ?,
        correo = ?
        WHERE id = ?
      `, [this.nombreCompleto, this.tipoDocumento,this.documento,this.contrasena,this.rol,this.estado,this.correo ,userId]);

      return { id: SupId }; // Devuelve el ID del usuario actualizado
    } catch (error) {
      console.log(error);
      throw {
        ok: false,
        statusCode: 500,
        data: 'Ocurrió un error al actualizar el proveedor'
      };
    } finally {
      connection.release(); // Libera la conexión de vuelta al pool
    }
  }

  async deleteSup(SupId) {
    const connection = await getConnection();

    try {
      // Ejecuta la consulta de eliminación
      await connection.query(`
        DELETE FROM proveedor
        WHERE id = ?
      `, [userId]);

      return { id: SupId }; // Devuelve el ID del usuario eliminado
    } catch (error) {
      console.log(error);
      throw {
        ok: false,
        statusCode: 500,
        data: 'Ocurrió un error al eliminar el proveedor'
      };
    } finally {
      connection.release(); // Libera la conexión de vuelta al pool
    }
  }
}

module.exports = Sup;
