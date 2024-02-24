<template>
  <div class="platform">
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
            <clipPath id="clip2343_22484">
              <rect
                id="Button"
                rx="6.000000"
                width="47.000000"
                height="47.000000"
                transform="translate(0.500000 0.500000)"
                fill="white"
                fill-opacity="0"
              />
            </clipPath>
          </defs>
          <rect
            id="Button"
            rx="6.000000"
            width="47.000000"
            height="47.000000"
            transform="translate(0.500000 0.500000)"
            fill="#2F2F2F"
            fill-opacity="1.000000"
          />
          <g clip-path="url(#clip2343_22484)">
            <rect
              id="icon left"
              width="24.000000"
              height="24.000000"
              transform="translate(12.000000 12.000000)"
              fill="#FFFFFF"
              fill-opacity="0"
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
          <rect
            id="Button"
            rx="6.000000"
            width="47.000000"
            height="47.000000"
            transform="translate(0.500000 0.500000)"
            stroke="#494949"
            stroke-opacity="1.000000"
            stroke-width="1.000000"
          />
        </svg>
      </button>
      <div class="platform_card" v-for="item of platform" :key="item.id">
        <h2 class="title">{{ item.title }}</h2>
        <p class="description">
          {{ item.description }}
        </p>
        <div class="platform_card_gallery">
          <div class="gallery_bg"></div>
          <div class="gallery_img">
            <img :src="item.img" alt="1" />
          </div>
        </div>
        <div class="card_buttons">
          <button class="not_approve_btn">Не одобряю</button>
          <button class="approve_btn">Одобряю</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      platform: [
        {
          id: 1,
          title: "Новости и сторисы",
          description: "Позволят следить за всеми актуальными событиями и кейсами в сфере инфобизнесе в одном месте",
          img: "/img/profile/platform/1.svg",
        },
        {
          id: 2,
          title: "Календарь событий",
          description: "С событиями Younesis и инфобизнеса со всеми подробностями",
          img: "/img/profile/platform/2.svg",
        },
        {
          id: 3,
          title: "Новые инструменты",
          description: "Икигай, автомедитации и ещё 3 грядут в ближайшем обновлении",
          img: "/img/profile/platform/3.svg",
        },
        {
          id: 4,
          title: "Монеты ",
          description: "Будет возможность зарабатывать, копить, и тратить на покупку курсов и другие элементы",
          img: "/img/profile/platform/4.svg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.platform {
  padding-top: 48px;
  .close_btn {
    margin-bottom: 24px;
  }
  .platform_card {
    margin-bottom: 40px;
    .title {
      color: rgb(255, 255, 255);
      font-size: 20px;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: 0%;
      text-align: left;
      margin-bottom: 8px;
    }
    .description {
      color: rgb(211, 210, 210);
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: 0%;
      text-align: left;
      margin-bottom: 16px;
    }
    .platform_card_gallery {
      min-height: 184px;
      border-radius: 16px;
      background: rgb(47, 47, 47);
      position: relative;
      margin-bottom: 16px;
      .gallery_bg {
        max-width: 150px;
        width: 100%;
        height: calc(100% - 30px);
        border-radius: 14px 14px 0 0;
        background: rgb(33, 33, 33);
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1;
      }
      .gallery_img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
      }
    }
    .card_buttons {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 4px;
      button {
        border: 1px solid rgb(73, 73, 73);
        border-radius: 8px;
        background: rgb(47, 47, 47);
        padding: 10px;
        color: rgb(255, 255, 255);
        font-size: 14px;
        font-weight: 600;
        line-height: 18px;
        letter-spacing: 0%;
        text-align: center;
      }
    }
    &:nth-child(2) {
      .card_buttons {
        .approve_btn {
          background: rgb(47, 193, 44);
          border-color: rgb(47, 193, 44);
        }
      }
    }
    &:nth-child(3) {
      .card_buttons {
        .not_approve_btn {
          background: rgb(255, 48, 58);
          border-color: rgb(255, 48, 58);
        }
      }
    }
  }
}
</style>
