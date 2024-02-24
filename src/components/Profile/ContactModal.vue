<template>
  <!-- modals -->
  <div class="contact_modal" :class="modalContact ? 'modal_active' : ''">
    <div class="contact_modal_in">
      <div class="modal_top">
        Контакты
        <button class="close_modal" @click="(modalContact = false), $emit('modalContactFun')">
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
      <div class="messengers_urls">
        <div class="item" v-for="item of messengers" :key="item.id">
          {{ item.name }}
          <div class="right_block">
            {{ item.url }}
            <button class="copy_url" @click="copyURL(item.url)">
              <svg
                width="16.006836"
                height="16.006836"
                viewBox="0 0 16.0068 16.0068"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <desc>Created with Pixso.</desc>
                <defs />
                <rect
                  id="Rectangle"
                  x="4.667969"
                  y="4.668457"
                  rx="2.000000"
                  width="9.337223"
                  height="9.337223"
                  stroke="#A6A5A5"
                  stroke-opacity="1.000000"
                  stroke-width="1.500000"
                  stroke-linejoin="round"
                />
                <path
                  id="Path"
                  d="M4.66797 11.3384L3.33398 11.3384C2.59766 11.3384 2 10.7412 2 10.0044L2 3.33496C2 2.59814 2.59766 2.00098 3.33398 2.00098L10.0029 2.00098C10.7402 2.00098 11.3369 2.59814 11.3369 3.33496L11.3369 4.66895"
                  stroke="#A6A5A5"
                  stroke-opacity="1.000000"
                  stroke-width="1.500000"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="modal_bottom">
        *Instagram – продукт компании Meta, признанная экстремистской организацией в России
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modalContact: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      messengers: [
        {
          id: 1,
          name: "Telegram",
          url: "@andreyivanov",
        },
        {
          id: 2,
          name: "Instragram*",
          url: "@andrey",
        },
        {
          id: 3,
          name: "YouTube",
          url: "youtube.com/@targettttttt",
        },
        {
          id: 4,
          name: "TikTok",
          url: "tiktok.com/@andyandrey",
        },
        {
          id: 5,
          name: "VK",
          url: "vk.com/@andyandrey",
        },
        {
          id: 6,
          name: "Telefon",
          url: "+7 (311) 133-13-13",
        },
      ],
    };
  },
  methods: {
    async copyURL(url) {
      try {
        await navigator.clipboard.writeText(url);
        alert(url);
      } catch ($e) {
        alert("Cannot copy");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.contact_modal {
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
  .contact_modal_in {
    max-width: 452px;
    border-radius: 16px 16px 0px 0px;
    background: rgb(34, 34, 34);
    padding: 16px 16px 55px;
    transform: translateY(500px);
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
      margin-bottom: 8px;
    }
    .messengers_urls {
      margin-bottom: 8px;
      .item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 0;
        border-bottom: 2px solid rgb(43, 43, 43);
        color: rgb(211, 210, 210);
        font-size: 14px;
        font-weight: 500;
        line-height: 18px;
        letter-spacing: 0%;
        text-align: center;
        &:last-child {
          border-bottom: 0;
        }
        .right_block {
          display: flex;
          align-items: center;
          gap: 4px;
          color: rgb(255, 255, 255);
          line-height: 0;
        }
      }
    }
  }
}
.modal_active {
  opacity: 1;
  z-index: 100;
  .contact_modal_in {
    transform: translateY(0);
  }
}
</style>
