//
// 定義
//
const actionColors = document.querySelectorAll(".actionColor");
const mainImage = document.getElementById("mainImage");

const actionSizes = document.querySelectorAll(".actionSize");
const mainPrice = document.getElementById("mainPrice");

//
// 関数
//
const changeColor = (e) => {
  const target = e.target;
  const src = target.getAttribute("data-src");
  mainImage.setAttribute("src", src);
};

const changeSize = (e) => {
  const target = e.target;
  const price = target.getAttribute("data-price").toLocaleString();
  mainPrice.innerText = price;
};

//
// イベント付与
//

// ボトルの色を変える
actionColors.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    changeColor(e);
  });
});

// 値段を変える
actionSizes.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    changeSize(e);
  });
});

//
// 初期イベント
//
