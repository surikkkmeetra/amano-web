import { animate, inView, scroll, stagger } from "motion";

const reducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const suave = [0.22, 1, 0.36, 1] as const;

/* --- barra pegada y menú móvil -------------------------------------------- */

const barra = document.getElementById("barra");
const alScrollear = () => barra?.toggleAttribute("data-pegada", window.scrollY > 8);
alScrollear();
window.addEventListener("scroll", alScrollear, { passive: true });

const botonMenu = document.getElementById("abrir-menu");
const menu = document.getElementById("menu-movil");
if (botonMenu && menu) {
  const cerrar = () => {
    menu.hidden = true;
    botonMenu.setAttribute("aria-expanded", "false");
  };
  botonMenu.addEventListener("click", () => {
    const abierto = menu.hidden;
    menu.hidden = !abierto;
    botonMenu.setAttribute("aria-expanded", String(abierto));
  });
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", cerrar));
  document.addEventListener("keydown", (e) => e.key === "Escape" && cerrar());
}

/* --- cifras que cuentan --------------------------------------------------- */

const formato = (n: number, d: number) =>
  n.toLocaleString("es-AR", { minimumFractionDigits: d, maximumFractionDigits: d });

document.querySelectorAll<HTMLElement>("[data-contar]").forEach((el) => {
  // Sin movimiento, el número ya viene escrito desde el HTML y no se toca.
  if (reducido) return;
  const hasta = Number(el.dataset.contar);
  const decimales = Number(el.dataset.decimales ?? 0);
  const sufijo = el.dataset.sufijo ?? "";
  el.textContent = formato(0, decimales) + sufijo;
  inView(el, () => {
    animate(0, hasta, {
      duration: 1.4,
      ease: suave,
      onUpdate: (v) => (el.textContent = formato(v, decimales) + sufijo),
    });
  }, { amount: 0.6 });
});

/* --- aparición al entrar en pantalla -------------------------------------- */

if (!reducido) {
  document.querySelectorAll<HTMLElement>("[data-aparece]").forEach((el) => {
    // Con data-escalonado entran los hijos de a uno; si no, el bloque entero.
    const escalonado = el.hasAttribute("data-escalonado");
    const blancos = escalonado ? Array.from(el.children) : [el];
    if (escalonado) {
      el.style.opacity = "1";
      blancos.forEach((b) => ((b as HTMLElement).style.opacity = "0"));
    }
    inView(el, () => {
      animate(
        blancos,
        { opacity: [0, 1], y: [24, 0], filter: ["blur(6px)", "blur(0px)"] },
        { duration: 0.8, ease: suave, delay: stagger(0.07) },
      );
    }, { amount: 0.15, margin: "0px 0px -8% 0px" });
  });
}

/* --- portada: la ventana se endereza al scrollear ------------------------- */

const muestra = document.getElementById("muestra");
if (muestra && !reducido) {
  scroll(
    animate(muestra, { rotateX: [18, 0], scale: [0.94, 1], y: [0, -20] }, { ease: "linear" }),
    { target: muestra, offset: ["start end", "center center"] },
  );
}

/* --- "Cómo trabaja": paso activo y línea de progreso ---------------------- */

const pasos = document.querySelectorAll<HTMLElement>("[data-paso]");
const paneles = document.querySelectorAll<HTMLElement>("[data-panel]");
const progreso = document.getElementById("progreso-pasos");

function activar(n: number) {
  pasos.forEach((p) => p.toggleAttribute("data-activo", Number(p.dataset.paso) === n));
  paneles.forEach((p) => {
    const este = Number(p.dataset.panel) === n;
    p.classList.toggle("opacity-100", este);
    p.classList.toggle("opacity-0", !este);
    p.classList.toggle("translate-y-4", !este);
    p.classList.toggle("scale-[0.98]", !este);
    p.classList.toggle("pointer-events-none", !este);
  });
}

if (pasos.length) {
  activar(0);
  // El paso activo es el que cruza la franja central de la pantalla.
  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((e) => {
        if (e.isIntersecting) activar(Number((e.target as HTMLElement).dataset.paso));
      });
    },
    { rootMargin: "-45% 0px -45% 0px" },
  );
  pasos.forEach((p) => observador.observe(p));

  const lista = pasos[0].parentElement;
  if (progreso && lista) {
    scroll(
      (avance: number) => (progreso.style.transform = `scaleY(${avance})`),
      { target: lista, offset: ["start center", "end center"] },
    );
  }
}

/* --- tarjetas: brillo que sigue al cursor -------------------------------- */

if (window.matchMedia("(hover: hover)").matches) {
  document.addEventListener("pointermove", (e) => {
    const t = (e.target as Element | null)?.closest<HTMLElement>(".tarjeta");
    if (!t) return;
    const r = t.getBoundingClientRect();
    t.style.setProperty("--x", `${e.clientX - r.left}px`);
    t.style.setProperty("--y", `${e.clientY - r.top}px`);
  }, { passive: true });
}
