<template>
  <div class="new_home">
    <div class="main_container new_home__head">
      <router-link to="#" class="left_block">
        <img src="@/assets/images/user_logo.png" class="user_img" alt="" />
        <div>
          <div class="name">Андрей</div>
          <div class="money">
            <img src="@/assets/images/coin.svg" alt="" />
            12400
          </div>
        </div>
      </router-link>
      <router-link to="#" class="right_block main_btn">
        <img src="@/assets/images/workshop.svg" alt="" />
        <span>Подарки за друга</span>
      </router-link>
    </div>
    <Stories />

    <!-- Anons block -->
    <div class="main_container anons_block">
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
    <!-- Anons block end -->

    <!-- Wheels -->
    <div class="main_container">
      <button class="wheels_btn">
        <span class="title">Колесо фортуны</span>
        <span class="subtitle">Доступно 1 бесплатное вращение</span>
        <span class="alert" @click="modal = true">Крутить</span>
        <img src="@/assets/images/wheel_img.png" alt="" />
      </button>
    </div>
    <!-- Wheels end -->

    <!-- Tools -->
    <div class="main_container">
      <div class="tools">
        <h2 class="main_title">Инструменты</h2>
        <div class="tools_lists">
          <router-link to="#" class="tools_card">
            <div class="img">
              <img src="@/assets/images/tools_card_1.svg" alt="" />
            </div>
            <div class="title">Икигай</div>
          </router-link>
          <router-link to="#" class="tools_card">
            <span class="alert">1</span>
            <div class="img img_2">
              <img src="@/assets/images/tools_card_2.svg" alt="" />
            </div>
            <div class="title">Мастермайнд</div>
          </router-link>
          <router-link to="#" class="tools_card">
            <div class="img img_3">
              <img src="@/assets/images/tools_card_3.svg" alt="" />
            </div>
            <div class="title">Икигай</div>
          </router-link>
          <router-link :to="{ name: 'Development' }" class="tools_card">
            <span class="alert_2">
              <img src="@/assets/images/tools_alert_2.svg" alt="" />
            </span>
            <div class="img">
              <img src="@/assets/images/tools_card_1.svg" alt="" />
            </div>
            <div class="title">Колесо баланса</div>
            <div class="bg_img"></div>
          </router-link>
        </div>
      </div>
    </div>
    <!-- Tools end -->

    <!-- Event calendar -->
    <div class="main_container event_calendar">
      <div class="main_title">Календарь мероприятий</div>
      <div class="subtitle">Декабрь</div>
    </div>
    <event-calendar></event-calendar>
    <!-- Event calendar end -->

    <!-- paid modal -->
    <div class="paid_modal" :class="modal ? 'paid_modal_active' : ''">
      <div class="paid_modal_in">
        <div class="paid_modal_in_container" :class="reward ? 'paid_modal_in_container_three' : ''">
          <div class="paid_modal_in_wrapper" :class="reward ? 'paid_modal_in_wrapper_three' : ''">
            <div class="paid_modal_title">
              <span v-if="levelone">Вращай колесо фортуны и забирай подарок!</span>
              <span v-if="achievement">Вращай колесо фортуны и забирай подарок!</span>
              <span v-if="reward">Ваш приз с колеса фортуны!</span>
            </div>
            <div class="paid_modal_description">
              <span v-if="levelone">Доступно 1 бесплатное вращение</span>
              <span v-if="achievement">Бесплатно через 7ч 33м</span>
              <span v-if="reward"
                >Им можно будет воспользоваться в течение 24 часов в разделе «Учусь» на домашней странице</span
              >
            </div>
            <div class="achievement" v-if="achievement">
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
              <div class="achievement_sum">5000</div>
              вращение сейчас
            </div>
            <div class="master_class" v-if="reward">
              <div class="master_class_in">
                <div class="left_block">
                  <img src="@/assets/images/master_class_img.svg" alt="master_class_img" />
                </div>
                <div class="right_block">
                  <div class="title">Мастер-класс продающие диагностики</div>
                  <div class="available">Доступно 23:42:12</div>
                </div>
              </div>
            </div>
            <button class="rotate_btn paid_btn" v-if="levelone" @click="rewardFun">Вращать</button>
            <button class="buy_btn paid_btn" v-if="achievement">Купить</button>
            <div class="paid_links" v-if="reward">
              <router-link to="#" class="prize_link paid_link">Перейти к призу</router-link>
              <router-link to="#" class="main_link paid_link">Вернуться на главную</router-link>
            </div>
          </div>
          <WheelSpin model:value="wheelval" />
        </div>
        <button class="paid_modal_close_btn" @click="modal = false">
          <svg
            width="80.000000"
            height="80.000000"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <desc>Created with Pixso.</desc>
            <defs />
            <rect
              id="Frame 394"
              rx="40.000000"
              width="80.000000"
              height="80.000000"
              fill="#4B4B4B"
              fill-opacity="1.000000"
            />
            <rect
              id="ic_close"
              width="32.000000"
              height="32.000000"
              transform="translate(24.000000 24.000000)"
              fill="#FFFFFF"
              fill-opacity="0"
            />
            <path
              id="Path"
              d="M32 32L48 48"
              stroke="#323232"
              stroke-opacity="1.000000"
              stroke-width="2.000000"
              stroke-linejoin="round"
              stroke-linecap="round"
            />
            <path
              id="Path"
              d="M48 32L32 48"
              stroke="#323232"
              stroke-opacity="1.000000"
              stroke-width="2.000000"
              stroke-linejoin="round"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <div id="confetti-holder">
          <svg
            id="e0DQ82qcIov1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 400 400"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
          >
            <g id="e0DQ82qcIov2" transform="matrix(.5 0 0 0.5 25.964331 264.154351)">
              <g>
                <rect
                  id="e0DQ82qcIov4"
                  width="5.05"
                  height="5.05"
                  rx="0"
                  ry="0"
                  transform="matrix(.936393-.282895 0.286251 0.981448 64.977577 368.672426)"
                  opacity="0.977955"
                  fill="#c072ff"
                />
                <rect
                  id="e0DQ82qcIov5"
                  width="5.36"
                  height="5.36"
                  rx="0"
                  ry="0"
                  transform="matrix(-.52026 0.880062-.736215-.676747 48.193974 354.593138)"
                  opacity="0.495795"
                  fill="#c072ff"
                />
                <rect
                  id="e0DQ82qcIov6"
                  width="5.46"
                  height="5.46"
                  rx="0"
                  ry="0"
                  transform="matrix(.273897-.984967 0.886688 0.462368 73.798015 371.925674)"
                  opacity="0.979768"
                  fill="#ff648b"
                />
                <rect
                  id="e0DQ82qcIov7"
                  width="5.54"
                  height="5.54"
                  rx="0"
                  ry="0"
                  transform="matrix(-.594399 0.776885-.805945-.628994 30.669552 351.24617)"
                  opacity="0.586336"
                  fill="#ff648b"
                />
                <rect
                  id="e0DQ82qcIov8"
                  width="5.73"
                  height="5.73"
                  rx="0"
                  ry="0"
                  transform="matrix(.826776-.60135 0.407215 0.913332 35.887649 362.339551)"
                  opacity="0.723288"
                  fill="#00cfff"
                />
                <rect
                  id="e0DQ82qcIov9"
                  width="5.6"
                  height="5.6"
                  rx="0"
                  ry="0"
                  transform="matrix(.119809-1.015296 0.947042 0.321109 56.065517 361.261792)"
                  opacity="0.567307"
                  fill="#00cfff"
                />
                <rect
                  id="e0DQ82qcIov10"
                  width="5.07"
                  height="5.07"
                  rx="0"
                  ry="0"
                  transform="matrix(-.904592 0.476332-.271776-.96236 53.206615 363.602305)"
                  opacity="0.713493"
                  fill="#fbff45"
                />
                <rect
                  id="e0DQ82qcIov11"
                  width="4.4"
                  height="4.4"
                  rx="0"
                  ry="0"
                  transform="matrix(1.002242-.201723-.010821 0.999941 48.410803 340.641092)"
                  opacity="0.659697"
                  fill="#fbff45"
                />
                <rect
                  id="e0DQ82qcIov12"
                  width="4.79"
                  height="4.79"
                  rx="0"
                  ry="0"
                  transform="matrix(-.728809-.71695 0.834175-.5515 31.057268 346.447909)"
                  opacity="0.842201"
                  fill="#fbff45"
                />
              </g>
              <rect
                id="e0DQ82qcIov13"
                width="4.31"
                height="4.31"
                rx="0"
                ry="0"
                transform="matrix(.917199-.398429 0.398429 0.917199 43.298438 368.953002)"
                opacity="0.673915"
                fill="#bdff34"
              />
              <rect
                id="e0DQ82qcIov14"
                width="4.1"
                height="4.1"
                rx="0"
                ry="0"
                transform="matrix(-.081417-.99668 0.99668-.081417 26.811226 362.919013)"
                opacity="0.90469"
                fill="#bdff34"
              />
              <rect
                id="e0DQ82qcIov15"
                width="4.19"
                height="4.19"
                rx="0"
                ry="0"
                transform="matrix(-.99218 0.124814-.335708-.96565 53.592025 335.720453)"
                opacity="0.38981"
                fill="#bdff34"
              />
              <rect
                id="e0DQ82qcIov16"
                width="5"
                height="5"
                rx="0"
                ry="0"
                transform="matrix(-.208082-.978111 0.978111-.208082 64.721271 330.656082)"
                opacity="0.89513"
                fill="#bdff34"
              />
              <rect
                id="e0DQ82qcIov17"
                width="5.49"
                height="5.49"
                rx="0"
                ry="0"
                transform="matrix(.999714 0.023909-.023909 0.999714 39.643755 341.438936)"
                opacity="0.729057"
                fill="#bdff34"
              />
              <rect
                id="e0DQ82qcIov18"
                width="5.38"
                height="5.38"
                rx="0"
                ry="0"
                transform="matrix(-.951755-.306858 0.104556-1.01698 35.098205 371.498135)"
                opacity="0.815943"
                fill="#0af"
              />
              <rect
                id="e0DQ82qcIov19"
                width="4.4"
                height="4.4"
                rx="0"
                ry="0"
                transform="matrix(.696163 0.717883-.717883 0.696163 69.474594 340.093007)"
                opacity="0.851205"
                fill="#0af"
              />
              <rect
                id="e0DQ82qcIov20"
                width="4.33"
                height="4.33"
                rx="0"
                ry="0"
                transform="matrix(.734915 0.67816-.67816 0.734915 57.020715 379.065431)"
                opacity="0.55536"
                fill="#0af"
              />
              <rect
                id="e0DQ82qcIov21"
                width="5.22"
                height="5.22"
                rx="0"
                ry="0"
                transform="matrix(-.775496-.631353 0.631353-.775496 35.902264 339.066393)"
                opacity="0.614565"
                fill="#0af"
              />
              <rect
                id="e0DQ82qcIov22"
                width="4.83"
                height="4.83"
                rx="0"
                ry="0"
                transform="matrix(.840567 0.541708-.36304 0.95571 70.962808 331.267633)"
                opacity="0.766126"
                fill="#fdb168"
              />
              <rect
                id="e0DQ82qcIov23"
                width="4.2"
                height="4.2"
                rx="0"
                ry="0"
                transform="matrix(-.852823-.522201 0.522201-.852823 81.806291 363.566238)"
                opacity="0.559862"
                fill="#fdb168"
              />
              <rect
                id="e0DQ82qcIov24"
                width="4.54"
                height="4.54"
                rx="0"
                ry="0"
                transform="matrix(.598884 0.800836-.800836 0.598884 80.494029 335.455588)"
                opacity="0.950555"
                fill="#fdb168"
              />
              <rect
                id="e0DQ82qcIov25"
                width="5.74"
                height="5.74"
                rx="0"
                ry="0"
                transform="matrix(.999985-.00541 0.00541 0.999985 39.928055 326.929249)"
                opacity="0.677693"
                fill="#fdb168"
              />
              <path
                id="e0DQ82qcIov26"
                d="M65.36,380.69l-1,.55-.54-1c-.291171-.535898-.846123-.875751-1.455811-.891538s-1.181484.294889-1.5.815-.33536,1.17064-.044189,1.706538l2.18,4l4-2.18c.828427-.452874,1.132873-1.491573.68-2.32s-1.491573-1.132873-2.32-.68Z"
                transform="matrix(.913672-.406453 0.406453 0.913672-169.96593 59.145085)"
                fill="#ff648b"
              />
              <path
                id="e0DQ82qcIov27"
                d="M73.25,326l-1,.48-.48-1c-.403168-.828427-1.401573-1.173168-2.23-.77s-1.173168,1.401573-.77,2.23l1.95,4l4-1.95c.535898-.260804.891952-.787695.934038-1.382199s-.236188-1.1663-.73-1.5-1.12814-.378605-1.664038-.117801Z"
                transform="translate(-20.000595 0.001253)"
                fill="#ffa4bb"
              />
              <path
                id="e0DQ82qcIov28"
                d="M59.79,359.68l-1.09.91-.92-1.09c-.474847-.63703-1.263543-.958542-2.048422-.835037s-1.436723.671692-1.692987,1.423766-.07476,1.584221.471409,2.161271l3.66,4.36L62.53,363c.902986-.75663,1.02163-2.102014.265-3.005s-2.102014-1.02163-3.005-.265Z"
                transform="translate(-19.99905 0.000039)"
                fill="#e0b9ff"
              />
              <polygon
                id="e0DQ82qcIov29"
                points="84.7,374.79 82.18,375.73 82.97,373.16 81.3,371.05 83.99,371 85.48,368.76 86.36,371.31 88.95,372.03 86.8,373.65 86.91,376.34 84.7,374.79"
                transform="translate(-20.000002 0.000003)"
                fill="#fdb168"
              />
              <polygon
                id="e0DQ82qcIov30"
                points="86.87,345.57 84.55,347.61 84.34,344.52 81.69,342.95 84.55,341.8 85.23,338.79 87.21,341.16 90.28,340.88 88.64,343.49 89.86,346.32 86.87,345.57"
                transform="translate(-20.000001-.000003)"
                fill="#fed3aa"
              />
              <polygon
                id="e0DQ82qcIov31"
                points="52.58,342.08 50.64,344.06 50.25,341.32 47.78,340.09 50.26,338.87 50.67,336.14 52.59,338.12 55.32,337.66 54.02,340.11 55.3,342.56 52.58,342.08"
                transform="translate(-20 0.000006)"
                fill="#fed3aa"
              />
              <circle id="e0DQ82qcIov32" r="2.84" transform="matrix(1 0 0.212557 1 21.079994 358.87)" fill="#00cfff" />
              <circle id="e0DQ82qcIov33" r="3.37" transform="matrix(1 0 0.212557 1 81.819993 336.5)" fill="#00cfff" />
            </g>
            <g id="e0DQ82qcIov34" transform="matrix(.5 0 0 0.5 169.566513 264.155382)">
              <g>
                <rect
                  id="e0DQ82qcIov36"
                  width="5.33"
                  height="5.33"
                  rx="0"
                  ry="0"
                  transform="matrix(-.259082-.988968 0.998906-.046758 337.859707 326.538286)"
                  opacity="0.494701"
                  fill="#c072ff"
                />
                <rect
                  id="e0DQ82qcIov37"
                  width="5.36"
                  height="5.36"
                  rx="0"
                  ry="0"
                  transform="matrix(-.52026 0.880062-.736215-.676747 335.40214 354.604187)"
                  opacity="0.495795"
                  fill="#c072ff"
                />
                <rect
                  id="e0DQ82qcIov38"
                  width="5.54"
                  height="5.54"
                  rx="0"
                  ry="0"
                  transform="matrix(-.594399 0.776885-.805945-.628994 317.848305 351.239972)"
                  opacity="0.586336"
                  fill="#ff648b"
                />
                <rect
                  id="e0DQ82qcIov39"
                  width="5.6"
                  height="5.6"
                  rx="0"
                  ry="0"
                  transform="matrix(.105301-.972508 1.015296 0.119809 343.104343 361.714571)"
                  opacity="0.567307"
                  fill="#00cfff"
                />
                <rect
                  id="e0DQ82qcIov40"
                  width="4.4"
                  height="4.4"
                  rx="0"
                  ry="0"
                  transform="matrix(.957064-.202212 0.201723 1.002242 335.225782 340.62479)"
                  opacity="0.659697"
                  fill="#fbff45"
                />
              </g>
              <rect
                id="e0DQ82qcIov41"
                width="4.31"
                height="4.31"
                rx="0"
                ry="0"
                transform="matrix(.917199-.398429 0.398429 0.917199 330.488863 368.958161)"
                opacity="0.673915"
                fill="#bdff34"
              />
              <rect
                id="e0DQ82qcIov42"
                width="4.19"
                height="4.19"
                rx="0"
                ry="0"
                transform="matrix(-.99218 0.124814-.124814-.99218 340.346061 335.782621)"
                opacity="0.38981"
                fill="#bdff34"
              />
              <rect
                id="e0DQ82qcIov43"
                width="4.4"
                height="4.4"
                rx="0"
                ry="0"
                transform="matrix(.696163 0.717883-.569909 0.848753 356.330011 339.76603)"
                opacity="0.851205"
                fill="#0af"
              />
              <rect
                id="e0DQ82qcIov44"
                width="4.33"
                height="4.33"
                rx="0"
                ry="0"
                transform="matrix(.734915 0.67816-.67816 0.734915 344.231055 379.046296)"
                opacity="0.55536"
                fill="#0af"
              />
              <rect
                id="e0DQ82qcIov45"
                width="5.22"
                height="5.22"
                rx="0"
                ry="0"
                transform="matrix(-.775496-.631353 0.466516-.909694 323.53011 339.412127)"
                opacity="0.614565"
                fill="#0af"
              />
              <rect
                id="e0DQ82qcIov46"
                width="5.16"
                height="5.16"
                rx="0"
                ry="0"
                transform="matrix(-.587644-.80912 0.80912-.587644 368.660951 351.715923)"
                opacity="0.561724"
                fill="#fdb168"
              />
              <rect
                id="e0DQ82qcIov47"
                width="4.83"
                height="4.83"
                rx="0"
                ry="0"
                transform="matrix(.840567 0.541708-.541708 0.840567 358.58508 331.55421)"
                opacity="0.766126"
                fill="#fdb168"
              />
              <rect
                id="e0DQ82qcIov48"
                width="4.2"
                height="4.2"
                rx="0"
                ry="0"
                transform="matrix(-.852823-.522201 0.340928-.96382 369.386316 363.793275)"
                opacity="0.559862"
                fill="#fdb168"
              />
              <rect
                id="e0DQ82qcIov49"
                width="4.54"
                height="4.54"
                rx="0"
                ry="0"
                transform="matrix(.598884 0.800836-.673539 0.769107 367.404518 335.079243)"
                opacity="0.950555"
                fill="#fdb168"
              />
              <rect
                id="e0DQ82qcIov50"
                width="5.74"
                height="3"
                rx="0"
                ry="0"
                transform="matrix(.915917 0.401368-.401368 0.915917 328.522583 325.989372)"
                opacity="0.677693"
                fill="#fdb168"
              />
              <path
                id="e0DQ82qcIov51"
                d="M312.56,380.69l-1,.55-.55-1c-.291171-.535898-.846123-.875751-1.455811-.891538s-1.181484.294889-1.5.815-.33536,1.17064-.044189,1.706538l2.18,4l4-2.18c.828427-.452873,1.132873-1.491573.68-2.32s-1.491573-1.132873-2.32-.68Z"
                transform="translate(19.999862-.000002)"
                fill="#ffa4bb"
              />
              <path
                id="e0DQ82qcIov52"
                d="M320.45,326l-1,.48-.49-1c-.403168-.828427-1.401573-1.173168-2.23-.77s-1.173168,1.401573-.77,2.23l1.94,4l4-1.95c.828427-.400406,1.175406-1.396573.775-2.225s-1.396573-1.175406-2.225-.775Z"
                transform="translate(20.00151-.00183)"
                fill="#ff648b"
              />
              <path
                id="e0DQ82qcIov53"
                d="M307,359.68l-1.1.91-.9-1.09c-.77893-.822972-2.06436-.896096-2.931595-.16677s-1.015618,2.008256-.338405,2.91677l3.65,4.36l4.37-3.66c.902986-.75663,1.02163-2.102014.265-3.005s-2.102014-1.02163-3.005-.265Z"
                transform="translate(19.998733 0.000008)"
                fill="#c072ff"
              />
              <polygon
                id="e0DQ82qcIov54"
                points="331.9,374.79 329.38,375.73 330.17,373.16 328.49,371.05 331.19,371 332.68,368.76 333.55,371.31 336.15,372.03 333.99,373.65 334.11,376.34 331.9,374.79"
                transform="matrix(.962685-.270623 0.270623 0.962685-68.420318 103.835142)"
                fill="#fdb168"
              />
              <polygon
                id="e0DQ82qcIov55"
                points="334.06,345.57 331.74,347.61 331.54,344.52 328.88,342.95 331.75,341.8 332.43,338.79 334.41,341.16 337.48,340.88 335.84,343.49 337.06,346.32 334.06,345.57"
                transform="matrix(.772735 0.634728-.634728 0.772735 313.558859-133.481571)"
                fill="#fed3aa"
              />
              <polygon
                id="e0DQ82qcIov56"
                points="319.78,342.08 317.84,344.06 317.45,341.32 314.98,340.09 317.46,338.87 317.87,336.14 319.79,338.12 322.52,337.66 321.22,340.11 322.5,342.56 319.78,342.08"
                transform="translate(0 0.000006)"
                fill="#cfff6b"
              />
              <circle id="e0DQ82qcIov57" r="2.51" transform="translate(350.29 359.83)" fill="#0af" />
              <circle id="e0DQ82qcIov58" r="3.37" transform="translate(369.01 336.5)" fill="#00cfff" />
            </g>
            <path
              id="e0DQ82qcIov74"
              d="M102.82,10c0,2-2,2-2,4s2,2,2,4-2,2-2,4s2,2,2,4-2,2-2,4s2,2,2,4-2,2-2,4s2,2,2,4-2,2-2,4s2,2,2,4-2,2-2,4"
              transform="matrix(1.993734 0.158196-.158196 1.993734-117.819725 332.826905)"
              fill="none"
              stroke="#ff648b"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-dashoffset="153.37"
              stroke-dasharray="16,85.68"
            />
            <path
              id="e0DQ82qcIov75"
              d="M89.77,10c0,2-2,2-2,4s2,2,2,4-2,2-2,4s2,2,2,4-2,2-2,4s2,2,2,4-2,2-2,4s2,2,2,4-2,2-2,4s2,2,2,4-2,2-2,4"
              transform="matrix(1.993734 0.158196-.158196 1.993734-181.43862 318.626535)"
              fill="none"
              stroke="#00cfff"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-dashoffset="153.37"
              stroke-dasharray="16,85.68"
            />
            <path
              id="e0DQ82qcIov76"
              d="M96.3,10c0,2-2,2-2,4s2,2,2,4-2,2-2,4s2,2,2,4-2,2-2,4s2,2,2,4-2,2-2,4s2,2,2,4-2,2-2,4s2,2,2,4-2,2-2,4"
              transform="matrix(1.987757-.220959 0.220959 1.987757 190.754493 289.449147)"
              fill="none"
              stroke="#fbff45"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-dashoffset="153.37"
              stroke-dasharray="16,85.68"
            />
            <path
              id="e0DQ82qcIov77"
              d="M109.34,10c0,2-2,2-2,4s2,2,2,4-2,2-2,4s2,2,2,4-2,2-2,4s2,2,2,4-2,2-2,4s2,2,2,4-2,2-2,4s2,2,2,4-2,2-2,4"
              transform="matrix(1.987757-.220959 0.220959 1.987757 117.393384 310.099187)"
              fill="none"
              stroke="#0af"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-dashoffset="153.37"
              stroke-dasharray="16,85.68"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Stories from "@/components/newVersionComponents/Stories.vue";
import EventCalendar from "@/components/newVersionComponents/EventCalendar.vue";
import WheelSpin from "@/components/WheelSpin.vue";

export default {
  name: "NewHome",
  data() {
    return {
      modal: false,
      levelone: true,
      achievement: false,
      reward: false,
      wheelval: "",
    };
  },
  components: {
    Stories,
    EventCalendar,
    WheelSpin,
  },
  mounted() {
    if (this.reward) {
      $(".wheel-wrapper").addClass("wheel-wrapper-top");
    } else {
      $(".wheel-wrapper").removeClass("wheel-wrapper-top");
    }

    (function (s, i, u, o, c, w, d, t, n, x, e, p, a, b) {
      (a = document.getElementById(i.root)).svgatorPlayer = {
        ready: (function (a) {
          b = [];
          return function (c) {
            return c ? (b.push(c), a.svgatorPlayer) : b;
          };
        })(a),
      };
      w[o] = w[o] || {};
      w[o][s] = w[o][s] || [];
      w[o][s].push(i);
      e = d.createElementNS(n, t);
      e.async = true;
      e.setAttributeNS(x, "href", [u, s, ".", "j", "s", "?", "v", "=", c].join(""));
      e.setAttributeNS(null, "src", [u, s, ".", "j", "s", "?", "v", "=", c].join(""));
      p = d.getElementsByTagName(t)[0];
      p.parentNode.insertBefore(e, p);
    })(
      "91c80d77",
      {
        root: "e0DQ82qcIov1",
        version: "2022-05-04",
        animations: [
          {
            elements: {
              e0DQ82qcIov2: {
                transform: {
                  data: { t: { x: -51.928662, y: -353.428619 } },
                  keys: {
                    o: [
                      { t: 200, v: { x: 51.928662, y: 440.868661, type: "corner" }, e: [0, 0, 0.58, 1] },
                      { t: 600, v: { x: 120.290877, y: 0.059958, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 1880, v: { x: 172.503841, y: 132.490147, type: "corner" } },
                      { t: 3200, v: { x: 290.290877, y: 432.441375, type: "corner" } },
                    ],
                    s: [
                      { t: 200, v: { x: 0.5, y: 0.5 }, e: [0, 0, 0.58, 1] },
                      { t: 600, v: { x: 1, y: 1 } },
                    ],
                  },
                },
              },
              e0DQ82qcIov4: {
                transform: {
                  data: { k: { x: 12, y: -12 }, t: { x: -2.525, y: -2.525 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 68.064753, y: 370.436272, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: 138.217652, y: 366.183102, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: 62.969741, y: 597.053495, type: "corner" } },
                    ],
                    r: [
                      { t: 0, v: -4.25997, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: 3.089446 },
                      { t: 3000, v: 715.74003 },
                    ],
                    s: [
                      { t: 0, v: { x: 1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 500, v: { x: 1, y: -1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 1000, v: { x: 1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 1500, v: { x: -1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 2000, v: { x: 1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 2500, v: { x: 1, y: -1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 3000, v: { x: 1, y: 1 } },
                    ],
                  },
                },
              },
              e0DQ82qcIov5: {
                transform: {
                  data: { k: { x: 0, y: -12 }, t: { x: -2.68, y: -2.68 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 44.82662, y: 355.138022, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: 59.1463, y: 304.670723, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: -73.608537, y: 494.439665, type: "corner" } },
                    ],
                    r: [
                      { t: 0, v: 132.589988, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: 139.939404 },
                      { t: 3000, v: 852.589988 },
                    ],
                    s: [
                      { t: 0, v: { x: 1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 500, v: { x: 1, y: -1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 1000, v: { x: 1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 1500, v: { x: -1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 2000, v: { x: 1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 2500, v: { x: 1, y: -1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 3000, v: { x: 1, y: 1 } },
                    ],
                  },
                },
              },
              e0DQ82qcIov6: {
                transform: {
                  data: { k: { x: 0, y: -12 }, t: { x: -2.73, y: -2.73 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 76.966411, y: 370.498978, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: 155.616925, y: 356.566181, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: 93.036148, y: 575.583428, type: "corner" } },
                    ],
                    r: [
                      { t: 0, v: -62.459981, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: -55.110565 },
                      { t: 3000, v: 657.540019 },
                    ],
                    s: [
                      { t: 0, v: { x: 1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 500, v: { x: 1, y: -1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 1000, v: { x: 1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 1500, v: { x: -1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 2000, v: { x: 1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 2500, v: { x: 1, y: -1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 3000, v: { x: 1, y: 1 } },
                    ],
                  },
                },
              },
              e0DQ82qcIov7: {
                transform: {
                  data: { k: { x: 12, y: -12 }, t: { x: -2.77, y: -2.77 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 26.7906, y: 351.65583, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: -2.272941, y: 293.411173, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: -163.981636, y: 470.444934, type: "corner" } },
                    ],
                    r: [
                      { t: 0, v: 139.969992, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: 147.319408 },
                      { t: 3000, v: 859.969992 },
                    ],
                    s: [
                      { t: 0, v: { x: 1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 500, v: { x: 1, y: -1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 1000, v: { x: 1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 1500, v: { x: -1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 2000, v: { x: 1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 2500, v: { x: 1, y: -1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 3000, v: { x: 1, y: 1 } },
                    ],
                  },
                },
              },
              e0DQ82qcIov8: {
                transform: {
                  data: { k: { x: 0, y: -12 }, t: { x: -2.865, y: -2.865 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 39.423034, y: 363.233381, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: 36.500064, y: 344.648626, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: -112.122565, y: 559.021139, type: "corner" } },
                    ],
                    r: [
                      { t: 0, v: -24.030013, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: -16.680597 },
                      { t: 3000, v: 695.969987 },
                    ],
                    s: [
                      { t: 0, v: { x: 1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 500, v: { x: 1, y: -1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 1000, v: { x: 1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 1500, v: { x: -1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 2000, v: { x: 1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 2500, v: { x: 1, y: -1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 3000, v: { x: 1, y: 1 } },
                    ],
                  },
                },
              },
              e0DQ82qcIov9: {
                transform: {
                  data: { k: { x: 0, y: -12 }, t: { x: -2.8, y: -2.8 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 59.052701, y: 359.318068, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: -10.947299, y: 310.72201, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: -178.694775, y: 502.764104, type: "corner" } },
                    ],
                    r: [
                      { t: 0, v: -71.26999, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: -63.920574 },
                      { t: 3000, v: 648.73001 },
                    ],
                    s: [
                      { t: 0, v: { x: 1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 500, v: { x: 1, y: -1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 1000, v: { x: 1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 1500, v: { x: -1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 2000, v: { x: 1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 2500, v: { x: 1, y: -1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 3000, v: { x: 1, y: 1 } },
                    ],
                  },
                },
              },
              e0DQ82qcIov10: {
                transform: {
                  data: { k: { x: 0, y: -12 }, t: { x: -2.535, y: -2.535 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 50.224523, y: 362.370224, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: 67.315377, y: 339.995252, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: -59.443231, y: 551.12236, type: "corner" } },
                    ],
                    r: [
                      { t: 0, v: 164.230015, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: 171.579431 },
                      { t: 3000, v: 884.230015 },
                    ],
                    s: [
                      { t: 0, v: { x: 0.999999, y: 0.999999 }, e: [0.42, 0, 0.58, 1] },
                      { t: 500, v: { x: 0.999999, y: -1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 1000, v: { x: 0.999999, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 1500, v: { x: -1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 2000, v: { x: 1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 2500, v: { x: 1, y: -1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 3000, v: { x: 1, y: 1 } },
                    ],
                  },
                },
              },
              e0DQ82qcIov11: {
                transform: {
                  data: { k: { x: 0, y: -12 }, t: { x: -2.2, y: -2.2 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 50.591928, y: 342.397172, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: 70.805055, y: 272.948791, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: -53.301182, y: 445.3462, type: "corner" } },
                    ],
                    r: [
                      { t: 0, v: 0.62001, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: 7.969426 },
                      { t: 3000, v: 720.62001 },
                    ],
                    s: [
                      { t: 0, v: { x: 1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 500, v: { x: 1, y: -1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 1000, v: { x: 1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 1500, v: { x: -1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 2000, v: { x: 1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 2500, v: { x: 1, y: -1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 3000, v: { x: 1, y: 1 } },
                    ],
                  },
                },
              },
              e0DQ82qcIov12: {
                transform: {
                  data: { k: { x: 0, y: -12 }, t: { x: -2.395, y: -2.395 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 31.309619, y: 343.409971, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: 10.075504, y: 277.1748, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: -150.760432, y: 425.001715, type: "corner" } },
                    ],
                    r: [
                      { t: 0, v: 236.530023, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: 243.879439 },
                      { t: 3000, v: 956.530023 },
                    ],
                    s: [
                      { t: 0, v: { x: 1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 500, v: { x: 1, y: -1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 1000, v: { x: 1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 1500, v: { x: -1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 2000, v: { x: 1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 2500, v: { x: 1, y: -1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 3000, v: { x: 1, y: 1 } },
                    ],
                  },
                },
              },
              e0DQ82qcIov13: {
                transform: {
                  data: { r: -23.480008, t: { x: -2.155, y: -2.155 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 46.133617, y: 370.070952, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: 23.496828, y: 362.012633, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: -66.196782, y: 589.990632, type: "corner" } },
                    ],
                  },
                },
              },
              e0DQ82qcIov14: {
                transform: {
                  data: { r: 265.32998, t: { x: -2.05, y: -2.05 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 28.687515, y: 360.708914, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: -38.480575, y: 329.213846, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: -157.079058, y: 544.79685, type: "corner" } },
                    ],
                    s: [
                      { t: 600, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 800, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1000, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1200, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1400, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1600, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1800, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2000, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2200, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2400, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2600, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2800, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 3000, v: { x: 1, y: 1 } },
                    ],
                  },
                },
              },
              e0DQ82qcIov15: {
                transform: {
                  data: { r: 172.829984, k: { x: 12, y: 0 }, t: { x: -2.095, y: -2.095 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 50.810098, y: 333.958901, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: 34.042574, y: 225.979204, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: -39.880905, y: 368.085033, type: "corner" } },
                    ],
                  },
                },
              },
              e0DQ82qcIov16: {
                transform: {
                  data: { r: 257.990019, t: { x: -2.5, y: -2.5 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 66.646344, y: 327.690598, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: 85.54472, y: 215.365754, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: 25.149435, y: 337.898437, type: "corner" } },
                    ],
                    s: [
                      { t: 600, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 800, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1000, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1200, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1400, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1600, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1800, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2000, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2200, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2400, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2600, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2800, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 3000, v: { x: 1, y: 1 } },
                    ],
                  },
                },
              },
              e0DQ82qcIov17: {
                transform: {
                  data: { r: 1.370016, t: { x: -2.745, y: -2.745 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 42.32234, y: 344.248782, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: 4.991094, y: 282.082718, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: -97.714501, y: 439.325802, type: "corner" } },
                    ],
                    s: [
                      { t: 600, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 800, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1000, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1200, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1400, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1600, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1800, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2000, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2200, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2400, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2600, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2800, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 3000, v: { x: 1, y: 1 } },
                    ],
                  },
                },
              },
              e0DQ82qcIov18: {
                transform: {
                  data: { r: 197.869986, k: { x: 12, y: 0 }, t: { x: -2.69, y: -2.69 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 32.81924, y: 367.937011, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: -26.123954, y: 350.393784, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: -143.266235, y: 567.352506, type: "corner" } },
                    ],
                    s: [
                      { t: 600, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 800, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1000, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1200, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1400, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1600, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1800, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2000, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2200, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2400, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2600, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2800, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 3000, v: { x: 1, y: 1 } },
                    ],
                  },
                },
              },
              e0DQ82qcIov19: {
                transform: {
                  data: { r: 45.880004, s: { x: 0.999999, y: 0.999999 }, t: { x: -2.2, y: -2.2 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 69.42681, y: 343.203907, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: 102.53224, y: 268.644497, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: 69.576063, y: 432.418181, type: "corner" } },
                    ],
                  },
                },
              },
              e0DQ82qcIov20: {
                transform: {
                  data: { r: 42.699998, s: { x: 1.000001, y: 1.000001 }, t: { x: -2.165, y: -2.165 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 57.14359, y: 382.12474, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: 52.363073, y: 377.223158, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: -18.856827, y: 649.588199, type: "corner" } },
                    ],
                  },
                },
              },
              e0DQ82qcIov21: {
                transform: {
                  data: { r: 219.15, t: { x: -2.61, y: -2.61 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 35.526051, y: 335.394518, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: -20.675301, y: 231.001058, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: -135.418854, y: 375.028305, type: "corner" } },
                    ],
                  },
                },
              },
              e0DQ82qcIov22: {
                transform: {
                  data: { r: 32.799978, k: { x: 12, y: 0 }, t: { x: -2.415, y: -2.415 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 72.116036, y: 334.883898, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: 107.372441, y: 221.01296, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: 76.814992, y: 361.197371, type: "corner" } },
                    ],
                    s: [
                      { t: 600, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 800, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1000, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1200, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1400, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1600, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1800, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2000, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2200, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2400, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2600, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2800, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 3000, v: { x: 1, y: 1 } },
                    ],
                  },
                },
              },
              e0DQ82qcIov23: {
                transform: {
                  data: { r: 211.47999, t: { x: -2.1, y: -2.1 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 81.111985, y: 360.678689, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: 124.737201, y: 325.050741, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: 107.54102, y: 522.863102, type: "corner" } },
                    ],
                    s: [
                      { t: 600, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 800, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1000, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1200, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1400, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1600, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1800, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2000, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2200, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2400, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2600, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2800, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 3000, v: { x: 1, y: 1 } },
                    ],
                  },
                },
              },
              e0DQ82qcIov24: {
                transform: {
                  data: { r: 53.209996, t: { x: -2.27, y: -2.27 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 80.035598, y: 338.632952, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: 120.28118, y: 242.721211, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: 100.686271, y: 390.591294, type: "corner" } },
                    ],
                  },
                },
              },
              e0DQ82qcIov25: {
                transform: {
                  data: { r: -0.309972, t: { x: -2.87, y: -2.87 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 42.81354, y: 329.78368, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: 9.077533, y: 200.244515, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: -81.070598, y: 353.708746, type: "corner" } },
                    ],
                  },
                },
              },
              e0DQ82qcIov26: {
                transform: {
                  data: { t: { x: -64.251358, y: -382.608965 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 44.251196, y: 382.608963, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: 5.056724, y: 240.47839, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: -48.895685, y: 624.464424, type: "corner" } },
                    ],
                    r: [
                      { t: 600, v: -23.982197 },
                      { t: 3000, v: -27.416918 },
                    ],
                  },
                },
              },
              e0DQ82qcIov27: {
                transform: {
                  data: { t: { x: -72.129825, y: -327.740721 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 52.12923, y: 327.741974, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: 28.30154, y: 210.136787, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: -8.016826, y: 321.537428, type: "corner" } },
                    ],
                    r: [
                      { t: 600, v: 0 },
                      { t: 3000, v: -27.416918 },
                    ],
                  },
                },
              },
              e0DQ82qcIov28: {
                transform: {
                  data: { t: { x: -58.60866, y: -362.624473 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 38.60961, y: 362.624512, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: -19.604272, y: 334.474967, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: -91.676691, y: 528.405553, type: "corner" } },
                    ],
                    r: [
                      { t: 600, v: 0 },
                      { t: 3000, v: -27.416918 },
                    ],
                  },
                },
              },
              e0DQ82qcIov29: {
                transform: {
                  data: { t: { x: -85.125, y: -372.55 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 65.124998, y: 372.550003, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: 60.58287, y: 328.985605, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: 39.906257, y: 605.071179, type: "corner" } },
                    ],
                  },
                },
              },
              e0DQ82qcIov30: {
                transform: {
                  data: { t: { x: -85.985, y: -343.2 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 65.984999, y: 343.199997, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: 67.093979, y: 256.359486, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: 55.179319, y: 416.286149, type: "corner" } },
                    ],
                  },
                },
              },
              e0DQ82qcIov31: {
                transform: {
                  data: { t: { x: -51.55, y: -340.1 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 31.55, y: 340.100006, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: -44.109368, y: 248.924038, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: -120.465769, y: 398.715533, type: "corner" } },
                    ],
                  },
                },
              },
              e0DQ82qcIov32: {
                transform: {
                  data: { k: { x: 12, y: 0 }, t: { x: 0, y: -0.000026 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 21.08, y: 358.870026, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: -56.695208, y: 316.172304, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: -171.514115, y: 510.141829, type: "corner" } },
                    ],
                  },
                },
              },
              e0DQ82qcIov33: {
                transform: {
                  data: { k: { x: 12, y: 0 }, t: { x: 0.000004, y: -0.000031 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 81.819996, y: 336.500031, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: 124.984262, y: 237.108421, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: 122.585537, y: 383.057086, type: "corner" } },
                    ],
                  },
                },
              },
              e0DQ82qcIov34: {
                transform: {
                  data: { t: { x: -339.133026, y: -353.430679 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 339.133026, y: 440.870722, type: "corner" }, e: [0, 0, 0.58, 1] },
                      { t: 400, v: { x: 260.436988, y: 0.00206, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: 120.436988, y: 472.443436, type: "corner" } },
                    ],
                    s: [
                      { t: 0, v: { x: 0.5, y: 0.5 }, e: [0, 0, 0.58, 1] },
                      { t: 400, v: { x: 1, y: 1 } },
                    ],
                  },
                },
              },
              e0DQ82qcIov36: {
                transform: {
                  data: { k: { x: 0, y: -12 }, t: { x: -2.665, y: -2.665 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 339.831338, y: 323.778077, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: 360.698425, y: 165.66525, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: 404.696728, y: 305.971088, type: "corner" } },
                    ],
                    r: [
                      { t: 0, v: 267.319986, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: 274.669402 },
                      { t: 3000, v: 987.319986 },
                    ],
                    s: [
                      { t: 0, v: { x: 1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 500, v: { x: 1, y: -1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 1000, v: { x: 1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 1500, v: { x: -1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 2000, v: { x: 1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 2500, v: { x: 1, y: -1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 3000, v: { x: 1, y: 1 } },
                    ],
                  },
                },
              },
              e0DQ82qcIov37: {
                transform: {
                  data: { k: { x: 0, y: -12 }, t: { x: -2.68, y: -2.679999 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 332.034787, y: 355.149072, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: 335.734711, y: 291.35666, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: 365.763922, y: 456.825595, type: "corner" } },
                    ],
                    r: [
                      { t: 0, v: 132.589988, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: 139.939404 },
                      { t: 3000, v: 852.589988 },
                    ],
                    s: [
                      { t: 0, v: { x: 1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 500, v: { x: 1, y: -1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 1000, v: { x: 1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 1500, v: { x: -1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 2000, v: { x: 1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 2500, v: { x: 1, y: -1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 3000, v: { x: 1, y: 1 } },
                    ],
                  },
                },
              },
              e0DQ82qcIov38: {
                transform: {
                  data: { k: { x: 12, y: -12 }, t: { x: -2.77, y: -2.77 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 313.969353, y: 351.649632, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: 274.477002, y: 277.997683, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: 257.724466, y: 430.117852, type: "corner" } },
                    ],
                    r: [
                      { t: 0, v: 139.969992, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: 147.319408 },
                      { t: 3000, v: 859.969992 },
                    ],
                    s: [
                      { t: 0, v: { x: 1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 500, v: { x: 1, y: -1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 1000, v: { x: 1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 1500, v: { x: -1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 2000, v: { x: 1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 2500, v: { x: 1, y: -1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 3000, v: { x: 1, y: 1 } },
                    ],
                  },
                },
              },
              e0DQ82qcIov39: {
                transform: {
                  data: { k: { x: 12, y: -12 }, t: { x: -2.8, y: -2.8 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 346.242015, y: 359.327013, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: 381.987786, y: 159.327013, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: 460.321097, y: 464.011506, type: "corner" } },
                    ],
                    r: [
                      { t: 0, v: -71.26999, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: -63.920574 },
                      { t: 3000, v: 648.73001 },
                    ],
                    s: [
                      { t: 0, v: { x: 1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 500, v: { x: 1, y: -1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 1000, v: { x: 1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 1500, v: { x: -1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 2000, v: { x: 1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 2500, v: { x: 1, y: -1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 3000, v: { x: 1, y: 1 } },
                    ],
                  },
                },
              },
              e0DQ82qcIov40: {
                transform: {
                  data: { k: { x: 12, y: -12 }, t: { x: -2.2, y: -2.2 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 337.775113, y: 342.384855, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: 347.393466, y: 258.599075, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: 386.483034, y: 404.151462, type: "corner" } },
                    ],
                    r: [
                      { t: 0, v: 0.62001, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: 7.969426 },
                      { t: 3000, v: 720.62001 },
                    ],
                    s: [
                      { t: 0, v: { x: 1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 500, v: { x: 1, y: -1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 1000, v: { x: 1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 1500, v: { x: -1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 2000, v: { x: 1, y: 1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 2500, v: { x: 1, y: -1 }, e: [0.42, 0, 0.58, 1] },
                      { t: 3000, v: { x: 1, y: 1 } },
                    ],
                  },
                },
              },
              e0DQ82qcIov41: {
                transform: {
                  data: { r: -23.480008, t: { x: -2.155, y: -2.155 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 333.324042, y: 370.076111, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: 280.085239, y: 356.710812, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: 373.31293, y: 536.26526, type: "corner" } },
                    ],
                  },
                },
              },
              e0DQ82qcIov42: {
                transform: {
                  data: { r: 172.829984, t: { x: -2.095, y: -2.095 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 338.005958, y: 333.965489, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: 290.630985, y: 207.121767, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: 391.973902, y: 342.843305, type: "corner" } },
                    ],
                  },
                },
              },
              e0DQ82qcIov43: {
                transform: {
                  data: { r: 45.880004, k: { x: 12, y: 0 }, s: { x: 0.999999, y: 0.999999 }, t: { x: -2.2, y: -2.2 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 356.60777, y: 343.212629, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: 363.566855, y: 252.567281, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: 510.386099, y: 398.403963, type: "corner" } },
                    ],
                  },
                },
              },
              e0DQ82qcIov44: {
                transform: {
                  data: { r: 42.699998, t: { x: -2.165, y: -2.165 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 344.35393, y: 382.105602, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: 308.944614, y: 375.885601, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: 419.910214, y: 566.056536, type: "corner" } },
                    ],
                    s: [
                      { t: 600, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 800, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1000, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1200, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1400, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1600, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1800, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2000, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2200, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2400, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2600, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2800, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 3000, v: { x: 1, y: 1 } },
                    ],
                  },
                },
              },
              e0DQ82qcIov45: {
                transform: {
                  data: { r: 219.15, k: { x: 12, y: 0 }, t: { x: -2.61, y: -2.61 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 322.723673, y: 335.389995, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: 236.074642, y: 193.27712, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: 305.43786, y: 348.862778, type: "corner" } },
                    ],
                    s: [
                      { t: 600, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 800, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1000, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1200, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1400, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1600, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1800, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2000, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2200, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2400, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2600, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2800, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 3000, v: { x: 1, y: 1 } },
                    ],
                  },
                },
              },
              e0DQ82qcIov46: {
                transform: {
                  data: { r: 234.010016, t: { x: -2.58, y: -2.58 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 369.232359, y: 348.112273, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: 390.654123, y: 270.810625, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: 570.069779, y: 415.332942, type: "corner" } },
                    ],
                    s: [
                      { t: 600, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 800, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1000, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1200, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1400, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1600, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1800, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2000, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2200, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2400, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2600, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2800, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 3000, v: { x: 1, y: 1 } },
                    ],
                  },
                },
              },
              e0DQ82qcIov47: {
                transform: {
                  data: { r: 32.799978, t: { x: -2.415, y: -2.415 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 359.306824, y: 334.892403, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: 368.407056, y: 201.040458, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: 517.76228, y: 337.507771, type: "corner" } },
                    ],
                  },
                },
              },
              e0DQ82qcIov48: {
                transform: {
                  data: { r: 211.47999, k: { x: 12, y: 0 }, t: { x: -2.1, y: -2.1 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 368.311337, y: 360.672632, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: 385.771816, y: 309.827362, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: 549.037316, y: 480.545797, type: "corner" } },
                    ],
                    s: [
                      { t: 600, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 800, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1000, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1200, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1400, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1600, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1800, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2000, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2200, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2400, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2600, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2800, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 3000, v: { x: 1, y: 1 } },
                    ],
                  },
                },
              },
              e0DQ82qcIov49: {
                transform: {
                  data: { r: 53.209996, k: { x: 12, y: 0 }, t: { x: -2.27, y: -2.27 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 367.235051, y: 338.643013, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: 381.315795, y: 220.571666, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: 542.045315, y: 362.503156, type: "corner" } },
                    ],
                    s: [
                      { t: 600, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 800, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1000, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1200, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1400, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1600, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 1800, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2000, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2200, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2400, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2600, v: { x: 1, y: 1 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 2800, v: { x: 0, y: 0 }, e: [0.645, 0.045, 0.355, 1] },
                      { t: 3000, v: { x: 1, y: 1 } },
                    ],
                  },
                },
              },
              e0DQ82qcIov50: {
                transform: {
                  data: { r: 23.663757, t: { x: -2.87, y: -2.87 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 329.999336, y: 329.76998, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: 265.665974, y: 185.96649, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: 350.187687, y: 331.626855, type: "corner" } },
                    ],
                  },
                },
              },
              e0DQ82qcIov51: {
                transform: {
                  data: { t: { x: -311.441315, y: -382.608965 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 331.441177, y: 382.608963, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: 370.580827, y: 282.608955, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: 322.780243, y: 581.243292, type: "corner" } },
                    ],
                    r: [
                      { t: 600, v: 0 },
                      { t: 3000, v: -27.416918 },
                    ],
                  },
                },
              },
              e0DQ82qcIov52: {
                transform: {
                  data: { t: { x: -319.316361, y: -327.740722 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 339.317871, y: 327.738892, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: 364.888624, y: 179.476884, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: 359.772601, y: 320.824028, type: "corner" } },
                    ],
                    r: [
                      { t: 600, v: 0 },
                      { t: 3000, v: -27.416918 },
                    ],
                  },
                },
              },
              e0DQ82qcIov53: {
                transform: {
                  data: { t: { x: -305.909409, y: -362.720527 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 325.908142, y: 362.720535, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: 317.062688, y: 322.932297, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: 283.21855, y: 506.92949, type: "corner" } },
                    ],
                    r: [
                      { t: 600, v: 0 },
                      { t: 3000, v: -27.416918 },
                    ],
                  },
                },
              },
              e0DQ82qcIov54: {
                transform: {
                  data: { r: -15.701363, t: { x: -332.32, y: -372.55 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 352.319992, y: 372.550003, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: 398.087773, y: 327.631014, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: 427.726611, y: 542.547677, type: "corner" } },
                    ],
                  },
                },
              },
              e0DQ82qcIov55: {
                transform: {
                  data: { r: 39.399845, t: { x: -333.18, y: -343.2 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 353.180008, y: 343.199997, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: 408.123603, y: 237.271459, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: 451.543185, y: 384.595506, type: "corner" } },
                    ],
                  },
                },
              },
              e0DQ82qcIov56: {
                transform: {
                  data: { t: { x: -318.75, y: -340.1 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 318.75, y: 340.100006, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: 292.640575, y: 228.498455, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: 271.671483, y: 369.684164, type: "corner" } },
                    ],
                  },
                },
              },
              e0DQ82qcIov57: {
                transform: {
                  data: { t: { x: 0.000007, y: 0.000029 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 350.289993, y: 359.829971, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: 470.289982, y: 303.793677, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: 416.116329, y: 488.36212, type: "corner" } },
                    ],
                  },
                },
              },
              e0DQ82qcIov58: {
                transform: {
                  data: { t: { x: 0.000021, y: -0.000031 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 369.009979, y: 336.500031, type: "corner" }, e: [0.42, 0, 0.58, 1] },
                      { t: 600, v: { x: 466.01886, y: 213.234914, type: "corner" }, e: [0.42, 0, 1, 1] },
                      { t: 3000, v: { x: 556.221932, y: 355.912179, type: "corner" } },
                    ],
                  },
                },
              },
              e0DQ82qcIov74: {
                transform: {
                  data: { s: { x: 2, y: 2 }, t: { x: -101.82, y: -32 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 80.119972, y: 412.733887, type: "corner" }, e: [0, 0, 0.58, 1] },
                      { t: 600, v: { x: 110.119972, y: 22.733887, type: "corner" }, e: [0.55, 0.055, 0.675, 0.19] },
                      { t: 3000, v: { x: 110.119972, y: 632.733887, type: "corner" } },
                    ],
                    r: [
                      { t: 0, v: 4.536717, e: [0, 0, 0.58, 1] },
                      { t: 600, v: 0 },
                    ],
                  },
                },
                opacity: [
                  { t: 2900, v: 1 },
                  { t: 3000, v: 0 },
                ],
                "stroke-dashoffset": [
                  { t: 0, v: 153.37, e: [0, 0, 0.58, 1] },
                  { t: 600, v: 243.37 },
                  { t: 3000, v: 153.37, e: [0, 0, 0.58, 1] },
                ],
                "stroke-dasharray": [
                  { t: 0, v: [16, 85.68] },
                  { t: 600, v: [50, 51.68] },
                  { t: 700, v: [30, 71.68] },
                  { t: 3000, v: [30, 71.68] },
                ],
              },
              e0DQ82qcIov75: {
                transform: {
                  data: { s: { x: 2, y: 2 }, t: { x: -88.769997, y: -32 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: -9.517153, y: 396.469061, type: "corner" }, e: [0, 0, 0.58, 1] },
                      { t: 600, v: { x: 20.482847, y: 6.469061, type: "corner" }, e: [0.55, 0.055, 0.675, 0.19] },
                      { t: 3000, v: { x: 20.482847, y: 426.469061, type: "corner" } },
                    ],
                    r: [
                      { t: 0, v: 4.536717, e: [0, 0, 0.58, 1] },
                      { t: 600, v: 0 },
                    ],
                  },
                },
                opacity: [
                  { t: 2900, v: 1 },
                  { t: 3000, v: 0 },
                ],
                "stroke-dashoffset": [
                  { t: 0, v: 153.37, e: [0, 0, 0.58, 1] },
                  { t: 600, v: 243.37 },
                  { t: 3000, v: 153.37, e: [0, 0, 0.58, 1] },
                ],
                "stroke-dasharray": [
                  { t: 0, v: [16, 85.68] },
                  { t: 600, v: [50, 51.68] },
                  { t: 700, v: [30, 71.68] },
                  { t: 3000, v: [30, 71.68] },
                ],
              },
              e0DQ82qcIov76: {
                transform: {
                  data: { s: { x: 2, y: 2 }, t: { x: -95.300003, y: -32 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 387.258404, y: 332, type: "corner" }, e: [0, 0, 0.58, 1] },
                      { t: 600, v: { x: 347.258404, y: -28, type: "corner" }, e: [0.55, 0.055, 0.675, 0.19] },
                      { t: 3000, v: { x: 347.258404, y: 402, type: "corner" } },
                    ],
                    r: [
                      { t: 0, v: -6.342949, e: [0, 0, 0.58, 1] },
                      { t: 600, v: 0 },
                    ],
                  },
                },
                opacity: [
                  { t: 2900, v: 1 },
                  { t: 3000, v: 0 },
                ],
                "stroke-dashoffset": [
                  { t: 0, v: 153.37, e: [0, 0, 0.58, 1] },
                  { t: 600, v: 243.37 },
                  { t: 3000, v: 153.37, e: [0, 0, 0.58, 1] },
                ],
                "stroke-dasharray": [
                  { t: 0, v: [16, 85.68] },
                  { t: 600, v: [50, 51.68] },
                  { t: 700, v: [30, 71.68] },
                  { t: 3000, v: [30, 71.68] },
                ],
              },
              e0DQ82qcIov77: {
                transform: {
                  data: { s: { x: 2, y: 2 }, t: { x: -108.339996, y: -32 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 339.817631, y: 349.76874, type: "corner" }, e: [0, 0, 0.58, 1] },
                      { t: 600, v: { x: 299.817631, y: -10.23126, type: "corner" }, e: [0.55, 0.055, 0.675, 0.19] },
                      { t: 3000, v: { x: 299.817631, y: 579.76874, type: "corner" } },
                    ],
                    r: [
                      { t: 0, v: -6.342949, e: [0, 0, 0.58, 1] },
                      { t: 600, v: 0 },
                    ],
                  },
                },
                opacity: [
                  { t: 2900, v: 1 },
                  { t: 3000, v: 0 },
                ],
                "stroke-dashoffset": [
                  { t: 0, v: 153.37, e: [0, 0, 0.58, 1] },
                  { t: 600, v: 243.37 },
                  { t: 3000, v: 153.37, e: [0, 0, 0.58, 1] },
                ],
                "stroke-dasharray": [
                  { t: 0, v: [16, 85.68] },
                  { t: 600, v: [50, 51.68] },
                  { t: 700, v: [30, 71.68] },
                  { t: 3000, v: [30, 71.68] },
                ],
              },
            },
            s: "MDSA1ZDliNDI4NVDk1OTI4MTk0JODk4ZjhlSzQAyNWE1MzUyNTHA1MDRjNDI4NGDg5VTkyODU4WMzk0ODk4ZjhTlNDI1YTUxNGGNMNDI4OTk0OTDU5MjgxOTQ4LOThmOGU5M08P0MjVhNTE0YzKQyODZRODk4YDzhjNDI1YTUxVNGM0MkY4MThOjOTRGODU5MjWhlODE5NDg1NNDI1YTg2ODE4CYzkzODU0YzQJyOTM5MFRCODAU4NTg0NDI1YJTUxNGM0Mko4HNjkwOTM0MjVGhNTE1MDUwOWPQ/",
          },
        ],
        options: "MDIAxODkyMzlZOMGE4Ykc3ODg5NOGIzOTUxMzkO4Nzg5ODY3ZTNg5Nzg4NDg0NRzg4Ykg4MDdhKSzM5OTQ/",
      },
      "https://cdn.svgator.com/ply/",
      "__SVGATOR_PLAYER__",
      "2022-05-04",
      window,
      document,
      "script",
      "http://www.w3.org/2000/svg",
      "http://www.w3.org/1999/xlink"
    );
  },
  methods: {
    WheelSpinFun() {
      // $(".rotate-btn").click();
      // setTimeout(() => {
      //   this.reward = true;
      //   this.levelone = false;
      //   $(".paid_modal_in").css("max-height", "375px");
      //   setTimeout(() => {
      //     $("#confetti-holder").addClass("confetti-holder-active");
      //     const element = document.getElementById("e0DQ82qcIov1");
      //     element.svgatorPlayer.ready(function () {
      //       // this refers to the player object
      //       const player = element ? element.svgatorPlayer : {};
      //       if (player.play) {
      //         player.play();
      //       }
      //     });
      //   }, 500);
      //   setTimeout(() => {
      //     $("#confetti-holder").removeClass("confetti-holder-active");
      //   }, 3500);
      // }, 6000);
    },
    rewardFun() {
      $(".rotate-btn").click();
      setTimeout(() => {
        this.reward = true;
        this.levelone = false;
        $(".paid_modal_in").css("max-height", "375px");
        setTimeout(() => {
          $("#confetti-holder").addClass("confetti-holder-active");
          const element = document.getElementById("e0DQ82qcIov1");
          element.svgatorPlayer.ready(function () {
            // this refers to the player object
            const player = element ? element.svgatorPlayer : {};
            if (player.play) {
              player.play();
            }
          });
        }, 500);
        setTimeout(() => {
          $("#confetti-holder").removeClass("confetti-holder-active");
        }, 3500);
        $(".wheel-wrapper").addClass("wheel-wrapper-top");
      }, 6000);
    },
  },
};
</script>

<style lang="scss">
.new_home {
  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 48px !important;
    padding-bottom: 20px !important;

    .left_block {
      display: flex;
      align-items: flex-start;
      gap: 9px;

      img.user_img {
        width: 40px;
        height: 40px;
        flex-shrink: 0;
      }

      .name {
        color: #fff;
        font-size: 16px;
        font-weight: 600;
        line-height: 20px;
        margin-bottom: 9px;
      }

      .money {
        position: relative;
        border-radius: 44px;
        background: linear-gradient(90deg, #af7311 0%, rgba(175, 116, 17, 0.5) 100%);
        color: #fff;
        font-size: 12px;
        font-weight: 600;
        line-height: 14px;
        padding: 3px 9px 3px 26px;

        img {
          position: absolute;
          left: -7px;
          top: -7px;
        }
      }
    }
  }

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

  .wheels_btn {
    border-radius: 20px;
    background: linear-gradient(90deg, #fc5e1a 0%, #f7b733 100%);
    position: relative;
    padding: 16px;
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;

    .title {
      color: #fff;
      font-size: 16px;
      font-weight: 700;
      line-height: 20px;
      margin-bottom: 8px;
    }

    .subtitle {
      color: rgba(255, 255, 255, 0.8);
      font-size: 12px;
      font-weight: 500;
      line-height: 14px;
      margin-bottom: 12px;
    }

    .alert {
      border-radius: 37px;
      background: rgba(255, 255, 255, 0.2);
      padding: 8px 12px;
      color: #fff;
      font-size: 12px;
      font-weight: 700;
      line-height: 14px;
    }

    img {
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
    }
  }

  .tools {
    border-radius: 20px;
    background: #222;
    padding: 16px;
    margin: 24px auto;

    h2 {
      margin-bottom: 15px;
    }

    .tools_lists {
      display: flex;
      align-items: stretch;
      flex-wrap: wrap;
      gap: 8px;

      .tools_card {
        position: relative;
        border-radius: 12px;
        background: var(--theme-night-background-bg-card-04, #3b3b3b);
        padding: 12px;
        width: calc(50% - 4px);
        .title {
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          line-height: 18px;
          position: relative;
          z-index: 1;
        }

        &:nth-child(4) {
          position: relative;

          .bg_img {
            content: "";
            width: 100%;
            height: 100%;
            border-radius: 12px;
            background-color: rgba(59, 59, 59, 0.6);
            background-image: url("@/assets/images/lines_bg.png");
            background-size: cover;
            background-repeat: no-repeat;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
          }
        }
      }

      .alert {
        position: absolute;
        top: -4px;
        right: -4px;
        display: flex;
        width: 28px;
        height: 28px;
        justify-content: center;
        align-items: center;
        border-radius: 16px;
        background: #ff2e37;
        color: #fff;
        text-align: center;
        font-size: 14px;
        font-weight: 600;
        line-height: 18px;
      }

      .alert_2 {
        position: absolute;
        top: 4px;
        right: 4px;
        z-index: 3;
        display: inline-flex;
        height: 25px;
        padding: 8px 4px;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        background: #222;
      }

      .img {
        display: flex;
        width: 36px;
        height: 36px;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        background: #cf3aa5;
        margin-bottom: 8px;
        position: relative;
        z-index: 1;
      }

      .img_2 {
        border-radius: 8px;
        background: #ffa723;
      }

      .img_3 {
        border-radius: 8px;
        background: #33bba3;
      }
    }
  }

  .event_calendar {
    .main_title {
      margin-bottom: 16px;
    }

    .subtitle {
      position: relative;
      padding-right: 7px;
      display: inline-block;
      margin-bottom: 14px;

      &::after {
        position: absolute;
        content: "";
        width: 100vw;
        height: 1px;
        background: #4d4c4c;
        top: 50%;
        right: 0;
        transform: translate(100%, -50%);
      }
    }
  }
  .paid_modal {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    backdrop-filter: blur(13.5px);
    background: rgba(0, 0, 0, 0.5);
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0;
    transition: 0.3s;
    .paid_modal_in {
      max-width: 420px;
      max-height: 375px;
      width: 100%;
      height: 100%;
      position: relative;
      margin: 0 auto;
      .paid_modal_in_container {
        height: 100%;
        overflow: hidden;
        position: relative;
        border-radius: 24px;
        transform: translateY(200px);
        transition: 0.3s;
      }

      .paid_modal_in_wrapper {
        width: 100%;
        height: 100%;
        margin-bottom: 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        border-radius: 24px;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 33.227%, rgba(255, 255, 255, 0.48) 100%),
          rgb(207, 46, 46);
        overflow: hidden;
      }
      .paid_modal_in_wrapper_three {
        z-index: 5;
      }
      .paid_modal_in_container_three {
        overflow: visible;
      }
      .paid_modal_title {
        color: rgb(255, 255, 255);
        font-family: Raleway;
        font-size: 20px;
        font-weight: 700;
        line-height: 28px;
        letter-spacing: 0%;
        text-align: center;
        margin-bottom: 8px;
        padding: 24px 21px 0;
      }
      .paid_modal_description {
        max-width: 227px;
        margin: 0 auto;
        color: rgba(255, 255, 255, 0.75);
        font-family: Raleway;
        font-size: 12px;
        font-weight: 500;
        line-height: 14px;
        letter-spacing: 0%;
        text-align: center;
        margin-bottom: 24px;
      }
      .achievement {
        display: flex;
        align-items: center;
        padding: 0px 12px 0px 0px;
        gap: 4px;
        border-radius: 44px;
        background: rgba(255, 255, 255, 0.2);
        color: rgba(255, 255, 255, 0.8);
        font-family: Raleway;
        font-size: 12px;
        font-weight: 500;
        line-height: 0;
        letter-spacing: 0%;
        text-align: left;
        margin-bottom: 20px;
        svg {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .achievement_sum {
          color: rgb(255, 255, 255);
          font-family: Raleway;
          font-size: 14px;
          font-weight: 700;
          line-height: 18px;
          letter-spacing: 0%;
          text-align: left;
        }
      }
      .paid_btn {
        padding: 10px 24px 10px 24px;
        border: 2px solid rgba(255, 255, 255, 0.56);
        border-radius: 12px;
        background: linear-gradient(0deg, rgb(255, 109, 47), rgb(255, 184, 2) 100%);
        color: rgb(255, 255, 255);
        font-family: Raleway;
        font-size: 14px;
        font-weight: 700;
        line-height: 18px;
        letter-spacing: 0%;
        text-align: left;
        margin-bottom: 35px;
        cursor: pointer;
        user-select: none;
        position: relative;
        z-index: 3;
      }
      .master_class {
        margin-bottom: 24px;
        padding: 0 12px;
        .master_class_in {
          display: flex;
          gap: 12px;
          padding: 12px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.2);
        }
        .right_block {
          .title {
            color: rgb(255, 255, 255);
            font-family: Raleway;
            font-size: 14px;
            font-weight: 600;
            line-height: 18px;
            letter-spacing: 0%;
            text-align: left;
            margin-bottom: 8px;
          }
          .available {
            display: inline-block;
            padding: 4px 12px 4px 8px;
            border-radius: 29px;
            background: rgb(249, 68, 56);
            color: rgb(255, 255, 255);
            font-family: Raleway;
            font-size: 12px;
            font-weight: 500;
            line-height: 14px;
            letter-spacing: 0%;
            text-align: center;
          }
        }
      }
      .paid_links {
        width: 100%;
        padding: 0 12px;
      }
      .paid_link {
        width: 100%;
        min-height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgb(255, 255, 255);
        border-radius: 12px;
        color: rgb(255, 255, 255);
        font-family: Raleway;
        font-size: 14px;
        font-weight: 500;
        line-height: 18px;
        letter-spacing: 0%;
        text-align: center;
      }
      .main_link {
        background: rgb(255, 255, 255);
        color: rgb(18, 17, 17);
        font-weight: 600;
        margin-top: 8px;
      }
      .paid_modal_close_btn {
        position: absolute;
        top: calc(100% + 24px);
        left: 50%;
        transform: translateX(-50%) scale(0);
        z-index: -1;
        opacity: 0;
        transition: 0.3s;
      }
      #confetti-holder {
        position: fixed;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
        max-width: 720px;
        width: 100%;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: 10;
        text-align: center;
        vertical-align: middle;
        opacity: 0;
        transition: 0.5s;
        #e0DQ82qcIov1 {
          height: 100%;
          transform: translateY(20%);
          transition: 0.5s;
        }
      }
      .confetti-holder-active {
        opacity: 1 !important;
        #e0DQ82qcIov1 {
          transform: translateY(0) !important;
        }
      }
    }
  }
  .paid_modal_active {
    z-index: 100;
    opacity: 1;
    .paid_modal_in {
      .paid_modal_in_container {
        transform: translateY(0);
      }
      .paid_modal_close_btn {
        z-index: 100;
        opacity: 1;
        transform: translateX(-50%) scale(1);
      }
    }
  }
}
.wheel-wrapper-top {
  width: 240px;
  height: 240px;
  padding: 16px;
  top: -115px;
  z-index: 4;
  transform: translate(-50%, 0);
}
</style>
