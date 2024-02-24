<template>
  <div class="profile_description">
    <head-new page_title="Описание профиля"></head-new>
    <div class="main_container">
      <div class="head">Введите описание профиля введите описание, что хотите написать</div>
      <div class="form_control">
        <label for="p_description">Описание профиля</label>
        <textarea name="" id="p_description" rows="10"></textarea>
        <span class="restriction">0/130 символов</span>
      </div>
      <button class="save_btn">Сохранить</button>
    </div>
  </div>
</template>

<script>
import HeadNew from "@/components/newVersionComponents/HeadNew.vue";
export default {
  name: "profile description",
  components: {
    HeadNew,
  },
};
</script>

<style lang="scss" scoped>
.head {
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
.form_control {
  label {
    display: block;
    color: rgb(211, 210, 210);
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0%;
    text-align: left;
    margin: 4px;
  }
  textarea {
    width: 100%;
    border: 1px solid rgb(255, 48, 58);
    border-radius: 12px;
    padding: 12px;
    resize: none;
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0%;
    text-align: left;
  }
  .restriction {
    color: rgb(211, 210, 210);
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0%;
    text-align: left;
  }
}
.save_btn {
  width: 100%;
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
</style>
