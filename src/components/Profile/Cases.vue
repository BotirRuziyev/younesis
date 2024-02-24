<template>
  <div class="cases bcg_gray">
    <div class="cases_top">
      <img src="@/assets/images/cases_icon.svg" alt="" />
      <span>Кейсы и достижения</span>
    </div>
    <ul>
      <li>⚡️ Финалист губернаторского конкурса «Лидеры Востока»</li>
      <li>Провел 15000 часов в эфире, топ 3 по эфирам 🔥🔥🔥</li>
      <li>
        Получил премию оскар в 2020 году
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M16.9498 7.0498L7.0498 16.9498"
            stroke="#CF2E2E"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 7L16.95 7.049L17 14"
            stroke="#CF2E2E"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </li>
    </ul>
    <button class="profil_btn_more">
      <span>Показать еще</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
        <path
          d="M8.5 10L12.5 14L16.5 10"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>

<style lang="scss" scoped>
//cases
.cases {
  margin: 0;
  .cases_top {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-bottom: 8px;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: rgb(211, 210, 210);
      font-family: Raleway;
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: 0%;
      text-align: left;
      border-bottom: 1px solid rgb(48, 48, 48);
      padding: 8px 0px 8px 0px;
    }
  }
}
.profil_btn_more {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 12px;
  span {
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
  }
}
</style>
