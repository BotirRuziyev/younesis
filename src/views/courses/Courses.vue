<template>
  <div class="courses courses_card_wrapper">
    <div class="courses_in">
      <div class="main_container">
        <!-- user start -->
        <div class="user_wrapper">
          <div class="user_img">
            <img src="@/assets/images/User/user_1.png" alt="" />
          </div>
          <h3 class="user_name">Андрей Иванов</h3>
        </div>
        <!-- user start -->

        <!-- goal_tracker start -->
        <div class="goal_tracker">
          <div class="tracker_img">
            <img src="@/assets/images/courses/tracker.png" alt="" />
          </div>
          <div class="tracker_body">
            <h2 class="title">Трекер целей</h2>
            <p class="description">Инструмент для достижения целей</p>
          </div>
        </div>
        <!-- goal_tracker end -->

        <!-- Wheels -->
        <button class="wheels_btn">
          <span class="title">Колесо фортуны</span>
          <span class="subtitle">Доступно 1 бесплатное вращение</span>
          <span class="alert" @click="(paid_modal = true), console.log(paid_modal)">Крутить</span>
          <img src="@/assets/images/wheel_img.png" alt="" />
        </button>
        <!-- Wheels end -->

        <!-- anons start -->
        <anons></anons>
        <!-- anons end -->
      </div>
      <!-- specialists start-->
      <div class="specialists">
        <h2 class="title">Специалисты</h2>
        <p class="description">Находите специалистов под любые цели</p>
        <swiper :slidesPerView="1.5" :spaceBetween="8" :freeMode="true" :modules="modules" class="specialists_swiper">
          <swiper-slide v-for="item of specialists" :key="item.id">
            <div class="user_wrapper">
              <img :src="item.user_img" :alt="user_img" />
              <div class="user_name">{{ item.user_name }}</div>
            </div>
            <div class="slide_body">
              <div class="body_title">{{ item.title }}</div>
              <p class="body_description">
                {{ item.description }}
              </p>
              <button class="body_btn">Добавить в визитницу</button>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <!-- specialists start-->
    </div>
    <paid-modal :modal="paid_modal" :wheelval="wheelval" @paidModal="paidModalfun"></paid-modal>
    <select-course v-if="select_course" />
    <course-modal v-model:show="show_course_modal" />
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// import required modules
import { FreeMode } from "swiper/modules";

import SelectCourse from "@/components/SelectCourse.vue";
import CourseModal from "@/components/CourseModal.vue";
import Anons from "@/components/Anons";
import PaidModal from "@/components/PaidModal.vue";
import axios from "@/axios.js";

export default {
  name: "Courses",
  components: {
    SelectCourse,
    CourseModal,
    Anons,
    PaidModal,
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [FreeMode],
    };
  },
  data() {
    return {
      cards: [
        { id: 1, title: "Путь с 0 до 1 млн $", img: "1_1", degree_title: "7 из 10 уроков пройдено", degree: "70%" },
        {
          id: 2,
          title: "Сценарий продающего вебинара",
          img: "1_2",
          degree_title: "3 из 15 уроков пройдено",
          degree: "20%",
        },
        { id: 3, title: "Продающие диагностики", img: "1_3", degree_title: "0 из 15 уроков пройдено", degree: "20%" },
      ],
      paid_modal: false,
      wheelval: "",
      show_course_modal: false,
      select_course: false,
      specialists: [
        {
          id: 1,
          user_img: "/img/User/user_1.png",
          user_name: "Артем Николаев",
          title: "Таргетолог, маркетолог, SMM",
          description:
            "Работаю таргетологом с 2007 года. Менторю, веду телеграм-канал. Бесплатные консультации в любое удобное для вас времяведу",
        },
        {
          id: 2,
          user_img: "/img/User/user_2.png",
          user_name: "Кристина Ветрякова",
          title: "Продюсер",
          description:
            "Ищу проект в нишах: макияж, стиль, психология, фотография, фриланс. Твердые ниши: финансы, бизнес, предпринимательство, криптовалюта. Была своя компания по рекламе",
        },
        {
          id: 3,
          user_img: "/img/User/user_3.png",
          user_name: "Артем Николаев",
          title: "Таргетолог, маркетолог, SMM",
          description:
            "Работаю таргетологом с 2007 года. Менторю, веду телеграм-канал. Бесплатные консультации в любое удобное для вас времяведу",
        },
      ],
    };
  },
  methods: {
    paidModalfun(val) {
      this.paid_modal = false;
    },
  },
};
</script>

<style lang="scss">
.courses {
  padding-top: 48px;
  .user_wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 24px;
    .user_img {
      width: 40px;
      height: 40px;
      border-radius: 20px;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .user_name {
      color: rgb(255, 255, 255);
      font-size: 16px;
      font-weight: 600;
      line-height: 20px;
      letter-spacing: 0%;
    }
  }
  .goal_tracker {
    width: 100%;
    border-radius: 20px;
    background: rgb(34, 34, 34);
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 24px;
    .tracker_body {
      .title {
        color: rgb(255, 255, 255);
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: 0%;
        text-align: left;
        margin-bottom: 6px;
      }
      .description {
        color: rgb(166, 165, 165);
        font-size: 12px;
        font-weight: 500;
        line-height: 16px;
        letter-spacing: 0%;
        text-align: left;
        margin-bottom: 0;
      }
    }
  }
  .wheels_btn {
    border-radius: 20px;
    background: linear-gradient(90deg, #fc5e1a 0%, #f7b733 100%);
    position: relative;
    padding: 16px;
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;

    .title {
      color: #fff;
      font-size: 16px;
      font-weight: 700;
      line-height: 20px;
      margin-bottom: 8px;
    }

    .subtitle {
      color: rgba(255, 255, 255, 0.8);
      font-size: 12px;
      font-weight: 500;
      line-height: 14px;
      margin-bottom: 12px;
    }

    .alert {
      border-radius: 37px;
      background: rgba(255, 255, 255, 0.2);
      padding: 8px 12px;
      color: #fff;
      font-size: 12px;
      font-weight: 700;
      line-height: 14px;
    }

    img {
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
    }
  }
  .anons_block {
    padding: 16px 0 24px;
  }
  .specialists {
    padding-left: 16px;
    .title {
      color: rgb(255, 255, 255);
      font-size: 20px;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: 0%;
      text-align: left;
      margin-bottom: 4px;
    }
    .description {
      color: rgb(166, 165, 165);
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: 0%;
      text-align: left;
      margin-bottom: 16px;
    }
    .specialists_swiper {
      padding-right: 16px;
      .swiper-slide {
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 16px;
        background: rgb(34, 34, 34);
        padding: 12px;
        .user_wrapper {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
          img {
            width: 48px;
            height: 48px;
          }
          .user_name {
            color: rgb(255, 255, 255);
            font-size: 14px;
            font-weight: 700;
            line-height: 18px;
            letter-spacing: 0%;
            text-align: left;
          }
        }
        .slide_body {
          .body_title {
            overflow: hidden;
            color: rgb(255, 255, 255);
            font-size: 14px;
            font-weight: 600;
            line-height: 18px;
            letter-spacing: 0%;
            text-align: left;
            white-space: nowrap;
            text-overflow: ellipsis;
            margin-bottom: 4px;
          }
          .body_description {
            color: rgb(211, 210, 210);
            font-size: 12px;
            font-weight: 400;
            line-height: 16px;
            letter-spacing: 0%;
            text-align: left;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            margin-bottom: 12px;
          }
          .body_btn {
            width: 100%;
            padding: 8px;
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.2);
            color: rgb(255, 255, 255);
            font-size: 12px;
            font-weight: 500;
            line-height: 16px;
            letter-spacing: 0%;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
