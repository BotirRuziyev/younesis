<template>
  <div class="chats_home">
    <div class="main_container">
      <h1 class="title">Чаты</h1>
      <div class="chats_users">
        <div class="user_item" v-for="item of chats" :key="item.id">
          <router-link :to="{ name: 'ChatResponseSearch' }">
            <div class="user_img">
              <img v-if="item.user_img" :src="item.user_img" :alt="item.user_img" />
            </div>
          </router-link>
          <router-link :to="{ name: 'ChatResponseSearch' }" class="right_block">
            <div class="user_name">
              <span>{{ item.user_name }}</span>
              <span class="ansver_count" v-if="item.ansver_count">{{ item.ansver_count }}</span>
            </div>
            <div class="offer" v-if="item.offer">{{ item.offer }}</div>
            <div class="answer">
              <span class="answer_val">{{ item.ansver }}</span>
              <span class="answer_time">{{ item.ansver_time }}</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Header from "@/components/Header.vue";
export default {
  name: "HomeLyout",
  components: {
    // Header,
  },
  data() {
    return {
      chats: [
        {
          id: 1,
          user_img: "/img/chats/1.svg",
          user_name: "Younesis",
          ansver_count: 1,
          ansver: "С наступающим новым годом! Лови ски",
          ansver_time: "14:11",
        },
        {
          id: 2,
          user_img: "/img/chats/6.svg",
          user_name: "Семен Слепаков",
          ansver_count: 1,
          offer: "Отклик на «могу настроить таргет»",
          ansver: "Здравствуйте, Андрей, хочу пройти консультацию",
          ansver_time: "15:12",
        },
        {
          id: 3,
          user_img: "/img/chats/3.svg",
          user_name: "Кристина Широкова",
          ansver_count: 1,
          offer: "Отклик на вашу услугу",
          ansver: "Здравствуйте, Андрей, хочу пройти консультацию",
          ansver_time: "15:12",
        },
        {
          id: 4,
          user_img: "/img/chats/4.svg",
          user_name: "Кирилл Гришин",
          ansver_count: 3,
          offer: "Отклик на «мне нужен маркетолог»",
          ansver: "Вы: Привет! Я занимаюсь таргетом 2 года и ",
          ansver_time: "19:00",
        },
        {
          id: 5,
          user_img: "/img/chats/2.svg",
          user_name: "Семен Хмелев",
          ansver: "Да, я готов пройти собеседование",
          ansver_time: "Пн",
        },
        {
          id: 6,
          user_img: "/img/chats/5.svg",
          user_name: "Александр Марсов",
          ansver: "Вы: отправите запрос?",
          ansver_time: "01:12",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.chats_home {
  padding-top: 56px;
  .title {
    color: rgb(255, 255, 255);
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0%;
    text-align: left;
    margin-bottom: 12px;
  }
  .chats_users {
    .user_item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 0;
      border-bottom: 1px solid rgb(43, 43, 43);
      &:last-child {
        border-bottom: 0;
      }
      .user_img {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 56px;
        min-height: 56px;
        border-radius: 100%;
        background: rgb(34, 34, 34);
        overflow: hidden;
      }
      .right_block {
        width: 100%;
        overflow: hidden;
        .user_name {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: rgb(255, 255, 255);
          font-size: 14px;
          font-weight: 700;
          line-height: 18px;
          letter-spacing: 0%;
          text-align: left;
          margin-bottom: 5px;
          .ansver_count {
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 100%;
            background: rgb(255, 48, 58);
            color: rgb(255, 255, 255);
            font-size: 12px;
            font-weight: 500;
            line-height: 16px;
            letter-spacing: 0%;
            text-align: center;
          }
        }
        .offer {
          color: rgb(84, 195, 95);
          font-family: Raleway;
          font-size: 12px;
          font-weight: 600;
          line-height: 16px;
          letter-spacing: 0%;
          text-align: left;
          margin-bottom: 2px;
        }
        .answer {
          max-width: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          color: rgb(255, 255, 255);
          font-size: 12px;
          font-weight: 400;
          line-height: 16px;
          letter-spacing: 0%;
          .answer_val {
            width: 100%;
            // min-width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .answer_time {
            color: rgb(166, 165, 165);
            text-align: right;
          }
        }
      }
    }
  }
}
</style>
