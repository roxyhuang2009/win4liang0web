<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

// 這是從你截圖整理下來的名單資料
const taskGroups = [
  {
    groupName: '總召',
    members: [{ name: '溫02古淳綺', isLeader: false }, { name: '溫08李勇柔', isLeader: false }, { name: '良06沈芸萱', isLeader: false }, { name: '良19陳羿安', isLeader: false }]
  },
  {
    groupName: '主持組',
    members: [{ name: '良30謝華汧', isLeader: true }, { name: '良15陳允申', isLeader: false }, { name: '溫24黃鈺淇', isLeader: false }]
  },
  {
    groupName: '公關接待組',
    members: [{ name: '溫09李珮瑜', isLeader: true }, { name: '溫13邱無瑕', isLeader: false }, { name: '良03吳宥儀', isLeader: false }, { name: '良11邱品甄', isLeader: false }, { name: '溫21覃喬翊', isLeader: false }, { name: '溫19陳品蓁', isLeader: false }, { name: '溫28賴玟諺', isLeader: false }, { name: '良02吳永茵', isLeader: false }]
  },
  {
    groupName: '場地佈置組',
    members: [{ name: '溫22黃念慈', isLeader: true }, { name: '溫12林昀潔', isLeader: false }, { name: '溫20陳詠琳', isLeader: false }, { name: '良15陳允申', isLeader: false }, { name: '良22廖若安', isLeader: false }]
  },
  {
    groupName: '文書處理組',
    members: [{ name: '溫16徐若洋', isLeader: true }, { name: '良16陳冠妤', isLeader: false }, { name: '良27蔡惟雅', isLeader: false }, { name: '溫14洪可恩', isLeader: false }, { name: '溫13邱無瑕', isLeader: false }, { name: '溫21覃喬翊', isLeader: false }, { name: '溫27鄭淳允', isLeader: false }]
  },
  {
    groupName: '影片組',
    members: [{ name: '良17陳映言', isLeader: true }, { name: '良25蔡安媞', isLeader: false }, { name: '溫17張藝齡', isLeader: false }, { name: '良26蔡雨庭', isLeader: false }, { name: '良08林宥甄', isLeader: false }]
  },
  {
    groupName: '攝影組',
    members: [{ name: '溫11周幸蓁', isLeader: true }, { name: '良10林爾姸', isLeader: false }, { name: '良01皮羽晴', isLeader: false }, { name: '溫23黃歆芸', isLeader: false }, { name: '良24潘維希', isLeader: false }, { name: '良04李孟璇', isLeader: false }]
  },
  {
    groupName: '網管宣傳組',
    members: [{ name: '溫01王晴安', isLeader: true }, { name: '溫07李冠慧', isLeader: false }, { name: '溫18郭允兒', isLeader: false }, { name: '良18陳禹妡', isLeader: false }, { name: '良12馬順恩', isLeader: false }, { name: '良21黃睿璯', isLeader: false }, { name: '溫17張藝齡', isLeader: false }, { name: '溫15胡詠喬', isLeader: false }]
  },
  {
    groupName: '總務組',
    members: [{ name: '良28穆亭昕', isLeader: true }, { name: '良14張熙云', isLeader: false }, { name: '良23趙亞淳', isLeader: false }, { name: '良05李品嫻', isLeader: false }]
  },
  {
    groupName: '美宣組',
    members: [{ name: '溫25楊景婷', isLeader: true }, { name: '溫03全芯瑩', isLeader: false }, { name: '溫10李喬安', isLeader: false }, { name: '溫27鄭淳允', isLeader: false }, { name: '良09林嘉穎', isLeader: false }, { name: '良29賴芊諭', isLeader: false }, { name: '良13張舒涵', isLeader: false }, { name: '溫04朱書蕾', isLeader: false }, { name: '溫30鍾宇茜', isLeader: false }]
  },
  {
    groupName: '專研負責人',
    members: [{ name: '化-良06沈芸萱', isLeader: false }, { name: '生-溫29謝孟妘', isLeader: false }, { name: '物-良08林宥甄', isLeader: false }, { name: '地-良27蔡惟雅', isLeader: false }, { name: '數-良24潘維希', isLeader: false }, { name: '資-良16陳冠妤', isLeader: false }]
  }
]
</script>

<template>
  <div class="container">
    <button class="back-btn" @click="router.push('/')">← 返回首頁</button>
    <h1 class="page-title">工作分配名單</h1>
    
    <div class="grid-container">
      <div v-for="group in taskGroups" :key="group.groupName" class="group-card">
        <h2 class="group-name">{{ group.groupName }}</h2>
        <div class="member-list">
          <span 
            v-for="member in group.members" 
            :key="member.name"
            class="member-badge"
            :class="{ 'is-leader': member.isLeader }"
          >
            {{ member.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
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
  border-bottom: 4px dashed #d6ecff;
  padding-bottom: 15px;
  display: inline-block;
  width: 100%;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.group-card {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(169, 215, 255, 0.2);
  border: 1px solid #d6ecff;
}

.group-name {
  color: #1a365d;
  font-size: 1.3rem;
  border-bottom: 2px solid #a9d7ff;
  padding-bottom: 8px;
  margin-top: 0;
  margin-bottom: 15px;
}

.member-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.member-badge {
  background-color: #f0f7ff;
  color: #333;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.95rem;
  border: 1px solid #d6ecff;
}

/* 組長專屬的淺色底標示 */
.member-badge.is-leader {
  background-color: #a9d7ff;
  color: #1a365d;
  font-weight: bold;
  border-color: #8fc5fa;
  box-shadow: 0 2px 5px rgba(169, 215, 255, 0.4);
}
</style>