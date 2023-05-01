fetch("./data/datos.json")
  .then((res) => res.json())
  .then((data) => {

    const card = document.querySelectorAll(".card");
    const cherryCard = card[0];
    const oceanCard = card[1];
    const maryCard = card[2];
    const cindyCard = card[3];
    const mateCard = card[4];

    const cindychange = document.getElementById('cindyChange');
    const cindyButtons = document.querySelectorAll('.cindyColors button');
    
    cindyButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const color = button.textContent.toLowerCase();
        const product = data.find((producto) => producto.nombre === 'Cindy');
        if (product.colores.includes(color)) {
          const imgSrc = `./assets/catalogo/cindy/${color}.png`;
          cindychange.src = imgSrc;
        }
      });
    });
    
    const matechange = document.getElementById('mateChange');
    const mateButtons = document.querySelectorAll('.mateColors button');
    
    mateButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const color = button.textContent.toLowerCase();
        const product = data.find((producto) => producto.nombre === 'Mate');
        if (product.colores.includes(color)) {
          const imgSrc = `./assets/catalogo/mate/${color}.png`;
          matechange.src = imgSrc;
        }
      });
    });
    
    const maryChange = document.getElementById('maryChange');
    const maryButtons = document.querySelectorAll('.maryColors button');
    
    maryButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const color = button.textContent.toLowerCase();
        const product = data.find((producto) => producto.nombre === 'Mary');
        if (product.colores.includes(color)) {
          const imgSrc = `./assets/catalogo/mary/${color}.png`;
          maryChange.src = imgSrc;
        }
      });
    });
    
    const oceanChange = document.getElementById('oceanChange');
    const oceanButtons = document.querySelectorAll('.oceanColors button');
    
    oceanButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const color = button.textContent.toLowerCase();
        const product = data.find((producto) => producto.nombre === 'Ocean');
        if (product.colores.includes(color)) {
          const imgSrc = `./assets/catalogo/ocean/${color}.png`;
          oceanChange.src = imgSrc;
        }
      });
    });
    

    const cherryChange = document.getElementById('cherryChange');
    const cherryButtons = document.querySelectorAll('.cherryColors button');
    
    cherryButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const color = button.textContent.toLowerCase();
        const product = data.find((producto) => producto.nombre === 'Cherry');
        if (product.colores.includes(color)) {
          const imgSrc = `./assets/catalogo/cherry/${color}.png`;
          cherryChange.src = imgSrc;
        }
      });
    });})
