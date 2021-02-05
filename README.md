# 我的記賬本 (expense-tracker)

## 環境建置與需求 (prerequisites)
- Node.js 10.15.0
- body-parser 1.19.0
- express 4.17.1
- express-handlebars 5.2.0
- mongoose 5.11.13
- method-override 3.0.0
## 安裝與執行 (installation and execution)
1. 選定一個資料夾，用來存放本專案。開啟終端機，移動至該資料夾，下載本專案
```
git clone https://github.com/gg134679852/expense-tracker
```
1. 移動至本專案資料夾
```
cd expense-tracker
```
2. 安裝套件
```
npm install
```
3. 啟動伺服器
```
npm run dev 
```
4. 若終端機出現下列字樣，代表伺服器成功啟動
```
App is running on http://localhost:3000

```
1. 執行餐廳清單：打開瀏覽器，於網址列輸入
```
http://localhost:3000/
```

## 功能 (features)
- 使用者可以瀏覽所有支出項目。
- 使用者可以瀏覽所有支出的總金額。
- 使用者可以瀏覽不同類別的支出金額以及項目。
- 使用者可以新增支出項目。
- 使用者可以編輯支出內容。
- 使用者可以刪除一筆支出項目。