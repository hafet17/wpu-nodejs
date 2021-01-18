// Synchronous

const getUserSync = (id) => {
    const nama = id === 1 ? 'Hafidz' : 'Masruri'
    return { id, nama }
}

const userSatu = getUserSync(1);
console.log(userSatu);

const userDua = getUserSync(2);
console.log(userDua);

console.log("Hello World");
