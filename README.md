# Portafolio · Kevin Andrés Castillo Pabón

One-page landing de presentación profesional. Construido con HTML5 semántico, CSS3 (sin frameworks) y JavaScript vanilla.

🔗 **Demo en vivo:** _(pega aquí el link de GitHub Pages una vez publicado)_

---

## 📁 Estructura del proyecto

portfolio/
├── index.html        # Estructura semántica, enlaces, y soporte i18n
├── styles.css        # Diseño, responsive, animaciones WOW y scrollbar personalizado
├── script.js         # Sistema de idiomas, animaciones, cursor glow y tarjetas interactivas
├── cv.pdf            # Hoja de vida descargable
├── img/              # Carpeta de imágenes optimizadas
└── README.md         # Documentación del proyecto
```

## ✨ Novedades y Funcionalidades (Efecto WOW)

- **Sistema Bilingüe (i18n):** Traducción instantánea entre Español e Inglés con Vanilla JS, sin recargar y guardando preferencia local.
- **Interacciones Creativas:**
  - Cursor Glow magnético y animado.
  - Efectos de vidrio reflectante (glassmorphism) al pasar el cursor sobre las tarjetas.
  - Parallax sutil del fondo (SVG Nodos) controlado por el movimiento del ratón.
- **CV Directo:** Botón dedicado para descarga instantánea.
- **Experiencia Actualizada:** 10 meses de desarrollo full-stack como estudiante de Campuslands.

## 🎨 Sistema de diseño

| Token | Valor | Uso |
|---|---|---|
| `--bg-base` | `#05080f` | Fondo principal |
| `--bg-surface` | `#0b1220` | Tarjetas / superficies |
| `--accent` | `#3b82f6` | Botones primarios, acentos |
| `--accent-light` | `#7dd3fc` | Links, highlights, nodos |
| `--text-primary` | `#e2e8f0` | Texto principal |

Tipografías: **Space Grotesk** (display/títulos), **Inter** (cuerpo), **JetBrains Mono** (labels, tags técnicos).

El elemento de firma visual es la red de nodos conectados en el Hero — una metáfora de cómo cada tecnología y proyecto se conecta con los demás en el proceso de aprendizaje.

## 🚀 Cómo ver el sitio localmente

No necesita build ni dependencias. Solo abre `index.html` en tu navegador, o usa un servidor local simple:

```bash
# Con Python
python3 -m http.server 8080

# Con la extensión Live Server de VS Code
# clic derecho en index.html → "Open with Live Server"
```

## 🌐 Despliegue en GitHub Pages

1. Crea el repositorio en GitHub (si no existe) y sube el proyecto:
   ```bash
   git init
   git add .
   git commit -m "🎉 feat: estructura inicial del portafolio"
   git branch -M main
   git remote add origin https://github.com/castillokfirex/TU-REPO.git
   git push -u origin main
   ```

2. En GitHub, ve a **Settings → Pages**.
3. En **Source**, selecciona la rama `main` y la carpeta `/ (root)`.
4. Guarda. GitHub te dará una URL tipo:
   `https://castillokfirex.github.io/TU-REPO/`
5. Espera 1-2 minutos y verifica que cargue correctamente.

## 🔀 Flujo de trabajo: Git Flow + Conventional Commits

Para evidenciar buenas prácticas de versionamiento, se recomienda trabajar con ramas por tipo de cambio y mensajes de commit convencionales.

### Estructura de ramas
```
main        → versión estable, lista para producción / GitHub Pages
develop     → integración de features antes de pasar a main
feature/*   → una rama por funcionalidad (ej: feature/seccion-proyectos)
fix/*       → corrección de bugs (ej: fix/menu-movil)
```

Ejemplo de flujo:
```bash
git checkout -b develop
git checkout -b feature/seccion-contacto
# ... trabajas, haces commits ...
git checkout develop
git merge feature/seccion-contacto
git checkout main
git merge develop
git push origin main
```

### Conventional Commits (con emojis)

| Tipo | Emoji | Cuándo usarlo |
|---|---|---|
| `feat` | ✨ | Nueva funcionalidad o sección |
| `fix` | 🐛 | Corrección de errores |
| `style` | 💄 | Cambios visuales/CSS sin lógica nueva |
| `refactor` | ♻️ | Reestructurar código sin cambiar comportamiento |
| `docs` | 📝 | Cambios en README u otra documentación |
| `perf` | ⚡ | Mejoras de rendimiento (ej. optimizar imágenes) |
| `chore` | 🔧 | Tareas de mantenimiento, configuración |

Ejemplos de buenos commits para este proyecto:
```
✨ feat: agregar sección de proyectos con tarjetas
💄 style: ajustar paleta de azules en hover de botones
🐛 fix: corregir colapso del menú en móvil
⚡ perf: optimizar y comprimir foto de perfil
📝 docs: agregar instrucciones de despliegue en README
♻️ refactor: extraer estilos de botones a clases reutilizables
```

Evita commits como `cambios`, `update`, `asdf` o mensajes largos tipo párrafo. Un commit = un cambio claro y entendible de un vistazo.

## ✅ Checklist de entrega

- [x] Responsive (mobile / tablet / desktop)
- [x] Paleta de colores con contraste accesible (WCAG AA/AAA)
- [x] Imágenes optimizadas (foto de perfil ~56 KB)
- [x] HTML semántico (`header`, `nav`, `main`, `section`, `article`, `footer`)
- [x] Navegación clara con menú responsive
- [ ] Desplegado en GitHub Pages
- [ ] Repositorio publicado con Git Flow y Conventional Commits
