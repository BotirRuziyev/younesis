<template>
  <div class="hyde">
    <div class="main_container">
      <button class="close_btn">
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
            <clipPath id="clip2123_13173">
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
          <g clip-path="url(#clip2123_13173)">
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
              d="M18 18L30 30"
              stroke="#323232"
              stroke-opacity="1.000000"
              stroke-width="1.500000"
              stroke-linejoin="round"
              stroke-linecap="round"
            />
            <path
              id="Path"
              d="M30 18L18 30"
              stroke="#323232"
              stroke-opacity="1.000000"
              stroke-width="1.500000"
              stroke-linejoin="round"
              stroke-linecap="round"
            />
          </g>
        </svg>
      </button>
      <div class="hyde_card" v-for="item of hyde" :key="item.id">
        <div class="card_img">
          <img :src="item.img" alt="1" />
        </div>
        <div class="card_bottom">
          <p class="card_num">{{ item.num }}</p>
          <p class="description">{{ item.description }}</p>
        </div>
      </div>
      <div class="hyde_bottom">
        <img src="/img/profile/hyde/galchka.svg" alt="" />
        <h2 class="title">Готово</h2>
        <p class="description">Иконка на вашем рабочем столе</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hyde: [
        {
          id: 1,
          num: 1,
          description: "Нажми на иконку «Поделиться» в нижнем меню браузера",
          img: "/img/profile/hyde/1.png",
        },
        {
          id: 2,
          num: 2,
          description: "Выбери пункт На экран «Домой», а после — «Добавить»",
          img: "/img/profile/hyde/2.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.hyde {
  padding-top: 48px;
  .close_btn {
    margin-bottom: 24px;
  }
  .hyde_card {
    margin-bottom: 48px;
    padding: 0 27px;
    &:last-child {
      margin-bottom: 0;
      border-bottom: 1px solid rgb(43, 43, 43);
      padding-bottom: 48px;
    }
    .card_img {
      text-align: center;
      margin-bottom: 24px;
    }
    .card_num {
      width: 28px;
      height: 28px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 24px;
      background: rgb(207, 46, 46);
      color: rgb(255, 255, 255);
      font-size: 16px;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: 0%;
      text-align: center;
      margin-bottom: 12px;
    }
    .description {
      color: rgb(255, 255, 255);
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: 0%;
      text-align: center;
      span {
        font-weight: 600;
      }
    }
  }
  .hyde_bottom {
    text-align: center;
    .title {
      color: rgb(255, 255, 255);
      font-size: 20px;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: 0%;
      text-align: center;
      margin-bottom: 4px;
    }
    .description {
      color: rgb(211, 210, 210);
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: 0%;
      text-align: center;
    }
  }
}
</style>
