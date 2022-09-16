const bcrypt = require('bcrypt');

const hashPassword = async (pw) => {
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(pw, salt);
    console.log(salt);
    console.log(hash);
}
// const hashPassword = async (pw) => {
//     const hash = await bcrypt.hash(pw, 12);
//     console.log(hash);
// }
hashPassword('123456');

const login = async (pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw);
    if (result) {
        console.log('ログイン成功！！！！');
    } else {
        console.log('ログイン失敗！！！');
    }
}


login('123456', '$2b$12$JK3k.eauMckscWEXhoNfdOcSMiz50wFcObLyrzP5jbIuNRjzDwDSm');