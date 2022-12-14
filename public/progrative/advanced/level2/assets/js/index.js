//
// 定義
//
const actionOpen = document.querySelectorAll(".actionOpen");
const originalHeight = 76;

//
// 関数
//
const openAccrodion = (e) => {
  const target = e.currentTarget;
  const parent = target.parentNode;

  if (parent.classList.contains("on")) {
    parent.classList.remove("on");
    parent.style.height = `${originalHeight}px`;
  } else {
    // 一度全てのonを消す
    actionOpen.forEach((elem) => {
      elem.parentNode.classList.remove("on");
      elem.parentNode.style.height = `${originalHeight}px`;
    });

    parent.classList.add("on");
    const hiddenHight = parent.querySelector(".main__listDesc").offsetHeight;
    parent.style.height = `${originalHeight + hiddenHight}px`;
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
