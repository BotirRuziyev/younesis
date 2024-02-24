<template>
  <div class="contacts">
    <head-new page_title="Контакты"></head-new>
    <div class="main_container">
      <div class="form_control">
        <form-input label="Telegram" value="@andreyivanov" placeholder="Telegram" @update:value="inputVal"></form-input>
        <div class="form-switch-control">
          <span>Видно всем</span>
          <form-switch :value="true"></form-switch>
        </div>
      </div>
      <div class="form_control">
        <form-input label="Instagram*" value="@andrey" placeholder="Instagram*" @update:value="inputVal"></form-input>
        <div class="form-switch-control">
          <span>Видно всем</span>
          <form-switch :value="true"></form-switch>
        </div>
        <p class="description">*Instagram, продукт компании Meta, признанная экстремистской организацией в России</p>
      </div>
      <div class="form_control">
        <form-input
          label="TikTok"
          value="tiktok.com/@andyandrey"
          placeholder="TikTok"
          @update:value="inputVal"
        ></form-input>
        <div class="form-switch-control">
          <span>Видно всем</span>
          <form-switch :value="true"></form-switch>
        </div>
      </div>
      <div class="form_control">
        <form-input
          label="YouTube"
          value="youtube.com/@targettttttt"
          placeholder="YouTube"
          @update:value="inputVal"
        ></form-input>
        <div class="form-switch-control">
          <span>Видно всем</span>
          <form-switch :value="true"></form-switch>
        </div>
      </div>
      <div class="form_control">
        <form-input label="VK" value="vk.com/@andyandrey" placeholder="VK" @update:value="inputVal"></form-input>
        <div class="form-switch-control">
          <span>Видно всем</span>
          <form-switch :value="false"></form-switch>
        </div>
      </div>
      <div class="form_control">
        <form-input
          label="Номер телефона"
          value="+7 (937) 282-00-00"
          placeholder="Номер телефона"
          type="phone"
          @update:value="inputVal"
        ></form-input>
        <div class="form-switch-control">
          <span>Видно всем</span>
          <form-switch :value="false"></form-switch>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadNew from "@/components/newVersionComponents/HeadNew.vue";
import ProfileLink from "@/components/UI/ProfileLink";
import FormInput from "@/components/UI/FormInput.vue";
import FormSelect from "@/components/UI/FormSelect.vue";
import FormSwitch from "@/components/UI/FormSwitch.vue";
export default {
  name: "EditProfile",
  components: {
    HeadNew,
    ProfileLink,
    FormInput,
    FormSelect,
    FormSwitch,
  },
  data() {
    return {};
  },
  methods: {
    inputVal(val) {
      $(".form_control #information_val").each((i, input) => {
        $(input).on("input", () => {
          $(input).val(val);
        });
      });
    },
  },
};
</script>

<style lang="scss">
.contacts {
  .form_control {
    margin-bottom: 16px;
    &:first-child {
      margin-top: 24px;
    }
    &:last-child {
      margin-bottom: 0;
    }
    .form-switch-control {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 4px;
      border-radius: 12px;
      background: rgb(34, 34, 34);
      padding: 12px;
      color: rgb(255, 255, 255);
      font-size: 14px;
      font-weight: 500;
      line-height: 18px;
      letter-spacing: 0%;
      text-align: left;
    }
  }
}
</style>
