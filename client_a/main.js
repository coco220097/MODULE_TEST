// main.jsファイル

// dotenvパッケージを読み込む
require('dotenv').config();

// message.jsファイルを読み込む
const message = require('./message');

// .envファイルから環境変数を取得
const apiKey = process.env.API_KEY;
const dbConnection = process.env.DB_CONNECTION;

// メッセージを生成
const greeting = message.createMessage('John', 123);

console.log(greeting);