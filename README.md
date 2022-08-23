# learn-web-dev-bootcamp2021

https://www.udemy.com/course/the-web-developer-bootcamp-2021-japan/

目安は3か月くらいかな。　動画は70時間。できるだけ動かしながら確認する。

| section |  | 感想・備考 |
| --- | --- | --- |
| 1 | はじめに | |
| 2 | web入門 | |
| 3 | HTML入門 | |
| 4 | 続・HTML入門 | セマンティックHTML header, footer, main, nav, section, article など 機能は div と同じ<br>メリット 可読性があがる。スクリーンリーダー(読み上げ)対応。クローラー対応。<br>emmet　HTMLを記述するツール | |
| 5 | HTML フォームとテーブル | フォームは抑えたい<br>lavelとinputの関連づけ<br>form内の button, input | 
| 6 | CSS入門 | font : https://www.cssfontstack.com/ <br>総称ファミリで指定 |
| 7 | CSS セレクタ | selectorの書き方<br>要素セレクター(h1 {})<br>idセレクター(#aaa {})<br>classセレクタ-(.testclass {})<br>子孫セレクター(li a {} ※一番右のaが対象) <br>隣接セレクター(h1 + p {})<br>直下セレクター(dev > li {})<br>属性セレクター(input[type="text"]{})<br>疑似クラス :hover (button:hover {}), :active, :checked, :nth-of-type(2n) 2個ごとに適用する <br>疑似要素 ::first-letter, ::first-line<br>カスケード　css適応の順番の話。CSSの適応はあと勝ち。<br>詳細度の話。スタイルの競合。より詳細なものが優先される。優先順位は ID > クラス > 要素  https://specificity.keegan.st/<br>開発者ツールでcssの適応状態を確認・お試しできる<br>インラインスタイル(非推奨)はIDセレクターよりも優先される<br>!important の例外 (非推奨) デバッグしにくくなる<br>継承　継承されるものとされないものがある。bouderなどは継承されない<br>色を調べる https://coolors.co/palettes/trending|
| 8 | ボックスモデルと値の単位 | MDNを参照<br>boader radius <br>padding <br> margin <br> displayプロパティ (inline block inline-block) 例: h2をinline要素のように扱う noneは非表示です <br>cssの単位 (相対単位) percentage, em(fontなら親要素のfontサイズを基準にする。2emは２倍。) marginなどは自身の要素のフォントサイズを基準にした相対サイズ。emはネストしていると親要素を基準にするのでネストさせる場合は注意<br>rem root要素のサイズが基準になる デフォルトでは root要素とは htmlタグ。 <br> alpha不透明 rgba(#121212xx) 背景が半透明になる<br>opacity 要素全体を透明にする<br>position: static, relative, absolute, fixed(viewport　見えている部分に対して位置を決定する　固定できる), sticky (viewportに固定できる) <br>transition アニメーションをする timing-functionでアニメーションの動きを調節できる https://easings.net/ <br>transform 回転・移動などのアニメーション|
| 9 | その他のCSS | きれいなイメージのサンプル https://unsplash.com/ <br> margin: calc(10%/6) ※ホワイトスペース ※ flexboxを利用する|
| 10 | レスポンシブルとflexbox | main axis, cross axis, flex, flex-direction, justify-content　水平軸, flex-wrap, align-items 交差軸(上下), ベースライン, align-content, align-self<br> flex-basis(基本幅), flex-grow(余っているスペース), flex-shrink(縮小)  |
| 60 | まとめ |  |


