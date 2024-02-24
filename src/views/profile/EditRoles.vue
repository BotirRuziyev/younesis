<template>
  <div class="edit_roles_wrapper">
    <head-new page_title="Профессия/деятельность"></head-new>
    <div class="main_container">
      <div class="role_head">
        <svg
          width="20.007812"
          height="20.008362"
          viewBox="0 0 20.0078 20.0084"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <desc>Created with Pixso.</desc>
          <defs />
          <path
            id="Path"
            d="M14.1719 17.5073L5.83398 17.5073C3.99219 17.5073 2.5 16.0142 2.5 14.1725L2.5 5.83575C2.5 3.99414 3.99219 2.50104 5.83398 2.50104L14.1719 2.50104C16.0137 2.50104 17.5059 3.99414 17.5059 5.83575L17.5059 14.1725C17.5059 16.0142 16.0137 17.5073 14.1719 17.5073Z"
            fill="#FA6262"
            fill-opacity="1.000000"
            fill-rule="evenodd"
          />
          <path
            id="Path"
            d="M5.83398 17.5073C3.99219 17.5073 2.5 16.0142 2.5 14.1725L2.5 5.83575C2.5 3.99414 3.99219 2.50104 5.83398 2.50104L14.1719 2.50104C16.0137 2.50104 17.5059 3.99414 17.5059 5.83575L17.5059 14.1725C17.5059 16.0142 16.0137 17.5073 14.1719 17.5073L5.83398 17.5073Z"
            stroke="#FA6262"
            stroke-opacity="1.000000"
            stroke-width="1.000000"
            stroke-linejoin="round"
          />
          <path
            id="Path"
            d="M6.39258 15.0063C6.08594 15.0063 5.83594 14.7562 5.83594 14.4503L5.83594 13.9984C5.83594 12.7187 6.88281 11.6716 8.16406 11.6716L11.8457 11.6716C13.125 11.6716 14.1719 12.7187 14.1719 13.9992L14.1719 14.451C14.1719 14.7562 13.9219 15.0063 13.6172 15.0063L6.39258 15.0063Z"
            stroke="#222222"
            stroke-opacity="1.000000"
            stroke-width="1.500000"
            stroke-linejoin="round"
          />
          <path
            id="Path"
            d="M7.71094 7.30389C7.71094 6.04749 8.74219 5.00208 10.0039 5.00208C11.2656 5.00208 12.2969 6.02917 12.2969 7.28552C12.2969 8.54187 11.2656 9.58734 10.0039 9.58734C8.74219 9.58734 7.71094 8.56024 7.71094 7.30389Z"
            stroke="#222222"
            stroke-opacity="1.000000"
            stroke-width="1.500000"
            stroke-linejoin="round"
          />
        </svg>
        Введите ваше направление деятельности или профессию
      </div>
      <div class="role_container">
        <div class="role" v-for="(item, index) in roles" :key="index">
          <form-input v-model:value="roles[index].role" placeholder="SMM" @update:value="valueFun" />
          <svg
            @click="roles[index].role = ''"
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
          <div class="role_menu" v-if="rolesMenu != ''">
            <div
              class="menu_item"
              v-for="(val, i) in rolesMenu"
              :key="i"
              @click="(roles[index].role = val.role), (rolesMenu = '')"
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
  name: "EditRoles",
  components: {
    HeadNew,
  },
  data() {
    return {
      roles: [
        {
          id: 1,
          role: "Таргетолог",
        },
        {
          id: 2,
          role: "Маркетолог",
        },
        {
          id: 3,
          role: "",
        },
      ],
      rolesMenuAll: [
        {
          id: 1,
          role: "Таргетолог",
        },
        {
          id: 2,
          role: "Маркетолог",
        },
        {
          id: 3,
          role: "SMM",
        },
        {
          id: 4,
          role: "SMM-специалист",
        },
      ],
      rolesMenu: "",
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
        this.rolesMenu = this.rolesMenuAll.filter(
          (item) => item.role.toLowerCase().slice(0, val.length) == val.toLowerCase()
        );
        $(".save_btn").css("display", "block");
      } else {
        this.rolesMenu = "";
        $(".save_btn").css("display", "none");
      }
    },
  },
  mounted() {
    $(".role .input_wrapper").each((i, element) => {
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

.edit_roles_wrapper {
  .role_container {
    border-radius: 20px;
    background: rgb(34, 34, 34);
    padding: 16px;
  }
  .role_head {
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
  .role {
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
  .role_menu {
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

.dark-theme .edit_roles_wrapper {
  .title {
    color: $color-1;
  }

  .role svg path {
    stroke: $color-20;
  }
}
</style>
