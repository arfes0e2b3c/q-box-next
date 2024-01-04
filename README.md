# 概要

横浜国立大学に存在する「お手伝いサークル」の公式サイトです。
学生生活や大学についての質問を募集・回答することができます。

サービス自体は2023/3〜稼働していましたが、2023/11に既存のNuxt.jsからNext.jsにフルリプレイスを行いました。

# サービスURL

https://www.otetsudai-circle.com/

# 記事URL

より詳細なものは以下記事に記載しています。

[【質問箱】お手伝いサークル公式サイトをNext.jsにリプレイスしました](https://www.arfes.jp/article/lb1nprwauz0f)

# 開発の経緯

お手伝いサークル(弊学に存在する、X上で学生生活や大学についての質問を回答する活動を行う団体)が既存の質問箱で活動を行なっていたのですが、その際に課題があると感じていたことから開発に着手しました。

# 画面構成

- ユーザー側
  - ログイン画面
  - 一覧画面
  - 詳細画面
  - 検索画面
- アドミン側
  - 未回答の質問画面
  - 未回答の返信画面

# 使用技術

| 種類           | Before                  | After                   |
| -------------- | ----------------------- | ----------------------- |
| ホスティング   | Google App Engine       | Vercel                  |
| フロントエンド | Nuxt.js v2.15.8         | Next.js v13.5.6         |
| CSS            | Sass                    | vanilla-extract         |
| Fetch          | axios                   | react-query             |
| 状態管理       | -                       | Zustand                 |
| 認証           | Firebase Authentication | Firebase Authentication |
| ストレージ     | microCMS                | S3, microCMS            |
| CDN            | -                       | Cloudfront              |
| CI             | -                       | GitHubActions           |

# インフラ構成図

![](<https://images.microcms-assets.io/assets/ca0c41f03efd472a910782fea07dff31/e1b9cc29e11544d0bb456e9e8215e4ca/%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E6%A7%8B%E6%88%90%E3%81%99%E3%82%99%20(3).jpg>)
