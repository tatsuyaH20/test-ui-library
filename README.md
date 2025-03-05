# お試しUIライブラリ

社内で使用するUIコンポーネントライブラリです。

## 技術スタック

- React 19.x
- Next.js 15.x
- TypeScript
- TailwindCSS
- Storybook 8.x

## コンポーネント一覧

- `Text` - テキストコンポーネント
- `Grid` - グリッドレイアウトコンポーネント
- `Img` - 画像コンポーネント
- `CustomLink` - リンクコンポーネント

## インストール

```bash
npm install @hogehoge/test-ui-library
```

## import
### jsx

```ts
import { Text } from '@hogehoge/test-ui-library';
```

### css

```ts
import '@hogehoge/test-ui-library/output.css'
```

## 開発環境のセットアップ

1. リポジトリのクローン:
```bash
git clone https://github.com/tatsuyaH20/test-ui-library.git
cd test-ui-library
```

2. 依存パッケージのインストール:
```bash
npm install
```

3. 開発サーバーの起動:
```bash
npm run dev
```

4. ビルド:
```bash
npm run build
```

## 開発用コマンド

- `npm run dev` - Storybookの開発サーバーを起動（http://localhost:6006）
- `npm run build` - プロジェクトのビルド
- `npm run lint` - コードのリント
- `npm run format` - コードのフォーマット
