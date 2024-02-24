<template>
  <div class="new_home">
    <div class="main_container new_home__head">
      <router-link to="#" class="left_block">
        <img src="@/assets/images/user_logo.png" class="user_img" alt="" />
        <div>
          <div class="name">Андрей</div>
          <div class="money">
            <img src="@/assets/images/coin.svg" alt="" />
            12400
          </div>
        </div>
      </router-link>
      <router-link to="#" class="right_block main_btn">
        <img src="@/assets/images/workshop.svg" alt="" />
        <span>Подарки за друга</span>
      </router-link>
    </div>
    <Stories />

    <!-- Anons block -->
    <div class="main_container">
      <anons></anons>
    </div>
    <!-- Anons block end -->

    <!-- Wheels -->
    <div class="main_container">
      <button class="wheels_btn">
        <span class="title">Колесо фортуны</span>
        <span class="subtitle">Доступно 1 бесплатное вращение</span>
        <span class="alert" @click="paid_modal = true">Крутить</span>
        <img src="@/assets/images/wheel_img.png" alt="" />
      </button>
    </div>
    <!-- Wheels end -->

    <!-- Tools -->
    <div class="main_container">
      <div class="tools">
        <h2 class="main_title">Инструменты</h2>
        <div class="tools_lists">
          <router-link to="#" class="tools_card">
            <div class="img">
              <img src="@/assets/images/tools_card_1.svg" alt="" />
            </div>
            <div class="title">Икигай</div>
          </router-link>
          <router-link to="#" class="tools_card">
            <span class="alert">1</span>
            <div class="img img_2">
              <img src="@/assets/images/tools_card_2.svg" alt="" />
            </div>
            <div class="title">Мастермайнд</div>
          </router-link>
          <router-link to="#" class="tools_card">
            <div class="img img_3">
              <img src="@/assets/images/tools_card_3.svg" alt="" />
            </div>
            <div class="title">Икигай</div>
          </router-link>
          <router-link :to="{ name: 'Development' }" class="tools_card">
            <span class="alert_2">
              <img src="@/assets/images/tools_alert_2.svg" alt="" />
            </span>
            <div class="img">
              <img src="@/assets/images/tools_card_1.svg" alt="" />
            </div>
            <div class="title">Колесо баланса</div>
            <div class="bg_img"></div>
          </router-link>
        </div>
      </div>
    </div>
    <!-- Tools end -->

    <!-- Event calendar -->
    <div class="main_container event_calendar">
      <div class="main_title">Календарь мероприятий</div>
      <div class="subtitle">Декабрь</div>
    </div>
    <event-calendar></event-calendar>
    <!-- Event calendar end -->

    <!-- paid modal -->
    <paid-modal :modal="paid_modal" :wheelval="wheelval" @paidModal="paidModalfun"></paid-modal>
  </div>
</template>

<script>
import Stories from "@/components/newVersionComponents/Stories.vue";
import EventCalendar from "@/components/newVersionComponents/EventCalendar.vue";
import PaidModal from "@/components/PaidModal";
import Anons from "@/components/Anons";

export default {
  name: "NewHome",
  data() {
    return {
      paid_modal: false,
      wheelval: "",
    };
  },
  components: {
    Stories,
    EventCalendar,
    PaidModal,
    Anons,
  },
  methods: {
    paidModalfun(val) {
      this.paid_modal = false;
    },
  },
};
</script>

<style lang="scss">
.new_home {
  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 48px !important;
    padding-bottom: 20px !important;

    .left_block {
      display: flex;
      align-items: flex-start;
      gap: 9px;

      img.user_img {
        width: 40px;
        height: 40px;
        flex-shrink: 0;
      }

      .name {
        color: #fff;
        font-size: 16px;
        font-weight: 600;
        line-height: 20px;
        margin-bottom: 9px;
      }

      .money {
        position: relative;
        border-radius: 44px;
        background: linear-gradient(90deg, #af7311 0%, rgba(175, 116, 17, 0.5) 100%);
        color: #fff;
        font-size: 12px;
        font-weight: 600;
        line-height: 14px;
        padding: 3px 9px 3px 26px;

        img {
          position: absolute;
          left: -7px;
          top: -7px;
        }
      }
    }
  }

  .anons_block {
    padding-top: 20px;
    padding-bottom: 8px;
    display: flex;
    align-items: stretch;
    gap: 8px;

    .link {
      width: calc(50% - 4px);
      border-radius: 20px;
      background: #222;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 8px;

      &:nth-child(2) {
        .icon {
          background: #38a0ff;
        }
      }
    }

    .icon {
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      background: #b61cff;
    }

    .title {
      color: #fff;
      font-size: 16px;
      font-weight: 700;
      line-height: 20px;
    }

    .subtitle {
      color: #a6a5a5;
      font-size: 12px;
      font-weight: 500;
      line-height: 14px;
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

  .tools {
    border-radius: 20px;
    background: #222;
    padding: 16px;
    margin: 24px auto;

    h2 {
      margin-bottom: 15px;
    }

    .tools_lists {
      display: flex;
      align-items: stretch;
      flex-wrap: wrap;
      gap: 8px;

      .tools_card {
        position: relative;
        border-radius: 12px;
        background: var(--theme-night-background-bg-card-04, #3b3b3b);
        padding: 12px;
        width: calc(50% - 4px);
        .title {
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          line-height: 18px;
          position: relative;
          z-index: 1;
        }

        &:nth-child(4) {
          position: relative;

          .bg_img {
            content: "";
            width: 100%;
            height: 100%;
            border-radius: 12px;
            background-color: rgba(59, 59, 59, 0.6);
            background-image: url("@/assets/images/lines_bg.png");
            background-size: cover;
            background-repeat: no-repeat;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
          }
        }
      }

      .alert {
        position: absolute;
        top: -4px;
        right: -4px;
        display: flex;
        width: 28px;
        height: 28px;
        justify-content: center;
        align-items: center;
        border-radius: 16px;
        background: #ff2e37;
        color: #fff;
        text-align: center;
        font-size: 14px;
        font-weight: 600;
        line-height: 18px;
      }

      .alert_2 {
        position: absolute;
        top: 4px;
        right: 4px;
        z-index: 3;
        display: inline-flex;
        height: 25px;
        padding: 8px 4px;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        background: #222;
      }

      .img {
        display: flex;
        width: 36px;
        height: 36px;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        background: #cf3aa5;
        margin-bottom: 8px;
        position: relative;
        z-index: 1;
      }

      .img_2 {
        border-radius: 8px;
        background: #ffa723;
      }

      .img_3 {
        border-radius: 8px;
        background: #33bba3;
      }
    }
  }

  .event_calendar {
    .main_title {
      margin-bottom: 16px;
    }

    .subtitle {
      position: relative;
      padding-right: 7px;
      display: inline-block;
      margin-bottom: 14px;

      &::after {
        position: absolute;
        content: "";
        width: 100vw;
        height: 1px;
        background: #4d4c4c;
        top: 50%;
        right: 0;
        transform: translate(100%, -50%);
      }
    }
  }
}
.wheel-wrapper-top {
  width: 240px;
  height: 240px;
  padding: 16px;
  top: -115px;
  z-index: 4;
  transform: translate(-50%, 0);
}
</style>
