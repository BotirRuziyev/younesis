<template>
  <modal-dialog class="course_modal" v-model:show="show_modal_dialog">
    <div class="diagnostics">
      <!-- for media -->
      <a class="diagnostics_head_link" href="#">О курсе</a>
      <div class="diagnostics_head">
        <img src="@/assets/images/diagnostics_head.png" alt="" />
      </div>
      <div class="main_title">Продающие диагностики</div>
      <div class="diagnostics_list">
        <div
          v-for="(item, i) in diagnostics_list"
          :key="i"
          @click="
            () =>
              i <= current_diagnostics || checkDone(item)
                ? $router.push({ name: 'Lesson', params: { id: item.id, lesson: 'Урок ' + item.id } })
                : ''
          "
          class="item"
          :class="{ active: i === current_diagnostics, done: checkDone(item) }"
        >
          <!-- continues -->
          <div v-if="i <= current_diagnostics && !checkDone(item)" class="degree">
            <div class="name">{{ item.done_title }}</div>
            <div class="value">{{ item.done }}</div>
          </div>
          <div v-if="i <= current_diagnostics && !checkDone(item)" class="degree_line">
            <div class="line" :style="{ width: item.done }"></div>
          </div>

          <!-- not done -->
          <div v-if="checkDone(item) || i > current_diagnostics" class="item_text">
            <div class="title">Урок {{ item.id }}: {{ item.title }}</div>
            <div class="icon">
              <svg
                class="chevron_right"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10 16L14 12L10 8"
                  stroke="#121111"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                class="done_icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 21C7.029 21 3 16.971 3 12C3 7.029 7.029 3 12 3C16.971 3 21 7.029 21 12C21 16.971 16.971 21 12 21Z"
                  fill="#CF2E2E"
                  stroke="#CF2E2E"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 10L11 15L8 12"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="course_completed">
          <div class="course_completed_in">
            <div class="title">Поздравляем!</div>
            <div class="description">Ты успешно прошел курс и приблизился к своей цели</div>
            <img src="@/assets/images/courses/course_completed.svg" alt="" />
          </div>
        </div>
        <button class="course_evaluation">Оценить курс</button>
      </div>
    </div>
  </modal-dialog>
</template>

<script>
export default {
  name: "courseModal",
  props: {
    show: Boolean,
  },
  emits: ["update:show"],
  data() {
    return {
      show_modal_dialog: this.show,
      diagnostics_list: [
        { id: 1, title: "Название урока", done: "100%", done_title: "10 из 10 уроков пройдено" },
        { id: 2, title: "Название урока", done: "100%", done_title: "10 из 10 уроков пройдено" },
        { id: 3, title: "Название урока", done: "100%", done_title: "10 из 10 уроков пройдено" },
        { id: 4, title: "Название урока", done: "100%", done_title: "10 из 10 уроков пройдено" },
        { id: 5, title: "Название урока", done: "100%", done_title: "10 из 10 уроков пройдено" },
        { id: 6, title: "Название урока", done: "100%", done_title: "10 из 10 уроков пройдено" },
        { id: 7, title: "Название урока", done: "100%", done_title: "10 из 10 уроков пройдено" },
        { id: 8, title: "Название урока", done: "80%", done_title: "8 из 10 уроков пройдено" },
        { id: 9, title: "Название урока" },
        { id: 10, title: "Название урока" },
      ],
    };
  },
  watch: {
    show_modal_dialog() {
      this.$emit("update:show", this.show_modal_dialog);
    },
  },
  computed: {
    current_diagnostics() {
      let idx = 0;
      for (let i = 0; i < this.diagnostics_list.length; i++) {
        if (!this.diagnostics_list[i].done) {
          idx = i - 1;
          break;
        }
      }

      return idx;
    },
  },
  methods: {
    checkDone(data) {
      if (data.done && data.done === "100%") {
        return true;
      }
      return false;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/_variables.scss";
.modal_wrapper {
  z-index: -1;
  visibility: hidden;
}
.diagnostics {
  width: 515px;
  .course_evaluation {
    width: 100%;
    margin-top: 71px;
    margin-bottom: 16px;
    border-radius: 12px;
    background: rgb(207, 46, 46);
    padding: 10px 24px 10px 24px;
    color: rgb(255, 255, 255);
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0%;
    text-align: center;
    order: 3;
  }
  .course_completed {
    padding-bottom: 23px;
    border-bottom: 1px solid rgb(43, 43, 43);
    margin-bottom: 24px;
    margin-top: 12px;
    order: 1;
    .course_completed_in {
      border-radius: 16px;
      padding: 16px 41px 16px 16px;
      background: linear-gradient(90deg, rgb(254, 249, 231), rgb(255, 236, 188) 100%);
      position: relative;
      overflow: hidden;
    }
    .title {
      color: rgb(26, 25, 25);
      font-size: 16px;
      font-weight: 700;
      line-height: 20px;
      letter-spacing: 0%;
      text-align: left;
      margin-bottom: 4px;
    }
    .description {
      color: rgb(131, 129, 129);
      font-size: 12px;
      font-weight: 500;
      line-height: 16px;
      letter-spacing: 0%;
      text-align: left;
    }
    img {
      position: absolute;
      bottom: -18px;
      right: -31px;
    }
  }

  .diagnostics_head_link {
    display: none;
  }

  .diagnostics_head {
    border-radius: 8px;
    background: rgb(34, 34, 34);
    height: 200px;
    margin-bottom: 20px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .main_title {
    margin-bottom: 20px;
  }

  .diagnostics_list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    height: 490px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: none;
    }

    .item {
      border-radius: 12px;
      opacity: 0.4;
      background: $color-7;
      padding: 16px;
      cursor: default;
      order: 2;

      .item_text {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .title {
          color: $color-2;
          font-size: 14px;
          font-weight: 500;
          line-height: 18px;
        }
      }

      .icon {
        .done_icon {
          display: none;
        }
      }
    }

    .item.active {
      border-radius: 16px;
      border: 1px solid $color-4;
      opacity: 1;
      cursor: pointer;
      background: transparent;
      order: 1;

      .degree {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 12px;

        .name {
          font-size: 14px;
          font-weight: 500;
          line-height: 18px;
        }

        .value {
          color: $color-5;
          font-size: 14px;
          font-weight: 600;
          line-height: 18px;
        }
      }

      .degree_line {
        border-radius: 4px;
        background: $color-10;
        height: 8px;
        width: 100%;

        .line {
          height: 8px;
          border-radius: 4px;
          background: $color-5;
        }
      }
    }

    .item.done {
      order: 3;
      background: $color-7;
      border: 0;
      opacity: 1;

      .icon {
        .done_icon {
          display: block;
        }

        .chevron_right {
          display: none;
        }
      }
    }
  }
}

.dark-theme {
  .diagnostics {
    .diagnostics_list {
      .item {
        background: $color-3;

        .icon {
          .chevron_right {
            path {
              stroke: $color-1;
            }
          }
        }

        .item_text {
          .title {
            color: $color-11;
          }
        }
      }

      .item.active {
        border: 1px solid $color-13;

        .degree {
          .name,
          .value {
            color: $color-1;
          }
        }

        .degree_line {
          background: $color-18;
        }
      }
    }
  }
}

@media only screen and (max-width: 992px) {
  .course_modal {
    z-index: -1 !important;
    opacity: 0;
    background: rgb(23, 23, 23);

    .modal_content_wrapper {
      width: 100%;
      height: 100%;
      position: relative;
    }

    .modal_content {
      border-radius: 0px !important;
      padding: 0 !important;
      width: 100%;
      height: 100%;
      background: rgb(23, 23, 23) !important;

      .diagnostics {
        width: 100%;

        .diagnostics_head_link {
          display: block;
          position: absolute;
          right: 16px;
          margin-top: 61px;
          color: $color-1;
          font-size: 16px;
          font-weight: 500;
          line-height: 22px;
          text-decoration: none;
        }

        .diagnostics_head {
          border-radius: 0 0 16px 16px;
          height: auto;
          margin-bottom: 24px;
          text-align: center;
          padding: 56px 0 8px;

          img {
            width: 216px;
            height: 216px;
            object-fit: contain;
          }
        }

        .main_title {
          margin-bottom: 16px;
          padding: 0px 16px;
        }

        .diagnostics_list {
          height: calc(100vh - 428px);
          padding-left: 16px;
          padding-right: 16px;

          .item {
            opacity: 0.5;
          }

          .item.done,
          .item.active {
            opacity: 1;
          }
        }
      }
    }

    .modal_close {
      position: absolute;
      width: 48px;
      height: 48px;
      border-radius: 10px;
      background: rgba(246, 246, 246, 0.32);
      top: 48px;
      left: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
