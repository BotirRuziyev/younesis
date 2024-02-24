<template>
  <div class="education bcg_gray">
    <h2 class="title education_top" :class="title != '' ? 'title_active' : ''">
      <svg
        width="20.008789"
        height="20.008301"
        viewBox="0 0 20.0088 20.0083"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <desc>Created with Pixso.</desc>
        <defs />
        <path
          id="Path"
          d="M15.0059 17.5073L5.00098 17.5073C4.08008 17.5073 3.33398 16.7607 3.33398 15.8398L3.33398 4.16846C3.33398 3.24756 4.08008 2.50098 5.00098 2.50098L15.0059 2.50098C15.9268 2.50098 16.6729 3.24756 16.6729 4.16846L16.6729 15.8398C16.6729 16.7607 15.9268 17.5073 15.0059 17.5073Z"
          fill="#DC9350"
          fill-opacity="1.000000"
          fill-rule="evenodd"
        />
        <path
          id="Path"
          d="M5.00098 17.5073C4.08008 17.5073 3.33398 16.7607 3.33398 15.8398L3.33398 4.16846C3.33398 3.24756 4.08008 2.50098 5.00098 2.50098L15.0059 2.50098C15.9268 2.50098 16.6729 3.24756 16.6729 4.16846L16.6729 15.8398C16.6729 16.7607 15.9268 17.5073 15.0059 17.5073L5.00098 17.5073Z"
          stroke="#DC9350"
          stroke-opacity="1.000000"
          stroke-width="1.500000"
          stroke-linejoin="round"
        />
        <path
          id="Path"
          d="M6.66895 6.66943L13.3389 6.66943"
          stroke="#222222"
          stroke-opacity="1.000000"
          stroke-width="1.500000"
          stroke-linejoin="round"
          stroke-linecap="round"
        />
        <path
          id="Path"
          d="M6.66895 13.3389L8.33594 13.3389"
          stroke="#222222"
          stroke-opacity="1.000000"
          stroke-width="1.500000"
          stroke-linejoin="round"
          stroke-linecap="round"
        />
        <path
          id="Path"
          d="M13.8486 12.9453L12.2266 14.5669L11.2549 13.5938"
          stroke="#222222"
          stroke-opacity="1.000000"
          stroke-width="1.500000"
          stroke-linejoin="round"
          stroke-linecap="round"
        />
        <path
          id="Path"
          d="M6.66895 10.0039L13.3389 10.0039"
          stroke="#222222"
          stroke-opacity="1.000000"
          stroke-width="1.500000"
          stroke-linejoin="round"
          stroke-linecap="round"
        />
      </svg>
      {{ title }}
    </h2>
    <div class="education_card" v-for="item of courses" :key="item.id">
      <img :src="item.img" alt="" v-if="item.img != ''" />
      <div class="education_card_text">
        <ul>
          <li>{{ item.cours_name }}</li>
          <li>{{ item.cours_description }}</li>
          <div class="education_card_images" v-if="item.images">
            <img :src="img" alt="" v-for="(img, i) in item.images" :key="i" />
          </div>
        </ul>
      </div>
    </div>
    <button class="show_more" @click="education" v-if="courses.length >= cardNum">
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
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    courses: {
      type: Object,
    },
  },
  data() {
    return {
      cardNum: 2,
    };
  },
  methods: {
    education() {
      this.cardNum = this.cardNum + 2;
      $(".education_card").each((i, card) => {
        if (this.cardNum > i + 1) {
          $(card).css("display", "flex");
        } else {
          $(card).css("display", "none");
        }
      });
    },
  },
  mounted() {
    this.education();
  },
};
</script>

<style lang="scss" scoped>
.education {
  .education_top {
    display: none;
    align-items: center;
    gap: 4px;
    margin-bottom: 12px;
    color: rgb(255, 255, 255);
    font-family: Raleway;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0%;
    text-align: left;
  }
  .title_active {
    display: flex;
  }
  .education_card {
    padding: 8px 0;
    display: flex;
    align-items: center;
    gap: 8px;
    border-bottom: 1px solid #303030;
    ul {
      margin: 0;
    }
    .education_card_text {
      :nth-child(1) {
        color: #d3d2d2;
        font-size: 12px;
        font-weight: 600;
        line-height: 16px;
        margin-bottom: 4px;
      }
      :nth-child(2) {
        color: #d3d2d2;
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
      }
      .education_card_images {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-top: 8px;
        img {
          display: block;
          margin-bottom: 0;
        }
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
</style>
