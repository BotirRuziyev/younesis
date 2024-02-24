<template>
  <div class="advice" v-for="item of products" :key="item.id">
    <div class="advice_img" v-if="item.img != ''">
      <img :src="item.img" alt="" />
    </div>
    <span class="title_small">{{ item.title_small }}</span>
    <span class="title">{{ item.title_big }}</span>
    <span class="description" v-if="!item.readActivated">{{ item.description.slice(0, 35) }}</span>
    <span class="description" v-if="item.readActivated">{{ item.description }}</span>
    <button class="show_more" v-if="!item.readActivated" @click="item.readActivated = true">
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
    <div class="advice_bottom">
      <button class="products_btn" @click="$emit('modalProduct', item)">
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
            d="M7.07788 21.8081C9.78589 21.8081 11.9819 19.6121 11.9819 16.9041C11.9819 14.196 9.78687 12 7.07788 12C4.3689 12 2.17383 14.196 2.17383 16.9041"
            stroke="#323232"
            stroke-opacity="1.000000"
            stroke-width="1.500000"
            stroke-linejoin="round"
          />
          <path
            id="Path"
            d="M7.08301 21.813C6.34497 21.813 5.646 21.6501 5.01807 21.3591L2 22L2.6311 18.9761C2.33789 18.3459 2.17407 17.644 2.17407 16.9041"
            stroke="#323232"
            stroke-opacity="1.000000"
            stroke-width="1.500000"
            stroke-linejoin="round"
            stroke-linecap="round"
          />
          <path
            id="Path"
            d="M6.55688 12.0281C6.19897 11.207 6 10.312 6 9.37305C6 5.35596 9.5979 2.13306 14 2.13306C18.4021 2.13306 22 5.35596 22 9.37305C22 11.7471 20.738 13.8372 18.801 15.155C18.802 15.9111 18.8 16.9302 18.8 18L15.6609 16.4541C15.124 16.5571 14.5691 16.613 14 16.613C13.293 16.613 12.6069 16.5291 11.9529 16.3721"
            stroke="#323232"
            stroke-opacity="1.000000"
            stroke-width="1.500000"
            stroke-linejoin="round"
            stroke-linecap="round"
          />
        </svg>
        <span>Написать</span>
      </button>
      <router-link to="#" v-if="item.readActivated">Подробнее</router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    products: {
      type: Object,
      default: "",
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.advice {
  margin-bottom: 4px;
  padding: 12px;
  border-radius: 12px;
  background: #2f2f2f;
  .advice_img {
    margin-bottom: 12px;
    img {
      width: 100%;
    }
  }
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
</style>
