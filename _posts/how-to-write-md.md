---
title: 'マークダウン記法の検証'
status: true
excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.'
publishedAt: '2020-03-16T01:00:00.000+09:00'
updatedAt: '2020-03-16T01:00:00.000+09:00'
ogImageUrl: ''
tags: ['md-article', 'md-post', 'md', 'markdown', 'markdown-arti']
---

# Block Elements

## Headers 見出し

先頭に`#`をレベルの数だけ記述します。

```
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

## Block 段落

空白行を挟むことで段落となります。

```
段落1
(空行)
段落2
```

段落1

段落2

## Br 改行

改行の前に半角スペース`  `を2つ記述します。

```
hoge
fuga(スペース2つ)
piyo
```

hoge
fuga
piyo

## Blockquotes 引用

先頭に`>`を記述します。ネストは`>`を多重に記述します。

```
> 引用
> 引用
>> 多重引用
```

> 引用
> 引用
>> 多重引用

## Code コード

`` `バッククオート` `` 3つ、あるいはダッシュ`~`３つで囲みます。

```
print 'hoge'
```

### インラインコード

`` `バッククオート` `` で単語を囲むとインラインコードになります。

```
これは `インラインコード`です。
```

これは `インラインコード`です。

## pre 整形済みテキスト

半角スペース4個もしくはタブで、コードブロックをpre表示できます

```
    class Hoge
        def hoge
            print 'hoge'
        end
    end
```

    class Hoge
        def hoge
            print 'hoge'
        end
    end

## Hr 水平線

アンダースコア`_` 、アスタリスク`*`、ハイフン`-`などを3つ以上連続して記述します。

```
hoge
***
hoge
___
hoge
---
```

hoge
***
hoge
___
hoge
---

# Lists

## Ul 箇条書きリスト

ハイフン`-`、プラス`+`、アスタリスク`*`のいずれかを先頭に記述します。
ネストはタブで表現します。

```
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

```
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

# Span Elements

## Link リンク

`[表示文字](URL)`でリンクに変換されます。
Next.jsのLinkコンポーネントに変換されます。

```
[Google](https://www.google.co.jp/)
```
外部リンク
[Google](https://www.google.co.jp/)

ブログ内部のリンク
[タグのテスト記事](/posts/how-to-use-tag)

```

### 外部参照リンク

URLが長くて読みづらくなる場合や同じリンクを何度も使用する場合は、リンク先への参照を定義できます。

```
[Googleを見る][Google]
[Google]: http://www.yahoo.co.jp
```

[Googleを見る][Google]
[Google]: http://www.yahoo.co.jp

## 強調
### em

アスタリスク`*`もしくはアンダースコア`_`1個で文字列を囲みます。

```
これは *イタリック* です
これは _イタリック_ です
```

これは *イタリック* です
これは _イタリック_ です

### strong

アスタリスク`*`もしくはアンダースコア`_`2個で文字列を囲みます。

```
これは **ボールド** です
これは __ボールド__ です
```

これは **ボールド** です
これは __ボールド__ です

### em + strong

アスタリスク`*`もしくはアンダースコア`_`3個で文字列を囲みます。

```
これは ***イタリック＆ボールド*** です
これは ___イタリック＆ボールド___ です
```

これは ***イタリック＆ボールド*** です
これは ___イタリック＆ボールド___ です

## Images 画像

先頭の`!`で画像の<img>と認識されます。画像の大きさなどの指定をする場合はimgタグを使用します。
imgタグは next/image コンポーネントに変換されます。

```
![alt](/assets/hongkong-bg.png)
![代替文字列](/assets/hongkong-bg.png "タイトル")

ブログ内の画像 md記法
![ブログ内の画像](/assets/hongkong-bg.png)

ブログ内の画像 imgタグ
<img src="/assets/hongkong-bg.png" alt="this is background image." width=200 height=200>
```

# Table 表

`-`と`|`を使ってtableを作成します。

```
| TH1 | TH2 |
----|----
| TD1 | TD3 |
| TD2 | TD4 |
```

| TH1 | TH2 |
----|----
| TD1 | TD3 |
| TD2 | TD4 |

```
| 左揃え | 中央揃え | 右揃え |
|:---|:---:|---:|
|1 |2 |3 |
|4 |5 |6 |
```

| 左揃え | 中央揃え | 右揃え |
|:---|:---:|---:|
|1 |2 |3 |
|4 |5 |6 |
