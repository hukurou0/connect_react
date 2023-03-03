# CONNECT (Frontend)

## Basic Information
- [React](https://beta.reactjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Mantine](https://mantine.dev) (UI Components)
- [Recoil](https://recoiljs.org) (State Management)
- DDD (Clean Architecture)

## Requirements
- Node.js: 16.18.0
- npm: 9.5.1
- VS Code (Recommended)

## Installation
`npm install` でプロジェクトの依存関係にあるライブラリ等を全てインストールする。

Type `npm install` into your console to install all necessary dependencies for this project.

## Startup Local Host
`npm start` でローカルホストを立ち上げる。

Type `npm start` into your console to start your localhost.

## Git Rules
### Prefixes
```
fix: バグ等の修正
feat: 新機能
refactor: 動作に影響のないコード変更
docs: ドキュメントのみの変更
style: スタイルのみの変更
perf: パフォーマンス向上関連の変更
chore: ライブラリ等の変更
test: テスト関連の変更
**!: 破壊的変更
```

### Branch Name
```
ex) {your_name}/feat_***
```

### Commit Message
```
ex) feat: xxxx
```

Reference: https://www.conventionalcommits.org/en/v1.0.0/

## Directories
```
.
├── public/ (デプロイされるファイルを入れる)
├── src/ (ソースコード)
│   ├── common/ (プロジェクト内で共通しているもの)
│   │   ├── Assets/ (アイコン等)
│   │   ├── Domain/ (ドメイン層)
│   │   └── (以下 features 内のドメインごと)
│   ├── features/ (機能単位で分ける)
│   │   ├── **/ (機能)
│   │   │   ├── Domain/ (ドメイン層)
│   │   │   │   ├── Entities/ (エンティティ)
│   │   │   │   │   ├── **Entity.ts
│   │   │   │   ├── Repositories/ (リポジトリ)
│   │   │   │   │   ├── **Repo.ts
│   │   │   │   ├── DomainServices/ (ドメインサービス)
│   │   │   │   │   ├── **DomService.ts
│   │   │   ├── ApplicationServices/ (アプリケーションサービス)
│   │   │   │   ├── **AppService.ts
│   │   │   ├── Hooks/ (プレゼンテーション層のコントローラ)
│   │   │   │   ├── **State.ts
│   │   │   │   └── **Hook.ts
│   │   │   └── UI/ (プレゼンテーション層)
│   │   │       ├── Components/ (コンポーネント)
│   │   │       └── Screens/ (画面)
│   │   │           ├── **Screen.tsx
│   ├── lib/ (プロジェクト全体で使う関数・定数入れ)
│   │   ├── constants/ (定数)
│   │   └── helpers/ (ヘルパー関数)
│   ├── App.tsx
│   ├── Layout.tsx
│   ├── index.css
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   └── setupTests.ts
├── README.md
├── package-lock.json
├── package.json
└── tsconfig.json
```