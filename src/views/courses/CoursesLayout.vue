<template>
  <div class="courses_layout">
    <div class="courses_lyout_content" :class="{ lessons: $route.name === 'Lesson' || $route.name === 'Test' }">
      <div class="router_view">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoursesLyout",
  data() {
    return {
      links: [
        { name: "Купленные", to: "Courses" },
        { name: "Выигранные", to: "Won" },
        { name: "Маркетплейс", to: "Marketplace" },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss">
@import "@/assets/_variables.scss";
.courses_lyout_content {
  padding-bottom: 112px;
}
</style>
