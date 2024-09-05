# 開発合宿 2024 Chrome 拡張作成用サンプルリポジトリ (Plasmo)

[Plasmo](https://docs.plasmo.com/) という Chrome 拡張用のフレームワークを利用したサンプルリポジトリです。
ReactベースでChrome拡張の作成が可能です。

ESLint, Prettierを設定しています。

## インストール

本リポジトリをcloneし、ライブラリをインストールします。

```shell
npm ci
```

## ローカル開発環境を起動する手順

次のコマンドを実行します。

```shell
npm run dev
```

## ブラウザで利用する手順

1. ブラウザで拡張機能の設定画面 (Chromeの場合は[chrome://extensions](chrome://extensions)) を開きます。
1. 左上の「パッケージ化されていない拡張機能を読み込む」を押下し、以下のディレクトリを選択します。
   `./build/chrome-mv3-dev/`

## リファレンス

- [公式ドキュメント](https://docs.plasmo.com/)
