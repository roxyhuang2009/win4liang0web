<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

// 大致流程資料
const generalSchedule = [
  { time: '13:00-13:15', event: '開幕式' },
  { time: '13:15-13:40', event: '國際科展優秀作品報告' },
  { time: '14:10-16:00', event: '各科分場報告' },
  { time: '16:10-16:30', event: '教授講評' },
  { time: '16:30-17:10', event: '閉幕式' }
]

// 分場細流資料
const subSchedules = [
  {
    title: '1. 數學組、物理組、資訊組',
    location: '地點：學珠樓六樓國際會議廳',
    rows: [
      { time: '14:20-14:25', event: '開場' },
      { time: '14:25-14:40', event: '數學組報告' },
      { time: '14:40-14:55', event: '物理組報告' },
      { time: '14:55-15:05', event: '中場休息' },
      { time: '15:05-15:40', event: '資訊組報告' },
      { time: '15:40-16:10', event: '展板時間' }
    ]
  },
  {
    title: '2. 地科組、化學組',
    location: '地點：至善樓二樓會議室',
    rows: [
      { time: '14:20-14:25', event: '開場' },
      { time: '14:25-14:45', event: '地科組報告' },
      { time: '14:45-14:55', event: '化學組報告' },
      { time: '14:55-15:15', event: '中場休息' },
      { time: '15:15-15:40', event: '化學組報告' },
      { time: '15:40-16:10', event: '展板時間' }
    ]
  },
  {
    title: '3. 生物組',
    location: '地點：學珠樓三樓圖書館會議室',
    rows: [
      { time: '14:20-14:25', event: '開場' },
      { time: '14:25-14:55', event: '生物組報告' },
      { time: '14:55-15:05', event: '中場休息' },
      { time: '15:05-15:25', event: '生物組報告' },
      { time: '15:25-15:35', event: '主持總結' },
      { time: '15:35-16:10', event: '展板時間' }
    ]
  }
]
</script>

<template>
  <div class="container">
    <button class="back-btn" @click="router.push('/')">← 返回首頁</button>
    <h1 class="page-title">成發時程表</h1>

    <div class="section-box">
      <h2 class="section-title">✦ 活動流程</h2>
      <div class="schedule-table">
        <div v-for="(item, index) in generalSchedule" :key="index" class="table-row">
          <div class="time-col">{{ item.time }}</div>
          <div class="event-col">{{ item.event }}</div>
        </div>
      </div>
    </div>

    <div class="dashed-divider"></div>

    <div class="section-box">
      <h2 class="section-title">✦ 各科分場流程</h2>
      
      <div v-for="(sub, sIndex) in subSchedules" :key="sIndex" class="sub-card">
        <div class="sub-card-header">
          <h3 class="sub-title">{{ sub.title }}</h3>
          <span class="location-badge">{{ sub.location }}</span>
        </div>
        
        <div class="schedule-table">
          <div v-for="(row, rIndex) in sub.rows" :key="rIndex" class="table-row">
            <div class="time-col">{{ row.time }}</div>
            <div class="event-col">{{ row.event }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 850px;
  margin: 0 auto;
  padding: 40px 20px;
}

.back-btn {
  background: none;
  border: none;
  color: #4a6fa5;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 20px;
  padding: 0;
}
.back-btn:hover { text-decoration: underline; }

.page-title {
  text-align: center;
  color: #1a365d;
  margin-bottom: 40px;
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: 5px;
  text-shadow: 3px 3px 0px #a9d7ff;
  border-bottom: 4px dashed #4a6fa5; 
  padding-bottom: 15px;
  display: inline-block;
  width: 100%;
}

.section-box {
  text-align: left;
  margin-bottom: 20px;
}

.section-title {
  color: #1a365d;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  border-left: 5px solid #4a6fa5;
  padding-left: 12px;
}

/* 時程表表格基底設計 */
.schedule-table {
  background: white;
  border: 1px solid #d6ecff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(169, 215, 255, 0.15);
  width: 100%;
}

.table-row {
  display: flex;
  align-items: center;
  padding: 14px 20px;
  border-bottom: 1px solid #f0f7ff;
  transition: background-color 0.2s ease;
}
.table-row:last-child {
  border-bottom: none;
}
.table-row:hover {
  background-color: #fafdff;
}

.time-col {
  min-width: 110px;
  font-weight: bold;
  color: #4a6fa5;
  font-size: 1.05rem;
  letter-spacing: 0.5px;
  flex-shrink: 0;
}

.event-col {
  color: #333;
  font-size: 1.05rem;
  font-weight: 500;
  padding-left: 10px;
}

/* 虛線分隔線 */
.dashed-divider {
  border-top: 4px dashed #a9d7ff;
  margin: 50px 0;
  width: 100%;
}

/* 分場小卡片設計 */
.sub-card {
  background: rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  padding: 20px;
  border: 1px solid #eef7ff;
  margin-bottom: 35px;
  box-shadow: 0 5px 15px rgba(169, 215, 255, 0.1);
}
.sub-card:last-child {
  margin-bottom: 0;
}

.sub-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  gap: 10px;
}

.sub-title {
  color: #2c3e50;
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0;
}

/* 地點的高質感珊瑚紅標籤（別的顏色、粗體） */
.location-badge {
  background-color: #fff5f5;
  color: #e53e3e;
  border: 1px solid #fed7d7;
  padding: 6px 14px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 0.9rem;
  white-space: nowrap;
}

/* =============== 手機版嚴格防斷行排版 =============== */
@media (max-width: 600px) {
  .container {
    padding: 20px 10px;
  }
  
  .page-title {
    font-size: 8.5vw;
    letter-spacing: 1px;
    white-space: nowrap;
    padding-bottom: 10px;
    margin-bottom: 30px;
  }

  .section-title {
    font-size: 1.3rem;
    margin-bottom: 15px;
  }

  .sub-card {
    padding: 12px 8px;
    background: white;
    border: none;
    box-shadow: none;
    margin-bottom: 25px;
  }

  .sub-card-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    padding: 0 8px;
  }

  .sub-title {
    font-size: 1.15rem;
  }

  .location-badge {
    font-size: 0.8rem;
    padding: 4px 10px;
  }

  .table-row {
    padding: 12px 12px;
  }

  .time-col {
    min-width: 95px; /* 手機上縮小欄寬，保證極限對齊 */
    font-size: 0.9rem;
  }

  .event-col {
    font-size: 0.95rem;
    padding-left: 5px;
  }
  
  .dashed-divider {
    margin: 35px 0;
  }
}
</style>