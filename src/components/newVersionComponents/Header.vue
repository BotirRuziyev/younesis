<template>
  <!-- New navs start-->
  <div class="new_navs">
    <div class="main_container">
      <router-link to="/" class="navs_link" :class="url == '/' ? 'active' : ''" @click="navLink">
        <div class="navs_link_img">
          <svg
            width="17.500000"
            height="18.500244"
            viewBox="0 0 17.5 18.5002"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <desc>Created with Pixso.</desc>
            <defs />
            <path
              id="Path"
              d="M6.25 13.2502C6.25 11.8691 7.36914 10.7502 8.75 10.7502C10.1309 10.7502 11.25 11.8691 11.25 13.2502L11.25 17.7502L16.75 17.7502L16.75 9.16431C16.75 8.63428 16.5391 8.12524 16.1641 7.75024L9.45703 1.04321C9.06641 0.652344 8.43262 0.652344 8.04297 1.04321L1.33594 7.75024C0.960938 8.12524 0.75 8.63428 0.75 9.16431L0.75 17.7502L6.25 17.7502L6.25 13.2502Z"
              stroke="#8B8B8B"
              stroke-opacity="1.000000"
              stroke-width="1.500000"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        Главная
      </router-link>
      <router-link
        :to="{ name: 'NewHome' }"
        class="navs_link"
        :class="url != '/' && url.slice(0, 6) != '/chats' ? 'active' : ''"
        @click="navLink"
      >
        <div class="navs_link_img">
          <svg
            width="24.951172"
            height="24.010010"
            viewBox="0 0 24.9512 24.01"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <desc>Created with Pixso.</desc>
            <defs />
            <path
              id="Path"
              d="M13.0479 18.1104L5.53418 20.1311C4.70312 20.3533 3.84863 19.8613 3.62305 19.0308L0.802734 8.50635C0.583008 7.67529 1.07422 6.82275 1.90234 6.59546L6.75 5.00488"
              stroke="#FFFFFF"
              stroke-opacity="1.000000"
              stroke-width="1.500000"
              stroke-linejoin="round"
              stroke-linecap="round"
            />
            <path
              id="Path"
              d="M11.9033 18.1104L19.417 20.1311C20.248 20.3533 21.1025 19.8613 21.3281 19.0308L24.1484 8.50635C24.3682 7.67529 23.877 6.82275 23.0488 6.59546L18.75 5.00488"
              stroke="#FFFFFF"
              stroke-opacity="1.000000"
              stroke-width="1.500000"
              stroke-linejoin="round"
              stroke-linecap="round"
            />
            <rect
              id="Rectangle"
              x="6.750000"
              y="2.004883"
              rx="1.555560"
              width="12.000000"
              height="16.000000"
              stroke="#FFFFFF"
              stroke-opacity="1.000000"
              stroke-width="1.500000"
              stroke-linejoin="round"
            />
            <path
              id="Path"
              d="M14.25 7.50488C14.25 8.3335 13.5781 9.00488 12.75 9.00488C11.9219 9.00488 11.25 8.3335 11.25 7.50488C11.25 6.67627 11.9219 6.00488 12.75 6.00488C13.5781 6.00488 14.25 6.67627 14.25 7.50488Z"
              stroke="#FFFFFF"
              stroke-opacity="1.000000"
              stroke-width="1.500000"
              stroke-linejoin="round"
            />
            <path
              id="Path"
              d="M15.75 13.0049C15.6631 12.5662 15.5273 12.1716 15.3535 11.8501C15.0615 11.3062 14.6777 11.0049 14.2783 11.0049C13.6113 11.0049 11.8887 11.0049 11.2217 11.0049C10.8223 11.0049 10.4395 11.3076 10.1465 11.8501C9.97266 12.1716 9.83691 12.5662 9.75 13.0049"
              stroke="#FFFFFF"
              stroke-opacity="1.000000"
              stroke-width="1.500000"
              stroke-linejoin="round"
              stroke-linecap="round"
            />
          </svg>
        </div>
        Тиндер
      </router-link>
      <router-link
        :to="{ name: 'ChatsHome' }"
        class="navs_link"
        :class="url.slice(0, 6) == '/chats' ? 'active' : ''"
        @click="navLink"
      >
        <div class="navs_link_img">
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
              d="M3 12C3 7.02905 7.0293 3 12 3C16.9707 3 21 7.02905 21 12C21 16.9709 16.9707 21 12 21C10.4023 21 8.9043 20.5791 7.60352 19.8491L3 21L4.15137 16.396C3.4209 15.0959 3 13.5979 3 12Z"
              stroke="#8B8B8B"
              stroke-opacity="1.000000"
              stroke-width="1.588200"
              stroke-linejoin="round"
            />
            <path
              id="Path"
              d="M24 0L0 0L0 24L24 24L24 0ZM1 23L1 1L23 1L23 23L1 23Z"
              fill="#8B8B8B"
              fill-opacity="1.000000"
              fill-rule="evenodd"
            />
          </svg>
        </div>
        Сообщения
      </router-link>
    </div>
  </div>
  <!-- New navs end -->
</template>

<script>
export default {
  data() {
    return {
      url: this.$route.fullPath,
    };
  },
};
</script>

<style lang="scss">
.new_navs {
  border-top: 1px solid #2b2b2b;
  background: #171717;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 100;
  display: none;

  .main_container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 29px;

    .navs_link {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: rgb(255, 255, 255);
      font-size: 10px;
      font-weight: 600;
      line-height: 12px;
      letter-spacing: 0%;
      text-align: center;
      transition: 0.5s;
      .navs_link_img {
        line-height: 0;
        margin-bottom: 10px;
        transition: 0.5s;
        svg {
          path {
            transition: 0.3s;
            stroke: rgb(139, 139, 139);
          }
          rect {
            transition: 0.3s;
            stroke: rgb(139, 139, 139);
          }
        }
      }
    }

    .active {
      transform: translateY(-28px);
      .navs_link_img {
        padding: 12px;
        border: 2px solid rgba(231, 94, 94, 0.24);
        border-radius: 12px;
        box-shadow: 0px 0px 16px 0px rgba(231, 94, 94, 0.3);
        background: rgb(207, 46, 46);
        color: rgb(139, 139, 139);
        margin-bottom: 8px;
        svg {
          path {
            stroke: rgb(255, 255, 255);
          }
          rect {
            stroke: rgb(255, 255, 255);
          }
        }
      }
      color: rgb(139, 139, 139);
      font-size: 11px;
      font-weight: 500;
      line-height: 12px;
    }
  }
}
@media (max-width: 992px) {
  .new_navs {
    display: block;
  }
}
</style>
