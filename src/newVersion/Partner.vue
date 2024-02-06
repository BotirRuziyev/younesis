<template>
  <div class="partner">
    <head-new to="Tinder" page_title="EdNet"></head-new>
    <div class="main_container">
      <div class="partner_in">
        <div class="partner_search_and_filter">
          <router-link to="#" class="partner_search">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7138 6.8382C18.1647 9.28913 18.1647 13.2629 15.7138 15.7138C13.2629 18.1647 9.28913 18.1647 6.8382 15.7138C4.38727 13.2629 4.38727 9.28913 6.8382 6.8382C9.28913 4.38727 13.2629 4.38727 15.7138 6.8382"
                stroke="#A6A5A5"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19 19L15.71 15.71"
                stroke="#A6A5A5"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <input
              type="text"
              class="partner_search_input"
              placeholder="Найти продюсера"
            />
          </router-link>
          <router-link to="#" class="filter">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="48" height="48" rx="12" fill="#222222" />
              <path
                d="M30 19H33"
                stroke="#A6A5A5"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 19H26"
                stroke="#A6A5A5"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M23 29H33"
                stroke="#A6A5A5"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 29H18.5"
                stroke="#A6A5A5"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M29.4142 17.5858C30.1953 18.3668 30.1953 19.6332 29.4142 20.4142C28.6332 21.1953 27.3668 21.1953 26.5858 20.4142C25.8047 19.6332 25.8047 18.3668 26.5858 17.5858C27.3668 16.8047 28.6332 16.8047 29.4142 17.5858"
                stroke="#A6A5A5"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22.4142 27.5858C23.1953 28.3668 23.1953 29.6332 22.4142 30.4142C21.6332 31.1953 20.3668 31.1953 19.5858 30.4142C18.8047 29.6332 18.8047 28.3668 19.5858 27.5858C20.3668 26.8047 21.6332 26.8047 22.4142 27.5858"
                stroke="#A6A5A5"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </router-link>
        </div>
        <div class="popular_now">
          <h1 class="title">Сейчас популярны</h1>
          <swiper :slidesPerView="1.1" :spaceBetween="8" :modules="modules">
            <swiper-slide v-for="item in partner" :key="item.id">
              <div class="card_item">
                <div class="card_head">
                  <img :src="item.img" alt="" />
                  <div>
                    <div class="name">{{ item.name }}</div>
                    <div class="about">{{ item.about }}</div>
                  </div>
                </div>
                <div class="specialty">
                  <div
                    class="specialty_item"
                    v-for="specialty of item.specialty"
                    :key="1"
                  >
                    {{ specialty }}
                  </div>
                </div>
                <div class="card_foot">
                  <div class="card_foot_left">
                    <div class="location">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8 8.66675V8.66675C6.89533 8.66675 6 7.77142 6 6.66675V6.66675C6 5.56208 6.89533 4.66675 8 4.66675V4.66675C9.10467 4.66675 10 5.56208 10 6.66675V6.66675C10 7.77142 9.10467 8.66675 8 8.66675Z"
                          stroke="#A6A5A5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.00016 14C8.00016 14 3.3335 10.1667 3.3335 6.66667C3.3335 4.08933 5.42283 2 8.00016 2C10.5775 2 12.6668 4.08933 12.6668 6.66667C12.6668 10.1667 8.00016 14 8.00016 14Z"
                          stroke="#A6A5A5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      {{ item.location }}
                    </div>
                    <div class="left_block">
                      <div class="item">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.07868 8.31137C1.97402 8.11737 1.97402 7.88204 2.07868 7.68804C3.34002 5.35537 5.67002 3.33337 8.00002 3.33337C10.33 3.33337 12.66 5.35537 13.9213 7.68871C14.026 7.88271 14.026 8.11804 13.9213 8.31204C12.66 10.6447 10.33 12.6667 8.00002 12.6667C5.67002 12.6667 3.34002 10.6447 2.07868 8.31137Z"
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
                        <span>{{ item.saw }}</span>
                      </div>
                      <div class="item">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.15408 13.8884C4.81603 14.0649 4.40707 14.0338 4.09956 13.8083C3.79204 13.5828 3.63947 13.2021 3.70614 12.8267L4.2457 9.73404L1.97409 7.55714C1.69642 7.29234 1.59466 6.89207 1.71215 6.52681C1.82964 6.16156 2.14568 5.89568 2.52565 5.84242L5.67963 5.39157L7.10356 2.55105C7.27239 2.21039 7.61973 1.99487 7.99993 1.99487C8.38013 1.99487 8.72747 2.21039 8.8963 2.55105L10.3202 5.39157L13.4742 5.84242C13.8542 5.89568 14.1702 6.16156 14.2877 6.52681C14.4052 6.89207 14.3034 7.29234 14.0258 7.55714L11.7542 9.73404L12.2937 12.8273C12.3604 13.2028 12.2078 13.5835 11.9003 13.809C11.5928 14.0345 11.1838 14.0656 10.8458 13.8891L7.99993 12.4185L5.15408 13.8884Z"
                            stroke="#A6A5A5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <span>{{ item.sav }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="right_block" @click="partnerModalFun(item.id)">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.15408 13.8884C4.81603 14.0649 4.40707 14.0338 4.09956 13.8083C3.79204 13.5828 3.63947 13.2021 3.70614 12.8267L4.2457 9.73404L1.97409 7.55714C1.69642 7.29234 1.59466 6.89207 1.71215 6.52681C1.82964 6.16156 2.14568 5.89568 2.52565 5.84242L5.67963 5.39157L7.10356 2.55105C7.27239 2.21039 7.61973 1.99487 7.99993 1.99487C8.38013 1.99487 8.72747 2.21039 8.8963 2.55105L10.3202 5.39157L13.4742 5.84242C13.8542 5.89568 14.1702 6.16156 14.2877 6.52681C14.4052 6.89207 14.3034 7.29234 14.0258 7.55714L11.7542 9.73404L12.2937 12.8273C12.3604 13.2028 12.2078 13.5835 11.9003 13.809C11.5928 14.0345 11.1838 14.0656 10.8458 13.8891L7.99993 12.4185L5.15408 13.8884Z"
                        stroke="#D3D2D2"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="recommendations">
          <h1 class="title">Сейчас популярны</h1>
          <div class="card_item" v-for="item in partner" :key="item.id">
            <div class="card_head">
              <img :src="item.img" alt="" />
              <div>
                <div class="name">{{ item.name }}</div>
                <div class="about">{{ item.about }}</div>
              </div>
            </div>
            <div class="specialty">
              <div
                class="specialty_item"
                v-for="specialty of item.specialty"
                :key="1"
              >
                {{ specialty }}
              </div>
            </div>
            <div class="card_foot">
              <div class="card_foot_left">
                <div class="location">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 8.66675V8.66675C6.89533 8.66675 6 7.77142 6 6.66675V6.66675C6 5.56208 6.89533 4.66675 8 4.66675V4.66675C9.10467 4.66675 10 5.56208 10 6.66675V6.66675C10 7.77142 9.10467 8.66675 8 8.66675Z"
                      stroke="#A6A5A5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.00016 14C8.00016 14 3.3335 10.1667 3.3335 6.66667C3.3335 4.08933 5.42283 2 8.00016 2C10.5775 2 12.6668 4.08933 12.6668 6.66667C12.6668 10.1667 8.00016 14 8.00016 14Z"
                      stroke="#A6A5A5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  {{ item.location }}
                </div>
                <div class="left_block">
                  <div class="item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.07868 8.31137C1.97402 8.11737 1.97402 7.88204 2.07868 7.68804C3.34002 5.35537 5.67002 3.33337 8.00002 3.33337C10.33 3.33337 12.66 5.35537 13.9213 7.68871C14.026 7.88271 14.026 8.11804 13.9213 8.31204C12.66 10.6447 10.33 12.6667 8.00002 12.6667C5.67002 12.6667 3.34002 10.6447 2.07868 8.31137Z"
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
                    <span>{{ item.saw }}</span>
                  </div>
                  <div class="item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.15408 13.8884C4.81603 14.0649 4.40707 14.0338 4.09956 13.8083C3.79204 13.5828 3.63947 13.2021 3.70614 12.8267L4.2457 9.73404L1.97409 7.55714C1.69642 7.29234 1.59466 6.89207 1.71215 6.52681C1.82964 6.16156 2.14568 5.89568 2.52565 5.84242L5.67963 5.39157L7.10356 2.55105C7.27239 2.21039 7.61973 1.99487 7.99993 1.99487C8.38013 1.99487 8.72747 2.21039 8.8963 2.55105L10.3202 5.39157L13.4742 5.84242C13.8542 5.89568 14.1702 6.16156 14.2877 6.52681C14.4052 6.89207 14.3034 7.29234 14.0258 7.55714L11.7542 9.73404L12.2937 12.8273C12.3604 13.2028 12.2078 13.5835 11.9003 13.809C11.5928 14.0345 11.1838 14.0656 10.8458 13.8891L7.99993 12.4185L5.15408 13.8884Z"
                        stroke="#A6A5A5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span>{{ item.sav }}</span>
                  </div>
                </div>
              </div>
              <div class="right_block">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.15408 13.8884C4.81603 14.0649 4.40707 14.0338 4.09956 13.8083C3.79204 13.5828 3.63947 13.2021 3.70614 12.8267L4.2457 9.73404L1.97409 7.55714C1.69642 7.29234 1.59466 6.89207 1.71215 6.52681C1.82964 6.16156 2.14568 5.89568 2.52565 5.84242L5.67963 5.39157L7.10356 2.55105C7.27239 2.21039 7.61973 1.99487 7.99993 1.99487C8.38013 1.99487 8.72747 2.21039 8.8963 2.55105L10.3202 5.39157L13.4742 5.84242C13.8542 5.89568 14.1702 6.16156 14.2877 6.52681C14.4052 6.89207 14.3034 7.29234 14.0258 7.55714L11.7542 9.73404L12.2937 12.8273C12.3604 13.2028 12.2078 13.5835 11.9003 13.809C11.5928 14.0345 11.1838 14.0656 10.8458 13.8891L7.99993 12.4185L5.15408 13.8884Z"
                    stroke="#D3D2D2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="partner_modal" :class="modal ? 'partner_modal_active' : ''">
      <div class="partner_modal_in">
        <div class="partner_modal_top">
          <span>Добавить в визитницу</span>
          <button class="close_btn">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 21V21C7.029 21 3 16.971 3 12V12C3 7.029 7.029 3 12 3V3C16.971 3 21 7.029 21 12V12C21 16.971 16.971 21 12 21Z"
                stroke="#4D4D4D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.8299 9.16992L9.16992 14.8299"
                stroke="#4D4D4D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.8299 14.8299L9.16992 9.16992"
                stroke="#4D4D4D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div class="card_item">
          <div class="card_head">
            <img :src="partnerModal.img" alt="" />
            <div>
              <div class="name">{{ partnerModal.name }}</div>
              <div class="about">{{ partnerModal.about }}</div>
            </div>
          </div>
          <div class="specialty">
            <div
              class="specialty_item"
              v-for="specialty of partnerModal.specialty"
              :key="1"
            >
              {{ specialty }}
            </div>
          </div>
          <div class="card_foot">
            <div class="card_foot_left">
              <div class="location">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 8.66675V8.66675C6.89533 8.66675 6 7.77142 6 6.66675V6.66675C6 5.56208 6.89533 4.66675 8 4.66675V4.66675C9.10467 4.66675 10 5.56208 10 6.66675V6.66675C10 7.77142 9.10467 8.66675 8 8.66675Z"
                    stroke="#A6A5A5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.00016 14C8.00016 14 3.3335 10.1667 3.3335 6.66667C3.3335 4.08933 5.42283 2 8.00016 2C10.5775 2 12.6668 4.08933 12.6668 6.66667C12.6668 10.1667 8.00016 14 8.00016 14Z"
                    stroke="#A6A5A5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                {{ partnerModal.location }}
              </div>
              <div class="left_block">
                <div class="item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.07868 8.31137C1.97402 8.11737 1.97402 7.88204 2.07868 7.68804C3.34002 5.35537 5.67002 3.33337 8.00002 3.33337C10.33 3.33337 12.66 5.35537 13.9213 7.68871C14.026 7.88271 14.026 8.11804 13.9213 8.31204C12.66 10.6447 10.33 12.6667 8.00002 12.6667C5.67002 12.6667 3.34002 10.6447 2.07868 8.31137Z"
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
                  <span>{{ partnerModal.saw }}</span>
                </div>
                <div class="item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.15408 13.8884C4.81603 14.0649 4.40707 14.0338 4.09956 13.8083C3.79204 13.5828 3.63947 13.2021 3.70614 12.8267L4.2457 9.73404L1.97409 7.55714C1.69642 7.29234 1.59466 6.89207 1.71215 6.52681C1.82964 6.16156 2.14568 5.89568 2.52565 5.84242L5.67963 5.39157L7.10356 2.55105C7.27239 2.21039 7.61973 1.99487 7.99993 1.99487C8.38013 1.99487 8.72747 2.21039 8.8963 2.55105L10.3202 5.39157L13.4742 5.84242C13.8542 5.89568 14.1702 6.16156 14.2877 6.52681C14.4052 6.89207 14.3034 7.29234 14.0258 7.55714L11.7542 9.73404L12.2937 12.8273C12.3604 13.2028 12.2078 13.5835 11.9003 13.809C11.5928 14.0345 11.1838 14.0656 10.8458 13.8891L7.99993 12.4185L5.15408 13.8884Z"
                      stroke="#A6A5A5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span>{{ partnerModal.sav }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="evalution">
          <div class="grades">
            <button
              v-for="i in [3, 4, 5]"
              :key="i"
              @click="grade = i"
              :class="{
                active: grade == i,
              }"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.3082 27.7769C9.63206 28.1298 8.81413 28.0677 8.19911 27.6167C7.58409 27.1657 7.27894 26.4042 7.41228 25.6533L8.4914 19.4681L3.94817 15.1143C3.39284 14.5847 3.18932 13.7841 3.4243 13.0536C3.65928 12.3231 4.29136 11.7914 5.0513 11.6848L11.3593 10.7831L14.2071 5.1021C14.5448 4.42078 15.2395 3.98975 15.9999 3.98975C16.7603 3.98975 17.4549 4.42078 17.7926 5.1021L20.6405 10.7831L26.9484 11.6848C27.7084 11.7914 28.3404 12.3231 28.5754 13.0536C28.8104 13.7841 28.6069 14.5847 28.0515 15.1143L23.5083 19.4681L24.5874 25.6547C24.7208 26.4056 24.4156 27.167 23.8006 27.618C23.1856 28.069 22.3677 28.1311 21.6916 27.7782L15.9999 24.837L10.3082 27.7769Z"
                  stroke="#2FC12C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>{{ i }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadNew from "@/components/newVersionComponents/HeadNew.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";

export default {
  name: "Partner",
  components: {
    HeadNew,
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
  data() {
    return {
      modal: false,
      current_filter: 0,
      partner: [
        {
          id: 1,
          img: "/img/User/user_1.png",
          name: "Артем Николаев",
          about: "Про технологичный бизнес",
          specialty: ["Эксперт", "Дизайн", "Маркетинг"],
          location: "Санкт-Петербург",
          saw: "1.2K",
          sav: 4.5,
          saved: 5,
        },
        {
          id: 2,
          img: "/img/User/user_2.png",
          name: "Максим Поднебесный",
          about: "Авторская методика продвиженийв Telegram и запуск ботов",
          specialty: ["Продюсер", "Реклама", "Здоровье"],
          location: "Москва",
          saw: 845,
          sav: 5,
          saved: 4,
        },
        {
          id: 3,
          img: "/img/User/user_3.png",
          name: "Екатерина Новикова",
          about: "Провожу онлайн-интенсивыпо продажам в логистике",
          specialty: ["Эксперт", "Продюсер", "Здоровье"],
          location: "Москва",
          saw: 120,
          sav: 3.5,
          saved: 3,
        },
        {
          id: 4,
          img: "/img/User/user_4.png",
          name: "Сергей Широков",
          about: "Провожу онлайн-интенсивыпо продажам в логистике",
          specialty: ["Эксперт", "Продюсер", "Здоровье"],
          location: "Москва",
          saw: 120,
          sav: 2.5,
          saved: 2,
        },
      ],
      partnerModal: {
        id: 1,
        img: "/img/User/user_1.png",
        name: "Артем Николаев",
        about: "Про технологичный бизнес",
        specialty: ["Эксперт", "Дизайн", "Маркетинг"],
        location: "Санкт-Петербург",
        saw: "1.2K",
        sav: 4.5,
        saved: 5,
      },
      grade: null,
    };
  },
  methods: {
    partnerModalFun(_id) {
      this.partnerModal = this.partner.find((item) => item.id == _id);
      this.modal = true;
    },
  },
  mounted() {
    document.querySelector("html").onclick = (e) => {
      if (
        !e.target.closest(".partner_modal_in") &&
        !e.target.closest(".card_item")
      ) {
        this.modal = false;
      }
      if (e.target.closest(".close_btn")) {
        this.modal = false;
      }
    };
  },
};
</script>

<style lang="scss">
.partner {
  .partner_in {
    padding: 26px 0;
    .partner_search_and_filter {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 24px;
      .partner_search {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 11px;
        gap: 4px;
        border-radius: 12px;
        background: rgb(34, 34, 34);
        .partner_search_input {
          height: 100%;
          width: 100%;
          background-color: transparent;
          color: rgb(166, 165, 165);
          font-family: Raleway;
          font-size: 14px;
          font-weight: 500;
          line-height: 18px;
          letter-spacing: 0%;
          text-align: left;
          padding: 0;
        }
      }
    }
    .popular_now {
      margin-bottom: 16px;
    }
    .title {
      color: rgb(255, 255, 255);
      font-family: Raleway;
      font-size: 20px;
      font-weight: 700;
      line-height: 28px;
      letter-spacing: 0%;
      text-align: left;
      margin-bottom: 12px;
    }

    .recommendations {
      .card_item {
        margin-bottom: 4px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
  .card_item {
    display: flex;
    flex-direction: column;
    padding: 16px;
    box-sizing: border-box;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    background: rgb(34, 34, 34);
    gap: 12px;
    cursor: pointer;
    .card_head {
      display: flex;
      gap: 12px;
      .name {
        color: rgb(255, 255, 255);
        font-family: Raleway;
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: 0%;
        text-align: left;
        margin-bottom: 6px;
      }
      .about {
        color: rgb(166, 165, 165);
        font-family: Raleway;
        font-size: 12px;
        font-weight: 500;
        line-height: 14px;
        letter-spacing: 0%;
        text-align: left;
      }
    }
    .specialty {
      display: flex;
      align-items: center;
      gap: 4px;
      .specialty_item {
        padding: 6px 12px 6px 12px;
        border-radius: 22px;
        background: rgb(75, 75, 75);
        color: rgb(255, 255, 255);
        font-family: Raleway;
        font-size: 12px;
        font-weight: 500;
        line-height: 14px;
        letter-spacing: 0%;
        text-align: center;
      }
    }
    .card_foot {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: rgb(166, 165, 165);
      .card_foot_left {
        display: flex;
        align-items: center;
        gap: 16px;
      }
      .location {
        display: flex;
        align-items: center;
        gap: 7px;
        font-family: Raleway;
        font-size: 12px;
        font-weight: 500;
        line-height: 14px;
        letter-spacing: 0%;
        text-align: left;
      }
      .left_block {
        display: flex;
        align-items: center;
        gap: 17px;
        .item {
          display: flex;
          align-items: center;
          gap: 7px;
          font-family: Raleway;
          font-size: 12px;
          font-weight: 500;
          line-height: 14px;
          letter-spacing: 0%;
          text-align: left;
        }
      }
      .right_block {
        display: flex;
        align-items: center;
        gap: 7px;
        div {
          font-family: Raleway, sans-serif;
          font-size: 12px;
          font-weight: 500;
          line-height: 0;
          text-align: left;
        }
      }
    }
  }
  .partner_modal {
    max-width: 420px;
    width: 100%;
    height: 100vh;
    backdrop-filter: blur(13.5px);
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: end;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
    z-index: -1;
    opacity: 0;
    transition: 0.5s;
    .partner_modal_in {
      width: 100%;
      padding: 16px 16px 44px;
      border-radius: 24px 24px 0px 0px;
      background: rgb(34, 34, 34);
      transform: translateY(400px);
      transition: 0.5s;
      .partner_modal_top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 16px;
        color: rgb(255, 255, 255);
        font-family: Raleway;
        font-size: 18px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0%;
        text-align: left;
      }
      .evalution {
        display: flex;
        align-items: center;
        margin-top: 26px;

        .grades {
          border-radius: 48px;
          background: linear-gradient(90deg, #324132 0.04%, #345433 99.96%);
          max-width: 224px;
          margin: 0 auto;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;

          button {
            position: relative;

            span {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              color: #2fc12c;
              font-variant-numeric: lining-nums proportional-nums;
              font-size: 14px;
              font-weight: 700;
              line-height: 22px;
              color: rgb(47, 193, 44);
              font-family: Raleway;
              font-weight: 700;
              line-height: 12px;
              letter-spacing: 0%;
              text-align: left;
            }

            &:nth-child(1) {
              span {
                font-size: 10px;
              }
            }
            &:nth-child(2) {
              svg {
                width: 40.02px;
                height: 40.02px;
              }
              span {
                font-size: 12px;
              }
            }
            &:nth-child(3) {
              svg {
                width: 48px;
                height: 48px;
              }
              span {
                font-size: 14px;
              }
            }
          }

          button.active {
            svg {
              path {
                fill: #2fc12c;
              }
            }

            span {
              color: #fff;
            }
          }

          button.opacity {
            opacity: 0.5;
          }
        }
      }
      .partner_item {
        width: 100%;
        margin-bottom: 24px;
        cursor: alias;
      }
    }
  }
  .partner_modal_active {
    opacity: 1;
    z-index: 10;
    .partner_modal_in {
      transform: translateY(0);
    }
  }
}
</style>
