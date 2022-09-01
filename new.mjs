import { question } from "readline-sync";
import { slug } from "kumpulan-tools";
import { writeFileSync } from "fs";

const judul = question("Judul: ");

const tanggalan = new Date();
const tanggal = tanggalan.getDate();
const bulan = tanggalan.getMonth();
const tahun = tanggalan.getFullYear();

const list_bulan = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const sekarang = `${tanggal} ${list_bulan[bulan]} ${tahun}`;

const isi = `---
layout: "@/layouts/BlogPost"
title: "${judul}"
publishDate: ${sekarang}
description: ""
tags: [""]
---
`;

writeFileSync(`src/pages/posts/${slug(judul)}.mdx`, isi);
