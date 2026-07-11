# Interest Rate Calculator — Final Project

## 1. Extract & masuk folder
```bash
cd interest-rate-calculator
```

## 2. Init git & buat repo baru di GitHub
```bash
git init
git add .
git commit -m "Initial commit: Interest Rate Calculator"
```
Buat repo BARU di github.com (nama bebas, misal `interest-rate-calculator`),
JANGAN centang "Initialize with README" biar tidak konflik.
Lalu hubungkan:
```bash
git branch -M main
git remote add origin https://github.com/USERNAME/interest-rate-calculator.git
git push -u origin main
```

## 3. Install dependencies
```bash
npm install
```

## 4. Task 3 — Jalankan Jasmine SEBELUM ada spec (opsional, untuk bukti "no specs found")
Kalau mau reproduce langkah "no specs found" dari nol:
```bash
mkdir spec-empty-test && cd spec-empty-test
npx jasmine init
npx jasmine > no-spec.txt
cat no-spec.txt
cd ..
```
Atau langsung saja jalankan di folder project sebelum menambahkan isi ke scriptSpec.js.

## 5. Task 4 — Jalankan Jasmine dengan spec yang sudah lengkap
```bash
npx jasmine | tee both-tests-passed.txt
```
Harus keluar: `2 specs, 0 failures`

## 6. Task 5 — Jalankan Webpack
```bash
npx webpack | tee dist-directory.txt
```
Ini akan membuat folder `dist/bundle.js` dan menampilkan output build sukses.

## 7. Push semua perubahan (termasuk file txt output kalau mau disimpan di repo)
```bash
git add .
git commit -m "Add tests and webpack build output"
git push
```

## 8. Ambil URL GitHub untuk submission
- Task 1: buka file `index.html` di GitHub → klik tombol "Raw" atau copy URL blob-nya
- Task 2: sama, buka file `script.js` di GitHub, copy URL-nya
- Task 3–5: copy-paste isi file `no-spec.txt`, `both-tests-passed.txt`, `dist-directory.txt` ke jawaban teks
