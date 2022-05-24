const nama = document.querySelector('#nama');

nama.addEventListener('click', updateName);

function updateName() {
    const name = prompt('Masukkan nama:');
    nama.textContent = name;
}

const hari = document.querySelector('#hari');

hari.addEventListener('click', updateDay);

function updateDay() {
    const day = prompt('Masukkan hari:');
    hari.textContent = day;
}

const kuliah1 = document.querySelector('#kuliah1');

kuliah1.addEventListener('click', updateKuliah1);

function updateKuliah1() {
    const Mapel1 = prompt('Masukkan Jadwal:');
    kuliah1.textContent = Mapel1;
}

const kuliah2 = document.querySelector('#kuliah2');

kuliah2.addEventListener('click', updateKuliah2);

function updateKuliah2() {
    const Mapel2 = prompt('Masukkan Jadwal ke 2:');
    kuliah2.textContent = Mapel2;
}

const kuliah3 = document.querySelector('#kuliah3');

kuliah3.addEventListener('click', updateKuliah3);

function updateKuliah3() {
    const Mapel3 = prompt('Masukkan Jadwal ke 3:');
    kuliah3.textContent = Mapel3;
}