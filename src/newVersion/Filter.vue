<template>
  <div class="filter">
    <head-new to="PartnerSearch" page_title="Фильтры"></head-new>
    <div class="filter_in">
      <div class="filter_item main_container">
        <div class="title">Специализация</div>
        <form-select
          :value="optionValue"
          placeholder="Маркетинг"
          :options="['Маркетинг', 'Маркетинг2']"
          @update:value="optionVal"
        ></form-select>
      </div>
      <div class="filter_item main_container">
        <div class="title">Опыт работы</div>
        <div class="filter_btns">
          <button class="filter_btn" v-for="(item, index) in experience" :key="index">
            {{ item }}
          </button>
        </div>
      </div>
      <div class="filter_item main_container">
        <div class="title">Тип занятости</div>
        <div class="filter_btns">
          <button class="filter_btn" v-for="item of employment" :key="item" :class="item == 1 ? 'active' : ''">
            {{ item }}
          </button>
        </div>
      </div>
      <div class="filter_item main_container">
        <div class="title">График работы</div>
        <div class="filter_btns">
          <button class="filter_btn" v-for="item of schedule" :key="item">{{ item }}</button>
        </div>
      </div>
      <div class="filter_item main_container">
        <div class="title">Образование</div>
        <div class="filter_btns">
          <button class="filter_btn" v-for="item of education" :key="item">{{ item }}</button>
        </div>
      </div>
      <div class="filter_show">
        <div class="filter_show_btn">Показать 14 человек</div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadNew from "@/components/newVersionComponents/HeadNew.vue";
export default {
  name: "Filter",

  components: {
    HeadNew,
  },
  data() {
    return {
      optionValue: "Маркетинг",
      experience: ["Без опыта", "От 1 года", "От 2 лет", "От 3 лет"],
      employment: ["Полная", "Частичная", "Проектная"],
      schedule: ["Полный день", "Сменный график", "Гибкий график"],
      education: ["Высшее", "Незаконченное высшее", "Среднее"],
    };
  },
  methods: {
    optionVal(val) {
      this.optionValue = val;
    },
  },
  mounted() {
    $(".filter_item").each((i, element) => {
      $(element)
        .children(".filter_btns")
        .children(".filter_btn")
        .click(function () {
          $(element).children(".filter_btns").children(".filter_btn").not(this).removeClass("active");
          $(this).addClass("active");
        });
    });
  },
};
</script>

<style lang="scss" scoped>
.filter {
  .filter_in {
    .main_container {
      padding: 0 0 0 16px;
      &:first-child {
        padding: 0 16px;
      }
    }
    .filter_item {
      margin-bottom: 24px;
      .title {
        margin: 24px 0 12px;
        color: rgb(255, 255, 255);
        font-size: 16px;
        font-weight: 600;
        line-height: 20px;
        letter-spacing: 0%;
      }
      .filter_btns {
        display: flex;
        align-items: center;
        gap: 4px;
        overflow: auto;
        padding-right: 16px;
        &::-webkit-scrollbar {
          height: 0;
        }
        .filter_btn {
          border-radius: 20px;
          background: rgb(73, 73, 73);
          padding: 12px;
          color: rgb(255, 255, 255);
          font-size: 14px;
          font-weight: 500;
          line-height: 18px;
          letter-spacing: 0%;
          text-align: left;
          white-space: nowrap;
        }
        .active {
          background: rgb(207, 46, 46);
        }
      }
    }
    .filter_show {
      max-width: 420px;
      padding: 0 16px;
    }
    .filter_show_btn {
      border-radius: 12px;
      background: rgb(207, 46, 46);
      padding: 10px 24px 10px 24px;
      color: rgb(255, 255, 255);
      font-size: 14px;
      font-weight: 600;
      line-height: 18px;
      letter-spacing: 0%;
      text-align: center;
    }
  }
}
</style>
