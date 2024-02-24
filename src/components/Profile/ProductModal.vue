<template>
  <div
    class="product_modal"
    :class="modalProduct ? 'modal_active' : ''"
    @click="!$event.target.closest('.product_modal_in') ? ((modalProduct = false), $emit('closeModal')) : ''"
  >
    <div class="product_modal_in">
      <div class="produt_img">
        <img :src="product.img" alt="" />
      </div>
      <div class="product_body">
        <div class="title_small">{{ product.title_small }}</div>
        <div class="title_big">{{ product.title_big }}</div>
        <p class="description">
          {{ product.description }}
        </p>
      </div>
    </div>
    <div class="product_user">
      <div class="left_block" v-if="user != ''">
        <img :src="user.user_img" alt="" />
        <div class="name">{{ user.user_name }}</div>
      </div>
      <button class="write_btn">Написать</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: "",
    },
    modalProduct: {
      type: Boolean,
      default: false,
    },
    product: {
      type: Object,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.product_modal {
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
  .product_modal_in {
    max-width: 452px;
    max-height: 90%;
    overflow: auto;
    border-radius: 16px 16px 0px 0px;
    background: rgb(34, 34, 34);
    padding: 16px 16px 55px;
    transform: translateY(500px);
    transition: 0.5s;
    .produt_img {
      margin-bottom: 12px;
      img {
        width: 100%;
      }
    }
    .product_body {
      padding-bottom: 20px;
      .title_small {
        color: rgb(166, 165, 165);
        font-size: 12px;
        font-weight: 600;
        line-height: 16px;
        letter-spacing: 0%;
        text-align: left;
        margin-bottom: 4px;
      }
      .title_big {
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
        max-height: 214px;
        overflow: auto;
      }
    }
  }
  .product_user {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid rgb(73, 73, 73);
    background: rgb(34, 34, 34);
    padding: 12px 16px 12px 16px;
    position: fixed;
    left: 0;
    bottom: 0;
    .left_block {
      display: flex;
      align-items: center;
      gap: 8px;
      color: rgb(211, 210, 210);
      font-family: Raleway;
      font-size: 14px;
      font-weight: 500;
      line-height: 18px;
      letter-spacing: 0%;
      text-align: left;
      img {
        height: 36px;
        border-radius: 100%;
      }
    }
    .write_btn {
      padding: 10px 16px 10px 16px;
      border-radius: 8px;
      background: rgb(207, 46, 46);
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
.modal_active {
  opacity: 1;
  z-index: 100;
  .product_modal_in {
    transform: translateY(0);
  }
}
</style>
