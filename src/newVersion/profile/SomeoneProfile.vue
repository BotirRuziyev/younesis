<template>
  <div class="Someone_profile">
    <head-new to="" @click="$router.go(-1)"></head-new>
    <div class="main_container">
      <div class="profile">
        <!-- user_data_head start-->
        <profile-head
          user_img="/img/User/user_img.png"
          user_name="Артем Николаев"
          location="Санкт-Петербург • 24 года"
          title="Таргетолог, маркетолог, SMM"
          description="Работаю таргетологом с 2007 года. Менторю, веду телеграм-канал. Бесплатные консультации в любое удобное для вас время время время цуа цуа цуа цуцу ацу"
        ></profile-head>
        <!-- user_data_head end -->

        <!-- contact_btn start -->
        <div class="contact_btn">
          <main-button class="phone_btn" @click="modalContact = true">
            <img src="@/assets/images/profil_phone.svg" alt="" />
            <span>Показать контакты</span>
          </main-button>
          <main-button class="visa_btn">
            <img src="@/assets/images/profile_star.svg" alt="" />
            <span>Добавить в визитницу</span>
          </main-button>
        </div>
        <!-- contact_btn end -->
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
          <profile-link to="#" path_name="Настроить таргет"></profile-link>
          <profile-link to="#" path_name="Вести инстаграм"></profile-link>
          <profile-link to="#" path_name="Проводить интервью"></profile-link>
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
                d="M13.333 17.5L6.66699 17.5C4.36621 17.5 2.5 15.6343 2.5 13.3335L2.5 6.6665C2.5 4.36572 4.36621 2.5 6.66699 2.5L13.333 2.5C15.6338 2.5 17.5 4.36572 17.5 6.6665L17.5 13.3335C17.5 15.6343 15.6338 17.5 13.333 17.5Z"
                fill="#6F9FFC"
                fill-opacity="1.000000"
                fill-rule="evenodd"
              />
              <path
                id="Path"
                d="M6.66699 17.5C4.36621 17.5 2.5 15.6343 2.5 13.3335L2.5 6.6665C2.5 4.36572 4.36621 2.5 6.66699 2.5L13.333 2.5C15.6338 2.5 17.5 4.36572 17.5 6.6665L17.5 13.3335C17.5 15.6343 15.6338 17.5 13.333 17.5L6.66699 17.5Z"
                stroke="#6F9FFC"
                stroke-opacity="1.000000"
                stroke-width="1.500000"
                stroke-linejoin="round"
              />
              <path
                id="Path"
                d="M11.667 11.6665C10.5107 12.8232 8.63574 12.8232 7.47852 11.6665C6.32227 10.5098 6.32227 8.63477 7.47852 7.47852C8.63574 6.32178 10.5107 6.32178 11.667 7.47852C12.8242 8.63477 12.8242 10.5098 11.667 11.6665Z"
                stroke="#222222"
                stroke-opacity="1.000000"
                stroke-width="1.500000"
                stroke-linejoin="round"
              />
              <path
                id="Path"
                d="M11.667 11.6665L13.334 13.333L11.667 11.6665Z"
                stroke="#222222"
                stroke-opacity="1.000000"
                stroke-width="1.500000"
                stroke-linejoin="round"
              />
            </svg>
            <span>Мне нужен</span>
          </div>
          <profile-link to="/chats/chat-response-search" path_name="Маркетолог"></profile-link>
          <profile-link to="#" path_name="Личный ассистент"></profile-link>
          <profile-link to="#" path_name="Юрист"></profile-link>
        </div>
        <!-- profile need end  -->
        <div class="border"></div>
        <!-- cases start -->
        <cases></cases>
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
          <profile-product :products="products" @modalProduct="productItem"></profile-product>
        </div>
        <!-- Products end -->
        <!-- Education start -->
        <education title="Образование" :courses="courses"></education>
        <!-- Education end -->
      </div>
    </div>
    <contact-modal :modalContact="modalContact" @modalContactFun="modalContact = false"></contact-modal>
    <product-modal
      :user="user"
      :modalProduct="modalProduct"
      :product="product"
      @closeModal="closeModal"
    ></product-modal>
    <!-- Вход на платформу через контекстную ссылку -->
    <div class="registration_modal" :class="register ? 'modal_active' : ''">
      <div class="modal_in">
        <h2 class="title">Нужно войти в профиль</h2>
        <p class="description">Это займёт не больше минуты, вход и регистрация по коду из СМС</p>
        <button class="sign_up">Зарегистрироваться</button>
        <button class="sign_in">Войти</button>
        <div class="about">Кто мы такие?</div>
        <span class="down">
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
              d="M8 13.5L12 17.5L16 13.5"
              stroke="#A6A5A5"
              stroke-opacity="1.000000"
              stroke-width="1.500000"
              stroke-linejoin="round"
              stroke-linecap="round"
            />
            <path
              id="Path"
              d="M7 6.5L12 11.5L17 6.5"
              stroke="#A6A5A5"
              stroke-opacity="1.000000"
              stroke-width="1.500000"
              stroke-linejoin="round"
              stroke-linecap="round"
            />
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import HeadNew from "@/components/newVersionComponents/HeadNew.vue";
import ProfileHead from "@/components/Profile/ProfileHead.vue";
import Education from "@/components/Profile/Education";
import Cases from "@/components/Profile/Cases";
import ProfileProduct from "@/components/Profile/ProfileProduct";
import ContactModal from "@/components/Profile/ContactModal";
import ProductModal from "@/components/Profile/ProductModal";
import ProfileLink from "@/components/UI/ProfileLink";

export default {
  components: {
    HeadNew,
    ProfileHead,
    Education,
    Cases,
    ProfileLink,
    ProfileProduct,
    ContactModal,
    ProductModal,
  },
  data() {
    return {
      modalContact: false,
      modalProduct: false,
      register: false,
      user: {
        user_img: "/img/User/user_img.png",
        user_name: "Артем Николаев",
      },
      courses: [
        {
          id: 1,
          img: "",
          cours_name: "Высшее - бакалавриат",
          cours_description: "БГТУ им. В.Г. Шухова - Экономикаи управление",
          images: ["/img/cours_img.png", "/img/cours_img.png", "/img/cours_img.png"],
        },
        {
          id: 2,
          img: "",
          cours_name: "Курс",
          cours_description: "Современный маркетинг от Ивана Иванова за 12 месяцев",
        },
        { id: 3, img: "", cours_name: "Курс", cours_description: "Реклама в телеграм от Ивана Иванова" },
        { id: 4, img: "", cours_name: "Курс", cours_description: "Реклама в телеграм от Ивана Иванова" },
      ],
      products: [
        {
          id: 1,
          img: "/img/telegram.png",
          title_small: "Бесплатный продукт",
          title_big: "Консультация по настройке рекламы в телеграм",
          description:
            "Помогу настроить рекламу в телеграм. В процессе настройки пользуюсь сервисами Яндекс.Метрика и аналитикой от гугл. Обращайтесь",
          readActivated: true,
          to: "",
        },
        {
          id: 2,
          img: "",
          title_small: "Бесплатный продукт",
          title_big: "Настрою таргет",
          description: "Бесплатно – 1 час, после истечения времени останавливаем.",
          readActivated: true,
          to: "",
        },
        {
          id: 3,
          img: "",
          title_small: "Бесплатный продукт",
          title_big: "Консультация по фигме",
          description: "Расскажу про нюансы использования автолейаутов, компонентови переменных.",
          readActivated: true,
          to: "",
        },
      ],
      product: "",
    };
  },
  methods: {
    productItem(product) {
      this.modalProduct = true;
      this.product = product;
    },
    closeModal() {
      this.modalProduct = false;
    },
  },
};
</script>

<style lang="scss">
// full class
.full_profil_button {
  display: flex;
  padding: 12px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 12px;
  background: #3b3b3b;
  margin-bottom: 4px;
  span {
    color: #d3d2d2;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
  }
}
.profil_btn_more {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 12px;
  span {
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
  }
}
.bcg_gray {
  margin-top: 24px;
  padding: 16px;
  border-radius: 20px;
  background: #222;
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
}
.Someone_profile {
  position: relative;
  .profile {
    .user_data_head {
      .user_btn {
        border: 1px solid rgb(73, 73, 73);
        border-radius: 8px;
        background: rgb(47, 47, 47);
      }
    }
    // looking_for_can
    .looking_for_can {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 4px;
      margin-bottom: 20px;
      button {
        color: rgb(255, 255, 255);
        font-family: Raleway;
        font-size: 14px;
        font-weight: 500;
        line-height: 18px;
        letter-spacing: 0%;
        text-align: left;
        min-height: 157px;
        height: 100%;
        border-radius: 20px;
        text-align: center;
        background: rgb(59, 59, 59);
      }
      .looking_for_btn {
        background: rgb(207, 46, 46);
      }
    }
    // profil_information
    .profil_information {
      // font-family: Raleway;
      margin-bottom: 8px;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 18px;
      color: #d3d2d2;
      margin-bottom: 20px;
    }

    // contact_btn
    .contact_btn {
      margin-bottom: 20px;
      .phone_btn,
      .visa_btn {
        width: 100%;
        display: flex;
        height: 44px;
        padding: 10px 12px;
        justify-content: center;
        align-items: center;
        gap: 6px;
        align-self: stretch;
        background: transparent;
        border-radius: 8px;
        border: 1px solid #4d4c4c;
        margin-bottom: 8px;

        span {
          color: #fff;
          text-align: center;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 18px;
        }
      }
      .visa_btn {
        background: rgb(207, 46, 46);
        border-color: transparent;
      }
    }

    // profil_can
    .profil_can {
      margin-bottom: 4px;
    }

    //profil_need
    .profil_need {
      margin-top: 0;
      margin-bottom: 24px;
    }
    .border {
      width: 100%;
      height: 1px;
      background: #4d4c4c;
      margin: 24px auto;
    }
    .advice {
      .advice_bottom {
        .products_btn {
          background: rgb(207, 46, 46);
          padding: 10px 16px 10px 16px;
          /* Text XS/Semibold */
          color: rgb(255, 255, 255);
          font-size: 14px;
          font-weight: 600;
          line-height: 18px;
          letter-spacing: 0%;
          text-align: center;
          border-radius: 8px;
          svg {
            display: none;
          }
        }
      }
    }
  }
}
.registration_modal {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: end;
  backdrop-filter: blur(8px);
  background: linear-gradient(180deg, rgba(23, 23, 23, 0), rgb(23, 23, 23) 100%);
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0;
  transition: 0.5s;
  .modal_in {
    width: 100%;
    border-radius: 16px 16px 0 0;
    background: rgb(34, 34, 34);
    padding: 16px;
    transition: 0.5s;
    transform: translateY(100%);
    .title {
      max-width: 296px;
      width: 100%;
      margin: 0 auto;
      color: rgb(255, 255, 255);
      font-size: 20px;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: 0%;
      text-align: center;
      margin-bottom: 8px;
    }
    .description {
      max-width: 296px;
      width: 100%;
      margin: 0 auto;
      color: rgb(211, 210, 210);
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: 0%;
      text-align: center;
      margin-bottom: 24px;
    }
    .sign_up {
      max-width: 296px;
      width: 100%;
      display: block;
      margin: 0 auto;
      border-radius: 12px;
      background: rgb(207, 46, 46);
      padding: 10px 24px 10px 24px;
      color: rgb(255, 255, 255);
      font-size: 14px;
      font-weight: 600;
      line-height: 18px;
      letter-spacing: 0%;
      text-align: center;
      margin-bottom: 12px;
    }
    .sign_in {
      max-width: 296px;
      width: 100%;
      display: block;
      padding: 10px 24px 10px 24px;
      margin: 0 auto;
      border: 1px solid rgb(73, 73, 73);
      border-radius: 12px;
      background: rgb(47, 47, 47);
      margin-bottom: 28px;
      color: rgb(255, 255, 255);
      font-size: 14px;
      font-weight: 600;
      line-height: 18px;
      letter-spacing: 0%;
      text-align: center;
    }
    .about {
      color: rgb(166, 165, 165);
      font-size: 14px;
      font-weight: 500;
      line-height: 18px;
      letter-spacing: 0%;
      text-align: center;
    }
    .down {
      display: flex;
      flex-direction: column;
      align-items: center;
      svg {
        margin-top: 8px;
      }
    }
  }
}
.registration_modal_active {
  z-index: 100;
  opacity: 1;
  .modat_in {
    transform: translateY(0);
  }
}
</style>
