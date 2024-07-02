// write code here
const user = {
    email: 'cc@gmail.com',
    isActive: true
  };
  
  user.isActive = false;
  console.log(user); /* * user = {
    email: 'cc@gmail.com',
    isActive: flase
  };สามารถเปลี่ยนค่า propoties ภายในได้ */
  user = {};
  console.log(user); // ** error เปลี่ยนการอ้างอิงของ user ที่ประกาศด้วย cpnst