<template>
  <div class="edit_mogus_wrapper">
    <head-new page_title="Могу"></head-new>
    <div class="main_container">
      <div class="mogu_head">
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
            fill="#54C35F"
            fill-opacity="1.000000"
            fill-rule="evenodd"
          />
          <path
            id="Path"
            d="M6.66602 17.5C4.36523 17.5 2.5 15.6342 2.5 13.3333L2.5 6.66669C2.5 4.36584 4.36523 2.5 6.66602 2.5L13.334 2.5C15.6348 2.5 17.5 4.36584 17.5 6.66669L17.5 13.3333C17.5 15.6342 15.6348 17.5 13.334 17.5L6.66602 17.5Z"
            stroke="#54C35F"
            stroke-opacity="1.000000"
            stroke-width="1.500000"
            stroke-linejoin="round"
          />
          <path
            id="Path"
            d="M13 8L9.25 12L7 9.59973"
            stroke="#222222"
            stroke-opacity="1.000000"
            stroke-width="1.500000"
            stroke-linejoin="round"
            stroke-linecap="round"
          />
        </svg>
        Введите, что вы можете предложить другим людям на платформе
      </div>
      <div class="mogu_container">
        <div class="title">Могу</div>
        <div class="mogu" v-for="(item, index) in mogus" :key="index">
          <form-input v-model:value="mogus[index].role" placeholder="Вести инстаграм" @update:value="valueFun" />
          <svg
            @click="mogus[index].role = ''"
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
          <div class="mogu_menu" v-if="mogusMenu != ''">
            <div
              class="menu_item"
              v-for="(val, i) in mogusMenu"
              :key="i"
              @click="(mogus[index].role = val.role), (mogusMenu = '')"
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
  name: "Editmogus",
  components: {
    HeadNew,
  },
  data() {
    return {
      mogus: [
        {
          id: 1,
          role: "Настроить таргет",
        },
        {
          id: 2,
          role: "Проводить интервью",
        },
        {
          id: 3,
          role: "",
        },
        {
          id: 4,
          role: "",
        },
        {
          id: 5,
          role: "",
        },
      ],
      mogusMenuAll: [
        {
          id: 1,
          role: "Вести телеграм-канал",
        },
        {
          id: 2,
          role: "Вести инстаграм",
        },
        {
          id: 3,
          role: "Вести аккаунт",
        },
        {
          id: 4,
          role: "Вести группу в VK",
        },
      ],
      mogusMenu: "",
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
        this.mogusMenu = this.mogusMenuAll.filter(
          (item) => item.role.toLowerCase().slice(0, val.length) == val.toLowerCase()
        );
        $(".save_btn").css("display", "block");
      } else {
        this.mogusMenu = "";
        $(".save_btn").css("display", "none");
      }
    },
  },
  mounted() {
    $(".mogu .input_wrapper").each((i, element) => {
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

.edit_mogus_wrapper {
  .mogu_container {
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
  .mogu_head {
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
  .mogu {
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

  .mogu_menu {
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

.dark-theme .edit_mogus_wrapper {
  .title {
    color: $color-1;
  }

  .role svg path {
    stroke: $color-20;
  }
}
</style>
