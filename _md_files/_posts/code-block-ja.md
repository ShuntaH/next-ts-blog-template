---
title: 'コードブロックの書き方'
excerpt: 'コードブロックを書いてみた記事'
status: true
publishedAt: '2020-03-16T01:00:00.000+09:00'
updatedAt: '2020-03-16T01:00:00.000+09:00'
ogImageUrl: ''
tags: ['code']
---

## お品書き

# コードシンタックスハイライトがコードブロックにはつきます。
## JavaScript

```js
const hoge = 'hoge';
console.log(hoge);
```

## HTML
コードブロック内に書いた img タグが画像ではなく、文字列として表示されるかも確認する。
```html
<div class="hoge">
  <p>fuga</p>
    <img src="/hoge" alt="hoge">
</div>
```

## CSS

```css
.hoge {
  color: #fff;
  background-color: #000;
}
```

## Markdown

```md
# hoge
## fuga
### piyo
```

## Python

```py
hoge = 'hoge'
print(hoge)
```

