const Pro = require('../models/Pro.model.js');

async function createPro(options) {
  const productos = new Pro(
    options.imagen, 
    options.nombre, 
    options.marca, 
    options.cantidad, 
    options.disponible, 
    options.valor,
    options.estado
  );

  try {
    proResult = await productos.createPro();
  } catch (error) {
    if (error.statusCode) throw error;
    console.log(error);
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al crear el producto'
    };
  }

  return {
    message: 'Producto creado exitosamente',
  };
}

async function viewPro() {
  const productos = new Pro();
  let proResult;
  
  try {
    proResult = await productos.viewPro();
  } catch (error) {
    if (error.statusCode) throw error;
    console.log(error);
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al obtener los productos'
    };
  }

  return  proResult;
}

async function updatePro(options) {
  const productos = new Pro(
    options.imagen,
    options.nombre,
    options.marca,
    options.cantidad,
    options.disponible,
    options.valor,
    options.estado
  );

  try {
    proResult = await productos.update(options.id);
  } catch (error) {
    if (error.statusCode) throw error;
    console.log(error);
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al actualizar el producto'
    };
  }

  return {
    message: 'Producto actualizado exitosamente',
  };
}

async function deletePro(options) {
  const productos = new Pro();

  try {
    proResult = await productos.delete(options.id);
  } catch (error) {
    if (error.statusCode) throw error;
    console.log(error);
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al eliminar el producto'
    };
  }

  return {
    message: 'Producto eliminado exitosamente',
  };
}

module.exports = {
  createPro,
  viewPro,
  updatePro,
  deletePro
};
