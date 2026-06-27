# 科展教案

這個工作區主要用來整理教案、教學網站頁面、圖片素材，以及相關的 Word 輸出檔。

## 主要入口
- `index.html`: 專案首頁
- `AI/AI.html`: AI 教學工具箱
- `routines.html`: 課堂常規頁
- `teachable-lab/index.html`: 互動教學頁

## 主要內容
- `materials/`: 教學素材圖片
- `selected_10_images/`: 精選圖片
- `shallow_camera_photos/`: 淺山相機照片
- `scripts/`: 專案腳本，已依 Python / Node 分組
- `AI小小研究員_搶救淺山精靈_教案.docx`: 教案 Word 檔
- `AI小小研究員_搶救淺山精靈_教案_含圖片.docx`: 含圖片版教案
- `台灣石虎保育_精準版參考資料.docx`: 補充參考資料

## 相關腳本
- `scripts/python/`: Word 教案、參考資料、素材表格相關 Python 腳本
- `scripts/node/`: 網頁打包與素材下載相關 Node 腳本
- `scripts/python/build_*.py`: 產出教案或參考資料
- `scripts/node/download_materials.mjs`: 下載素材
- `scripts/node/build_routines_single_file.mjs`: 整理課堂常規頁單檔版本

## 分拆說明
- `網頁修復/`: 獨立放修復頁面與檢查頁面

專案結構地圖見 `PROJECT_STRUCTURE.md`。

## 維護原則
- 優先直接修改對應頁面，不另開重複版本。
- 發布前先確認公開網址實際對應的 GitHub 倉庫。
- 大型輸出檔與臨時預覽輸出不要混進無關提交。
