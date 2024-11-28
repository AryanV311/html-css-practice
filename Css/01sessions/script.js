
  const bike = document.getElementById("bike1");
  const bikeContainer = document.querySelector(".bike");

  // Event listener for clicks inside the bike container
  bikeContainer.addEventListener(
    "click",
    (ev) => {
      // Get the dimensions and position of the container
      const rect = bikeContainer.getBoundingClientRect();

      // Calculate click position relative to the container
      const offsetX = ev.clientX - rect.left;
      const offsetY = ev.clientY - rect.top;

      // Constrain the bike's movement to within the container
      const bikeWidth = bike.offsetWidth;
      const bikeHeight = bike.offsetHeight;

      const x = Math.min(
        rect.width - bikeWidth / 2,
        Math.max(bikeWidth / 2, offsetX)
      );
      const y = Math.min(
        rect.height - bikeHeight / 2,
        Math.max(bikeHeight / 2, offsetY)
      );

      // Move the bike
      bike.style.transform = `translate(${x - bikeWidth / 2}px, ${y - bikeHeight / 2}px)`;
    },
    false
  );

