<template>
  <div class="coins_profile">
    <head-new to="" @click="$router.go(-1)" page_title="" />
    <div class="main_container">
      <div class="profile_head">
        <div class="profile_head_top">
          <div class="user_img">
            <img src="@/assets/images/User/user_1.png" alt="" />
          </div>
          <div class="name">Андрей Краснослободцев</div>
        </div>
        <div class="profile_head_bottom">
          <div class="location item">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 8.6665V8.6665C6.89533 8.6665 6 7.77117 6 6.6665V6.6665C6 5.56184 6.89533 4.6665 8 4.6665V4.6665C9.10467 4.6665 10 5.56184 10 6.6665V6.6665C10 7.77117 9.10467 8.6665 8 8.6665Z"
                stroke="#A6A5A5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.99992 14C7.99992 14 3.33325 10.1667 3.33325 6.66667C3.33325 4.08933 5.42259 2 7.99992 2C10.5773 2 12.6666 4.08933 12.6666 6.66667C12.6666 10.1667 7.99992 14 7.99992 14Z"
                stroke="#A6A5A5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Москва
          </div>
          <div class="views item">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.07874 8.3115C1.97408 8.1175 1.97408 7.88216 2.07874 7.68816C3.34008 5.3555 5.67008 3.3335 8.00008 3.3335C10.3301 3.3335 12.6601 5.3555 13.9214 7.68883C14.0261 7.88283 14.0261 8.11816 13.9214 8.31216C12.6601 10.6448 10.3301 12.6668 8.00008 12.6668C5.67008 12.6668 3.34008 10.6448 2.07874 8.3115Z"
                stroke="#A6A5A5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.41421 6.58579C10.1953 7.36683 10.1953 8.63316 9.41421 9.41421C8.63316 10.1953 7.36683 10.1953 6.58579 9.41421C5.80474 8.63316 5.80474 7.36683 6.58579 6.58579C7.36683 5.80474 8.63316 5.80474 9.41421 6.58579"
                stroke="#A6A5A5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            21
          </div>
          <div class="start item">
            <svg
              width="13.674072"
              height="13.008057"
              viewBox="0 0 13.6741 13.0081"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs />
              <path
                id="Path"
                d="M2.93677 12.3135C2.62915 12.0879 2.47656 11.7073 2.54321 11.3318L3.08276 8.23926L0.811279 6.06226C0.533691 5.79736 0.431885 5.39722 0.549316 5.03198C0.666748 4.66675 0.98291 4.40088 1.36279 4.34766L4.51685 3.89673L5.94067 1.05615C6.10962 0.715576 6.45679 0.5 6.83716 0.5C7.21729 0.5 7.5647 0.715576 7.7334 1.05615L9.15747 3.89673L12.3113 4.34766C12.6914 4.40088 13.0073 4.66675 13.1248 5.03198C13.2424 5.39722 13.1406 5.79736 12.863 6.06226L10.5913 8.23926L11.1309 11.3325C11.1975 11.708 11.0449 12.0886 10.7375 12.3142C10.4299 12.5396 10.021 12.5708 9.68286 12.3943L6.83716 10.9236L3.99121 12.3936C3.65308 12.5701 3.24414 12.5391 2.93677 12.3135Z"
                stroke="#A6A5A5"
                stroke-opacity="1.000000"
                stroke-width="1.000000"
                stroke-linejoin="round"
              />
            </svg>
            4.0
          </div>
        </div>
      </div>
      <div class="profile_fill">
        <h2 class="title">Заполните профиль</h2>
        <p class="description">Чтобы забрать монеты за каждый заполненный раздел</p>
        <div class="profile_swipper">
          <swiper :pagination="{ clickable: true }" :slidesPerView="'auto'" :spaceBetween="8" :modules="modules">
            <swiper-slide v-for="i in slider" :key="i.id">
              <div class="slide_item">
                <div class="slide_title">{{ i.name }}</div>
                <div class="slide_sum">
                  <svg width="35" height="28" viewBox="0 0 35 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_105_21959)">
                      <circle cx="14.5" cy="14" r="11.4545" fill="url(#paint0_linear_105_21959)" />
                      <circle cx="14.5" cy="14" r="11.8545" stroke="url(#paint1_linear_105_21959)" stroke-width="0.8" />
                    </g>
                    <g filter="url(#filter1_f_105_21959)">
                      <path
                        d="M6.08805 6.22522C7.07317 5.15937 8.25188 4.29044 9.56144 3.66469L10.4987 5.6262C9.43769 6.13319 8.48269 6.8372 7.68453 7.70077L6.08805 6.22522Z"
                        fill="white"
                      />
                    </g>
                    <circle cx="14.4999" cy="13.9999" r="8.55909" fill="url(#paint2_linear_105_21959)" />
                    <circle
                      cx="14.4999"
                      cy="13.9999"
                      r="8.55909"
                      stroke="url(#paint3_linear_105_21959)"
                      stroke-width="0.7"
                    />
                    <circle
                      cx="14.4999"
                      cy="13.9999"
                      r="8.55909"
                      stroke="url(#paint4_linear_105_21959)"
                      stroke-opacity="0.27"
                      stroke-width="0.7"
                    />
                    <g filter="url(#filter2_f_105_21959)">
                      <path
                        d="M21.0586 20.0295C20.319 20.8339 19.4378 21.4955 18.4589 21.981L18.1866 21.4321C19.0982 20.9799 19.9188 20.3639 20.6075 19.6148L21.0586 20.0295Z"
                        fill="white"
                        fill-opacity="0.8"
                      />
                    </g>
                    <circle
                      cx="14.5002"
                      cy="14"
                      r="5.97727"
                      stroke="url(#paint5_linear_105_21959)"
                      stroke-opacity="0.56"
                      stroke-width="0.5"
                    />
                    <path
                      d="M14.8093 19.7191C17.8287 19.5585 20.2275 17.0594 20.2275 14C20.2275 10.8369 17.6633 8.27271 14.5002 8.27271C11.3371 8.27271 8.77295 10.8369 8.77295 14C8.77295 15.8661 9.66548 17.5238 11.0469 18.5695L14.3313 11.5143C14.3757 11.419 14.5182 11.4479 14.5219 11.553L14.8093 19.7191Z"
                      fill="url(#paint6_linear_105_21959)"
                    />
                    <path
                      d="M14.1909 19.7192L14.4783 11.5531C14.482 11.448 14.6245 11.4191 14.6689 11.5144L17.9532 18.5696C16.9931 19.2963 15.7969 19.7274 14.5 19.7274C14.3963 19.7274 14.2932 19.7246 14.1909 19.7192Z"
                      fill="#CE7D00"
                    />
                    <path
                      d="M14.7866 19.7192L14.4993 11.5531C14.4956 11.448 14.3531 11.4191 14.3087 11.5144L11.0243 18.5696C11.9844 19.2963 13.1806 19.7274 14.4776 19.7274C14.5813 19.7274 14.6843 19.7246 14.7866 19.7192Z"
                      fill="#FFF175"
                    />
                    <defs>
                      <filter
                        id="filter0_d_105_21959"
                        x="-1.55439"
                        y="-2.05464"
                        width="36.1088"
                        height="36.109"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx="2" dy="2" />
                        <feGaussianBlur stdDeviation="2.9" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.466667 0 0 0 0 0.293144 0 0 0 0 0.00972222 0 0 0 0.5 0"
                        />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_105_21959" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_105_21959" result="shape" />
                      </filter>
                      <filter
                        id="filter1_f_105_21959"
                        x="4.08789"
                        y="1.66479"
                        width="8.41064"
                        height="8.03589"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_105_21959" />
                      </filter>
                      <filter
                        id="filter2_f_105_21959"
                        x="17.1865"
                        y="18.6147"
                        width="4.87207"
                        height="4.36621"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_105_21959" />
                      </filter>
                      <linearGradient
                        id="paint0_linear_105_21959"
                        x1="3.04541"
                        y1="2.54541"
                        x2="25.9545"
                        y2="25.4545"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FBEC40" />
                        <stop offset="1" stop-color="#EFBB16" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_105_21959"
                        x1="3.5"
                        y1="3"
                        x2="25.5"
                        y2="25"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#B78F0F" />
                        <stop offset="1" stop-color="#AC6B11" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_105_21959"
                        x1="5.59082"
                        y1="5.09082"
                        x2="23.409"
                        y2="22.909"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#F9D835" />
                        <stop offset="0.0001" stop-color="#F9D835" />
                        <stop offset="1" stop-color="#EAA800" />
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_105_21959"
                        x1="5.59082"
                        y1="5.09082"
                        x2="23.409"
                        y2="22.909"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#E4AC1C" />
                        <stop offset="1" stop-color="#F8E53C" />
                      </linearGradient>
                      <linearGradient
                        id="paint4_linear_105_21959"
                        x1="23.409"
                        y1="5.72718"
                        x2="6.22718"
                        y2="22.909"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#E1AB19" />
                        <stop offset="1" stop-color="#F7D836" />
                      </linearGradient>
                      <linearGradient
                        id="paint5_linear_105_21959"
                        x1="8.77295"
                        y1="8.27271"
                        x2="21.5"
                        y2="20.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.09912" stop-color="#FBBE24" />
                        <stop offset="1" stop-color="#D58207" />
                      </linearGradient>
                      <linearGradient
                        id="paint6_linear_105_21959"
                        x1="8.77295"
                        y1="8.27271"
                        x2="20.2275"
                        y2="19.7273"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FCF432" />
                        <stop offset="1" stop-color="#F58500" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <svg
                    width="9.985352"
                    height="9.985352"
                    viewBox="0 0 9.98535 9.98535"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <desc>Created with Pixso.</desc>
                    <defs />
                    <path
                      id="Vector"
                      d="M0.75 4.99268L9.23535 4.99268M4.99268 0.75L4.99268 9.23535"
                      stroke="#FFFFFF"
                      stroke-opacity="1.000000"
                      stroke-width="1.500000"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span>{{ i.bonus }}</span>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <router-link to="" class="edit_profile"
        ><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.33333 12.5H5.83333C3.99238 12.5 2.5 13.9924 2.5 15.8333V16.6667"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.9108 12.7787L14.4454 10.2441C14.6017 10.0878 14.8137 10 15.0347 10C15.2557 10 15.4677 10.0878 15.6239 10.2441L16.4227 11.0428C16.7481 11.3683 16.7481 11.8959 16.4227 12.2213L13.8881 14.7559C13.7318 14.9122 13.5198 15 13.2988 15H12.0834C11.8533 15 11.6667 14.8135 11.6667 14.5833V13.3679C11.6667 13.1469 11.7545 12.935 11.9108 12.7787Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <ellipse
            cx="9.16658"
            cy="5.83333"
            rx="3.33333"
            ry="3.33333"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Редактировать профиль
      </router-link>
      <!-- Products start -->
      <div class="products bcg_gray">
        <div class="products_top">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M9.99994 13.3333V15.8333"
              stroke="#54C35F"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.66656 16.6666L8.33323 13.3333"
              stroke="#54C35F"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.3332 16.6666L11.6666 13.3333"
              stroke="#54C35F"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <rect
              x="3.33325"
              y="3.33325"
              width="13.3333"
              height="10"
              rx="2"
              fill="#54C35F"
              stroke="#54C35F"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.66656 9.99992V8.33325"
              stroke="#222222"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.74992 9.9999V6.66656"
              stroke="#222222"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.2499 9.99994V7.49994"
              stroke="#222222"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.3333 9.9999V6.66656"
              stroke="#222222"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Продукты</span>
        </div>
        <!-- ntg child 1 -->
        <div class="advice">
          <span class="title_small">Продукты</span>
          <span class="title">Бесплатно</span>
          <span class="description">Бесплатная консультация по базовой настройке рекламы в телеграм</span>
          <div class="advice_bottom">
            <button class="products_btn">
              <svg
                width="24.000000"
                height="24.000000"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <desc>Created with Pixso.</desc>
                <defs />
                <path
                  id="Path"
                  d="M7.07788 21.8081C9.78589 21.8081 11.9819 19.6121 11.9819 16.9041C11.9819 14.196 9.78687 12 7.07788 12C4.3689 12 2.17383 14.196 2.17383 16.9041"
                  stroke="#323232"
                  stroke-opacity="1.000000"
                  stroke-width="1.500000"
                  stroke-linejoin="round"
                />
                <path
                  id="Path"
                  d="M7.08301 21.813C6.34497 21.813 5.646 21.6501 5.01807 21.3591L2 22L2.6311 18.9761C2.33789 18.3459 2.17407 17.644 2.17407 16.9041"
                  stroke="#323232"
                  stroke-opacity="1.000000"
                  stroke-width="1.500000"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                />
                <path
                  id="Path"
                  d="M6.55688 12.0281C6.19897 11.207 6 10.312 6 9.37305C6 5.35596 9.5979 2.13306 14 2.13306C18.4021 2.13306 22 5.35596 22 9.37305C22 11.7471 20.738 13.8372 18.801 15.155C18.802 15.9111 18.8 16.9302 18.8 18L15.6609 16.4541C15.124 16.5571 14.5691 16.613 14 16.613C13.293 16.613 12.6069 16.5291 11.9529 16.3721"
                  stroke="#323232"
                  stroke-opacity="1.000000"
                  stroke-width="1.500000"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                />
              </svg>
              <span>Написать</span>
            </button>
            <router-link to="#">Подробнее</router-link>
          </div>
        </div>
        <div class="advice">
          <span class="title_small">От 15 000₽</span>
          <span class="title">Личная консультация</span>
          <span class="description">
            Провожу личные консультации и обучение в центре Москвы и онлайн по всему миру как со взрослыми,
            так и с подростками. Я верю, что ответы на все вопросы</span
          >
          <div class="advice_bottom">
            <button class="products_btn">
              <svg
                width="24.000000"
                height="24.000000"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <desc>Created with Pixso.</desc>
                <defs />
                <path
                  id="Path"
                  d="M7.07788 21.8081C9.78589 21.8081 11.9819 19.6121 11.9819 16.9041C11.9819 14.196 9.78687 12 7.07788 12C4.3689 12 2.17383 14.196 2.17383 16.9041"
                  stroke="#323232"
                  stroke-opacity="1.000000"
                  stroke-width="1.500000"
                  stroke-linejoin="round"
                />
                <path
                  id="Path"
                  d="M7.08301 21.813C6.34497 21.813 5.646 21.6501 5.01807 21.3591L2 22L2.6311 18.9761C2.33789 18.3459 2.17407 17.644 2.17407 16.9041"
                  stroke="#323232"
                  stroke-opacity="1.000000"
                  stroke-width="1.500000"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                />
                <path
                  id="Path"
                  d="M6.55688 12.0281C6.19897 11.207 6 10.312 6 9.37305C6 5.35596 9.5979 2.13306 14 2.13306C18.4021 2.13306 22 5.35596 22 9.37305C22 11.7471 20.738 13.8372 18.801 15.155C18.802 15.9111 18.8 16.9302 18.8 18L15.6609 16.4541C15.124 16.5571 14.5691 16.613 14 16.613C13.293 16.613 12.6069 16.5291 11.9529 16.3721"
                  stroke="#323232"
                  stroke-opacity="1.000000"
                  stroke-width="1.500000"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                />
              </svg>
              <span>Написать</span>
            </button>
            <router-link to="#">Подробнее</router-link>
          </div>
        </div>
        <div class="product_bottom">
          Телеграм-канал для маркетологов в корпорациях
          <div>
            <svg
              width="11.453125"
              height="11.453125"
              viewBox="0 0 11.4531 11.4531"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs />
              <path
                id="Path"
                d="M10.6531 0.800049L0.753174 10.7"
                stroke="#CF2E2E"
                stroke-opacity="1.000000"
                stroke-width="1.500000"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
              <path
                id="Path"
                d="M3.70312 0.75L10.6531 0.799072L10.7031 7.75"
                stroke="#CF2E2E"
                stroke-opacity="1.000000"
                stroke-width="1.500000"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>
        <button class="show_more">
          Показать еще
          <div>
            <svg
              width="24.000000"
              height="24.000000"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs />
              <path
                id="Path"
                d="M8 10L12 14L16 10"
                stroke="#FFFFFF"
                stroke-opacity="1.000000"
                stroke-width="1.500000"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </button>
      </div>
      <!-- Products end -->
    </div>
  </div>
</template>

<script>
import HeadNew from "@/components/newVersionComponents/HeadNew.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import Progressbar from "@/components/newVersionComponents/Progressbar.vue";
export default {
  components: {
    HeadNew,
    Swiper,
    SwiperSlide,
    Progressbar,
  },
  setup() {
    return {
      modules: [Pagination],
      slider: [
        {
          id: 1,
          name: "Кейсы",
          bonus: "2000",
        },
        {
          id: 2,
          name: "Образование",
          bonus: "1000",
        },
        {
          id: 3,
          name: "Фотография",
          bonus: "3000",
        },
        {
          id: 4,
          name: "Кейсы",
          bonus: "5000",
        },
        {
          id: 5,
          name: "Кейсы",
          bonus: "3000",
        },
        {
          id: 6,
          name: "Кейсы",
          bonus: "2000",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.coins_profile {
  .profile_head {
    .profile_head_top {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 20px;
      .name {
        color: rgb(255, 255, 255);
        font-family: Raleway;
        font-size: 18px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0%;
        text-align: left;
      }
    }
    .profile_head_bottom {
      display: flex;
      align-items: center;
      gap: 18px;
      margin-bottom: 20px;
      color: rgb(166, 165, 165);
      font-family: Raleway;
      font-size: 14px;
      font-weight: 500;
      line-height: 18px;
      letter-spacing: 0%;
      text-align: left;
      .item {
        display: flex;
        align-items: center;
        gap: 7.3px;
      }
    }
  }
  .profile_fill {
    border-radius: 20px;
    background: rgb(34, 34, 34);
    padding: 16px 0 16px 16px;
    overflow: hidden;
    margin-bottom: 20px;
    .title {
      color: rgb(255, 255, 255);
      font-family: Raleway;
      font-size: 16px;
      font-weight: 700;
      line-height: 20px;
      letter-spacing: 0%;
      text-align: left;
      margin-bottom: 6px;
      padding-right: 16px;
    }
    .description {
      color: rgb(166, 165, 165);
      font-family: Raleway;
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: 0%;
      text-align: left;
      padding-right: 16px;
      margin-bottom: 44px;
    }
    .profile_swipper {
      position: relative;

      .swiper {
        overflow: visible;
        position: static;
      }
      .swiper-slide {
        max-width: 140px;
        width: 100%;
        padding: 12px;
        border: 1px solid rgb(77, 76, 76);
        border-radius: 8px;
        background: rgb(47, 47, 47);
        .slide_title {
          color: rgb(255, 255, 255);
          font-family: Raleway;
          font-size: 14px;
          font-weight: 600;
          line-height: 18px;
          letter-spacing: 0%;
          text-align: left;
          margin-bottom: 8px;
        }
        .slide_sum {
          display: inline-flex;
          align-items: center;
          color: rgb(255, 255, 255);
          font-family: Raleway;
          font-size: 12px;
          font-weight: 700;
          line-height: 16px;
          letter-spacing: 0%;
          text-align: left;
          border-radius: 12px;
          background: rgba(228, 154, 43, 0.24);
          padding: 0px 8px 0px 0px;
          span {
            margin-left: 3.7px;
          }
        }
      }

      :global(.swiper-pagination) {
        position: absolute;
        top: -16px;
        max-width: 296px;
        margin: 0 auto;
        display: flex;
        gap: 4px;
        width: 100%;
        height: 4px;
        z-index: 100;
      }
      :global(.swiper-pagination-bullet) {
        width: 100%;
        height: 4px;
        border-radius: 12px;
        background: rgb(77, 76, 76);
      }
      :global(.swiper-pagination-bullet-active) {
        background: rgb(207, 46, 46);
      }
    }
  }
  .edit_profile {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    color: rgb(255, 255, 255);
    font-family: Raleway;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0%;
    text-align: center;
    padding: 10px 12px 10px 12px;
    border: 1px solid rgb(77, 76, 76);
    border-radius: 8px;
    margin-bottom: 20px;
  }
  .products {
    border-radius: 20px;
    background: rgb(34, 34, 34);
    padding: 16px 16px 12px 16px;
    .products_top {
      display: flex;
      align-items: center;
      gap: 4px;
      margin-bottom: 12px;
    }
    .advice {
      margin-bottom: 4px;
      padding: 12px;
      border-radius: 12px;
      background: #2f2f2f;
      span {
        display: block;
      }
      .title_small {
        color: rgb(95, 193, 93);
        font-family: Raleway;
        font-size: 12px;
        font-weight: 600;
        line-height: 16px;
        letter-spacing: 0%;
        text-align: left;
        margin-bottom: 8px;
      }
      .title {
        color: rgb(255, 255, 255);
        font-family: Raleway;
        font-size: 16px;
        font-weight: 600;
        line-height: 20px;
        letter-spacing: 0%;
        text-align: left;
        margin-bottom: 6px;
      }
      .description {
        color: rgb(211, 210, 210);
        font-family: Raleway;
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0%;
        text-align: left;
        margin-bottom: 11px;
      }
      .show_more {
        display: flex;
        align-items: center;
        gap: 8px;
        color: rgb(255, 255, 255);
        font-family: Raleway;
        font-size: 12px;
        font-weight: 500;
        line-height: 14px;
        letter-spacing: 0%;
        text-align: left;
        margin-bottom: 16px;
        margin-left: 0 !important;
      }
      .advice_bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .products_btn {
          display: flex;
          align-items: center;
          gap: 3px;
          border-radius: 4px;
          background: rgb(201, 201, 201);
          padding: 10px 12px 10px 12px;
          color: rgb(26, 25, 25);
          font-family: Raleway;
          font-size: 12px;
          font-weight: 600;
          line-height: 16px;
          letter-spacing: 0%;
          text-align: center;
        }
        .more_details {
          color: rgb(255, 255, 255);
          font-family: Raleway;
          font-size: 12px;
          font-weight: 500;
          line-height: 16px;
          letter-spacing: 0%;
          text-align: left;
        }
      }
    }
    .product_bottom {
      display: flex;
      align-items: center;
      padding: 12px;
      border-radius: 12px;
      background: #2f2f2f;
      color: rgb(255, 255, 255);
      font-family: Raleway;
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: 0%;
      text-align: left;
      margin-bottom: 17px;
      div {
        line-height: 0;
      }
    }
    .show_more {
      display: flex;
      align-items: center;
      margin: 0 auto;
      color: rgb(255, 255, 255);
      font-family: Raleway;
      font-size: 12px;
      font-weight: 500;
      line-height: 14px;
      letter-spacing: 0%;
      text-align: left;
      div {
        line-height: 0;
      }
    }
  }
}
</style>
