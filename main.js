// -----------------------------
//  AI先生 わり算つまずき診断
// -----------------------------

function checkAnswer() {
  const q = document.getElementById("answer_quotient").value;
  const r = document.getElementById("answer_remainder").value;

  // 数値チェック
  if (q === "" || r === "") {
      alert("商とあまりを両方入力してね！");
      return;
  }

  const userQ = Number(q);
  const userR = Number(r);

  // 正しい答え
  const correctQ = Math.floor(82 / 14); // 5
  const correctR = 82 % 14; // 12

  let mistakeType = "";

  // 商・あまり両方正解
  if (userQ === correctQ && userR === correctR) {
      mistakeType = "correct";
  }
  // 商が違う & あまりが正しい
  else if (userQ !== correctQ && userR === correctR) {
      mistakeType = "wrong_quotient";
  }
  // 商が正しい & あまりが違う
  else if (userQ === correctQ && userR !== correctR) {
      mistakeType = "wrong_remainder";
  }
  // 両方違う
  else {
      mistakeType = "both_wrong";
  }

  // 結果ページへ遷移
  const url = `result.html?type=${mistakeType}&q=${userQ}&r=${userR}`;
  window.location.href = url;
}
