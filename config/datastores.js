module.exports.datastores = {
  default: {
    adapter: 'sails-mongo',
    url: 'mongodb://localhost:27017/database', // Địa chỉ kết nối chính xác
    // Nếu MongoDB yêu cầu xác thực:
    // user: 'your_username',
    // password: 'your_password',
  },
};
