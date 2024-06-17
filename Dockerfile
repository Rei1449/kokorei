# nodeのバージョン指定
FROM node:lts

# 作業ディレクトリの設定
WORKDIR /app

# 依存関係ファイルをコピー
# COPY package.json package-lock.json ./

# 依存関係のインストール
RUN yarn install
