/* ==========================================================================
   Todo lo que se edita a mano está en este archivo.
   Buscá "EDITAR" para los datos que todavía son de ejemplo.
   ========================================================================== */

// EDITAR: tu dirección de correo.
export const correo = "CORREO@EJEMPLO.COM";
export const mailto = `mailto:${correo}?subject=Amano`;

// EDITAR: la versión, cuando publiques una nueva.
export const version = "0.1.0";
export const etapa = "beta";

export const requisitos = [
  "Windows 10 u 11, 64 bits",
  "Instalador .exe o .msi",
  "No requiere internet para funcionar",
];

export const cifras = [
  { valor: 35000, decimales: 0, sufijo: "", texto: "", rotulo: "artículos en catálogo, sin demora" },
  { valor: 2, decimales: 1, sufijo: " ms", texto: "", rotulo: "en abrir el catálogo entero" },
  { valor: 247, decimales: 0, sufijo: "", texto: "", rotulo: "pruebas automáticas" },
  { valor: 0, decimales: 0, sufijo: "", texto: "$0", rotulo: "de cuota mensual, sin servidor" },
];

/* --- precios --------------------------------------------------------------
   `precio` es texto libre: "A consultar", "$ 250.000", "USD 199", etc.
   Se pueden agregar más planes al arreglo; la grilla se acomoda sola.
   ------------------------------------------------------------------------- */

export const planes = [
  {
    nombre: "Licencia Amano",
    // EDITAR: el precio.
    precio: "A consultar",
    detalle: "Sin cuota mensual",
    destacado: true,
    incluye: [
      "Todas las funciones, sin módulos aparte",
      "Varias terminales contra la misma base",
      "Importación de listas de proveedores",
      "Base local: los datos quedan en tu equipo",
      "Instalación y demostración a pedido",
    ],
    accion: "Pedir precio",
  },
];

/* --- testimonios ----------------------------------------------------------
   EDITAR: estos son de ejemplo y se muestran marcados como tales mientras
   `ejemplo` sea true. Reemplazalos por opiniones reales y poné `ejemplo: false`.
   ------------------------------------------------------------------------- */

export const testimonios = [
  {
    ejemplo: true,
    texto:
      "Antes tardábamos una tarde en pasar la lista nueva del proveedor. Ahora la importamos, revisamos las diferencias y listo.",
    nombre: "Nombre Apellido",
    comercio: "Casa de electricidad · Ciudad",
  },
  {
    ejemplo: true,
    texto:
      "Los descuentos encadenados eran un dolor de cabeza. Ahora el costo sale bien de entrada y el margen es el que tiene que ser.",
    nombre: "Nombre Apellido",
    comercio: "Iluminación · Ciudad",
  },
  {
    ejemplo: true,
    texto:
      "En el mostrador se vende con el lector y el teclado, sin tocar el mouse. Al cierre, la caja cuadra.",
    nombre: "Nombre Apellido",
    comercio: "Materiales eléctricos · Ciudad",
  },
];

/* --- preguntas frecuentes ------------------------------------------------- */

export const preguntas = [
  {
    p: "¿Necesita conexión a internet?",
    r: "No. Amano funciona sobre una base de datos local en tu equipo. No depende de internet ni de ningún servicio externo para operar.",
  },
  {
    p: "¿Tiene cuota mensual?",
    r: "No. No hay abono mensual ni servidor que mantener: el programa y los datos viven en tus computadoras.",
  },
  {
    p: "¿Puedo usarlo en más de una computadora del local?",
    r: "Sí. El motor está preparado para que varias terminales trabajen contra la misma base al mismo tiempo.",
  },
  {
    p: "¿Puedo cargar las listas de precios de mis proveedores?",
    r: "Sí, desde Excel. El sistema detecta el encabezado, te deja mapear las columnas y te muestra la comparación contra tu catálogo antes de aceptar los cambios.",
  },
  {
    p: "¿Qué pasa con mis datos cuando sale una versión nueva?",
    r: "Se conservan. La base se actualiza sola al abrirla con la versión nueva, sin que tengas que hacer nada.",
  },
  {
    p: "¿Qué necesito para instalarlo?",
    r: "Una PC con Windows 10 u 11 de 64 bits. El instalador se entrega a pedido: se descarga, se ejecuta, se elige la carpeta y la base se crea vacía en el equipo.",
  },
];
