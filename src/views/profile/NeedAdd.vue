<template>
  <div class="edit_needs_wrapper">
    <head-new page_title="Мне нужен"></head-new>
    <div class="main_container">
      <div class="need_head">
        <svg
          width="20.000000"
          height="20.000000"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <desc>Created with Pixso.</desc>
          <defs />
          <path
            id="Path"
            d="M13.334 17.5L6.66602 17.5C4.36523 17.5 2.5 15.6342 2.5 13.3333L2.5 6.66669C2.5 4.36584 4.36523 2.5 6.66602 2.5L13.334 2.5C15.6348 2.5 17.5 4.36584 17.5 6.66669L17.5 13.3333C17.5 15.6342 15.6348 17.5 13.334 17.5Z"
            fill="#6F9FFC"
            fill-opacity="1.000000"
            fill-rule="evenodd"
          />
          <path
            id="Path"
            d="M6.66602 17.5C4.36523 17.5 2.5 15.6342 2.5 13.3333L2.5 6.66669C2.5 4.36584 4.36523 2.5 6.66602 2.5L13.334 2.5C15.6348 2.5 17.5 4.36584 17.5 6.66669L17.5 13.3333C17.5 15.6342 15.6348 17.5 13.334 17.5L6.66602 17.5Z"
            stroke="#6F9FFC"
            stroke-opacity="1.000000"
            stroke-width="1.500000"
            stroke-linejoin="round"
          />
          <path
            id="Path"
            d="M11.668 11.6667C10.5098 12.8234 8.63477 12.8234 7.47852 11.6667C6.32227 10.51 6.32227 8.63501 7.47852 7.47833C8.63477 6.32166 10.5098 6.32166 11.668 7.47833C12.8242 8.63501 12.8242 10.51 11.668 11.6667Z"
            stroke="#222222"
            stroke-opacity="1.000000"
            stroke-width="1.500000"
            stroke-linejoin="round"
          />
          <path
            id="Path"
            d="M11.666 11.6667L13.332 13.3334L11.666 11.6667Z"
            stroke="#222222"
            stroke-opacity="1.000000"
            stroke-width="1.500000"
            stroke-linejoin="round"
          />
        </svg>
        Введите, каких специалистов вы ищете в команду на данный момент
      </div>
      <div class="need_container">
        <div class="title">Ищу</div>
        <div class="need" v-for="(item, index) in needs" :key="index">
          <form-input v-model:value="needs[index].role" placeholder="Вести инстаграм" @update:value="valueFun" />
          <svg
            @click="needs[index].role = ''"
            v-if="item.role.length"
            width="25.000000"
            height="25.000000"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <desc>Created with Pixso.</desc>
            <defs />
            <path
              id="Path"
              d="M24.5 0.5L24.5 24.5L0.5 24.5L0.5 0.5L24.5 0.5Z"
              stroke="#A6A5A5"
              stroke-opacity="1.000000"
              stroke-width="1.000000"
            />
            <path
              id="Path"
              d="M3.5 12.5C3.5 7.52899 7.5293 3.5 12.5 3.5C17.4707 3.5 21.5 7.52899 21.5 12.5C21.5 17.471 17.4707 21.5 12.5 21.5C7.5293 21.5 3.5 17.471 3.5 12.5Z"
              stroke="#A6A5A5"
              stroke-opacity="1.000000"
              stroke-width="1.500000"
              stroke-linejoin="round"
            />
            <path
              id="Path"
              d="M15.3301 9.66998L9.66992 15.33"
              stroke="#A6A5A5"
              stroke-opacity="1.000000"
              stroke-width="1.500000"
              stroke-linejoin="round"
              stroke-linecap="round"
            />
            <path
              id="Path"
              d="M15.3301 15.33L9.66992 9.66998"
              stroke="#A6A5A5"
              stroke-opacity="1.000000"
              stroke-width="1.500000"
              stroke-linejoin="round"
              stroke-linecap="round"
            />
          </svg>
          <div class="need_menu" v-if="needsMenu != ''">
            <div
              class="menu_item"
              v-for="(val, i) in needsMenu"
              :key="i"
              @click="(needs[index].role = val.role), (needsMenu = '')"
            >
              {{ val.role }}
            </div>
          </div>
        </div>
      </div>
      <button class="save_btn">Сохранить</button>
    </div>
  </div>
</template>

<script>
import HeadNew from "@/components/newVersionComponents/HeadNew.vue";
export default {
  name: "Editneeds",
  components: {
    HeadNew,
  },
  data() {
    return {
      needs: [
        {
          id: 1,
          role: "Маркетолога",
        },
        {
          id: 2,
          role: "Директора по рекламе",
        },
        {
          id: 3,
          role: "",
        },
      ],
      needsMenuAll: [
        {
          id: 1,
          role: "Бизнес-аналитика",
        },
        {
          id: 2,
          role: "Бизнес-менеджера",
        },
        {
          id: 3,
          role: "Бизнес-инвестора",
        },
      ],
      needsMenu: "",
    };
  },
  methods: {
    valueFun(val) {
      $(".form_control #information_val").each((i, input) => {
        $(input).on("input", () => {
          $(input).val(val);
        });
      });
      if (val.length != 0) {
        this.needsMenu = this.needsMenuAll.filter(
          (item) => item.role.toLowerCase().slice(0, val.length) == val.toLowerCase()
        );
        $(".save_btn").css("display", "block");
      } else {
        this.needsMenu = "";
        $(".save_btn").css("display", "none");
      }
    },
  },
  mounted() {
    $(".need .input_wrapper").each((i, element) => {
      $(element)
        .children("textarea")
        .on("input", (e) => {
          if (e.target.value.length > 0) {
            $(element).siblings().css("display", "block");
          } else {
            $(element).siblings().css("display", "none");
          }
        });
    });
  },
};
</script>

<style lang="scss">
@import "@/assets/_variables.scss";

.edit_needs_wrapper {
  .need_container {
    border-radius: 20px;
    background: rgb(34, 34, 34);
    padding: 16px;
    .title {
      color: rgb(255, 255, 255);
      font-size: 18px;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: 0%;
      text-align: left;
      margin-bottom: 16px;
    }
  }
  .need_head {
    display: flex;
    gap: 8px;
    border-radius: 12px;
    padding: 12px;
    margin-top: 26px;
    background: rgb(34, 34, 34);
    color: rgb(211, 210, 210);
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0%;
    text-align: left;
    margin-bottom: 12px;
  }
  .need {
    position: relative;
    margin-bottom: 8px;

    label {
      display: none;
    }

    svg {
      position: absolute;
      top: 50%;
      right: 12px;
      transform: translateY(-50%);
      cursor: pointer;
    }
  }

  .need_menu {
    display: none;
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    width: 100%;
    z-index: 5;
    border-radius: 12px;
    background: rgb(34, 34, 34);
    border: 1px solid #494949;
    .menu_item {
      padding: 12px;
      border-bottom: 1px solid rgb(73, 73, 73);
      color: rgb(255, 255, 255);
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: 0%;
      text-align: left;
      &:last-child {
        margin-bottom: 0;
        border: 0;
      }
    }
  }
  .save_btn {
    width: 100%;
    display: none;
    border-radius: 12px;
    background: rgb(207, 46, 46);
    padding: 10px 24px 10px 24px;
    margin-top: 32px;
    color: rgb(255, 255, 255);
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0%;
    text-align: center;
  }
}

.dark-theme .edit_needs_wrapper {
  .title {
    color: $color-1;
  }

  .role svg path {
    stroke: $color-20;
  }
}
</style>
