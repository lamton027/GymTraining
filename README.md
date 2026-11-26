# GymTraining

Trang lịch tập gym 5 buổi bằng HTML, CSS và JavaScript thuần. Dữ liệu hoàn thành, cân nặng và link video được lưu trong `localStorage` của trình duyệt.

## Cấu trúc

```text
GymTraining/
├── .github/workflows/deploy-pages.yml
├── assets/
│   ├── css/styles.css
│   └── js/app.js
├── .gitignore
├── .nojekyll
├── index.html
└── README.md
```

## Chạy trên máy

Có thể mở `index.html` trực tiếp hoặc chạy một web server cục bộ:

```powershell
python -m http.server 8080
```

Sau đó mở `http://localhost:8080`.

## Đưa lên GitHub Pages

Workflow trong `.github/workflows/deploy-pages.yml` sẽ tự triển khai khi có commit mới trên nhánh `main`.

Trong repository GitHub, mở **Settings → Pages → Build and deployment** và chọn **Source: GitHub Actions**.
