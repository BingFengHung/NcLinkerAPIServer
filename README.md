# NcLinkerAPIServer

此專案主要是我自己的測試專案

目前透過讀取 json 檔案來自定義需要回傳的訊息

本專案搭配 Swagger

產生 swagger 檔案

> pnpm run prebuild

## 測試環境

pnpm run dev

目前的構想是，希望只需要建立 json 檔案，裡面定義需要的參數，就能夠自動產生對應的路由


tsoa 是 TypeScript 在使用的自動化產生 swagger 文件工具，他能夠根據你的在 Controller 上面的裝飾，自動產生對應的說明文件，讓你不需要在自己手動撰寫 API 說明。

要注意，因為他是透過靜態分析的方式，所以無法解析動態產生的程式碼。

### Todo

- [ ] 可以將想要測試的 API 定義在一個群組中方便進行測試
- [ ] 可以設定時間多久去修改 API 內的參數
