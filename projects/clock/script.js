const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");

// 初始化时钟指针的角度
let lastHourDegree = 0;
let lastMinuteDegree = 0;
let lastSecondDegree = 0;

// 更新时钟指针的角度
function updateClock() {
  const now = new Date();

  // 获取当前的小时、分钟和秒
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // 计算每个指针应该旋转的角度
  const hourDegree = (hours % 12) * 30 + (minutes / 60) * 30; // 每小时转动30度，每分钟转动0.5度
  const minuteDegree = minutes * 6 + (seconds / 60) * 6; // 每分钟转动6度，每秒转动0.1度
  const secondDegree = seconds * 6; // 每秒转动6度

  // 防止反向旋转，确保角度是递增的
  hourHand.style.transform = `translate(-50%, -100%) rotate(${hourDegree}deg)`;
  minuteHand.style.transform = `translate(-50%, -100%) rotate(${minuteDegree}deg)`;
  secondHand.style.transform = `translate(-50%, -100%) rotate(${secondDegree}deg)`;
}

// 每秒钟更新一次时钟
setInterval(updateClock, 1000);

// 初始化时钟显示
updateClock();
