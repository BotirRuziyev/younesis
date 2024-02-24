<template>
  <div>
    <div class="user_data_head">
      <img :src="user_img" class="user_img" alt="user" />
      <div>
        <div class="user_name">{{ user_name }}</div>
        <main-button class="user_btn">
          <img src="@/assets/images/msg_icon.svg" alt="msg_icon" />
          <router-link to="/" class="write_link">Написать</router-link>
        </main-button>
      </div>
    </div>
    <div class="tinder_location">
      <div class="location_top">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 8.6665V8.6665C6.89533 8.6665 6 7.77117 6 6.6665V6.6665C6 5.56184 6.89533 4.6665 8 4.6665V4.6665C9.10467 4.6665 10 5.56184 10 6.6665V6.6665C10 7.77117 9.10467 8.6665 8 8.6665Z"
              stroke="#A6A5A5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.00016 14C8.00016 14 3.3335 10.1667 3.3335 6.66667C3.3335 4.08933 5.42283 2 8.00016 2C10.5775 2 12.6668 4.08933 12.6668 6.66667C12.6668 10.1667 8.00016 14 8.00016 14Z"
              stroke="#A6A5A5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          {{ location }}
        </span>
        <span style="display: none">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.0785 8.3115C1.97383 8.1175 1.97383 7.88216 2.0785 7.68816C3.33983 5.3555 5.66983 3.3335 7.99983 3.3335C10.3298 3.3335 12.6598 5.3555 13.9212 7.68883C14.0258 7.88283 14.0258 8.11816 13.9212 8.31216C12.6598 10.6448 10.3298 12.6668 7.99983 12.6668C5.66983 12.6668 3.33983 10.6448 2.0785 8.3115Z"
              stroke="#A6A5A5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.41421 6.58579C10.1953 7.36683 10.1953 8.63316 9.41421 9.41421C8.63316 10.1953 7.36683 10.1953 6.58579 9.41421C5.80474 8.63316 5.80474 7.36683 6.58579 6.58579C7.36683 5.80474 8.63316 5.80474 9.41421 6.58579"
              stroke="#A6A5A5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          1.2K
        </span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.15408 13.8882C4.81603 14.0646 4.40707 14.0336 4.09956 13.8081C3.79204 13.5826 3.63947 13.2019 3.70614 12.8264L4.2457 9.7338L1.97409 7.55689C1.69642 7.2921 1.59466 6.89182 1.71215 6.52657C1.82964 6.16131 2.14568 5.89543 2.52565 5.84218L5.67963 5.39132L7.10356 2.55081C7.27239 2.21015 7.61973 1.99463 7.99993 1.99463C8.38013 1.99463 8.72747 2.21015 8.8963 2.55081L10.3202 5.39132L13.4742 5.84218C13.8542 5.89543 14.1702 6.16131 14.2877 6.52657C14.4052 6.89182 14.3034 7.2921 14.0258 7.55689L11.7542 9.7338L12.2937 12.8271C12.3604 13.2025 12.2078 13.5832 11.9003 13.8087C11.5928 14.0342 11.1838 14.0653 10.8458 13.8889L7.99993 12.4182L5.15408 13.8882Z"
              stroke="#A6A5A5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          4.5
        </span>
      </div>
      <div class="title">{{ title }}</div>
      <div class="description">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  props: {
    to: {
      type: String,
      default: "#",
    },
    user_img: {
      type: String,
      default: "",
    },
    user_name: {
      type: String,
      default: "",
    },
    location: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
.user_data_head {
  margin-top: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  .user_img {
    max-height: 106px;
  }
  .user_name {
    color: #fff;
    font-variant-numeric: lining-nums proportional-nums;
    // font-family: Raleway;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
  }
  .user_btn {
    margin-top: 12px;
    display: flex;
    height: 36px;
    min-width: 72px;
    padding: 10px 12px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    img {
      display: flex;
      width: 20px;
      height: 20px;
      justify-content: center;
      align-items: center;
    }
    span {
      //   font-family: Raleway;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 18px;
    }
  }
}
// tinder_location
.tinder_location {
  margin-bottom: 20px;
  .location_top {
    margin: 20px auto 12px auto;
    display: flex;
    // width: 328px;
    justify-content: space-between;
    align-items: flex-start;
    span {
      font-size: 14px;
      font-style: normal;
      //   font-family: Raleway;
      font-weight: 500;
      line-height: 18px;
      color: #a6a5a5;
      display: flex;
      align-items: center;
      justify-content: space-between;
      :nth-child(1) {
        margin-right: 4px;
      }
    }
    :nth-child(2) {
      margin-left: 80px;
    }
  }
  .title {
    // font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }
  .description {
    margin-top: 8px;
    color: rgb(211, 210, 210);
    font-family: Raleway;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0%;
    text-align: left;
  }
}
</style>
