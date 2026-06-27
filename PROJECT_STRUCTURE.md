# 專案結構

## 頁面入口
- `index.html`: 專案首頁
- `AI/AI.html`: AI 工具箱
- `routines.html`: 課堂常規頁
- `teachable-lab/index.html`: 互動教學頁

## 腳本分組
- `scripts/python/`: Word 教案、參考資料、素材表格處理
- `scripts/node/`: 網頁打包、素材下載

## 素材與產出
- `materials/`: 教學素材圖
- `selected_10_images/`: 篩選後圖片
- `shallow_camera_photos/`: 淺山相機照片
- 根目錄 `.docx`: 主要教案與參考資料輸出

## 子專案
- `網頁修復/repair-pages/`: 修復用途頁面
- `網頁修復/check-pages/`: 檢查用途頁面

## 維護原則
- 教案主專案與修復檢查頁面分開管理。
- 入口頁留在主專案根目錄或既有子資料夾，不任意搬動。
- 腳本集中在 `scripts/` 下，避免根目錄繼續堆疊工具檔。
- 發布前先確認實際公開網址對應的遠端 repo。
