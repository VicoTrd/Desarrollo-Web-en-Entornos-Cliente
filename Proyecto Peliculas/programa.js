window.onload = () => {
  const cont = document.getElementById("div");
  const btnSeries = document.getElementById("series");
  const btnPeliculas = document.getElementById("peliculas");
  const botonBuscar = document.getElementById("botonbuscar");
  const inputTitulo = document.getElementById("busca");
  const btnFavs = document.getElementById("verFavs");
  const favDiv = document.getElementById("favoritos");

  let pagina = 1;
  let busqueda = "";
  let tipo = "";
  let cargando = false;

  function obtenerFavoritos() {
    let favs = localStorage.getItem("favoritos");
    if (favs) return JSON.parse(favs);
    return [];
  }

  function guardarFavorito(peli) {
    let favs = obtenerFavoritos();
    favs.push(peli);
    localStorage.setItem("favoritos", JSON.stringify(favs));
  }

  function quitarFavorito(id) {
    let favs = obtenerFavoritos();
    favs = favs.filter(f => f.id !== id);
    localStorage.setItem("favoritos", JSON.stringify(favs));
  }

  function esFavorito(id) {
    return obtenerFavoritos().some(f => f.id === id);
  }

  function mostrarFavoritos() {
    favDiv.innerHTML = "";
    let favs = obtenerFavoritos();
    if (favs.length === 0) {
      favDiv.innerHTML = "<p>No hay favoritos</p>";
      return;
    }
    favs.forEach((peli) => {
      const caja = document.createElement("div");
      caja.className = "card";

      const img = document.createElement("img");
      img.src = peli.poster !== "N/A"
        ? peli.poster
        : "https://via.placeholder.com/200x300?text=Sin+imagen";

      const info = document.createElement("div");
      info.className = "info";

      const h3 = document.createElement("h3");
      h3.textContent = peli.titulo;

      info.appendChild(h3);
      caja.appendChild(img);
      caja.appendChild(info);
      favDiv.appendChild(caja);

      caja.onclick = () => mostrarDetalles(peli.id);
    });
  }

  function mostrarResultados(lista) {
    lista.forEach((peli) => {
      const caja = document.createElement("div");
      caja.className = "card";

      const img = document.createElement("img");
      img.src = peli.Poster !== "N/A"
        ? peli.Poster
        : "https://via.placeholder.com/200x300?text=Sin+imagen";

      const info = document.createElement("div");
      info.className = "info";

      const h3 = document.createElement("h3");
      h3.textContent = peli.Title;

      const favBtn = document.createElement("button");
      favBtn.textContent = "❤";
      favBtn.style.marginTop = "5px";

      // marcar si ya es favorito
      if (esFavorito(peli.imdbID)) {
        favBtn.style.backgroundColor = "#00ff66";
        favBtn.style.color = "#121212";
      }

      favBtn.onclick = (e) => {
        e.stopPropagation();
        if (esFavorito(peli.imdbID)) {
          // quitar favorito
          quitarFavorito(peli.imdbID);
          favBtn.style.backgroundColor = "";
          favBtn.style.color = "";
        } else {
          // añadir favorito
          guardarFavorito({
            id: peli.imdbID,
            titulo: peli.Title,
            poster: peli.Poster
          });
          favBtn.style.backgroundColor = "#00ff66";
          favBtn.style.color = "#121212";
        }
      };

      info.appendChild(h3);
      info.appendChild(favBtn);
      caja.appendChild(img);
      caja.appendChild(info);
      cont.appendChild(caja);

      caja.onclick = () => mostrarDetalles(peli.imdbID);
    });
  }

  function mostrarDetalles(id) {
    fetch("https://www.omdbapi.com/?apikey=d3dce2e9&i=" + id)
      .then(res => res.json())
      .then(peli => {
        const fondo = document.createElement("div");
        fondo.style.position = "fixed";
        fondo.style.top = "0";
        fondo.style.left = "0";
        fondo.style.width = "100%";
        fondo.style.height = "100%";
        fondo.style.backgroundColor = "rgba(0,0,0,0.7)";
        fondo.style.display = "flex";
        fondo.style.justifyContent = "center";
        fondo.style.alignItems = "center";
        fondo.style.zIndex = "1000";

        const panel = document.createElement("div");
        panel.style.backgroundColor = "black";
        panel.style.color = "white";
        panel.style.padding = "20px";
        panel.style.maxWidth = "400px";
        panel.style.textAlign = "center";

        panel.innerHTML = `
          <h2>${peli.Title}</h2>
          <p>Año: ${peli.Year}</p>
          <p>Género: ${peli.Genre}</p>
          <p>Director: ${peli.Director}</p>
          <p>Actores: ${peli.Actors}</p>
          <p>${peli.Plot}</p>
          <img src="${peli.Poster !== "N/A" ? peli.Poster : "https://via.placeholder.com/200x300"}" style="width:200px;margin-top:10px;">
          <br><br>
          <button id="cerrar">Cerrar</button>
        `;

        fondo.appendChild(panel);
        document.body.appendChild(fondo);

        document.getElementById("cerrar").onclick = () => {
          fondo.remove();
        };
      });
  }

  function buscar() {
    if (cargando || busqueda === "") return;
    cargando = true;

    let url =
      "https://www.omdbapi.com/?apikey=d3dce2e9&s=" +
      busqueda +
      "&page=" +
      pagina;

    if (tipo !== "") {
      url += "&type=" + tipo;
    }

    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data.Response === "False") return;
        mostrarResultados(data.Search);
        pagina++;
      })
      .finally(() => {
        cargando = false;
      });
  }

  botonBuscar.onclick = () => {
    busqueda = inputTitulo.value.trim();
    if (busqueda === "") return;

    cont.style.display = "flex";
    favDiv.style.display = "none";

    cont.innerHTML = "";
    pagina = 1;
    buscar();
  };

  btnSeries.onclick = () => {
    tipo = "series";
    btnSeries.classList.add("active");
    btnPeliculas.classList.remove("active");

    cont.innerHTML = "";
    pagina = 1;
    buscar();
  };

  btnPeliculas.onclick = () => {
    tipo = "movie";
    btnPeliculas.classList.add("active");
    btnSeries.classList.remove("active");

    cont.innerHTML = "";
    pagina = 1;
    buscar();
  };

  btnFavs.onclick = () => {
    cont.style.display = "none";
    favDiv.style.display = "flex";
    mostrarFavoritos();
  };

  window.addEventListener("scroll", () => {
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.offsetHeight - 100
    ) {
      buscar();
    }
  });
};