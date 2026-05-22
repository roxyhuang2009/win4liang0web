<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToSchedule = () => router.push('/schedule')
const goToTasks = () => router.push('/tasks')
const goToInsights = () => router.push('/insights')
</script>

<template>
  <div class="container">
    <header class="header">
      <p class="pre-title">北一女中 第 40 屆數理資優班成果發表</p>
      <h1 class="main-title">溫賜良緣</h1>
      
      <div class="info-box">
        <p><span>IG</span> win4_liang0</p>
        <p><span>日期</span> 2026/05/25</p>
        <p><span>時間</span> 13:00-17:10</p>
        <p><span>地點</span> 北一女中 學珠樓六樓國際會議廳</p>
      </div>
    </header>

    <div class="button-group">
      <div class="nav-card" @click="goToSchedule">
        <h2>成發時程表</h2>
        <p>大致流程與分場細流</p>
      </div>

      <div class="nav-card" @click="goToTasks">
        <h2>工作分配</h2>
        <p>各組職務與成員名單</p>
      </div>

      <div class="nav-card" @click="goToInsights">
        <h2>專研心得與感謝</h2>
        <p>各科專研組員的專研心得與感謝的話</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1100px; /* 稍微加寬容納三個卡片 */
  margin: 0 auto;
  padding: 8vh 20px;
  text-align: center;
}

.header { margin-bottom: 50px; }

.pre-title {
  font-size: 1.2rem;
  color: #555;
  letter-spacing: 4px;
  margin-bottom: 15px;
  font-weight: bold;
  text-align: center; 
}

.main-title {
  font-size: 4.5rem;
  font-weight: 900;
  letter-spacing: 8px; 
  color: #2c3e50;
  margin: 0 0 30px 0;
  text-shadow: 4px 4px 0px #a9d7ff;
  text-align: center;
}

.info-box {
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid #d6ecff;
  border-radius: 12px;
  padding: 20px;
  display: inline-block;
  text-align: left;
  box-shadow: 0 4px 10px rgba(169, 215, 255, 0.2);
}

.info-box p {
  margin: 8px 0;
  color: #333;
  font-size: 1.1rem;
  letter-spacing: 2px;
}

.info-box span {
  display: inline-block;
  width: 50px;
  font-weight: bold;
  color: #4a6fa5;
}

.button-group {
  display: flex;
  gap: 25px;
  justify-content: center;
  flex-wrap: wrap;
}

.nav-card {
  background-color: #ffffff;
  border: 2px solid #d6ecff;
  border-radius: 20px;
  padding: 40px 25px;
  width: 300px;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(169, 215, 255, 0.3);
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.nav-card:hover {
  transform: translateY(-10px);
  border-color: #a9d7ff;
  box-shadow: 0 15px 30px rgba(169, 215, 255, 0.5);
  background-color: #f8fbff;
}

.nav-card h2 {
  color: #2c3e50;
  margin-top: 0;
  border-bottom: 3px solid #a9d7ff;
  display: inline-block;
  padding-bottom: 10px;
  font-size: 1.6rem;
}

.nav-card p {
  color: #666;
  margin-bottom: 0;
  font-weight: bold;
  font-size: 0.95rem;
}

@media (max-width: 600px) {
  .main-title {
    font-size: 11vw; 
    letter-spacing: 1.5vw;
    text-shadow: 2px 2px 0px #a9d7ff;
    white-space: nowrap; 
    margin-bottom: 20px;
  }
  
  .pre-title {
    font-size: 0.9rem;
    letter-spacing: 1px;
    padding: 0 10px;
  }
  
  .nav-card {
    width: 100%;
    padding: 25px 15px;
  }

  .info-box p {
    font-size: 0.95rem;
  }
}
</style>