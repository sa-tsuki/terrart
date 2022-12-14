//
// 定義
//
const actionOpen = document.querySelectorAll(".actionOpen");

//
// 関数
//
const openAccrodion = (e) => {
  const target = e.currentTarget;
  const parent = target.parentNode;
  const hiddenBlock = parent.querySelector(".main__descBlock");

  if (parent.classList.contains("on")) {
    parent.classList.remove("on");
    hiddenBlock.style.height = `0`;
  } else {
    // 一度全てのonを消す
    actionOpen.forEach((elem) => {
      elem.parentNode.classList.remove("on");
      elem.nextElementSibling.style.height = `0`;
    });

    parent.classList.add("on");
    const hiddenHight = parent.querySelector(".main__listDesc").offsetHeight;
    hiddenBlock.style.height = `${hiddenHight}px`;
  }
};
//
// イベント付与
//
actionOpen.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    openAccrodion(e);
  });
});
