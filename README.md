# Pokémon Searcher 🔍✨
**Pokémon Searcher** (también conocido como **PokéFind**) es una herramienta creada por y para fans del mundo Pokémon. Esta te ayudará a buscar Pokémon y construir equipos competitivos para los juegos *Scarlet & Violet* y *Sword & Shield* a futuro la idea es poder crear también para el mundo de tcg.

## 🚀 Version 0.3
https://anherika.github.io/PokemonSearcher

---

## 📂 Estructura del proyecto

```
PokemonSearcher/ 
├── index.html 
├── assets/ 
│ ├── css/ 
│ │ └── style.css 
│ ├── scss/ 
│ │ ├── main.scss 
│ │ ├── _mixins.scss 
│ │ └── ...otros archivos .scss 
│ └── img/ 
├── pages/ 
│ ├── pokedex.html 
│ ├── team.html 
│ ├── community.html 
│ └── about.html 
└── README.md
```
---

## ✨ ¿Qué ofrece?

- 🔍 Buscador de Pokémon por nombre o equipo.
- 📚 Sección informativa sobre la comunidad y la iniciativa.
- 🧬 Pokédex visual interactiva.
- 💬 Comunidad para compartir y discutir estrategias.
- 📩 Suscripción a novedades.

---

## 🛠 Tecnologías Utilizadas

- HTML5
- CSS3 con Flexbox y Grid
- **SCSS** para manejo de estilos avanzado
- Google Fonts
- Diseño Responsivo
- Git + GitHub
- GitHub Pages (para publicar el sitio)

---

## 🎨 Uso de SCSS

El proyecto usa SCSS para escribir estilos más limpios y reutilizables. Los estilos se compilan en `style.css`.

### 1. Instalar Sass (si no lo tienes)

```
npm install -g sass 
```

### 2. Compilar SCSS a CSS manualmente
 ``` 
sass assets/scss/main.scss assets/css/style.css 
```


### 3. Modo automático
```
sass --watch assets/scss/main.scss:assets/css/style.css
```
Esto compilará cada vez que guardes cambios en tu .scss



## 📐 Diseño y layout

- Maquetado con **Flexbox**  
- Estilo simple y pokefan 
- Actualmente es **responsivo para dispositivos móviles y tablets**  
  - 📱 Móviles: hasta **768px**
  - 📱 Tablets: entre **769px y 1024px**
  - 💻 Escritorio: +1024px
- Uso de imágenes optimizadas
- Layouts con Flexbox y Grid, organizados con mixins reutilizables.

---

## 👨‍💻 Cómo contribuir

1. Deberas *clonar* el repositorio  

``` 
git clone https://github.com/anherika/PokemonSearcher.git 
```

2. Crear una *rama* para tus cambios
    
``` 
git checkout -b nombre-de-tu-rama 
```

4. Después hacer *commit* de tus mejoras  
``` 
git commit -m "Agrega descripción" 
```

5. Enviar un *pull* request si querés colaborar
``` 
git push origin nombre-de-tu-rama 
```

---

## ⚠️ Disclaimer

Este sitio no está afiliado a Nintendo, Game Freak ni The Pokémon Company.  
Es un proyecto educativo sin fines de lucro.

---

## Créditos

Hecho por Angelica para los fans de Pokémon.
