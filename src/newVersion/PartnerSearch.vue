<template>
  <div class="partner_search">
    <div class="head_new">
      <div class="main_container">
        <router-link to="" @click="$router.go(-1)" class="link">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M2 12H22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9 5L2 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9 19L2 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </router-link>
        <div class="partner_search_top" :class="formControl ? 'partner_search_top_active' : ''">
          <input
            v-model="search"
            type="text"
            id="partner_search"
            placeholder="Найти продюсера"
            @focus="formControl = true"
          />
          <div class="cleaning_btn" v-if="search.length > 0" @click="search = ''">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 21V21C7.029 21 3 16.971 3 12V12C3 7.029 7.029 3 12 3V3C16.971 3 21 7.029 21 12V12C21 16.971 16.971 21 12 21Z"
                stroke="#4D4D4D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.8299 9.16992L9.16992 14.8299"
                stroke="#4D4D4D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.8299 14.8299L9.16992 9.16992"
                stroke="#4D4D4D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <button class="find_btn" @click="findFun">Найти</button>
        </div>
      </div>
    </div>
    <div class="partner_search_in" v-if="partnerSearch">
      <div class="main_container">
        <div class="partner_found">Найдено <span>14</span> человек</div>
        <div class="partner_search_in_top">
          <div class="partner_sorting">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 8L7 5L4 8"
                stroke="#A6A5A5"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path d="M7 19V5" stroke="#A6A5A5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M14 16L17 19L20 16"
                stroke="#A6A5A5"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path d="M17 5V19" stroke="#A6A5A5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            По популярности
          </div>
          <router-link to="Filter" class="filter_link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 7H21" stroke="#A6A5A5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M3 7H14" stroke="#A6A5A5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M11 17H21" stroke="#A6A5A5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M3 17H6.5" stroke="#A6A5A5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M17.4142 5.58579C18.1953 6.36684 18.1953 7.63317 17.4142 8.41422C16.6332 9.19527 15.3668 9.19527 14.5858 8.41422C13.8047 7.63317 13.8047 6.36684 14.5858 5.58579C15.3668 4.80474 16.6332 4.80474 17.4142 5.58579"
                stroke="#A6A5A5"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.4142 15.5858C11.1953 16.3668 11.1953 17.6332 10.4142 18.4142C9.63317 19.1953 8.36684 19.1953 7.58579 18.4142C6.80474 17.6332 6.80474 16.3668 7.58579 15.5858C8.36684 14.8047 9.63317 14.8047 10.4142 15.5858"
                stroke="#A6A5A5"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Фильтры
          </router-link>
        </div>
        <div class="partner_search_cards">
          <div class="card_item" v-for="item in partner" :key="item.id">
            <div class="card_head">
              <img :src="item.img" alt="" />
              <div>
                <div class="name">{{ item.name }}</div>
                <div class="about">{{ item.about }}</div>
              </div>
            </div>
            <div class="specialty">
              <div class="specialty_item" v-for="specialty of item.specialty" :key="specialty">
                {{ specialty }}
              </div>
            </div>
            <div class="card_foot">
              <div class="card_foot_left">
                <div class="location">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
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
              </div>
              <div class="right_block">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.15408 13.8884C4.81603 14.0649 4.40707 14.0338 4.09956 13.8083C3.79204 13.5828 3.63947 13.2021 3.70614 12.8267L4.2457 9.73404L1.97409 7.55714C1.69642 7.29234 1.59466 6.89207 1.71215 6.52681C1.82964 6.16156 2.14568 5.89568 2.52565 5.84242L5.67963 5.39157L7.10356 2.55105C7.27239 2.21039 7.61973 1.99487 7.99993 1.99487C8.38013 1.99487 8.72747 2.21039 8.8963 2.55105L10.3202 5.39157L13.4742 5.84242C13.8542 5.89568 14.1702 6.16156 14.2877 6.52681C14.4052 6.89207 14.3034 7.29234 14.0258 7.55714L11.7542 9.73404L12.2937 12.8273C12.3604 13.2028 12.2078 13.5835 11.9003 13.809C11.5928 14.0345 11.1838 14.0656 10.8458 13.8891L7.99993 12.4185L5.15408 13.8884Z"
                    stroke="#D3D2D2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="not_found" v-if="found">
      <div class="main_container">По запросу «йцукеннгг» ничего не найдено. Измените запрос и повторите попытку</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Partner Search",
  data() {
    return {
      search: "",
      partner: [
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
      partnerSearch: false,
      found: false,
      formControl: true,
    };
  },
  methods: {
    findFun() {
      if (this.search.length > 0) {
        this.partnerSearch = true;
        this.found = false;
      } else {
        this.partnerSearch = false;
        this.found = true;
      }
    },
  },
  mounted() {
    document.querySelector("html").onclick = (e) => {
      if (!e.target.closest("#partner_search") && !e.target.closest(".cleaning_btn")) {
        this.formControl = false;
      }
    };
    $("#partner_search").focus();
  },
};
</script>

<style lang="scss">
.partner_search {
  height: 100%;

  .main_container {
    gap: 12px;
    height: auto;
    justify-content: space-between;
  }

  .head_new {
    margin-bottom: 24px;

    .link {
      position: static;
      transform: translate(0);
    }

    .partner_search_top {
      width: 100%;
      display: flex;
      align-items: center;
      border-radius: 12px;
      background: rgb(34, 34, 34);
      padding: 6px;
      gap: 6px;
      border: 1px solid transparent;

      input {
        width: 100%;
        padding-left: 9px;
        height: 100%;
        color: rgb(255, 255, 255);
        font-family: Raleway;
        font-size: 14px;
        font-weight: 500;
        line-height: 18px;
        letter-spacing: 0%;
        text-align: left;
      }

      .cleaning_btn {
        height: auto;
        line-height: 0;
        cursor: pointer;
      }

      .find_btn {
        padding: 10px 24px 10px 24px;
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

    .partner_search_top_active {
      border: 1px solid rgb(207, 46, 46);
    }
  }

  .partner_search_in {
    .partner_found {
      color: rgb(255, 255, 255);
      font-family: Raleway;
      font-size: 14px;
      font-weight: 500;
      line-height: 18px;
      letter-spacing: 0%;
      text-align: left;
      margin-bottom: 24px;
    }

    .partner_search_in_top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      line-height: auto;
      margin-bottom: 16px;

      .partner_sorting {
        display: flex;
        align-items: center;
        gap: 4px;
        color: rgb(166, 165, 165);
        font-family: Raleway;
        font-size: 12px;
        font-weight: 500;
        line-height: 16px;
        letter-spacing: 0%;
        text-align: left;
        cursor: pointer;
      }

      .filter_link {
        display: flex;
        align-items: center;
        gap: 4px;
        color: rgb(166, 165, 165);
        font-family: Raleway;
        font-size: 12px;
        font-weight: 500;
        line-height: 16px;
        letter-spacing: 0%;
        text-align: left;
      }
    }

    .partner_search_cards {
      display: flex;
      flex-direction: column;
      gap: 4px;

      .card_item {
        display: flex;
        flex-direction: column;
        padding: 16px;
        box-sizing: border-box;
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 20px;
        background: rgb(34, 34, 34);
        gap: 12px;
        cursor: pointer;

        .card_head {
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

        .card_foot {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: rgb(166, 165, 165);

          .card_foot_left {
            display: flex;
            align-items: center;
            gap: 16px;
          }

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
    }
  }

  .not_found {
    color: rgb(255, 255, 255);
    font-family: Raleway;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0%;
    text-align: center;
    height: 100%;

    .main_container {
      max-width: 295px;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
