(() => {
  //
  // 定義
  //
  const actionSelect = document.querySelectorAll(".actionSelect");
  const content = document.querySelectorAll(".content");

  //
  // 関数
  //
  const selectPage = (e) => {
    const target = e.currentTarget;
    const select = target.getAttribute("data-target");
    const targetContent = document.getElementById(select);

    // actionSelectのactiveクラスをリセット
    actionSelect.forEach((elem) => elem.classList.remove("active"));

    // クリックされたactionSelectにactiveクラス付与
    target.classList.add("active");

    // contentのactiveクラスをリセット
    content.forEach((elem) => elem.classList.remove("active"));

    // 対象のcontentにactiveクラス付与
    targetContent.classList.add("active");
  };

  //
  // イベント付与
  //
  actionSelect.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      selectPage(e);
    });
  });
})();
