<template>
  <div class="head_new">
    <div class="main_container">
      <router-link to="" @click="$router.go(-1)" class="link">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M2 12H22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M9 5L2 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M9 19L2 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </router-link>
      <div class="title">{{ page_title }}</div>
      <router-link to="#" class="sign_out">
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
            d="M12 17L12 3"
            stroke="#FFFFFF"
            stroke-opacity="1.000000"
            stroke-width="1.500000"
            stroke-linejoin="round"
            stroke-linecap="round"
          />
          <path
            id="Path"
            d="M15 6L12 3L9 6"
            stroke="#FFFFFF"
            stroke-opacity="1.000000"
            stroke-width="1.500000"
            stroke-linejoin="round"
            stroke-linecap="round"
          />
          <path
            id="Path"
            d="M8 10L5 10C3.89453 10 3 10.895 3 12L3 19C3 20.105 3.89453 21 5 21L19 21C20.1055 21 21 20.105 21 19L21 12C21 10.895 20.1055 10 19 10L16 10"
            stroke="#FFFFFF"
            stroke-opacity="1.000000"
            stroke-width="1.500000"
            stroke-linejoin="round"
            stroke-linecap="round"
          />
        </svg>
      </router-link>
      <button class="profile_setting" @click="$emit('profileSettings', profileSettings)">
        <svg
          width="25.000000"
          height="25.000000"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <desc>Created with Pixso.</desc>
          <defs />
          <path
            id="Path"
            d="M14.2676 14.2678C13.291 15.2441 11.709 15.2441 10.7324 14.2678C9.75586 13.2914 9.75586 11.7086 10.7324 10.7322C11.709 9.75592 13.291 9.75592 14.2676 10.7322C15.2441 11.7086 15.2441 13.2914 14.2676 14.2678Z"
            stroke="#FFFFFF"
            stroke-opacity="1.000000"
            stroke-width="1.500000"
            stroke-linejoin="round"
          />
          <path
            id="Path"
            d="M15.9316 4.81403C16.4668 4.992 16.8281 5.492 16.8281 6.05499L16.8281 6.89203C16.8281 7.604 17.3945 8.185 18.1074 8.20001L18.9453 8.21802C19.4297 8.22803 19.8711 8.50702 20.0879 8.94104L20.3613 9.49103C20.6133 9.995 20.5156 10.603 20.1172 11.001L19.5254 11.593C19.0215 12.096 19.0137 12.909 19.5059 13.423L20.0859 14.029C20.4219 14.38 20.5352 14.887 20.3809 15.348L20.1875 15.931C20.0098 16.465 19.5098 16.826 18.9453 16.826L18.1094 16.826C17.3965 16.826 16.8164 17.394 16.8008 18.106L16.7832 18.944C16.7734 19.429 16.4941 19.869 16.0605 20.086L15.5098 20.361C15.0059 20.613 14.3984 20.514 14 20.116L13.4082 19.524C12.9043 19.021 12.0918 19.012 11.5781 19.504L10.9727 20.084C10.6211 20.42 10.1133 20.534 9.65234 20.38L9.07031 20.186C8.53711 20.008 8.17578 19.508 8.17578 18.945L8.17578 18.108C8.17578 17.396 7.60742 16.815 6.89453 16.8L6.05664 16.782C5.57227 16.772 5.13281 16.493 4.91602 16.059L4.64062 15.509C4.38867 15.005 4.48633 14.397 4.88477 13.999L5.47656 13.407C5.98047 12.904 5.98828 12.091 5.49805 11.577L4.91797 10.971C4.58008 10.619 4.4668 10.111 4.62109 9.651L4.81445 9.06799C4.99219 8.534 5.49219 8.17303 6.05469 8.17303L6.89258 8.17303C7.60352 8.17303 8.18555 7.60504 8.19922 6.89301L8.21875 6.05499C8.23047 5.57001 8.50781 5.13 8.94141 4.91302L9.49219 4.638C9.99609 4.38599 10.6035 4.48505 11.002 4.883L11.5938 5.47504C12.0977 5.97803 12.9102 5.987 13.4238 5.495L14.0293 4.91504C14.3809 4.58002 14.8887 4.466 15.3496 4.62L15.9316 4.81403Z"
            stroke="#FFFFFF"
            stroke-opacity="1.000000"
            stroke-width="1.500000"
            stroke-linejoin="round"
          />
          <path
            id="Path"
            d="M24.5 0.5L24.5 24.5L0.5 24.5L0.5 0.5L24.5 0.5Z"
            stroke="#FFFFFF"
            stroke-opacity="1.000000"
            stroke-width="1.000000"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: "#",
    },
    page_title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
.head_new {
  .main_container {
    margin-top: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 24px;
  }

  .link {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }

  .title {
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
  }
  .sign_out {
    width: 100%;
    text-align: end;
    display: none;
  }
  .profile_setting {
    display: none;
  }
}
</style>
