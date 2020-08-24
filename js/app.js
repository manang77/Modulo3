// LABORATORIO MODULO 3: PARTE 1

console.log("************************ PRIMERA PARTE ********************************")

const product1 = { 
    count: 10, 
    price: 12.55, 
    type: "libro" };
printPriceProduct(product1)

const product2 = { 
    count: 8, 
    price: 23.34, 
    type: "alimentacion" };
printPriceProduct(product2)

const product3 = { 
    count: 3, 
    price: 64.55, 
    type: "ropa" };
printPriceProduct(product3)

console.log("************************ FIN PRIMERA PARTE ********************************")

/* Function: printPriceProduct: Realiza los calculos del IVA e imprime por consola los resultados para un producto 
    - Entrada: 
        articulo: incluye cantidad, precio unitario y tipo
    - Proceso
        Calcula importe producto
        Calcula tipo de IVA a aplicar e importe del IVA del producto
        Imprime los importes calculados por consola
*/
function printPriceProduct(lineaProducto) {

    let importe = getTotal(lineaProducto);
    let tipoIVA = getVAT(lineaProducto);
    let importeIVA = importe * tipoIVA / 100;
    let importeTotal = importe + importeIVA;

    console.log("**** Descripcion Producto ********")
    console.log("Tipo Producto..:", lineaProducto.type);
    console.log("Cantidad.......:", lineaProducto.count);
    console.log("Precio Unitario:", lineaProducto.price);
    console.log("**********************************")
    
    console.log("Importe del articulo......:", importe);
    console.log("Tipo IVA a aplicar........:", tipoIVA + "%");
    console.log("Importe IVA de la compra..:", importeIVA);
    console.log("Importe total de la compra:", importeTotal);
    console.log("**********************************")
}

/* Function: getTotal: Calcula el importe de la compra del articulo
    - Entrada: 
        articulo: incluye cantidad, precio unitario y tipo
    - Proceso
        Si la cantidad es negativa el precio del articulo será 0
        Si la cantidad es mayor que 0 calcula el precio del articulo: cantidad * precio unitario
*/
function getTotal(articulo) {

    return (articulo.count <= 0) ? 0 : articulo.count * articulo.price; 

}

/* Function: getVAT: Calcula el IVA a aplicar a la compra del articulo
    - Entrada: 
        articulo: incluye cantidad, precio unitario y tipo
    - Proceso
        Alimentacion: 10% de IVA
        Libro: 4% de IVA
        Resto: 21% de IVA
*/
function getVAT(articulo) {

    let tipoVAT; 

    switch (articulo.type) {
        case 'alimentacion':
            tipoVAT = 10;
            break;
        case 'libro':
            tipoVAT = 4;
            break;
        default:
            tipoVAT = 21;
            break;
    }

    return tipoVAT;
}



// LABORATORIO MODULO 3: PARTE 2
const empleado = {
    bruto: 24001,
    hijos: 1,
    pagas: 14
  }

  console.log("************************ SEGUNDA PARTE ************************************")
  console.log("**** Datos Empleado **************")
  console.log("Sueldo bruto empleado:", empleado.bruto);
  console.log("Número de hijos del empleado:", empleado.hijos);
  console.log("Número de pagas del empleado", empleado.pagas);
  console.log("**********************************")

  let retencionSalario = getRetencion(empleado);
  let importeRetencion = empleado.bruto * retencionSalario / 100;
  let salarioNeto = empleado.bruto - importeRetencion;
  let importeMensual = salarioNeto / empleado.pagas;

  console.log("Retención a aplicar al empleado....:", retencionSalario + "%");
  console.log("Importe de la retención a aplicar..:", importeRetencion);
  console.log("Salario neto tras aplicar retención:", salarioNeto);
  console.log("Salario neto mensual (" + empleado.pagas +" pagas)....:", importeMensual);

  console.log("************************ FIN SEGUNDA PARTE ********************************")

/* Function: getRetencion: Calcula la retencion a aplicar al empleado
    - Entrada: 
        empleado: incluye sueldo bruto, numero de hijos y numero de pagas
    - Proceso
        Sueldo bruto
            <= 12000: 0% 
            <= 24000: 8% 
            <= 34000: 16% 
            > 34000: 30%
        Numero de hijos:
            > 0: 2 puntos menos 
*/
function getRetencion(empleado) {

    let retencion = 0;

    if (empleado.bruto <= 12000) 
        retencion = 0;
    else if (empleado.bruto <= 24000)
        retencion = 8;
    else if (empleado.bruto <= 34000)
        retencion = 16;
    else
        retencion = 30;  

    if (empleado.hijos > 0 && retencion > 0)
        retencion = retencion - 2;    

    return retencion;
}
