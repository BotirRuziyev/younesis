<template>
  <div class="profile_wrapper">
    <head-new @profileSettings="modalsettings = true"></head-new>
    <div class="main_container">
      <!-- user_data_head start-->
      <profile-head
        user_img="/img/User/user_img.png"
        user_name="Андрей Краснослободцев"
        location="Москва • 31 год"
        title="Психолог"
        description="Работаю таргетологом с 2007 года. Менторю, веду телеграм-канал. Бесплатные консультации в любое удобное для вас время время время цуа цуа цуа цуцу ацу"
      ></profile-head>
      <!-- user_data_head end -->
      <!-- profile fill start -->
      <div class="profile_fill">
        <h2 class="title">Заполните профиль</h2>
        <p class="description">Чтобы привлекать больше внимания и повышать доверие пользователей</p>
        <div class="pagination">
          <div class="pagination_item" v-for="i of 5" :key="i"></div>
        </div>
        <div class="profile_fill_in">
          <div class="fill_item" v-for="i of fill" :key="i.id">
            <div class="fill_title">{{ i.name }}</div>
          </div>
        </div>
      </div>
      <!--  profile fill end -->

      <!-- profile can start  -->
      <div class="profil_can bcg_gray">
        <div class="bcg_gray_top">
          <svg
            width="20.000000"
            height="20.000000"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <desc>Created with Pixso.</desc>
            <defs />
            <path
              id="Path"
              d="M13.333 17.5L6.66699 17.5C4.36621 17.5 2.5 15.6343 2.5 13.3335L2.5 6.6665C2.5 4.36572 4.36621 2.5 6.66699 2.5L13.333 2.5C15.6338 2.5 17.5 4.36572 17.5 6.6665L17.5 13.3335C17.5 15.6343 15.6338 17.5 13.333 17.5Z"
              fill="#54C35F"
              fill-opacity="1.000000"
              fill-rule="evenodd"
            />
            <path
              id="Path"
              d="M6.66699 17.5C4.36621 17.5 2.5 15.6343 2.5 13.3335L2.5 6.6665C2.5 4.36572 4.36621 2.5 6.66699 2.5L13.333 2.5C15.6338 2.5 17.5 4.36572 17.5 6.6665L17.5 13.3335C17.5 15.6343 15.6338 17.5 13.333 17.5L6.66699 17.5Z"
              stroke="#54C35F"
              stroke-opacity="1.000000"
              stroke-width="1.500000"
              stroke-linejoin="round"
            />
            <path
              id="Path"
              d="M13 8L9.25 12L7 9.59961"
              stroke="#222222"
              stroke-opacity="1.000000"
              stroke-width="1.500000"
              stroke-linejoin="round"
              stroke-linecap="round"
            />
          </svg>
          <span>Могу</span>
        </div>
        <profile-link to="#" path_name="Решить семейные вопросы"></profile-link>
        <profile-link to="#" path_name="Провести сеанс психоанализа"></profile-link>
        <profile-link to="#" path_name="Провести стратегическую сессию вашей команде"></profile-link>
        <button class="profil_btn_more" data-v-c6167686="">
          <span data-v-c6167686="">Показать еще</span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            data-v-c6167686=""
          >
            <path
              d="M8.5 10L12.5 14L16.5 10"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              data-v-c6167686=""
            ></path>
          </svg>
        </button>
      </div>
      <!-- profile can end  -->

      <!-- profile need start  -->
      <div class="profil_need bcg_gray">
        <div class="bcg_gray_top">
          <svg
            width="20.000000"
            height="20.000000"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <desc>Created with Pixso.</desc>
            <defs />
            <path
              id="Path"
              d="M13.334 17.5L6.66602 17.5C4.36523 17.5 2.5 15.6342 2.5 13.3333L2.5 6.66667C2.5 4.36583 4.36523 2.5 6.66602 2.5L13.334 2.5C15.6348 2.5 17.5 4.36583 17.5 6.66667L17.5 13.3333C17.5 15.6342 15.6348 17.5 13.334 17.5Z"
              fill="#6F9FFC"
              fill-opacity="1.000000"
              fill-rule="evenodd"
            />
            <path
              id="Path"
              d="M6.66602 17.5C4.36523 17.5 2.5 15.6342 2.5 13.3333L2.5 6.66667C2.5 4.36583 4.36523 2.5 6.66602 2.5L13.334 2.5C15.6348 2.5 17.5 4.36583 17.5 6.66667L17.5 13.3333C17.5 15.6342 15.6348 17.5 13.334 17.5L6.66602 17.5Z"
              stroke="#6F9FFC"
              stroke-opacity="1.000000"
              stroke-width="1.500000"
              stroke-linejoin="round"
            />
            <path
              id="Path"
              d="M11.668 11.6667C10.5098 12.8233 8.63477 12.8233 7.47852 11.6667C6.32227 10.51 6.32227 8.63501 7.47852 7.47833C8.63477 6.32167 10.5098 6.32167 11.668 7.47833C12.8242 8.63501 12.8242 10.51 11.668 11.6667Z"
              stroke="#222222"
              stroke-opacity="1.000000"
              stroke-width="1.500000"
              stroke-linejoin="round"
            />
            <path
              id="Path"
              d="M11.666 11.6666L13.332 13.3333L11.666 11.6666Z"
              stroke="#222222"
              stroke-opacity="1.000000"
              stroke-width="1.500000"
              stroke-linejoin="round"
            />
          </svg>

          <span>Мне нужен</span>
        </div>
        <profile-link to="#" path_name="Продюсер"></profile-link>
      </div>
      <!-- profile need end  -->

      <!-- cases start -->
      <div class="cases bcg_gray">
        <div class="cases_top">
          <img src="@/assets/images/cases_icon.svg" alt="" />
          <span>Кейсы и достижения</span>
        </div>
        <ul>
          <li>Сохранил больше 100 семей</li>
          <li>Провел больше 1000 сеансов психоанализа</li>
        </ul>
        <button class="profil_btn_more" style="display: none">
          <span>Показать еще</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <path
              d="M8.5 10L12.5 14L16.5 10"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <!-- cases end -->

      <!-- Products start -->
      <div class="products bcg_gray">
        <div class="bcg_gray_top">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M9.99994 13.3333V15.8333"
              stroke="#54C35F"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.66656 16.6666L8.33323 13.3333"
              stroke="#54C35F"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.3332 16.6666L11.6666 13.3333"
              stroke="#54C35F"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <rect
              x="3.33325"
              y="3.33325"
              width="13.3333"
              height="10"
              rx="2"
              fill="#54C35F"
              stroke="#54C35F"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.66656 9.99992V8.33325"
              stroke="#222222"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.74992 9.9999V6.66656"
              stroke="#222222"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.2499 9.99994V7.49994"
              stroke="#222222"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.3333 9.9999V6.66656"
              stroke="#222222"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Продукты</span>
        </div>
        <profile-product :products="products"></profile-product>
      </div>
      <!-- Products end -->
      <!-- Education start -->
      <education title="Образование" :courses="courses"></education>
      <!-- Education end -->

      <!-- modals -->
      <div class="settings_modal" :class="modalsettings ? 'modal_active' : ''">
        <div class="settings_modal_in">
          <div class="modal_top">
            Контакты
            <button class="close_modal" @click="(modalsettings = false), $emit('modalsettingsFun')">
              <svg
                width="24.000000"
                height="24.000000"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <desc>Created with Pixso.</desc>
                <defs />
                <path
                  id="Path"
                  d="M3 12C3 7.02881 7.0293 3 12 3C16.9707 3 21 7.02881 21 12C21 16.9712 16.9707 21 12 21C7.0293 21 3 16.9712 3 12Z"
                  stroke="#A6A5A5"
                  stroke-opacity="1.000000"
                  stroke-width="1.500000"
                  stroke-linejoin="round"
                />
                <path
                  id="Path"
                  d="M14.8301 9.16992L9.16992 14.8301"
                  stroke="#A6A5A5"
                  stroke-opacity="1.000000"
                  stroke-width="1.500000"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                />
                <path
                  id="Path"
                  d="M14.8301 14.8301L9.16992 9.16992"
                  stroke="#A6A5A5"
                  stroke-opacity="1.000000"
                  stroke-width="1.500000"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
          <profile-link to="/profile/edit" img="/img/profile/1.svg" path_name="Редактировать профиль"></profile-link>
          <profile-link to="#" img="/img/profile/2.svg" path_name="Поделиться профилем"></profile-link>
          <profile-link to="#" img="/img/profile/3.svg" path_name="Установить платформу на телефон"></profile-link>
          <profile-link to="#" img="/img/profile/4.svg" path_name="Скоро на платформе"></profile-link>
          <div class="modal_bottom">
            <profile-link to="#" img="/img/profile/5.svg" path_name="Выйти из аккаунта"></profile-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadNew from "@/components/newVersionComponents/HeadNew.vue";
import ProfileHead from "@/components/Profile/ProfileHead.vue";
import ProfileLink from "@/components/UI/ProfileLink";
import Cases from "@/components/Profile/Cases";
import ProfileProduct from "@/components/Profile/ProfileProduct";
import Education from "@/components/Profile/Education";
export default {
  name: "Profile",
  components: {
    ProfileHead,
    HeadNew,
    ProfileLink,
    Cases,
    ProfileProduct,
    Education,
  },
  data() {
    return {
      modalsettings: false,
      fill: [
        {
          id: 1,
          name: "Кейсы",
        },
        {
          id: 2,
          name: "Образование",
        },
        {
          id: 3,
          name: "Фотография",
        },
        {
          id: 4,
          name: "Кейсы",
        },
        {
          id: 5,
          name: "Кейсы",
        },
        {
          id: 6,
          name: "Кейсы",
        },
      ],
      products: [
        {
          id: 1,
          img: "",
          title_small: "Бесплатный продукт",
          title_big: "Первичная консультация",
          description: "Бесплатно – 1 час, после истечения времени останавливаем.",
          readActivated: true,
          to: "",
        },
      ],
      courses: [
        {
          id: 1,
          img: "",
          cours_name: "Высшее - бакалавриат",
          cours_description: "БГТУ им. В.Г. Шухова - Экономика и управление",
          images: "",
        },
        {
          id: 2,
          img: "",
          cours_name: "Курс",
          cours_description: "Современный маркетинг от Ивана Иванова за 12 месяцев",
        },
        { id: 3, img: "", cours_name: "Курс", cours_description: "Реклама в телеграм от Ивана Иванова" },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss">
.profile_wrapper {
  .head_new {
    .profile_setting {
      width: 100%;
      display: block;
      text-align: end;
    }
  }
  .user_data_head {
    .user_btn {
      display: none;
    }
  }
  .profile_fill {
    border-radius: 20px;
    background: rgb(34, 34, 34);
    padding: 16px 0 16px 16px;
    overflow: hidden;
    margin-bottom: 20px;
    .title {
      color: rgb(255, 255, 255);
      font-family: Raleway;
      font-size: 16px;
      font-weight: 700;
      line-height: 20px;
      letter-spacing: 0%;
      text-align: left;
      margin-bottom: 6px;
      padding-right: 16px;
    }
    .description {
      color: rgb(166, 165, 165);
      font-family: Raleway;
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: 0%;
      text-align: left;
      padding-right: 16px;
      margin-bottom: 24px;
    }
    .pagination {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 4px;
      margin-bottom: 16px;
      padding-right: 16px;
      .pagination_item {
        height: 4px;
        border-radius: 12px;
        background: rgb(73, 73, 73);
      }
    }
    .profile_fill_in {
      display: flex;
      overflow: auto;
      gap: 4px;
      &::-webkit-scrollbar {
        height: 0;
      }
      .fill_item {
        padding: 12px;
        border: 1px solid rgb(77, 76, 76);
        border-radius: 8px;
        background: rgb(47, 47, 47);
        .fill_title {
          color: rgb(255, 255, 255);
          font-family: Raleway;
          font-size: 14px;
          font-weight: 600;
          line-height: 18px;
          letter-spacing: 0%;
          text-align: left;
        }
      }
    }
  }
  .bcg_gray {
    margin-top: 0;
    padding: 16px;
    border-radius: 20px;
    background: #222;
    margin-bottom: 4px;
    .bcg_gray_top {
      display: flex;
      align-items: center;
      gap: 4px;
      margin-bottom: 12px;
      span {
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
      }
    }
    .link {
      svg {
        display: none;
      }
    }
  }
  .cases {
    margin: 0;
    margin-top: 16px;
    margin-bottom: 20px;
    .cases_top {
      display: flex;
      align-items: center;
      gap: 4px;
      margin-bottom: 8px;
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 8px;
      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: rgb(211, 210, 210);
        font-family: Raleway;
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0%;
        text-align: left;
        border-bottom: 1px solid rgb(48, 48, 48);
        padding: 8px 0px 8px 0px;
        &:last-child {
          border-bottom: 0;
        }
      }
    }
  }
  .products {
    .advice_bottom {
      display: none;
    }
  }
  .settings_modal {
    height: 100%;
    width: 100%;
    backdrop-filter: blur(13.5px);
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: end;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0;
    transition: 0.5s;
    .settings_modal_in {
      max-width: 452px;
      width: 100%;
      border-radius: 16px 16px 0px 0px;
      background: rgb(34, 34, 34);
      padding: 16px 16px 55px;
      transform: translateY(500px);
      transition: 0.5s;
      .modal_top {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: rgb(255, 255, 255);
        font-size: 20px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0%;
        margin-bottom: 20px;
      }
      .link {
        svg {
          display: none;
        }
      }
      .modal_bottom {
        margin-top: 28px;
        .link {
          color: rgb(255, 48, 58);
        }
      }
    }
  }
  .modal_active {
    opacity: 1;
    z-index: 100;
    .settings_modal_in {
      transform: translateY(0);
    }
  }
}
</style>
