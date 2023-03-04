---
title: 'マークダウン記法の検証'
status: true
excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.'
publishedAt: '2020-03-16T01:00:00.000+09:00'
updatedAt: '2020-03-16T01:00:00.000+09:00'
ogImageUrl: ''
tags: ['md-article', 'md-post', 'md', 'markdown', 'markdown-arti']
---
## お品書き

## Block Elements

### Headers 見出し
先頭に`#`をレベルの数だけ記述します。
```md
# 見出し1
## 見出し2
### 見出し3
#### 見出し4
##### 見出し5
###### 見出し6
```

# 見出し1
## 見出し2
### 見出し3
#### 見出し4
##### 見出し5
###### 見出し6

### 目次
ある言葉を heading にいれると、その文言の目次が生成されます。
ある言葉は constant.ts の 'TOC_HEADING' に設定できる。
```md
## TOC_HEADING
```
と記述すると、それより下の heading を調べて目次を作ります 。

### Block 段落
空白行を挟むことで段落となります。
```md
段落1
(空行)
段落2
```
段落1

段落2


### Br 改行
改行の前に半角スペース`  `を2つ記述します。またはプラグインを入れているので、改行をすると自動的に改行されます。
2以上空行を挟むと、新しいpタグで始めます。
```md
hoge
fuga(スペース2つ)
piyo
```
hoge
fuga
piyo

### Blockquotes 引用
先頭に`>`を記述します。ネストは`>`を多重に記述します。
```md
> 引用

> 引用
> この引用は続いています。この二行で1つの引用になります。

>> ネストされた引用です
```

> 引用

> 引用
> この引用は続いています。この二行で1つの引用になります。

>> ネストされた引用です

## Code シンタックスハイライト

### Code コード
`バッククオート` 3つ、あるいはダッシュ`~`３つで囲みます。
preタグの中にcodeタグが入ります。
` ```js ` とすると、jsのシンタックスハイライトが適用されます。
```js
const hoge = 'hoge';
console.log(hoge);
```



### インラインコード
` `バッククオート` ` で単語を囲むとインラインコードになります。
マークダウン記法などをエスケープしたい時にも使えます。
```md
これは `インラインコード`です。
```

これは `インラインコード`です。



### pre 整形済みテキスト(コードブロック)
半角スペース4個もしくはタブで、preタグを作成します。その内部はコードタグで囲まれます。
Codeの方がシンタックスハイライトが適用されるので、Codeを使うことを推奨します。
```python
class Markdown:
    def __init__(self):
        self.hoge = 'hoge'

    def fuga(self):
        print(self.hoge)

```
    class Markdown:
        def __init__(self):
            self.hoge = 'hoge'

        def fuga(self):
            print(self.hoge)


### Hr 水平線
アンダースコア`_` 、アスタリスク`*`を3つ以上連続して記述します。
```md
水平線
***
水平線
___

```
水平線
***
水平線
___



## Lists
### Ul 箇条書きリスト
ハイフン`-`、プラス`+`、アスタリスク`*`のいずれかを先頭に記述します。
ネストはタブで表現します。
```md
- リスト1
    - リスト1_1
        - リスト1_1_1
        - リスト1_1_2
    - リスト1_2
- リスト2
- リスト3
```

- リスト1
  - リスト1_1
    - リスト1_1_1
    - リスト1_1_2
  - リスト1_2
- リスト2
- リスト3

## Ol 番号付きリスト
`番号.`を先頭に記述します。ネストはタブで表現します。
番号は自動的に採番されるため、すべての行を1.と記述するのがお勧めです。
```md
1. 番号付きリスト1
    1. 番号付きリスト1-1
    1. 番号付きリスト1-2
1. 番号付きリスト2
1. 番号付きリスト3
```

1. 番号付きリスト1
  1. 番号付きリスト1-1
  1. 番号付きリスト1-2
1. 番号付きリスト2
1. 番号付きリスト3

## Span Elements

### Link リンク
`[表示文字](URL, Title)`でリンクに変換されます。
Next.jsのLinkコンポーネントに変換されます。
```md
[Google](https://www.google.co.jp/, "Google")
```
#### 外部リンク
[Google](https://www.google.co.jp/, "Google")

#### ブログ内部のリンク
[タグのテスト記事](/posts/how-to-use-tag, "タグのテスト記事")

#### 外部参照リンク
URLが長くて読みづらくなる場合や同じリンクを何度も使用する場合は、リンク先への参照を定義できます。
```md
[Googleを見る][Google]
[Google]: http://www.yahoo.co.jp
```
[Googleを見る][Google]
[Google]: http://www.yahoo.co.jp

### 強調
#### em
アスタリスク`*`もしくはアンダースコア`_`1個で文字列を囲みます。
```md
これは *イタリック* です
これは _イタリック_ です
```
これは *イタリック* です
これは _イタリック_ です

### strong
アスタリスク`*`もしくはアンダースコア`_`2個で文字列を囲みます。
```md
これは **ボールド** です
これは __ボールド__ です
```

これは **ボールド** です
これは __ボールド__ です

#### em + strong
アスタリスク`*`もしくはアンダースコア`_`3個で文字列を囲みます。
```md
これは ***イタリック＆ボールド*** です
これは ___イタリック＆ボールド___ です
```
これは ***イタリック＆ボールド*** です
これは ___イタリック＆ボールド___ です

### Images 画像
```先頭の`!`で画像の<img>```と認識されます。画像の大きさなどの指定をする場合はimgタグを使用します。
imgタグは next/image コンポーネントに変換されます。サイズは指定しなくても自動で調整されます。ただし16:9の比率で調整されます。
他の文章の前後におくと p タグに組み込まれるので、空行を入れてください。組み込まれると p タグの中に div タグがあることになります。
```md
![alt](/assets/hongkong-bg.png)
![代替文字列](/assets/hongkong-bg.png "タイトル")
<img src="/assets/hongkong-bg.png" alt="this is background image." width=200 height=200>
```
ブログ内の画像 md記法
![ブログ内の画像](/assets/hongkong-bg.png)

ブログ内の画像 imgタグ
<img src="/assets/hongkong-bg.png" alt="this is for test" width=200 height=200>

## Table 表
`-`と`|`を使ってtableを作成します。
```md
| TH1 | TH2 |
----|----
| TD1 | TD3 |
| TD2 | TD4 |
```
と書くと

| TH1 | TH2 |
----|----
| TD1 | TD3 |
| TD2 | TD4 |

```md
| 左揃え | 中央揃え | 右揃え |
|:---|:---:|---:|
|1 |2 |3 |
|4 |5 |6 |
```
と書くと
| 左揃え | 中央揃え | 右揃え |
|:---|:---:|---:|
|1 |2 |3 |
|4 |5 |6 |
