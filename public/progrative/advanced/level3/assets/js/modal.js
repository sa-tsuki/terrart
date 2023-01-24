(() => {
  //
  // 定義
  //
  const actionModal = document.querySelectorAll(".actionModal");
  const actionClose = document.querySelector(".actionClose");

  const modal = document.getElementById("modal");

  //
  // 関数
  //
  const selectImage = (e) => {
    const target = e.target;
    const img = target.src;
    const modalImg = modal.querySelector("img");

    modal.classList.add("active");

    // modalの画像を書き換える
    modalImg.src = img;
  };

  const closeModal = () => {
    modal.classList.remove("active");
  };

  //
  // イベント付与
  //
  actionModal.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      selectImage(e);
    });
  });

  actionClose.addEventListener("click", () => closeModal());
})();
