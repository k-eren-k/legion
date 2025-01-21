const musicItems = document.querySelectorAll(".music-item");

musicItems.forEach((item, index) => {
  const audio = item.querySelector("audio");
  const playButton = item.querySelector(".play-button");
  const prevButton = item.querySelector(".prev-button");
  const nextButton = item.querySelector(".next-button");

  playButton.addEventListener("click", () => {
    musicItems.forEach((otherItem, otherIndex) => {
      if (index !== otherIndex) {
        const otherAudio = otherItem.querySelector("audio");
        otherAudio.pause();
        otherItem.querySelector(".play-button i").className =
          "fa-regular fa-play";
      }
    });

    if (audio.paused) {
      audio.play();
      playButton.querySelector("i").className = "fa-regular fa-stop";
    } else {
      audio.pause();
      playButton.querySelector("i").className = "fa-regular fa-play";
    }
  });

  prevButton.addEventListener("click", () => {
    const prevIndex = index > 0 ? index - 1 : musicItems.length - 1;
    const prevAudio = musicItems[prevIndex].querySelector("audio");

    musicItems.forEach((otherItem) => {
      const otherAudio = otherItem.querySelector("audio");
      otherAudio.pause();
      otherAudio.currentTime = 0;
      otherItem.querySelector(".play-button i").className =
        "fa-regular fa-play";
    });

    prevAudio.play();
    musicItems[prevIndex].querySelector(".play-button i").className =
      "fa-regular fa-stop";
  });

  nextButton.addEventListener("click", () => {
    const nextIndex = index < musicItems.length - 1 ? index + 1 : 0;
    const nextAudio = musicItems[nextIndex].querySelector("audio");

    musicItems.forEach((otherItem) => {
      const otherAudio = otherItem.querySelector("audio");
      otherAudio.pause();
      otherAudio.currentTime = 0;
      otherItem.querySelector(".play-button i").className =
        "fa-regular fa-play";
    });

    nextAudio.play();
    musicItems[nextIndex].querySelector(".play-button i").className =
      "fa-regular fa-stop";
  });
});
