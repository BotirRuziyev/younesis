<template>
  <div class="chat_response_search">
    <div class="main_container">
      <div class="response_search_head">
        <div class="user">
          <router-link to="" @click="$router.go(-1)" class="back_link">
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
                d="M2 12L22 12"
                stroke="#FFFFFF"
                stroke-opacity="1.000000"
                stroke-width="2.000000"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
              <path
                id="Path"
                d="M9 5L2 12"
                stroke="#FFFFFF"
                stroke-opacity="1.000000"
                stroke-width="2.000000"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
              <path
                id="Path"
                d="M9 19L2 12"
                stroke="#FFFFFF"
                stroke-opacity="1.000000"
                stroke-width="2.000000"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
            </svg>
          </router-link>
          <div class="user_img">
            <img src="/img/User/user_1.png" alt="user_1" />
          </div>
          <div class="name">Артем Николаев</div>
        </div>
        <button class="user_btn" @click="cardHolder = true">
          <svg
            width="24.010742"
            height="24.010010"
            viewBox="0 0 24.0107 24.01"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <desc>Created with Pixso.</desc>
            <defs />
            <path
              id="Path"
              d="M19.0107 13.0049C18.458 13.0049 18.0107 12.5571 18.0107 12.0049C18.0107 11.4526 18.458 11.0049 19.0107 11.0049C19.5635 11.0049 20.0107 11.4526 20.0107 12.0049C20.0107 12.5571 19.5635 13.0049 19.0107 13.0049Z"
              stroke="#D3D2D2"
              stroke-opacity="1.000000"
              stroke-width="2.000000"
              stroke-linejoin="round"
            />
            <path
              id="Path"
              d="M12.0078 13.0049C11.4551 13.0049 11.0078 12.5571 11.0078 12.0049C11.0078 11.4526 11.4551 11.0049 12.0078 11.0049C12.5605 11.0049 13.0078 11.4526 13.0078 12.0049C13.0078 12.5571 12.5605 13.0049 12.0078 13.0049Z"
              stroke="#D3D2D2"
              stroke-opacity="1.000000"
              stroke-width="2.000000"
              stroke-linejoin="round"
            />
            <path
              id="Path"
              d="M5.00488 13.0049C4.45215 13.0049 4.00488 12.5571 4.00488 12.0049C4.00488 11.4526 4.45215 11.0049 5.00488 11.0049C5.55762 11.0049 6.00488 11.4526 6.00488 12.0049C6.00488 12.5571 5.55762 13.0049 5.00488 13.0049Z"
              stroke="#D3D2D2"
              stroke-opacity="1.000000"
              stroke-width="2.000000"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <div class="chat_body">
        <div class="data_time">
          <div class="data_time_in">5 августа</div>
        </div>
        <div class="chat_came_card card" v-for="item of gameCard" :key="item.id">
          <img v-if="item.img" :src="item.img" alt="item.img" />
          <div class="title_small">{{ item.title_small }}</div>
          <div class="title_big">{{ item.title_big }}</div>
          <div class="description" :class="!item.more ? 'description_more' : ''">
            {{ item.description }}
          </div>
          <div class="sent_time">
            {{ item.dataTime }}
          </div>
          <div class="more_btn" v-if="item.more" @click="item.more = false">
            Подробнее
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
        </div>
        <!-- Чаты - отклик на предложение (от лица усл.Семена) -->
        <div class="card" style="display: none">
          <div class="title">
            <svg
              width="20.000000"
              height="20.000000"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs />
              <path
                id="Path"
                d="M13.334 17.5L6.66602 17.5C4.36523 17.5 2.5 15.6343 2.5 13.3333L2.5 6.66675C2.5 4.36572 4.36523 2.5 6.66602 2.5L13.334 2.5C15.6348 2.5 17.5 4.36572 17.5 6.66675L17.5 13.3333C17.5 15.6343 15.6348 17.5 13.334 17.5Z"
                fill="#54C35F"
                fill-opacity="1.000000"
                fill-rule="evenodd"
              />
              <path
                id="Path"
                d="M6.66602 17.5C4.36523 17.5 2.5 15.6343 2.5 13.3333L2.5 6.66675C2.5 4.36572 4.36523 2.5 6.66602 2.5L13.334 2.5C15.6348 2.5 17.5 4.36572 17.5 6.66675L17.5 13.3333C17.5 15.6343 15.6348 17.5 13.334 17.5L6.66602 17.5Z"
                stroke="#54C35F"
                stroke-opacity="1.000000"
                stroke-width="1.500000"
                stroke-linejoin="round"
              />
              <path
                id="Path"
                d="M13 8L9.25 12L7 9.59961"
                stroke="#222222"
                stroke-opacity="1.000000"
                stroke-width="1.500000"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
            </svg>
            Артем может
          </div>
          <div class="title_big">Настроить таргет</div>
        </div>
        <!--  Чаты - отклик на продукт  -->
        <div class="card" style="display: none">
          <div class="title">
            <svg
              width="20.007812"
              height="20.008301"
              viewBox="0 0 20.0078 20.0083"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs />
              <path
                id="Path"
                d="M10.0039 13.6499L10.0039 16.1499"
                stroke="#54C35F"
                stroke-opacity="1.000000"
                stroke-width="1.500000"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
              <path
                id="Path"
                d="M6.66992 16.6707L8.33594 13.3374"
                stroke="#54C35F"
                stroke-opacity="1.000000"
                stroke-width="1.500000"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
              <path
                id="Path"
                d="M13.3359 16.6707L11.6699 13.3374"
                stroke="#54C35F"
                stroke-opacity="1.000000"
                stroke-width="1.500000"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
              <rect
                id="Rectangle"
                x="3.337891"
                y="3.337402"
                rx="2.000000"
                width="13.333333"
                height="10.000000"
                fill="#54C35F"
                fill-opacity="1.000000"
              />
              <rect
                id="Rectangle"
                x="3.337891"
                y="3.337402"
                rx="2.000000"
                width="13.333333"
                height="10.000000"
                stroke="#54C35F"
                stroke-opacity="1.000000"
                stroke-width="1.500000"
                stroke-linejoin="round"
              />
              <path
                id="Path"
                d="M6.66992 10.4207L6.66992 8.75415"
                stroke="#222222"
                stroke-opacity="1.000000"
                stroke-width="1.500000"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
              <path
                id="Path"
                d="M8.75391 10.0039L8.75391 6.67065"
                stroke="#222222"
                stroke-opacity="1.000000"
                stroke-width="1.500000"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
              <path
                id="Path"
                d="M11.2539 10.0042L11.2539 7.50415"
                stroke="#222222"
                stroke-opacity="1.000000"
                stroke-width="1.500000"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
              <path
                id="Path"
                d="M13.3379 10.3706L13.3379 7.03735"
                stroke="#222222"
                stroke-opacity="1.000000"
                stroke-width="1.500000"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
            </svg>
            Консультация по настройке рекламы в телеграм
          </div>
          <div class="title_big">Настроить таргет</div>
        </div>
        <div class="message_you_sent">
          <div class="message_you_sent_in">
            Приветствую, Артем! Бесплатная консультация длится один час
            <div class="sent_time">10:12</div>
          </div>
        </div>
      </div>
      <div class="chat_send_information">
        <div class="send_information_form">
          <textarea id="information_val" rows="1" @keydown="autosize"></textarea>
        </div>
        <button class="send_btn">
          <svg
            width="36.000000"
            height="36.000000"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <desc>Created with Pixso.</desc>
            <defs>
              <clipPath id="clip13_23965">
                <rect
                  id="SendButton"
                  rx="18.000000"
                  width="36.000000"
                  height="36.000000"
                  fill="white"
                  fill-opacity="0"
                />
              </clipPath>
            </defs>
            <rect
              id="SendButton"
              rx="18.000000"
              width="36.000000"
              height="36.000000"
              fill="#CF2E2E"
              fill-opacity="1.000000"
            />
            <g clip-path="url(#clip13_23965)">
              <rect
                id="Arrows, Diagrams/Arrow"
                width="24.000000"
                height="24.000000"
                transform="translate(6.000000 6.000000)"
                fill="#FFFFFF"
                fill-opacity="0"
              />
              <path
                id="Vector"
                d="M18.002 10.999L18.002 25M13 16L18.002 10.999L23.002 16"
                stroke="#FFFFFF"
                stroke-opacity="1.000000"
                stroke-width="1.500000"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </button>
      </div>
    </div>
    <!-- modals -->
    <div
      class="add_card_holder_modal"
      :class="cardHolder ? 'card_holder_modal_active' : ''"
      @click="!$event.target.closest('.card_holder_in') ? (cardHolder = false) : ''"
    >
      <div class="card_holder_in">
        <button class="card_holder_btn" :class="holderIn ? 'active' : ''" @click="holderIn = false">
          <svg
            width="20.007812"
            height="20.008301"
            viewBox="0 0 20.0078 20.0083"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <desc>Created with Pixso.</desc>
            <defs />
            <path
              id="Path"
              d="M5.12891 17.2646C4.74414 16.9827 4.55273 16.5068 4.63672 16.0376L5.31055 12.1719L2.4707 9.45068C2.125 9.11963 1.99805 8.61938 2.14453 8.16284C2.29102 7.70605 2.68555 7.37378 3.16016 7.30713L7.10352 6.74365L8.88281 3.19312C9.09375 2.76709 9.5293 2.4978 10.0039 2.4978C10.4785 2.4978 10.9141 2.76709 11.125 3.19312L12.9043 6.74365L16.8457 7.30713C17.3223 7.37378 17.7168 7.70605 17.8633 8.16284C18.0098 8.61938 17.8828 9.11963 17.5352 9.45068L14.6973 12.1719L15.3711 16.0383C15.4551 16.5078 15.2637 16.9836 14.8789 17.2654C14.4941 17.5474 13.9844 17.5862 13.5605 17.3655L10.0039 15.5273L6.44727 17.3647C6.02344 17.5854 5.51367 17.5464 5.12891 17.2646Z"
              stroke="#D3D2D2"
              stroke-opacity="1.000000"
              stroke-width="1.000000"
              stroke-linejoin="round"
            />
          </svg>
          <span v-if="!star">Добавить в визитницу</span>
          <span v-if="star">В визитнице</span>
          <div class="star_val" v-if="star">
            <svg
              width="16.005859"
              height="16.006592"
              viewBox="0 0 16.0059 16.0066"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs />
              <path
                id="Path"
                d="M5.1582 13.8918C4.82031 14.0684 4.41016 14.0374 4.10352 13.8118C3.79688 13.5862 3.64258 13.2056 3.71094 12.8301L4.25 9.73755L1.97852 7.56055C1.70117 7.29565 1.59766 6.89551 1.7168 6.53027C1.83398 6.16504 2.15039 5.89917 2.5293 5.84595L5.68359 5.39502L7.10742 2.55444C7.27539 2.21387 7.62305 1.99829 8.00391 1.99829C8.38477 1.99829 8.73047 2.21387 8.90039 2.55444L10.3242 5.39502L13.4785 5.84595C13.8574 5.89917 14.1738 6.16504 14.291 6.53027C14.4082 6.89551 14.3066 7.29565 14.0293 7.56055L11.7578 9.73755L12.2969 12.8308C12.3652 13.2063 12.2109 13.5869 11.9043 13.8125C11.5977 14.0378 11.1875 14.0691 10.8496 13.8926L8.00391 12.4219L5.1582 13.8918Z"
                fill="#FFFFFF"
                fill-opacity="1.000000"
                fill-rule="evenodd"
              />
              <path
                id="Path"
                d="M4.10352 13.8118C3.79688 13.5862 3.64258 13.2056 3.71094 12.8301L4.25 9.73755L1.97852 7.56055C1.70117 7.29565 1.59766 6.89551 1.7168 6.53027C1.83398 6.16504 2.15039 5.89917 2.5293 5.84595L5.68359 5.39502L7.10742 2.55444C7.27539 2.21387 7.62305 1.99829 8.00391 1.99829C8.38477 1.99829 8.73047 2.21387 8.90039 2.55444L10.3242 5.39502L13.4785 5.84595C13.8574 5.89917 14.1738 6.16504 14.291 6.53027C14.4082 6.89551 14.3066 7.29565 14.0293 7.56055L11.7578 9.73755L12.2969 12.8308C12.3652 13.2063 12.2109 13.5869 11.9043 13.8125C11.5977 14.0378 11.1875 14.0691 10.8496 13.8926L8.00391 12.4219L5.1582 13.8918C4.82031 14.0684 4.41016 14.0374 4.10352 13.8118Z"
                stroke="#FFFFFF"
                stroke-opacity="1.000000"
                stroke-width="1.500000"
                stroke-linejoin="round"
              />
            </svg>
            <span class="holder_val">{{ starVal }}</span>
          </div>
        </button>
        <div class="add_holder" :class="holderIn ? '' : 'active'">
          <div class="add_holder_head" v-if="!star">
            Добавить в визитницу
            <button class="close_modal" @click="(cardHolder = false), (holderIn = true)">
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
                  d="M3 12C3 7.02905 7.0293 3 12 3C16.9707 3 21 7.02905 21 12C21 16.9709 16.9707 21 12 21C7.0293 21 3 16.9709 3 12Z"
                  stroke="#A6A5A5"
                  stroke-opacity="1.000000"
                  stroke-width="1.500000"
                  stroke-linejoin="round"
                />
                <path
                  id="Path"
                  d="M14.8301 9.16992L9.16992 14.8298"
                  stroke="#A6A5A5"
                  stroke-opacity="1.000000"
                  stroke-width="1.500000"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                />
                <path
                  id="Path"
                  d="M14.8301 14.8298L9.16992 9.16992"
                  stroke="#A6A5A5"
                  stroke-opacity="1.000000"
                  stroke-width="1.500000"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
          <div class="user_item">
            <div class="user_head">
              <img src="/img/User/user_1.png" alt="" />
              <div class="right_block">
                <div class="name">Артем Николаев</div>
                <div class="location">
                  <svg
                    width="16.000000"
                    height="16.000000"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <desc>Created with Pixso.</desc>
                    <defs />
                    <path
                      id="Path"
                      d="M6 6.66675C6 5.56201 6.89453 4.66675 8 4.66675C9.10547 4.66675 10 5.56201 10 6.66675C10 7.77148 9.10547 8.66675 8 8.66675C6.89453 8.66675 6 7.77148 6 6.66675Z"
                      stroke="#A6A5A5"
                      stroke-opacity="1.000000"
                      stroke-width="1.000000"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Path"
                      d="M3.33398 6.66675C3.33398 4.08936 5.42383 2 8 2C10.5781 2 12.668 4.08936 12.668 6.66675C12.668 10.1667 8 14 8 14C8 14 3.33398 10.1667 3.33398 6.66675Z"
                      stroke="#A6A5A5"
                      stroke-opacity="1.000000"
                      stroke-width="1.000000"
                      stroke-linejoin="round"
                    />
                  </svg>

                  Санкт-Петербург • 24 года
                </div>
              </div>
            </div>
            <div class="user_specialty"><span>Таргетолог</span>, <span>маркетолог</span>, <span>SMM</span></div>
            <div class="description">
              Работаю психологом с 2007 года. Менторю, веду телеграм-канал. Бесплатные консультации в любое удобное для
              вас время
            </div>
            <div class="saved">
              <svg
                width="16.005859"
                height="16.006592"
                viewBox="0 0 16.0059 16.0066"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <desc>Created with Pixso.</desc>
                <defs />
                <path
                  id="Path"
                  d="M4.10352 13.8118C3.79688 13.5862 3.64258 13.2056 3.71094 12.8301L4.25 9.73755L1.97852 7.56055C1.70117 7.29565 1.59766 6.89551 1.7168 6.53027C1.83398 6.16504 2.15039 5.89917 2.5293 5.84595L5.68359 5.39502L7.10742 2.55444C7.27539 2.21387 7.62305 1.99829 8.00391 1.99829C8.38477 1.99829 8.73047 2.21387 8.90039 2.55444L10.3242 5.39502L13.4785 5.84595C13.8574 5.89917 14.1738 6.16504 14.291 6.53027C14.4082 6.89551 14.3066 7.29565 14.0293 7.56055L11.7578 9.73755L12.2969 12.8308C12.3652 13.2063 12.2109 13.5869 11.9043 13.8125C11.5977 14.0378 11.1875 14.0691 10.8496 13.8926L8.00391 12.4219L5.1582 13.8918C4.82031 14.0684 4.41016 14.0374 4.10352 13.8118Z"
                  stroke="#A6A5A5"
                  stroke-opacity="1.000000"
                  stroke-width="1.000000"
                  stroke-linejoin="round"
                />
              </svg>
              4.5
            </div>
          </div>
          <div class="add_holder_bottom">
            <button class="star_close" v-if="star" @click="removeStar">
              <svg
                width="80.000000"
                height="80.000000"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <desc>Created with Pixso.</desc>
                <defs>
                  <clipPath id="clip2201_5655">
                    <rect
                      id="YesNo button"
                      rx="40.000000"
                      width="80.000000"
                      height="80.000000"
                      fill="white"
                      fill-opacity="0"
                    />
                  </clipPath>
                </defs>
                <rect
                  id="YesNo button"
                  rx="40.000000"
                  width="80.000000"
                  height="80.000000"
                  fill="#594343"
                  fill-opacity="1.000000"
                />
                <g clip-path="url(#clip2201_5655)">
                  <rect
                    id="Interface, Essential/Delete, Disabled"
                    width="28.000000"
                    height="28.000000"
                    transform="translate(26.000000 26.000000)"
                    fill="#FFFFFF"
                    fill-opacity="0"
                  />
                  <path
                    id="Path"
                    d="M29.5 40C29.5 34.2004 34.2012 29.5 40 29.5C45.7988 29.5 50.5 34.2004 50.5 40C50.5 45.7996 45.7988 50.5 40 50.5C34.2012 50.5 29.5 45.7996 29.5 40Z"
                    stroke="#FF6464"
                    stroke-opacity="1.000000"
                    stroke-width="2.000000"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Path"
                    d="M43.3027 36.6982L36.6992 43.3015"
                    stroke="#FF6464"
                    stroke-opacity="1.000000"
                    stroke-width="2.000000"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  />
                  <path
                    id="Path"
                    d="M43.3027 43.3015L36.6992 36.6982"
                    stroke="#FF6464"
                    stroke-opacity="1.000000"
                    stroke-width="2.000000"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  />
                </g>
              </svg>
            </button>
            <div class="add_holder_bottom_in">
              <div class="star" v-for="num of 5" :key="num" @click="starFun(num)">
                <div class="star_in" v-if="num > 2">
                  <svg
                    width="26.894531"
                    height="25.551270"
                    viewBox="0 0 26.8945 25.5513"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <desc>Created with Pixso.</desc>
                    <defs />
                    <path
                      id="Path"
                      d="M5.64648 24.377C5.03125 23.926 4.72656 23.1646 4.85938 22.4136L5.93945 16.2283L1.39453 11.8745C0.839844 11.345 0.636719 10.5444 0.871094 9.81396C1.10742 9.08325 1.73828 8.55151 2.49805 8.44507L8.80664 7.54346L11.6543 1.8623C11.9922 1.18115 12.6875 0.75 13.4473 0.75C14.207 0.75 14.9023 1.18115 15.2402 1.8623L18.0879 7.54346L24.3965 8.44507C25.1562 8.55151 25.7871 9.08325 26.0234 9.81396C26.2578 10.5444 26.0547 11.345 25.498 11.8745L20.9551 16.2283L22.0352 22.4148C22.168 23.1658 21.8633 23.9272 21.248 24.3782C20.6328 24.8293 19.8145 24.8914 19.1387 24.5386L13.4473 21.5972L7.75586 24.5371C7.08008 24.8901 6.26172 24.8279 5.64648 24.377Z"
                      stroke="#2FC12C"
                      stroke-opacity="1.000000"
                      stroke-width="1.500000"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span>{{ num }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProfileHead from "@/components/Profile/ProfileHead.vue";
export default {
  components: {
    ProfileHead,
  },
  data() {
    return {
      cardHolder: false,
      star: false,
      holderIn: true,
      starVal: "",
      gameCard: [
        {
          id: 1,
          img: "/img/chats/chat_img.png",
          title_small: "Бесплатно",
          title_big: "Консультация по настройке рекламы в телеграм",
          description:
            "Помогу настроить рекламу в телеграм. В процессе настройки пользуюсь сервисами Яндекс.Метрика и аналитикой отгугл. Обращайтесь",
          more: true,
        },
        {
          id: 2,
          description: "Здравствуйте, Андрей, хочу пройти консультацию. Сколько она длится?",
          dataTime: "10:12",
          more: false,
        },
      ],
    };
  },
  methods: {
    autosize() {
      setInterval(function () {
        $("#information_val").css("height", "0");
        let height = Math.min(20 * 5, $("#information_val").prop("scrollHeight"));
        $("#information_val").css("height", `${height}` + "px");
      }, 2);
    },
    starFun(num) {
      $(".star").each((i, element) => {
        if (num == i + 1) {
          $(element).addClass("active");
          this.cardHolder = false;
          this.star = true;
          this.holderIn = true;
          this.starVal = num;
        } else {
          $(element).removeClass("active");
        }
      });
    },
    removeStar() {
      $(".star").removeClass("active");
      this.cardHolder = false;
      this.star = false;
      this.holderIn = true;
    },
  },

  mounted() {
    this.autosize();
    $(".chat_came_card").each((i, gameCard) => {
      if (
        $(gameCard).children(".description").prop("scrollHeight") <
        $(gameCard).children(".description").prop("clientHeight")
      ) {
        this.moreBtn = false;
      } else {
        this.moreBtn = true;
      }
    });
  },
};
</script>
<style lang="scss">
.chat_response_search {
  background: rgb(23, 23, 23);
  position: relative;
  z-index: 102;
  .response_search_head {
    max-width: 420px;
    width: 100%;
    background: rgb(23, 23, 23);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 48px 16px 20px;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    .user {
      display: flex;
      align-items: center;
      gap: 8px;
      color: rgb(255, 255, 255);
      font-size: 16px;
      font-weight: 600;
      line-height: 20px;
      letter-spacing: 0%;
      text-align: left;
      .user_img {
        width: 40px;
        height: 40px;
        overflow: hidden;
        margin-left: 4px;
        img {
          height: 100%;
        }
      }
    }
  }
  .chat_body {
    padding: 120px 0 14px;
    .data_time {
      display: flex;
      justify-content: center;
      margin-bottom: 16px;
      .data_time_in {
        border-radius: 16px;
        background: rgb(34, 34, 34);
        padding: 4px 12px 4px 12px;
        color: rgb(166, 165, 165);
        font-size: 12px;
        font-weight: 600;
        line-height: 16px;
        letter-spacing: 0%;
        text-align: center;
      }
    }
    .card {
      border-radius: 12px;
      background: rgb(34, 34, 34);
      padding: 12px;
      .title {
        display: flex;
        align-items: center;
        gap: 4px;
        color: rgb(84, 195, 95);
        font-size: 12px;
        font-weight: 500;
        line-height: 16px;
        letter-spacing: 0%;
        text-align: left;
        .title {
          margin-bottom: 8px;
        }
      }
    }
    .chat_came_card {
      max-width: 296px;
      margin-bottom: 8px;
      img {
        width: 100%;
        margin-bottom: 12px;
      }
      .title_small {
        color: rgb(166, 165, 165);
        font-size: 12px;
        font-weight: 600;
        line-height: 16px;
        letter-spacing: 0%;
        text-align: left;
        margin-bottom: 4px;
      }
      .title_big {
        color: rgb(255, 255, 255);
        font-size: 16px;
        font-weight: 600;
        line-height: 20px;
        letter-spacing: 0%;
        text-align: left;
        margin-bottom: 4px;
      }
      .description {
        color: rgb(211, 210, 210);
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0%;
        text-align: left;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 4px;
      }
      .description_more {
        -webkit-line-clamp: unset;
        text-overflow: unset;
      }
      .sent_time {
        color: rgb(166, 165, 165);
        font-size: 12px;
        font-weight: 500;
        line-height: 16px;
        letter-spacing: 0%;
        text-align: right;
        margin-bottom: 4px;
      }
      .more_btn {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 13px;
        color: rgb(255, 255, 255);
        font-size: 12px;
        font-weight: 500;
        line-height: 14px;
        letter-spacing: 0%;
        text-align: left;
      }
    }
    .message_you_sent {
      display: flex;
      justify-content: end;
      .message_you_sent_in {
        max-width: 283px;
        display: inline-block;
        border-radius: 12px 12px 4px 12px;
        background: rgb(207, 46, 46);
        padding: 12px 12px 4px 12px;
        margin-top: 16px;
        .sent_time {
          color: rgba(255, 255, 255, 0.8);
          font-family: Raleway;
          font-size: 12px;
          font-weight: 500;
          line-height: 16px;
          letter-spacing: 0%;
          text-align: right;
          margin-top: 4px;
        }
      }
    }
  }
  .chat_send_information {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: end;
    gap: 4px;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
    border-top: 1px solid rgb(34, 34, 34);
    background: rgb(23, 23, 23);
    padding: 18px 16px 36px 16px;
    .send_information_form {
      width: 100%;
      textarea {
        width: 100%;
        border: 1px solid rgb(73, 73, 73);
        border-radius: 12px;
        background: rgb(34, 34, 34);
        padding: 12px;
        color: rgb(255, 255, 255);
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0%;
        text-align: left;

        &::-webkit-scrollbar {
          width: 0;
        }
      }
    }
  }
}
.add_card_holder_modal {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: end;
  backdrop-filter: blur(13.5px);
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0;
  transition: 0.3s;
  .card_holder_in {
    max-width: 420px;
    width: 100%;
    margin: 0 auto;
    border-radius: 24px 24px 0px 0px;
    background: rgb(34, 34, 34);
    padding: 16px 16px 48px;
    transform: translateY(130px);
    transition: 0.3s;
    .card_holder_btn {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 8px;
      border: 1px solid rgb(73, 73, 73);
      border-radius: 12px;
      background: rgb(47, 47, 47);
      padding: 12px 12px 12px 16px;
      color: rgb(255, 255, 255);
      font-size: 14px;
      font-weight: 500;
      line-height: 18px;
      letter-spacing: 0%;
      text-align: left;
      span {
        width: 100%;
      }

      .star_val {
        display: flex;
        align-items: center;
        justify-content: end;
        float: right;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.2);
        padding: 8px;
        color: rgb(255, 255, 255);
        font-size: 12px;
        font-weight: 600;
        line-height: 16px;
        letter-spacing: 0%;
        text-align: left;
        span {
          width: auto;
        }
        svg {
          margin-right: 4px;
        }
      }
    }
    .add_holder {
      width: 100%;
      position: absolute;
      top: 100%;
      bottom: 0;
      left: 0;
      z-index: 101;
      border-radius: 24px 24px 0px 0px;
      background: rgb(34, 34, 34);
      padding: 16px 16px 48px;
      transition: 0.3s;

      .add_holder_head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: rgb(255, 255, 255);
        font-size: 18px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0%;
        text-align: left;
        margin-bottom: 16px;
      }
      .user_item {
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 20px;
        background: rgb(34, 34, 34);
        padding: 16px;
        margin-bottom: 24px;
        .user_head {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
          .name {
            color: rgb(255, 255, 255);
            font-size: 16px;
            font-weight: 700;
            line-height: 20px;
            letter-spacing: 0%;
            text-align: left;
            margin-bottom: 6px;
          }
          .location {
            display: flex;
            align-items: center;
            gap: 4px;
            color: rgb(166, 165, 165);
            font-size: 12px;
            font-weight: 500;
            line-height: 16px;
            letter-spacing: 0%;
            text-align: left;
          }
        }
        .user_specialty {
          color: rgb(255, 255, 255);
          font-size: 14px;
          font-weight: 600;
          line-height: 18px;
          letter-spacing: 0%;
          text-align: left;
          margin-bottom: 4px;
        }
        .description {
          color: rgb(211, 210, 210);
          font-size: 12px;
          font-weight: 400;
          line-height: 16px;
          letter-spacing: 0%;
          text-align: left;
          margin-bottom: 12px;
        }
        .saved {
          display: flex;
          align-items: center;
          gap: 4px;
        }
      }
      .add_holder_bottom {
        display: flex;
        align-items: center;
        gap: 16px;
        .add_holder_bottom_in {
          max-width: 232px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 0 auto;
          border-radius: 48px;
          background: rgb(67, 91, 67);
          padding: 16px 20px;
          .star {
            position: relative;
            span {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              color: rgb(47, 193, 44);
              font-size: 10px;
              font-weight: 700;
              line-height: 12px;
              letter-spacing: 0%;
              text-align: left;
            }
            &:nth-child(1) {
              display: none;
            }
            &:nth-child(2) {
              display: none;
            }
            &:nth-child(4) {
              svg {
                width: 31.68px;
                height: 30.02px;
              }
              span {
                font-size: 12px;
              }
            }
            &:nth-child(5) {
              svg {
                width: 38.02px;
                height: 36.02px;
              }
              span {
                font-size: 14px;
              }
            }
          }
          .active {
            span {
              color: rgb(255, 255, 255);
            }
            svg {
              fill: rgb(47, 193, 44);
            }
          }
        }
      }
    }
    .active {
      top: auto;
      bottom: 0;
    }
  }
}
.card_holder_modal_active {
  z-index: 100;
  opacity: 1;
  .card_holder_in {
    transform: translateY(0);
  }
}
</style>
