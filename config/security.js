module.exports.security = {
  cors: {
    allRoutes: true, // Cho phép CORS trên tất cả các route
    allowOrigins: ['http://localhost:3000'], // Chỉ cho phép từ địa chỉ này
    allowCredentials: true, // Nếu cần gửi thông tin đăng nhập
  },
  
};
