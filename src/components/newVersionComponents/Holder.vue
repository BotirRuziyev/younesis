<template>
  <div class="holder">
    <div class="holder_in">
      <div
        class="holder_item"
        v-for="item of holder"
        :key="item.id"
        @click="holderModalFun(item.id)"
      >
        <div class="holder_head">
          <img :src="item.img" alt="" />
          <div>
            <div class="name">{{ item.name }}</div>
            <div class="about">{{ item.about }}</div>
          </div>
        </div>
        <div class="specialty">
          <div
            class="specialty_item"
            v-for="specialty of item.specialty"
            :key="1"
          >
            {{ specialty }}
          </div>
        </div>
        <div class="holder_foot">
          <div class="location">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 8.66675V8.66675C6.89533 8.66675 6 7.77142 6 6.66675V6.66675C6 5.56208 6.89533 4.66675 8 4.66675V4.66675C9.10467 4.66675 10 5.56208 10 6.66675V6.66675C10 7.77142 9.10467 8.66675 8 8.66675Z"
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
            {{ item.location }}
          </div>
          <div class="left_block">
            <div class="item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.07868 8.31137C1.97402 8.11737 1.97402 7.88204 2.07868 7.68804C3.34002 5.35537 5.67002 3.33337 8.00002 3.33337C10.33 3.33337 12.66 5.35537 13.9213 7.68871C14.026 7.88271 14.026 8.11804 13.9213 8.31204C12.66 10.6447 10.33 12.6667 8.00002 12.6667C5.67002 12.6667 3.34002 10.6447 2.07868 8.31137Z"
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
              <span>{{ item.saw }}</span>
            </div>
            <div class="item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.15408 13.8884C4.81603 14.0649 4.40707 14.0338 4.09956 13.8083C3.79204 13.5828 3.63947 13.2021 3.70614 12.8267L4.2457 9.73404L1.97409 7.55714C1.69642 7.29234 1.59466 6.89207 1.71215 6.52681C1.82964 6.16156 2.14568 5.89568 2.52565 5.84242L5.67963 5.39157L7.10356 2.55105C7.27239 2.21039 7.61973 1.99487 7.99993 1.99487C8.38013 1.99487 8.72747 2.21039 8.8963 2.55105L10.3202 5.39157L13.4742 5.84242C13.8542 5.89568 14.1702 6.16156 14.2877 6.52681C14.4052 6.89207 14.3034 7.29234 14.0258 7.55714L11.7542 9.73404L12.2937 12.8273C12.3604 13.2028 12.2078 13.5835 11.9003 13.809C11.5928 14.0345 11.1838 14.0656 10.8458 13.8891L7.99993 12.4185L5.15408 13.8884Z"
                  stroke="#A6A5A5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>{{ item.sav }}</span>
            </div>
          </div>
          <div class="right_block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.15408 13.8884C4.81603 14.0649 4.40707 14.0338 4.09956 13.8083C3.79204 13.5828 3.63947 13.2021 3.70614 12.8267L4.2457 9.73404L1.97409 7.55714C1.69642 7.29234 1.59466 6.89207 1.71215 6.52681C1.82964 6.16156 2.14568 5.89568 2.52565 5.84242L5.67963 5.39157L7.10356 2.55105C7.27239 2.21039 7.61973 1.99487 7.99993 1.99487C8.38013 1.99487 8.72747 2.21039 8.8963 2.55105L10.3202 5.39157L13.4742 5.84242C13.8542 5.89568 14.1702 6.16156 14.2877 6.52681C14.4052 6.89207 14.3034 7.29234 14.0258 7.55714L11.7542 9.73404L12.2937 12.8273C12.3604 13.2028 12.2078 13.5835 11.9003 13.809C11.5928 14.0345 11.1838 14.0656 10.8458 13.8891L7.99993 12.4185L5.15408 13.8884Z"
                fill="#2FC12C"
                stroke="#2FC12C"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div>{{ item.saved }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="holder_modal" :class="modal ? 'holder_modal_active' : ''">
      <div class="holder_modal_in">
        <div class="holder_item">
          <div class="holder_head">
            <img :src="holderModal.img" alt="" />
            <div>
              <div class="name">{{ holderModal.name }}</div>
              <div class="about">{{ holderModal.about }}</div>
            </div>
          </div>
          <div class="specialty">
            <div
              class="specialty_item"
              v-for="specialty of holderModal.specialty"
              :key="1"
            >
              {{ specialty }}
            </div>
          </div>
          <div class="holder_foot">
            <div class="location">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 8.66675V8.66675C6.89533 8.66675 6 7.77142 6 6.66675V6.66675C6 5.56208 6.89533 4.66675 8 4.66675V4.66675C9.10467 4.66675 10 5.56208 10 6.66675V6.66675C10 7.77142 9.10467 8.66675 8 8.66675Z"
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
              {{ holderModal.location }}
            </div>
            <div class="left_block">
              <div class="item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.07868 8.31137C1.97402 8.11737 1.97402 7.88204 2.07868 7.68804C3.34002 5.35537 5.67002 3.33337 8.00002 3.33337C10.33 3.33337 12.66 5.35537 13.9213 7.68871C14.026 7.88271 14.026 8.11804 13.9213 8.31204C12.66 10.6447 10.33 12.6667 8.00002 12.6667C5.67002 12.6667 3.34002 10.6447 2.07868 8.31137Z"
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
                <span>{{ holderModal.saw }}</span>
              </div>
              <div class="item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.15408 13.8884C4.81603 14.0649 4.40707 14.0338 4.09956 13.8083C3.79204 13.5828 3.63947 13.2021 3.70614 12.8267L4.2457 9.73404L1.97409 7.55714C1.69642 7.29234 1.59466 6.89207 1.71215 6.52681C1.82964 6.16156 2.14568 5.89568 2.52565 5.84242L5.67963 5.39157L7.10356 2.55105C7.27239 2.21039 7.61973 1.99487 7.99993 1.99487C8.38013 1.99487 8.72747 2.21039 8.8963 2.55105L10.3202 5.39157L13.4742 5.84242C13.8542 5.89568 14.1702 6.16156 14.2877 6.52681C14.4052 6.89207 14.3034 7.29234 14.0258 7.55714L11.7542 9.73404L12.2937 12.8273C12.3604 13.2028 12.2078 13.5835 11.9003 13.809C11.5928 14.0345 11.1838 14.0656 10.8458 13.8891L7.99993 12.4185L5.15408 13.8884Z"
                    stroke="#A6A5A5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>{{ holderModal.sav }}</span>
              </div>
            </div>
            <div class="right_block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.15408 13.8884C4.81603 14.0649 4.40707 14.0338 4.09956 13.8083C3.79204 13.5828 3.63947 13.2021 3.70614 12.8267L4.2457 9.73404L1.97409 7.55714C1.69642 7.29234 1.59466 6.89207 1.71215 6.52681C1.82964 6.16156 2.14568 5.89568 2.52565 5.84242L5.67963 5.39157L7.10356 2.55105C7.27239 2.21039 7.61973 1.99487 7.99993 1.99487C8.38013 1.99487 8.72747 2.21039 8.8963 2.55105L10.3202 5.39157L13.4742 5.84242C13.8542 5.89568 14.1702 6.16156 14.2877 6.52681C14.4052 6.89207 14.3034 7.29234 14.0258 7.55714L11.7542 9.73404L12.2937 12.8273C12.3604 13.2028 12.2078 13.5835 11.9003 13.809C11.5928 14.0345 11.1838 14.0656 10.8458 13.8891L7.99993 12.4185L5.15408 13.8884Z"
                  fill="#2FC12C"
                  stroke="#2FC12C"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div>{{ holderModal.saved }}</div>
            </div>
          </div>
        </div>
        <Evalution />
      </div>
    </div>
  </div>
</template>

<script>
import Evalution from "@/components/newVersionComponents/Evalution.vue";
export default {
  name: "Holder",
  components: {
    Evalution,
  },
  data() {
    return {
      modal: false,
      holder: [
        {
          id: 1,
          img: "/img/User/user_1.png",
          name: "Артем Николаев",
          about: "Про технологичный бизнес",
          specialty: ["Эксперт", "Дизайн", "Маркетинг"],
          location: "Санкт-Петербург",
          saw: "1.2K",
          sav: 4.5,
          saved: 5,
        },
        {
          id: 2,
          img: "/img/User/user_2.png",
          name: "Максим Поднебесный",
          about: "Авторская методика продвиженийв Telegram и запуск ботов",
          specialty: ["Продюсер", "Реклама", "Здоровье"],
          location: "Москва",
          saw: 845,
          sav: 5,
          saved: 4,
        },
        {
          id: 3,
          img: "/img/User/user_3.png",
          name: "Екатерина Новикова",
          about: "Провожу онлайн-интенсивыпо продажам в логистике",
          specialty: ["Эксперт", "Продюсер", "Здоровье"],
          location: "Москва",
          saw: 120,
          sav: 3.5,
          saved: 3,
        },
        {
          id: 4,
          img: "/img/User/user_4.png",
          name: "Сергей Широков",
          about: "Провожу онлайн-интенсивыпо продажам в логистике",
          specialty: ["Эксперт", "Продюсер", "Здоровье"],
          location: "Москва",
          saw: 120,
          sav: 2.5,
          saved: 2,
        },
      ],
      holderModal: {
        id: 1,
        img: "/img/User/user_1.png",
        name: "Артем Николаев",
        about: "Про технологичный бизнес",
        specialty: ["Эксперт", "Дизайн", "Маркетинг"],
        location: "Санкт-Петербург",
        saw: "1.2K",
        sav: 4.5,
        saved: 5,
      },
    };
  },
  methods: {
    holderModalFun(_id) {
      this.holderModal = this.holder.find((item) => item.id == _id);
      this.modal = true;
    },
  },
  mounted() {
    document.querySelector("html").onclick = (e) => {
      if (
        !e.target.closest(".holder_modal_in") &&
        !e.target.closest(".holder_item")
      ) {
        this.modal = false;
      }
    };
  },
};
</script>

<style lang="scss">
.holder {
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    opacity: 0.16;
    filter: blur(50px);
  }

  .holder_in {
    display: flex;
    flex-direction: column;
    gap: 4px;
    position: relative;
    z-index: 2;
  }
  .holder_item {
    display: flex;
    flex-direction: column;
    padding: 16px;
    box-sizing: border-box;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    background: rgb(34, 34, 34);
    gap: 12px;
    cursor: pointer;
    .holder_head {
      display: flex;
      gap: 12px;
      .name {
        color: rgb(255, 255, 255);
        font-family: Raleway;
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: 0%;
        text-align: left;
        margin-bottom: 6px;
      }
      .about {
        color: rgb(166, 165, 165);
        font-family: Raleway;
        font-size: 12px;
        font-weight: 500;
        line-height: 14px;
        letter-spacing: 0%;
        text-align: left;
      }
    }
    .specialty {
      display: flex;
      align-items: center;
      gap: 4px;
      .specialty_item {
        padding: 6px 12px 6px 12px;
        border-radius: 22px;
        background: rgb(75, 75, 75);
        color: rgb(255, 255, 255);
        font-family: Raleway;
        font-size: 12px;
        font-weight: 500;
        line-height: 14px;
        letter-spacing: 0%;
        text-align: center;
      }
    }
    .holder_foot {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: rgb(166, 165, 165);
      .location {
        display: flex;
        align-items: center;
        gap: 7px;
        font-family: Raleway;
        font-size: 12px;
        font-weight: 500;
        line-height: 14px;
        letter-spacing: 0%;
        text-align: left;
      }
      .left_block {
        display: flex;
        align-items: center;
        gap: 17px;
        .item {
          display: flex;
          align-items: center;
          gap: 7px;
          font-family: Raleway;
          font-size: 12px;
          font-weight: 500;
          line-height: 14px;
          letter-spacing: 0%;
          text-align: left;
        }
      }
      .right_block {
        display: flex;
        align-items: center;
        gap: 7px;
        div {
          font-family: Raleway, sans-serif;
          font-size: 12px;
          font-weight: 500;
          line-height: 0;
          text-align: left;
        }
      }
    }
  }
  .holder_modal {
    max-width: 420px;
    width: 100%;
    height: 100vh;
    backdrop-filter: blur(13.5px);
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: end;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
    z-index: -1;
    opacity: 0;
    transition: 0.5s;
    .holder_modal_in {
      width: 100%;
      padding: 16px 16px 44px;
      border-radius: 24px 24px 0px 0px;
      background: rgb(34, 34, 34);
      transform: translateY(400px);
      transition: 0.5s;
      .holder_item {
        width: 100%;
        margin-bottom: 24px;
        cursor: alias;
      }
    }
  }
  .holder_modal_active {
    opacity: 1;
    z-index: 10;
    .holder_modal_in {
      transform: translateY(0);
    }
  }
}
</style>
