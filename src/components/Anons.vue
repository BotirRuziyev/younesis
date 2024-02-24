<template>
  <div class="anons_block">
    <router-link :to="{ name: 'Study' }" class="link">
      <span class="icon">
        <img src="@/assets/images/anons_icon_1.svg" alt="" />
      </span>
      <span class="title">Учусь</span>
      <div class="subtitle">Еще не учусь</div>
    </router-link>
    <router-link :to="{ name: 'Fair' }" class="link">
      <span class="icon">
        <img src="@/assets/images/anons_icon_2.svg" alt="" />
      </span>
      <span class="title">Ярмарка</span>
      <div class="subtitle">Каталог курсов</div>
    </router-link>
  </div>
</template>

<style lang="scss">
.anons_block {
  padding-top: 20px;
  padding-bottom: 8px;
  display: flex;
  align-items: stretch;
  gap: 8px;

  .link {
    width: calc(50% - 4px);
    border-radius: 20px;
    background: #222;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    &:nth-child(2) {
      .icon {
        background: #38a0ff;
      }
    }
  }

  .icon {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background: #b61cff;
  }

  .title {
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
  }

  .subtitle {
    color: #a6a5a5;
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
  }
}
</style>
