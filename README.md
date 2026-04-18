## 🚀 Instalación y ejecución

### Requisitos
- Node.js 18+
- npm

### Pasos

**1. Instalar dependencias**
```bash
npm i
```

**2. Build de producción**
```bash
npm run build
```

**3. Correr el proyecto**
```bash
npm start
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Deploy

[https://biblioteca-44wl-1ypbhj3nb-rafaelrgrs-projects.vercel.app](https://biblioteca-44wl-1ypbhj3nb-rafaelrgrs-projects.vercel.app)

## Decisiones técnicas

Manejé el consumo de datos con React Query porque me simplifica el tema de estado asíncrono, la librería ya me da resuelto los loading y errores , para la busqueda por titulo, resulto muy util implementar el hook debounce, pues permite que no se este renderizando con cada tecla sino cuando se finaliza de escribir, en cuento a la paginacion lo maneje directamente en el estado del componente, porque es un estado local de la vista, tambien separé la barra de búsqueda en un componente aparte de la tabla para mantener una mejor organización, y la comunicación la hice mediante prop, y por ultimo cuando hago el filtro por Id use el Server Component usando el App Router de Next, para hacer el fetch directamente en el servidor.
