<template>
  <div class="edit_achievements_wrapper">
    <head-new page_title="Кейсы и достижения"></head-new>
    <div class="main_container">
      <div class="achievement_head">
        <svg
          width="20.007812"
          height="20.008362"
          viewBox="0 0 20.0078 20.0084"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <desc>Created with Pixso.</desc>
          <defs />
          <path
            id="Path"
            d="M13.707 16.6707L6.29883 16.6707C4.66211 16.6707 3.33594 15.3915 3.33594 13.8136L3.33594 8.0993C3.33594 7.3103 4 6.67072 4.81836 6.67072L15.1875 6.67072C16.0059 6.67072 16.6699 7.3103 16.6699 8.0993L16.6699 13.8136C16.6699 15.3915 15.3418 16.6707 13.707 16.6707Z"
            fill="#AF89FF"
            fill-opacity="1.000000"
            fill-rule="evenodd"
          />
          <path
            id="Path"
            d="M6.29883 16.6707C4.66211 16.6707 3.33594 15.3915 3.33594 13.8136L3.33594 8.0993C3.33594 7.3103 4 6.67072 4.81836 6.67072L15.1875 6.67072C16.0059 6.67072 16.6699 7.3103 16.6699 8.0993L16.6699 13.8136C16.6699 15.3915 15.3418 16.6707 13.707 16.6707L6.29883 16.6707Z"
            stroke="#AF89FF"
            stroke-opacity="1.000000"
            stroke-width="1.500000"
            stroke-linejoin="round"
          />
          <path
            id="Path"
            d="M6.66992 6.67072L6.66992 5.00409C6.66992 4.08362 7.41602 3.3374 8.33594 3.3374L11.6699 3.3374C12.5898 3.3374 13.3359 4.08362 13.3359 5.00409L13.3359 6.67072"
            stroke="#AF89FF"
            stroke-opacity="1.000000"
            stroke-width="1.500000"
            stroke-linejoin="round"
            stroke-linecap="round"
          />
          <rect
            id="Rectangle"
            x="8.335938"
            y="9.170715"
            rx="0.500000"
            width="3.333333"
            height="2.500000"
            stroke="#222222"
            stroke-opacity="1.000000"
            stroke-width="1.500000"
            stroke-linejoin="round"
          />
          <path
            id="Path"
            d="M11.6699 10.004L14.1719 10.004C15.5527 10.004 16.6699 10.004 16.6699 10.004"
            stroke="#222222"
            stroke-opacity="1.000000"
            stroke-width="1.500000"
            stroke-linejoin="round"
            stroke-linecap="round"
          />
          <path
            id="Path"
            d="M8.33594 10.004L5.83398 10.004C4.45312 10.004 3.33594 10.004 3.33594 10.004"
            stroke="#222222"
            stroke-opacity="1.000000"
            stroke-width="1.500000"
            stroke-linejoin="round"
            stroke-linecap="round"
          />
        </svg>
        Введите ваши выдающиеся кейсы и достижения для привлечения внимания пользователей
      </div>
      <div class="achievement_container" v-for="i of block" :key="i">
        <div class="title">
          Кейс или достижение
          <button class="delete_btn" @click="(blockNum = i), (modal = true)">
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
                d="M15 5L15 15.625C15 16.6608 14.1445 17.5 13.1094 17.5L6.85938 17.5C5.82422 17.5 5 16.6608 5 15.625L5 5"
                stroke="#A6A5A5"
                stroke-opacity="1.000000"
                stroke-width="1.500000"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
              <path
                id="Path"
                d="M16.25 5.00006L3.75 5.00006"
                stroke="#A6A5A5"
                stroke-opacity="1.000000"
                stroke-width="1.500000"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
              <path
                id="Path"
                d="M7.5 2.91669L12.5 2.91669"
                stroke="#A6A5A5"
                stroke-opacity="1.000000"
                stroke-width="1.500000"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
              <path
                id="Path"
                d="M11.666 8.33331L11.666 14.1666"
                stroke="#A6A5A5"
                stroke-opacity="1.000000"
                stroke-width="1.500000"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
              <path
                id="Path"
                d="M8.33203 14.1666L8.33203 8.33331"
                stroke="#A6A5A5"
                stroke-opacity="1.000000"
                stroke-width="1.500000"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>
        <div class="form_control">
          <form-input
            value="Сохранил больше 100 семей"
            placeholder="*Заголовок"
            label="*Заголовок"
            @update:value="valueFun"
          />
        </div>
        <div class="form_control">
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
              d="M14.5371 10.6483L16.4824 8.70416C17.9141 7.27252 17.9141 4.95081 16.4824 3.51831C15.0508 2.08667 12.7285 2.08667 11.2949 3.51831L9.35156 5.46252"
              stroke="#A6A5A5"
              stroke-opacity="1.000000"
              stroke-width="1.500000"
              stroke-linejoin="round"
              stroke-linecap="round"
            />
            <path
              id="Path"
              d="M7.4082 12.5917L12.5918 7.40833"
              stroke="#A6A5A5"
              stroke-opacity="1.000000"
              stroke-width="1.500000"
              stroke-linejoin="round"
              stroke-linecap="round"
            />
            <path
              id="Path"
              d="M5.46289 9.35168L3.51953 11.2958C2.08789 12.7275 2.08789 15.0492 3.51953 16.4817C4.95117 17.9133 7.27148 17.9133 8.70508 16.4817L10.6484 14.5375"
              stroke="#A6A5A5"
              stroke-opacity="1.000000"
              stroke-width="1.500000"
              stroke-linejoin="round"
              stroke-linecap="round"
            />
          </svg>
          <form-input value="" placeholder="Ссылка" label="Ссылка" @update:value="valueFun" />
        </div>
        <button class="save_btn">Сохранить</button>
      </div>
      <div class="achievement_add">
        <span class="title">
          Добавьте еще кейсов и достижений и
          <span>
            заберите 1000
            <svg
              width="29.208984"
              height="29.205811"
              viewBox="0 0 29.209 29.2058"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs>
                <filter
                  id="filter_1660_14557_dd"
                  x="0.000000"
                  y="0.000000"
                  width="29.208984"
                  height="29.205811"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="2" dy="2" />
                  <feGaussianBlur stdDeviation="1.93333" />
                  <feComposite in2="hardAlpha" operator="out" k2="-1" k3="1" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.46667 0 0 0 0 0.29412 0 0 0 0 0.0078431 0 0 0 0.5 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect_dropShadow_1" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect_dropShadow_1" result="shape" />
                </filter>
                <filter
                  id="filter_1660_14558_dd"
                  x="4.726562"
                  y="3.381989"
                  width="7.082031"
                  height="6.819885"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="0.666667" result="effect_layerBlur_1" />
                </filter>
                <filter
                  id="filter_1660_14560_dd"
                  x="14.181641"
                  y="15.525635"
                  width="4.005859"
                  height="3.653198"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="0.333333" result="effect_layerBlur_1" />
                </filter>
                <linearGradient
                  id="paint_linear_1660_14557_0"
                  x1="4.601562"
                  y1="4.599976"
                  x2="20.607422"
                  y2="20.605835"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FBEC40" />
                  <stop offset="1.000000" stop-color="#EFBB16" />
                </linearGradient>
                <linearGradient
                  id="paint_linear_1660_14557_1"
                  x1="4.919172"
                  y1="4.917583"
                  x2="20.289875"
                  y2="20.288290"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B78F0F" />
                  <stop offset="1.000000" stop-color="#AC6B11" />
                </linearGradient>
                <linearGradient
                  id="paint_linear_1660_14559_0"
                  x1="6.380861"
                  y1="6.378173"
                  x2="18.829861"
                  y2="18.827179"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F9D835" />
                  <stop offset="0.000100" stop-color="#F9D835" />
                  <stop offset="1.000000" stop-color="#EAA800" />
                </linearGradient>
                <linearGradient
                  id="paint_linear_1660_14559_1"
                  x1="6.380861"
                  y1="6.378173"
                  x2="18.829861"
                  y2="18.827179"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E4AC1C" />
                  <stop offset="1.000000" stop-color="#F8E53C" />
                </linearGradient>
                <linearGradient
                  id="paint_linear_1660_14559_2"
                  x1="18.829861"
                  y1="6.822779"
                  x2="6.825463"
                  y2="18.827175"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E1AB19" />
                  <stop offset="1.000000" stop-color="#F7D836" />
                </linearGradient>
                <linearGradient
                  id="paint_linear_1660_14562_0"
                  x1="8.605470"
                  y1="8.601378"
                  x2="17.496372"
                  y2="17.143158"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.099120" stop-color="#FBBE24" />
                  <stop offset="1.000000" stop-color="#D58207" />
                </linearGradient>
                <linearGradient
                  id="paint_linear_1660_14563_0"
                  x1="8.603517"
                  y1="8.601377"
                  x2="16.605469"
                  y2="16.603333"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FCF432" />
                  <stop offset="1.000000" stop-color="#F58500" />
                </linearGradient>
              </defs>
              <g filter="url(#filter_1660_14557_dd)">
                <circle
                  id="Ellipse 39"
                  cx="12.605469"
                  cy="12.602905"
                  r="8.002930"
                  fill="url(#paint_linear_1660_14557_0)"
                  fill-opacity="1.000000"
                />
              </g>
              <circle
                id="Ellipse 39"
                cx="12.605469"
                cy="12.602905"
                r="8.402929"
                stroke="url(#paint_linear_1660_14557_1)"
                stroke-opacity="1.000000"
                stroke-width="0.800000"
              />
              <g filter="url(#filter_1660_14558_dd)">
                <path
                  id="Ellipse 41"
                  d="M6.72656 7.17096C7.4375 6.40305 8.26367 5.80579 9.1543 5.38199L9.80859 6.75244C9.04492 7.11771 8.38477 7.61377 7.8418 8.20187L6.72656 7.17096Z"
                  fill="#FFFFFF"
                  fill-opacity="1.000000"
                  fill-rule="evenodd"
                />
              </g>
              <circle
                id="Ellipse 40"
                cx="12.605469"
                cy="12.602661"
                r="6.224501"
                fill="url(#paint_linear_1660_14559_0)"
                fill-opacity="1.000000"
              />
              <circle
                id="Ellipse 40"
                cx="12.605469"
                cy="12.602661"
                r="5.874501"
                stroke="url(#paint_linear_1660_14559_1)"
                stroke-opacity="1.000000"
                stroke-width="0.700000"
              />
              <circle
                id="Ellipse 40"
                cx="12.605469"
                cy="12.602661"
                r="5.874501"
                stroke="url(#paint_linear_1660_14559_2)"
                stroke-opacity="0.270000"
                stroke-width="0.700000"
              />
              <g filter="url(#filter_1660_14560_dd)">
                <path
                  id="Ellipse 42"
                  d="M17.1875 16.8154C16.6543 17.3947 16.0371 17.85 15.3711 18.1788L15.1816 17.7953C15.8379 17.4697 16.4062 17.0358 16.873 16.5256L17.1875 16.8154Z"
                  fill="#FFFFFF"
                  fill-opacity="0.800000"
                  fill-rule="evenodd"
                />
              </g>
              <circle
                id="Ellipse 43"
                cx="12.605469"
                cy="12.602356"
                r="4.250977"
                stroke="url(#paint_linear_1660_14562_0)"
                stroke-opacity="0.560000"
                stroke-width="0.500000"
              />
              <path
                id="Subtract"
                d="M12.8203 16.5976C14.9297 16.4854 16.6055 14.7396 16.6055 12.6024C16.6055 10.3927 14.8145 8.60138 12.6055 8.60138C10.3945 8.60138 8.60352 10.3927 8.60352 12.6024C8.60352 13.906 9.22656 15.0641 10.1914 15.7945L12.4336 10.9798C12.4785 10.8845 12.625 10.9134 12.625 11.0185L12.8203 16.5976Z"
                fill="url(#paint_linear_1660_14563_0)"
                fill-opacity="1.000000"
                fill-rule="nonzero"
              />
              <path
                id="Intersect"
                d="M12.3906 16.5978L12.5879 11.0187C12.5879 10.9137 12.7324 10.8847 12.7773 10.98L15.0195 15.7948C14.3477 16.3024 13.5117 16.6036 12.6074 16.6036C12.5332 16.6036 12.4629 16.6017 12.3906 16.5978Z"
                fill="#CE7D00"
                fill-opacity="1.000000"
                fill-rule="nonzero"
              />
              <path
                id="Intersect"
                d="M12.8047 16.5978L12.6074 11.0187C12.6074 10.9137 12.4629 10.8847 12.418 10.98L10.1758 15.7948C10.8477 16.3024 11.6836 16.6036 12.5879 16.6036C12.6621 16.6036 12.7324 16.6017 12.8047 16.5978Z"
                fill="#FFF175"
                fill-opacity="1.000000"
                fill-rule="nonzero"
              />
            </svg>
          </span>
        </span>
        <button class="achievement_add_btn" @click="block = block + 1">Добавить</button>
      </div>
    </div>
    <!-- modals -->
    <div
      class="delete_modal"
      :class="modal ? 'modal_active' : ''"
      @click="!$event.target.closest('.modal_in') ? (modal = false) : ''"
    >
      <div class="modal_in">
        <div class="title">
          Удаление данных
          <button class="close_modal" @click="modal = false">
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
                d="M3 12C3 7.02899 7.0293 3 12 3C16.9707 3 21 7.02899 21 12C21 16.971 16.9707 21 12 21C7.0293 21 3 16.971 3 12Z"
                stroke="#A6A5A5"
                stroke-opacity="1.000000"
                stroke-width="1.500000"
                stroke-linejoin="round"
              />
              <path
                id="Path"
                d="M14.8301 9.16998L9.16992 14.83"
                stroke="#A6A5A5"
                stroke-opacity="1.000000"
                stroke-width="1.500000"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
              <path
                id="Path"
                d="M14.8301 14.83L9.16992 9.16998"
                stroke="#A6A5A5"
                stroke-opacity="1.000000"
                stroke-width="1.500000"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>
        <p class="description">Вы действительно хотите удалить кейс «Провел больше 1000 сеансов психоанализа»?</p>
        <div class="buttons">
          <button class="leave_btn" @click="modal = false">Оставить</button>
          <button class="delete_data" @click="deleteBlock(blockNum), (modal = false)">Удалить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadNew from "@/components/newVersionComponents/HeadNew.vue";
export default {
  name: "Editachievements",
  components: {
    HeadNew,
  },
  data() {
    return {
      modal: false,
      block: 1,
      blockNum: "",
    };
  },
  methods: {
    deleteBlock(num) {
      if (this.block != 1)
        $(".achievement_container").each((i, element) => {
          if (i + 1 == num) {
            $(element).remove();
          }
        });
    },
    valueFun(val) {
      $(".form_control #information_val").each((i, input) => {
        $(input).on("input", () => {
          $(input).val(val);
        });
      });
      $(".achievement_container").each((i, element) => {
        $(element)
          .children(".form_control")
          .children(".input_wrapper")
          .children("textarea")
          .on("input", (e) => {
            if (String(val).length >= 1) {
              $(element).children(".form_control").siblings(".save_btn").css("display", "block");
            } else {
              $(element).children(".form_control").siblings(".save_btn").css("display", "none");
            }
          });
      });
    },
  },
  mounted() {
    this.valueFun();
  },
};
</script>

<style lang="scss">
@import "@/assets/_variables.scss";

.edit_achievements_wrapper {
  .achievement_container {
    border-radius: 20px;
    background: rgb(34, 34, 34);
    padding: 16px;
    margin-bottom: 12px;
    &:last-child {
      margin-bottom: 0;
    }
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: rgb(255, 255, 255);
      font-size: 18px;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: 0%;
      text-align: left;
      margin-bottom: 16px;
      .delete_btn {
        line-height: 0;
      }
    }
  }
  .achievement_head {
    display: flex;
    gap: 8px;
    border-radius: 12px;
    padding: 12px;
    margin-top: 26px;
    background: rgb(34, 34, 34);
    color: rgb(211, 210, 210);
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0%;
    text-align: left;
    margin-bottom: 12px;
  }
  .form_control {
    position: relative;

    textarea {
      padding-left: 44px;
      white-space: wrap;
    }
    &:nth-child(2) {
      margin-bottom: 16px;
      textarea {
        padding-left: 12px;
      }
    }
    svg {
      position: absolute;
      top: calc(50% + 8px);
      left: 12px;
      transform: translateY(-50%);
      cursor: pointer;
      line-height: 0;
    }
  }
  .achievement_add {
    border-radius: 20px;
    background: rgb(34, 34, 34);
    padding: 16px;
    margin-top: 12px;
    .title {
      font-size: 14px;
      font-weight: 700;
      line-height: 18px;
      letter-spacing: 0%;
      text-align: left;
      span {
        display: flex;
        align-items: center;
      }
    }
    .achievement_add_btn {
      margin-top: 16px;
    }
  }
  .save_btn,
  .achievement_add_btn {
    width: 100%;
    border-radius: 12px;
    background: rgb(207, 46, 46);
    padding: 10px 24px 10px 24px;
    margin-top: 32px;
    color: rgb(255, 255, 255);
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0%;
    text-align: center;
  }
  .save_btn {
    display: none;
  }
  .delete_modal {
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
    .modal_in {
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
      .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: rgb(255, 255, 255);
        font-size: 20px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0%;
        text-align: left;
        margin-bottom: 12px;
      }
      .description {
        color: rgb(211, 210, 210);
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0%;
        text-align: left;
        margin-bottom: 24px;
      }
      .buttons {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 4px;
        button {
          border: 1px solid rgb(73, 73, 73);
          border-radius: 12px;
          background: rgb(47, 47, 47);
          padding: 10px;
          color: rgb(255, 255, 255);
          font-family: Raleway;
          font-size: 14px;
          font-weight: 600;
          line-height: 18px;
          letter-spacing: 0%;
          text-align: center;
        }
      }
    }
  }
  .modal_active {
    opacity: 1;
    z-index: 100;
    .modal_in {
      transform: translateY(0);
    }
  }
}

.dark-theme .edit_achievements_wrapper {
  .title {
    color: $color-1;
  }

  .role svg path {
    stroke: $color-20;
  }
}
</style>
