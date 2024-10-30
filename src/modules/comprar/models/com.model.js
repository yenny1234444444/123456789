const getConnection = require('../../../interface/DBconn.js');

// User model
class Com {
  constructor(fecha_compra,fecha_devolucion,estado,id_usuarios,id_productos,id_proveedor) {
    this.fecha_compra = fecha_compra;
    this.fecha_devolucion = fecha_devolucion;
    this.estado = estado;
    this.id_usuarios = id_usuarios;
    this.id_productos = id_productos;
    this.id_proveedor = id_proveedor;
  }

  async createCom() {
    const connection = await getConnection();

    try {
      // Ejecuta la consulta de inserción
      const [result] = await connection.query(`INSERT INTO productos 
            (fecha_compra,fecha_devolucion,estado,id_usuarios,id_productos,id_proveedor)
            VALUES (?,?,?,?,?,?,?)`, [this.fecha_compra,this.fecha_devolucion,this.estado,this.id_usuarios,this.id_productos,this.id_proveedor]);
      // Obtén el ID del último registro insertado
      const ComId = result.insertId;

      return { id: ComId }; // Devuelve el ID del nuevo usuario
    } catch (error) {
      console.log(error);
      throw {
        ok: false,
        statusCode: 500,
        data: 'Ocurrió un error al insertar la compra'
      };
    } finally {
      connection.release(); // Libera la conexión de vuelta al pool
    }
  }

  async viewCom() {
    const connection = await getConnection();

    try {
      // Ejecuta la consulta de selección
      const [result] = await connection.query(`
        SELECT 
        id,
        fecha_compra,
        fecha_devolucion,
        estado,
        id_usuarios,
        id_productos,
        id_proveedor
        FROM comprar
        JOIN
      `);

      return result; // Devuelve el resultado de la consulta
    } catch (error) {
      console.log(error);
      throw {
        ok: false,
        statusCode: 500,
        data: 'Ocurrió un error al obtener la compra'
      };
    } finally {
      connection.release(); // Libera la conexión de vuelta al pool
    }
  }

  async updateCom(ComId) {
    const connection = await getConnection();

    try {
      // Ejecuta la consulta de actualización
      await connection.query(`
        UPDATE productos
        SET imagen = ?,
        fecha_compra = ?,
        fecha_devolucion = ?,
        estado = ?,
        id_usuarios = ?,
        id_productos = ?,
        id_proveedor = ?
        WHERE id = ?
      `, [this.fecha_compra,this.fecha_devolucion,this.estado,this.id_usuarios,this.id_productos,this.id_proveedor,ComId]);

      return { id: ComId }; // Devuelve el ID del usuario actualizado
    } catch (error) {
      console.log(error);
      throw {
        ok: false,
        statusCode: 500,
        data: 'Ocurrió un error al actualizar la compra'
      };
    } finally {
      connection.release(); // Libera la conexión de vuelta al pool
    }
  }

  async deleteCom(ComId) {
    const connection = await getConnection();

    try {
      // Ejecuta la consulta de eliminación
      await connection.query(`
        DELETE FROM comprar
        WHERE id = ?
      `, [ComId]);

      return { id: ComId }; // Devuelve el ID del usuario eliminado
    } catch (error) {
      console.log(error);
      throw {
        ok: false,
        statusCode: 500,
        data: 'Ocurrió un error al eliminar la compra'
      };
    } finally {
      connection.release(); // Libera la conexión de vuelta al pool
    }
  }
}

module.exports = Com;
