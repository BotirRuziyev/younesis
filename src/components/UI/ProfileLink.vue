<template>
  <router-link :to="to" class="link">
    <div class="link_left">
      <img :src="img" alt="" v-if="img != ''" />
      {{ path_name }}
    </div>
    <svg
      width="21.000000"
      height="21.000000"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <desc>Created with Pixso.</desc>
      <defs />
      <path
        id="Path"
        d="M16.334 10.5L4.66699 10.5"
        stroke="#FFFFFF"
        stroke-opacity="1.000000"
        stroke-width="1.500000"
        stroke-linejoin="round"
        stroke-linecap="round"
      />
      <path
        id="Path"
        d="M12.167 14.6665L16.334 10.5"
        stroke="#FFFFFF"
        stroke-opacity="1.000000"
        stroke-width="1.500000"
        stroke-linejoin="round"
        stroke-linecap="round"
      />
      <path
        id="Path"
        d="M12.167 6.3335L16.334 10.5"
        stroke="#FFFFFF"
        stroke-opacity="1.000000"
        stroke-width="1.500000"
        stroke-linejoin="round"
        stroke-linecap="round"
      />
      <path
        id="Path"
        d="M20.5 0.5L20.5 20.5L0.5 20.5L0.5 0.5L20.5 0.5Z"
        stroke="#FFFFFF"
        stroke-opacity="1.000000"
        stroke-width="1.000000"
      />
    </svg>
  </router-link>
</template>
<script>
export default {
  props: {
    img: {
      type: String,
      default: "",
    },
    to: {
      type: String,
      default: "",
    },
    path_name: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss" scoped>
.link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  background: rgb(47, 47, 47);
  padding: 14px;
  margin-bottom: 4px;
  &:last-child {
    margin-bottom: 0;
  }
  .link_left {
    display: flex;
    align-items: center;
    gap: 8px;
  }
}
</style>
