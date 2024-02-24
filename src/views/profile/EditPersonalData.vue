<template>
  <div class="personal_data">
    <head-new page_title="Личные данные"></head-new>
    <div class="main_container">
      <label for="user_img" class="edit_img">
        <svg
          width="106.000000"
          height="106.000000"
          viewBox="0 0 106 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <desc>Created with Pixso.</desc>
          <defs>
            <clipPath id="clip1633_11623">
              <rect
                id="Frame 285"
                rx="16.000000"
                width="106.000000"
                height="106.000000"
                fill="white"
                fill-opacity="0"
              />
            </clipPath>
          </defs>
          <rect
            id="Frame 285"
            rx="16.000000"
            width="106.000000"
            height="106.000000"
            fill="#222222"
            fill-opacity="1.000000"
          />
          <g clip-path="url(#clip1633_11623)">
            <rect
              id="ic_camera"
              width="24.000000"
              height="24.000000"
              transform="translate(41.000000 41.000000)"
              fill="#FFFFFF"
              fill-opacity="0"
            />
            <path
              id="Path"
              d="M55.8789 56.8062C54.3223 58.3633 51.7969 58.3633 50.2402 56.8062C48.6836 55.2492 48.6836 52.7248 50.2402 51.1678C51.7969 49.6107 54.3223 49.6107 55.8789 51.1678C57.4355 52.7248 57.4355 55.2492 55.8789 56.8062Z"
              stroke="#D3D2D2"
              stroke-opacity="1.000000"
              stroke-width="1.500000"
              stroke-linejoin="round"
            />
            <path
              id="Path"
              d="M62 59C62 60.105 61.1055 61 60 61L46 61C44.8945 61 44 60.105 44 59L44 50C44 48.895 44.8945 48 46 48L48 48L49.4629 45.496C49.6406 45.189 49.9707 45 50.3262 45L55.6309 45C55.9805 45 56.3066 45.184 56.4863 45.484L58 48L60 48C61.1055 48 62 48.895 62 50L62 59Z"
              stroke="#D3D2D2"
              stroke-opacity="1.000000"
              stroke-width="1.500000"
              stroke-linejoin="round"
            />
          </g>
        </svg>
        <input id="user_img" type="file" />
      </label>
      <div class="form_control">
        <form-input label="Имя" value="Андрей" placeholder="Имя" @update:value="inputVal"></form-input>
      </div>
      <div class="form_control">
        <form-input label="Фамилия" value="Краснослободцев" placeholder="Фамилия" @update:value="inputVal"></form-input>
      </div>
      <div class="form_control">
        <form-select
          label="День рождения"
          :value="birthday"
          placeholder="День рождения"
          :options="['01.01.1998', '01.01.1994']"
          @update:value="selectBirthday"
        ></form-select>
      </div>
      <div class="form_control">
        <form-select
          label="Город"
          :value="city"
          placeholder="Город"
          :options="['Санкт-Петербург', 'Москва']"
          @update:value="selectCity"
        ></form-select>
      </div>
    </div>
  </div>
</template>

<script>
import HeadNew from "@/components/newVersionComponents/HeadNew.vue";
import ProfileLink from "@/components/UI/ProfileLink";
import FormInput from "@/components/UI/FormInput.vue";
import FormSelect from "@/components/UI/FormSelect.vue";
export default {
  name: "EditProfile",
  components: {
    HeadNew,
    ProfileLink,
    FormInput,
    FormSelect,
  },
  data() {
    return {
      birthday: "",
      city: "Санкт-Петербург",
    };
  },
  methods: {
    inputVal(val) {
      $(".form_control #information_val").each((i, input) => {
        $(input).on("input", () => {
          $(input).val(val);
        });
      });
    },
    selectBirthday(val) {
      this.birthday = val;
    },
    selectCity(val) {
      this.city = val;
    },
  },
};
</script>

<style lang="scss">
.personal_data {
  .edit_img {
    display: block;
    text-align: center;
    margin-top: 24px;
    #user_img {
      display: none;
    }
  }
  .form_control {
    margin-bottom: 16px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
