## サーバー
1. Node.jsの初期化
```
npm init -y
```

2. Expressのインストール
```
npm i express
```

3. dotenvのインストール
```
npm i dotenv
```

4. Socket.ioのインストール
```
npm i socket.io
```

5. Node Monitorのインストール
```
npm i nodemon
```

6. .env 作成
```
HOST=localhost
PORT=3000
```

7. server.js 作成（サーバープログラム）

8. package.json に npm run dev スクリプトを追加

```
...
  "scripts": {
    "dev": "nodemon server",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
...
```

9. サーバプログラム「server.js」をコーディングしサーバー起動
```
npm run dev
```

10. ブラウザでアクセス
http://localhost:3000

11. Websocketのプログラム作成


## クライアント
1. publicフォルダを作成

2. public/js/chat.jsを作成（メインプログラム）

3. public/index.htmlを作成

4. Bootstrap5 CDN読み込み
```
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
```

5. Socket.io ライブラリ読み込み
```
<script type="text/javascript" src="/socket.io/socket.io.js"></script>
```

6. body終了タグの前に、「chat.js」読み込み  
```
<body>
...
...
<script src="js/chat.js"></script>
</body>
```

7. index.html に必要なチャットに必要なDOMを追加

8. Websocketのプログラム作成