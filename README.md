# Implementasi Sistem Pencarian untuk Kursus Online Informatika

Projek ini dibangun dengan menggunakan NodeJS sebagai server dari aplikasi, adapun module yang digunakannya yaitu:

- Express, digunakan untuk membuat suatu REST API Server
- Axios, digunakan untuk fetching API yang berasal dari server SPARQL

Untuk database juga akan ada pada repository ini pada folder `data` dan diperbarui secara berkala.

## Cara Penggunaan Backend

- Jalankan fuseki server dengan command dibawah pada folder fuseki server di cmd/terminal

  Pada sistem operasi Windows :
  ```cmd
  fuseki-server
  ```
  Pada sistem operasi berbasis Linux :
  ```cmd
  ./fuseki-server
  ```

- Akses server management di
  
  ```link
  http://localhost:3030
  ```

- Tambahkan `dataset` dengan nama `cari-kursus`
- Upload data `cari-kursus.ttl` ada pada folder `data` di repository
- Kemudian buka cmd/terminal lain atau tab baru pada terminal, tanpa menutup cmd/terminal fuseki server.
- Install node modules dengan
  
  ```cmd
  npm install
  ```
  
- Jalankan REST API Server dengan
  
  ```cmd
  npm start
  ```

## Dokumentasi API

Dokumentasi API ada pada [link berikut](https://documenter.getpostman.com/view/6308700/SztBa84X?version=latest).

## Kelompok

- Muhammad Fadillah Arsa (NPM. 140810170005)
- Firmansyah Yanuar (NPM. 140810170051)
- Kevin Akbar Adhiguna (NPM. 140810170055)

[![Visits Badge](https://badges.pufler.dev/visits/kevinadhiguna/cari-kursus-backend)](https://github.com/kevinadhiguna)
