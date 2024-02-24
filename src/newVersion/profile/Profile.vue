<template>
  <div class="new_profile">
    <head-new to="" @click="$router.go(-1)"></head-new>
    <div class="main_container">
      <div class="profile">
        <!-- user_data_head start-->
        <profile-head
          user_img="/img/User/user_img.png"
          user_name="Артем Николаев"
          location="Санкт-Петербург • 24 года"
          title="Таргетолог, маркетолог, SMM"
        ></profile-head>
        <!-- user_data_head end -->

        <!-- contact_btn start -->
        <div class="contact_btn">
          <main-button class="phone_btn" @click="modalContact = true">
            <img src="@/assets/images/profil_phone.svg" alt="" />
            <span>Показать контакты</span>
          </main-button>
          <main-button class="visa_btn">
            <img src="@/assets/images/profil_visa.svg" alt="" />
            <span>В визитницу</span>
          </main-button>
        </div>
        <!-- contact_btn end -->
        <!-- cases start -->
        <cases></cases>
        <!-- cases end -->
        <!-- Products start -->
        <div class="products bcg_gray">
          <div class="products_top">
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
          <profile-product :products="productShow"></profile-product>
          <button class="show_more" @click="productsShow" v-if="productShow.length != products.length">
            Показать еще
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
                d="M8 10L12 14L16 10"
                stroke="#FFFFFF"
                stroke-opacity="1.000000"
                stroke-width="1.500000"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>
        <!-- Products end -->

        <!-- Education start -->
        <education title="Образование" :courses="courses"></education>
        <!-- Education end -->
      </div>
    </div>
    <contact-modal :modalContact="modalContact" @modalContactFun="modalContact = false"></contact-modal>
  </div>
</template>

<script>
import HeadNew from "@/components/newVersionComponents/HeadNew.vue";
import ProfileHead from "@/components/Profile/ProfileHead.vue";
import Education from "@/components/Profile/Education";
import Cases from "@/components/Profile/Cases";
import ProfileProduct from "@/components/Profile/ProfileProduct";
import ContactModal from "@/components/Profile/ContactModal";

export default {
  components: {
    HeadNew,
    ProfileHead,
    Education,
    Cases,
    ProfileProduct,
    ContactModal,
  },
  data() {
    return {
      modalContact: false,
      courses: [
        {
          id: 1,
          img: "/img/cours_img.png",
          cours_name: "Высшее - бакалавриат",
          cours_description: "БГТУ им. В.Г. Шухова - Экономикаи управление",
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
          img: "",
          title_small: "Бесплатно",
          title_big: "Консультация по настройке рекламы в телеграм",
          description: "Помогу настроить рекламу в телеграм",
          readActivated: false,
          to: "",
        },
        {
          id: 2,
          img: "",
          title_small: "от 15 000₽",
          title_big: "Личная консультация",
          description:
            "Провожу личные консультации и обучение в центре Москвы и онлайн по всему миру как со взрослыми, так и с подростками. Я верю, что ответы на все вопросы",
          readActivated: false,
          to: "",
        },
        {
          id: 3,
          img: "",
          title_small: "Бесплатный продукт",
          title_big: "Консультация по фигме",
          description: "Расскажу про нюансы использования автолейаутов, компонентови переменных.",
          readActivated: false,
          to: "",
        },
        {
          id: 4,
          img: "",
          title_small: "от 15 000₽",
          title_big: "Личная консультация",
          description:
            "Провожу личные консультации и обучение в центре Москвы и онлайн по всему миру как со взрослыми, так и с подростками. Я верю, что ответы на все вопросы",
          readActivated: false,
          to: "",
        },
      ],
      productShow: "",
      productShowNum: 0,
    };
  },
  methods: {
    productsShow() {
      this.productShowNum = this.productShowNum + 2;
      this.productShow = this.products.filter((item, index) => index < this.productShowNum);
    },
  },
  mounted() {
    this.productsShow();
  },
};
</script>

<style scoped lang="scss">
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
}
.new_profile {
  .profile {
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
    }

    // profil_can
    .profil_can {
      margin-top: 24px;
      padding: 16px;
      border-radius: 20px;
      background: #222;
      .can_top {
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

    //profil_need
    .profil_need {
      margin-top: 24px;
      padding: 16px;
      border-radius: 20px;
      background: #222;
      .need_top {
        display: flex;
        align-items: center;
        gap: 4px;
        margin-bottom: 12px;
      }
    }
    .border {
      width: 100%;
      height: 1px;
      background: #4d4c4c;
      margin: 24px auto;
    }

    // products
    .products {
      .products_top {
        display: flex;
        align-items: center;
        gap: 4px;
        margin-bottom: 12px;
      }
      .advice {
        margin-bottom: 4px;
        padding: 12px;
        border-radius: 12px;
        background: #2f2f2f;
        span {
          display: block;
        }
        .title_small {
          color: rgb(95, 193, 93);
          font-family: Raleway;
          font-size: 12px;
          font-weight: 600;
          line-height: 16px;
          letter-spacing: 0%;
          text-align: left;
          margin-bottom: 8px;
        }
        .title {
          color: rgb(255, 255, 255);
          font-family: Raleway;
          font-size: 16px;
          font-weight: 600;
          line-height: 20px;
          letter-spacing: 0%;
          text-align: left;
          margin-bottom: 6px;
        }
        .description {
          color: rgb(211, 210, 210);
          font-family: Raleway;
          font-size: 12px;
          font-weight: 400;
          line-height: 16px;
          letter-spacing: 0%;
          text-align: left;
          margin-bottom: 11px;
        }
        .show_more {
          display: flex;
          align-items: center;
          gap: 8px;
          color: rgb(255, 255, 255);
          font-family: Raleway;
          font-size: 12px;
          font-weight: 500;
          line-height: 14px;
          letter-spacing: 0%;
          text-align: left;
          margin-bottom: 16px;
          margin-left: 0 !important;
        }
        .advice_bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .products_btn {
            display: flex;
            align-items: center;
            gap: 3px;
            border-radius: 4px;
            background: rgb(201, 201, 201);
            padding: 10px 12px 10px 12px;
            color: rgb(26, 25, 25);
            font-family: Raleway;
            font-size: 12px;
            font-weight: 600;
            line-height: 16px;
            letter-spacing: 0%;
            text-align: center;
          }
          .more_details {
            color: rgb(255, 255, 255);
            font-family: Raleway;
            font-size: 12px;
            font-weight: 500;
            line-height: 16px;
            letter-spacing: 0%;
            text-align: left;
          }
        }
      }
      .show_more {
        display: flex;
        align-items: center;
        margin: 0 auto;
        gap: 8px;
        color: rgb(255, 255, 255);
        font-family: Raleway;
        font-size: 12px;
        font-weight: 500;
        line-height: 14px;
        letter-spacing: 0%;
        text-align: left;
        margin-top: 17px;
      }
    }
  }
}
</style>
