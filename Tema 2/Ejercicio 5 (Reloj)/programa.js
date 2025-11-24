function updateClock() {
    let now = new Date();

    // ------------------------
    let time = now.toLocaleTimeString("es-ES");

    // ------------------------
    let date = now.toLocaleDateString("es-ES", { 
      weekday: "long", year: "numeric", month: "long", day: "numeric" 
    });

    document.getElementById("time").textContent = time;
    document.getElementById("date").textContent = date;
  }

  setInterval(updateClock, 1000);
  updateClock();