# Cheese
## コンセプト
- 地図
- Choose（チューズ）
- はいチーズ

**地図から行きたい場所をチューズしてはいチーズ！**



## コミットメッセージ

### Prefix

- feat: 新しい機能
- fix: バグの修正
- docs: ドキュメントのみの変更
- style: 空白、フォーマット、セミコロン追加など
- refactor: 仕様に影響がないコード改善(リファクタ)
- perf: パフォーマンス向上関連
- test: テスト関連
- chore: ビルド、補助ツール、ライブラリ関連

etc. feat: 〇〇なため、△△ を追加

参考 URL:https://qiita.com/konatsu_p/items/dfe199ebe3a7d2010b3e#1-prefix%E3%82%92%E3%81%A4%E3%81%91%E3%82%8B

## Pull Request

### 実行タスク（issue 番号）

どの実行タスクに対するプルリクか？

### やったこと

このプルリクで何をしたのか？

- 〇〇を変更

### 確認項目

- [ ] 動作確認
- [ ] セルフレビュー

### 補足事項

レビュワーへの補足事項はあるか？（あれば。無いなら「無し」で OK）

## Branch

feature/name/#2(issue)

## Atomic Design

<table>
<thead>
<tr>
<th style="text-align: center">レイヤー</th>
<th style="text-align: left">責務</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center">pages</td>
<td style="text-align: left">基本的には Route コンポーネントの直下で呼ばれる<br>API リクエスト/レスポンスのハンドリングを行う<br>クエリパラメータの取得やリダイレクトなど router 関連の処理を行う<br>redux や context に依存する値や関数を呼び出す<br>template, organisms を呼び出す<br>loading/error/empty 等の状態に応じて呼び出す子コンポーネントを切り替える<br>基本的にはCSSファイルを持たない</td>
</tr>
<tr>
<td style="text-align: center">templates</td>
<td style="text-align: left">ロジックを持たない<br>pagesコンポーネントからのみ呼ばれる<br>1ページあたり1回だけ呼ばれる<br>DOMツリーの最も root に近い場所にレンダリングされる<br>CSSファイルを持つ</td>
</tr>
<tr>
<td style="text-align: center">organisms</td>
<td style="text-align: left">ドメイン知識を持つ<br>ロジックを持つ場合は表示を制御するコンポーネントと分けて実装する<br>CSSファイルを持っても良い</td>
</tr>
<tr>
<td style="text-align: center">atoms/molecules</td>
<td style="text-align: left">基本的にはドメイン知識を持たない<br>複数 organisms から参照される<br>CSSファイルを持つ</td>
</tr>
</tbody>
</table>

- orgamisms/ページ名/...
- atoms?molecules/...

https://qiita.com/takano-h/items/8731d8e7413d7b1f6d7b

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## supabase generate type

```
supabase gen types typescript --linked > schema.ts
```
