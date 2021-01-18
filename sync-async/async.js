// Asynchronous

const getUser = (id, cb) => {

    const time = id === 1 ? 3000 : 2000;

    setTimeout(function () {
        const nama = id === 1 ? 'Hafidz' : 'Masruri';
        cb({ id, nama })
    }, time);

}

const userSatu = getUser(1, (hasil) => {
    console.log(hasil);
});

const userDua = getUser(2, (hasil) => {
    console.log(hasil);
});

console.log("Hello World");
