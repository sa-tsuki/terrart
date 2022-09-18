(() => {
  //
  // 定義
  //
  const linkParent = document.querySelectorAll(".link-parent");
  const mediaQuery = window.matchMedia("(min-width: 640px)");

  //
  // 関数
  //
  const toggleChildren = (e) => {
    const target = e.currentTarget;
    const parent = target.parentElement;
    const children = parent.nextElementSibling;
    const child = children.querySelectorAll("div");
    const childHeight = (child[0].offsetHeight + 20) * child.length + 12;

    if (target.classList.contains("on")) {
      target.classList.remove("on");
      children.style.height = `0px`;
    } else {
      target.classList.add("on");
      children.style.height = `${childHeight}px`;
    }
  };

  const listener = (e) => {
    if (e.matches) {
      // PC
      mediaToggleChildrenPC();
    } else {
      // SP
      mediaToggleChildrenSP();
    }
  };

  const mediaToggleChildrenSP = () => {
    linkParent.forEach((elem) => {
      const parent = elem.parentElement;
      const children = parent.nextElementSibling;

      elem.classList.remove("on");
      children.style.height = `0px`;
    });
  };

  const mediaToggleChildrenPC = () => {
    linkParent.forEach((elem) => {
      const parent = elem.parentElement;
      const children = parent.nextElementSibling;
      const child = children.querySelectorAll("div");
      const childHeight = (child[0].offsetHeight + 20) * child.length + 12;

      elem.classList.add("on");
      children.style.height = `${childHeight}px`;
    });
  };

  //
  // イベント付与
  //
  linkParent.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      e.preventDefault();
      toggleChildren(e);
    });
  });

  mediaQuery.addEventListener("change", listener);

  //
  // 初期イベント
  //
  listener(mediaQuery);
})();
