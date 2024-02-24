<template>
  <div class="edit_profile">
    <head-new page_title="Редактировать профиль"></head-new>
    <div class="main_container">
      <!-- profile can start  -->
      <div class="profil_about bcg_gray">
        <div class="bcg_gray_top">
          <span>Обо мне</span>
        </div>
        <profile-link
          to="/profile/edit/personal-data"
          img="/img/profile/6.svg"
          path_name="Личные данные"
        ></profile-link>
        <profile-link to="#" img="/img/profile/7.svg" path_name="Описание профиля"></profile-link>
        <profile-link to="/profile/edit/contacts" img="/img/profile/8.svg" path_name="Контакты"></profile-link>
      </div>
      <!-- profile can end  -->
      <!-- profile can start  -->
      <div class="profil_career bcg_gray">
        <div class="bcg_gray_top">
          <span>Карьера</span>
        </div>
        <profile-link to="#" img="/img/profile/6.svg" path_name="Профессия/деятельность"></profile-link>
        <profile-link to="#" img="/img/profile/7.svg" path_name="Могу"></profile-link>
        <profile-link to="#" img="/img/profile/8.svg" path_name="Ищу"></profile-link>
        <profile-link to="#" img="/img/profile/6.svg" path_name="Кейсы"></profile-link>
        <profile-link to="#" img="/img/profile/7.svg" path_name="Продукты"></profile-link>
        <profile-link to="#" img="/img/profile/8.svg" path_name="Образование"></profile-link>
      </div>
      <!-- profile can end  -->

      <div class="profile_delete_btn" @click="(modaldelete = true), (request = true)">Удалить аккаунт</div>
    </div>
    <!-- modals -->
    <div
      class="delete_modal"
      :class="modaldelete ? 'modal_active' : ''"
      @click="
        !$event.target.closest('.confirmation_request') &&
        !$event.target.closest('.caution') &&
        !$event.target.closest('.delete_accaunt')
          ? (modaldelete = false)
          : ''
      "
    >
      <div class="confirmation_request" v-if="request">
        <div class="modal_top">
          Удалить аккаунт?
          <button class="close_modal" @click="modaldelete = false">
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
        <p class="descrtiption">
          Мы удалим следующие данные: - заполненные поля профиля - выигранные бесплатные материалы - контакты в
          визитнице - историю сообщений в чате
        </p>
        <div class="delete_buttons">
          <button class="cancel_btn" @click="modaldelete = false">Отмена</button>
          <button class="delete_btn" @click="(caution = true), (request = false)">Удалить аккаунт</button>
        </div>
      </div>
      <div class="caution" :class="caution ? 'caution_active' : ''">
        <button class="close_btn" @click="caution = false">
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
              d="M14.8301 9.16992L9.16992 14.8299"
              stroke="#A6A5A5"
              stroke-opacity="1.000000"
              stroke-width="1.500000"
              stroke-linejoin="round"
              stroke-linecap="round"
            />
            <path
              id="Path"
              d="M14.8301 14.8299L9.16992 9.16992"
              stroke="#A6A5A5"
              stroke-opacity="1.000000"
              stroke-width="1.500000"
              stroke-linejoin="round"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <svg
          width="112.000000"
          height="112.000000"
          viewBox="0 0 112 112"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <desc>Created with Pixso.</desc>
          <defs />
          <path
            id="Path"
            d="M14 67.1114L14 44.8887C14 37.4127 17.9766 30.5014 24.4355 26.7401L45.4355 14.5181C51.9629 10.7194 60.0312 10.7194 66.5605 14.5181L87.5605 26.7401C94.0234 30.5014 98 37.4127 98 44.8887L98 67.1114C98 74.5874 94.0234 81.4987 87.5645 85.2601L66.5645 97.4821C60.0371 101.281 51.9688 101.281 45.4395 97.4821L24.4395 85.2601C17.9766 81.4987 14 74.5874 14 67.1114Z"
            fill="#FF3F48"
            fill-opacity="0.160000"
            fill-rule="evenodd"
          />
          <path
            id="Path"
            d="M56 59.5L56 35"
            stroke="#FF3F48"
            stroke-opacity="1.000000"
            stroke-width="6.000000"
            stroke-linejoin="round"
            stroke-linecap="round"
          />
          <path
            id="Path"
            d="M54.832 73.5001C54.832 74.1441 55.3555 74.6667 56 74.6667C56.6426 74.6667 57.166 74.1441 57.166 73.5001C57.166 72.8561 56.6426 72.3334 55.9941 72.3334C55.3516 72.3334 54.8281 72.8561 54.832 73.5001Z"
            stroke="#FF3F48"
            stroke-opacity="1.000000"
            stroke-width="6.000000"
            stroke-linejoin="round"
          />
        </svg>

        <div class="title">Данные будут удалены</div>
        <p class="descrtiption">Вы не сможете восстановить свой аккаунт после его удаления</p>
        <div class="delete_buttons">
          <button class="cancel_btn" @click="(caution = false), (request = true)">Отмена</button>
          <button class="delete_btn" @click="(caution = false), (request = false)">Удалить аккаунт</button>
        </div>
      </div>
      <div class="delete_accaunt" :class="!caution && !request && modaldelete ? 'delete_accaunt_active' : ''">
        <div class="close_btn" @click="modaldelete = false">
          <svg
            width="48.000000"
            height="48.000000"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <desc>Created with Pixso.</desc>
            <defs>
              <clipPath id="clip1793_12725">
                <rect id="Button" rx="10.000000" width="48.000000" height="48.000000" fill="white" fill-opacity="0" />
              </clipPath>
            </defs>
            <rect
              id="Button"
              rx="10.000000"
              width="48.000000"
              height="48.000000"
              fill="#222222"
              fill-opacity="1.000000"
            />
            <g clip-path="url(#clip1793_12725)">
              <rect
                id="Interface, Essential/Close"
                width="24.000000"
                height="24.000000"
                transform="translate(12.000000 12.000000)"
                fill="#FFFFFF"
                fill-opacity="0"
              />
              <path
                id="Path"
                d="M36 12L36 36L12 36L12 12L36 12Z"
                stroke="#FFFFFF"
                stroke-opacity="1.000000"
                stroke-width="1.000000"
              />
              <path
                id="Path"
                d="M18 18L30 30"
                stroke="#FFFFFF"
                stroke-opacity="1.000000"
                stroke-width="1.500000"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
              <path
                id="Path"
                d="M30 18L18 30"
                stroke="#FFFFFF"
                stroke-opacity="1.000000"
                stroke-width="1.500000"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
            </g>
          </svg>
        </div>
        <div class="center_block">
          <svg
            width="112.046875"
            height="112.046692"
            viewBox="0 0 112.047 112.047"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <desc>Created with Pixso.</desc>
            <defs />
            <circle id="Oval" cx="56.023438" cy="56.023376" r="42.017498" fill="#56E776" fill-opacity="0.160000" />
            <path
              id="Path"
              d="M39.4219 57.606L49.5391 67.7228L49.4727 67.6575L72.2988 44.8326"
              stroke="#56E776"
              stroke-opacity="1.000000"
              stroke-width="6.000000"
              stroke-linejoin="round"
              stroke-linecap="round"
            />
          </svg>
          <h2 class="title">Ваш аккаунт удален</h2>
          <div class="descrtiption">Спасибо за пользование нашим продуктом</div>
        </div>
        <div class="register_btns delete_buttons">
          <button class="sign_up">Зарегистрироваться</button>
          <button class="sign_in">Войти</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadNew from "@/components/newVersionComponents/HeadNew.vue";
import ProfileLink from "@/components/UI/ProfileLink";
export default {
  name: "EditProfile",
  components: {
    HeadNew,
    ProfileLink,
  },
  data() {
    return {
      modaldelete: false,
      caution: false,
      request: true,
    };
  },
};
</script>

<style lang="scss">
.edit_profile {
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
  }
  .profil_about {
    margin-top: 24px;
    margin-bottom: 16px;
  }
  .profile_delete_btn {
    padding: 10px 24px 10px 24px;
    border-radius: 12px;
    color: rgb(255, 48, 58);
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0%;
    text-align: center;
    margin-top: 16px;
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
    .confirmation_request {
      max-width: 420px;
      width: 100%;
      border-radius: 16px 16px 0px 0px;
      background: rgb(34, 34, 34);
      padding: 16px 16px 55px;
      transform: translateY(259px);
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
        margin-bottom: 12px;
      }
      .descrtiption {
        color: rgb(211, 210, 210);
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0%;
        text-align: left;
        margin-bottom: 20px;
      }
    }
    .caution {
      max-width: 420px;
      width: calc(100% - 32px);
      height: 100%;
      max-height: 301px;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      transform: scale(0.8);
      transform-origin: center;
      padding: 8px 16px 16px;
      border-radius: 24px;
      background: rgb(34, 34, 34);
      text-align: center;
      opacity: 0;
      z-index: -1;
      transition: 0.3s;
      .close_btn {
        position: absolute;
        top: 12px;
        right: 12px;
      }
      .title {
        color: rgb(255, 255, 255);
        font-size: 20px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0%;
        text-align: center;
        margin: 8px 0 12px;
      }
      .descrtiption {
        color: rgb(211, 210, 210);
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0%;
        text-align: center;
        margin-bottom: 37px;
      }
    }
    .caution_active {
      transform: scale(1);
      opacity: 1;
      z-index: 2;
    }
    .delete_accaunt {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      opacity: 0;
      visibility: hidden;
      transition: 0.3s;
      width: 100%;
      height: 100%;
      background: rgb(23, 23, 23);
      padding: 48px 16px 52px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .center_block {
        text-align: center;
        .title {
          color: rgb(255, 255, 255);
          font-size: 20px;
          font-weight: 700;
          line-height: 24px;
          letter-spacing: 0%;
          text-align: center;
          margin: 11px 0 8px;
        }
        .descrtiption {
          color: rgb(211, 210, 210);
          font-size: 14px;
          font-weight: 400;
          line-height: 18px;
          letter-spacing: 0%;
          text-align: center;
        }
      }
    }
    .delete_accaunt_active {
      visibility: visible;
      opacity: 1;
      z-index: 3;
      .center_block {
        svg {
          animation: 1.2s svgScale;
        }
        @keyframes svgScale {
          0% {
            transform: translate(1);
          }
          50% {
            transform: scale(1.5);
          }
          100% {
            transform: translate(1);
          }
        }
      }
    }
    .delete_buttons {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 8px;

      button {
        display: block;
        border: 1px solid rgb(73, 73, 73);
        border-radius: 12px;
        padding: 10px;
        background: rgb(47, 47, 47);
        color: rgb(255, 255, 255);
        font-size: 14px;
        font-weight: 600;
        line-height: 18px;
        letter-spacing: 0%;
        text-align: center;
      }
      .delete_btn {
        color: rgb(255, 48, 58);
        border-color: transparent;
      }
      .sign_up {
        background: rgb(207, 46, 46);
        border-color: transparent;
      }
    }
    .register_btns {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  .modal_active {
    opacity: 1;
    z-index: 100;
    .confirmation_request {
      transform: translateY(0);
    }
  }
}
</style>
