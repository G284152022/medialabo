// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let h =document.querySelector('button#kaitou');
h.addEventListener('click', hantei);

hantei();
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let i = document.querySelector('input[name="kazu"]')
  let yoso = i.value;
  

  let p =document.querySelector('span#kaisu');
  p.textContent = kaisu; 

  let p1 =document.querySelector('span#answer');
  p1.textContent = yoso; 

  Number('yoso');
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール

  //console.log(a+'回目の予想:'+yoso);

  let ps2 =document.querySelector('p#result');
  if(kaisu !=0&&kaisu<4){
    
    if(kotae==yoso){
      ps2.textContent='正解です.おめでとう！';
      kaisu=kaisu+1;
    }else if(kotae>yoso){
      ps2.textContent='まちがい.答えはもっと大きいですよ';
      kaisu=kaisu+1;
    }else{
      ps2.textContent='まちがい.答えはもっと小さいですよ';
      kaisu=kaisu+1;
    }
  }else if (kaisu == 0){
    ps2.textContent='';
    kaisu= kaisu+1;
  }
  else{
    ps2.textContent='答えは '+kotae+'でした.すでにゲームは終わっています';
    kaisu=kaisu+1;
  }
  
}






