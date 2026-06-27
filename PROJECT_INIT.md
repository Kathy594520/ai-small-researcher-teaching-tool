# 專案初始化摘要

## 目前狀態
- 已有 Git 倉庫與既有內容。
- 已補上基本初始化文件與忽略規則。
- 已把修復頁面與檢查頁面抽到 `網頁修復/` 子專案。

## 已建立
- `ANTIGRAVITY.md`: 工作筆記與開工收工流程
- `.gitignore`: 忽略本機 worktree 與伺服器輸出
- `README.md`: 主要入口、內容與維護原則
- `scripts/python/` 與 `scripts/node/`: 腳本依用途分組
- `網頁修復/`: 獨立的修復／檢查子專案

## 這次整理
- 根目錄保留教案主專案頁面入口、主要素材與輸出檔
- 修復頁面 `StudentTeamBuilder.html` 已移到 `網頁修復/repair-pages/`
- 檢查頁面 `routines.debug.html` 已移到 `網頁修復/check-pages/`

## 後續建議
1. 如果要持續維護 GitHub Pages，建議把不同公開站點的來源 repo 分開管理。
2. 如果要常態化產出教案，可再補 `docs/` 或發版清單。
3. 若 `網頁修復/` 後續獨立度更高，可再拆成單獨 Git 倉庫。
