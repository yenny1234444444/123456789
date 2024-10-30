const Com = require('../models/com.model.js');

async function createCom(options) {
  const comprar = new Com(
    options.fecha_compra,
    options.fecha_devolucion,
    options.estado,
    options.id_usuarios,
    options.id_productos,
    options.id_proveedor
  );

  try {
    comResult = await comprar.createCom();
  } catch (error) {
    if (error.statusCode) throw error;
    console.log(error);
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al comprar'
    };
  }

  return {
    message: 'compra creada exitosamente',
  };
}

async function viewCom() {
  const comprar = new Com();
  let comResult;
  
  try {
    comResult = await comprar.viewCom();
  } catch (error) {
    if (error.statusCode) throw error;
    console.log(error);
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al obtener lo comprado'
    };
  }

  return  comResult;
}

async function updateCom(options) {
  const comprar = new Com(
    options.fecha_compra,
    options.fecha_devolucion,
    options.estado,
    options.id_usuarios,
    options.id_productos,
    options.id_proveedor
  );

  try {
    ComResult = await productos.updateCom(options.id);
  } catch (error) {
    if (error.statusCode) throw error;
    console.log(error);
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al actualizar el usuario'
    };
  }

  return {
    message: 'Usuario actualizado exitosamente',
  };
}

async function deleteCom(options) {
  const comprar = new Com();

  try {
    comResult = await comprar.deleteCom(options.id);
  } catch (error) {
    if (error.statusCode) throw error;
    console.log(error);
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al eliminar el usuario'
    };
  }

  return {
    message: 'Usuario eliminado exitosamente',
  };
}

module.exports = {
  createCom,
  viewCom,
  updateCom,
  deleteCom
};
