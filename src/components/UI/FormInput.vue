<template>
  <div class="input_wrapper">
    <label>{{ label }}</label>
    <!-- <input
      v-if="type !== 'phone'"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      @input="(e) => $emit('update:value', e.target.value)"
    /> -->
    <div class="form_textarea">
      <textarea
        ref="input"
        id="information_val"
        :class="error ? 'input_error' : ''"
        @keydown="autosize"
        @focusout="$event.target.value.length != 0 ? (error = false) : (error = true)"
        v-if="type !== 'phone'"
        :type="type"
        :value="value"
        :placeholder="placeholder"
        @input="
          $emit('update:value', $event.target.value), $event.target.value.length != 0 ? (error = false) : (error = true)
        "
      ></textarea>
      <div class="error_icon" v-if="error">
        <img src="@/assets/images/error_input.svg" alt="" />
      </div>
    </div>
    <div class="error_message" v-if="error">Error message</div>
    <input
      v-if="type === 'phone'"
      v-model="maskedValue"
      v-maska="bindedObject"
      :placeholder="placeholder"
      data-maska="+7 (###) ###-##-##"
      @maska="$emit('update:value', '+7' + bindedObject.unmasked)"
      pattern="[0-9]*"
      inputmode="numeric"
    />
  </div>
</template>

<script>
import { vMaska } from "maska";

export default {
  name: "FormInput",
  directives: { maska: vMaska },
  props: {
    type: {
      type: String,
      default: "text",
    },
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    value: [Number, String],
  },
  emits: ["update:value"],
  data() {
    return {
      error: false,
      bindedObject: {
        masked: "",
        unmasked: "",
        completed: false,
      },
    };
  },
  methods: {
    autosize(e) {
      if (e.target.scrollHeight < 248) {
        e.target.style.height = e.target.scrollHeight + "px";
      } else {
        e.target.style.height = e.target.style.height + "px";
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/_variables.scss";

.input_wrapper {
  display: flex;
  flex-direction: column;
  gap: 4px;
  .form_textarea {
    width: 100%;
    position: relative;
    line-height: 0;
  }
  label {
    color: $color-11;
    font-size: 12px;
    font-weight: 600;
    line-height: 14px;
  }
  textarea {
    width: 100%;
    border-radius: 12px;
    border: 1px solid $color-4;
    color: rgb(211, 210, 210);
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0%;
    text-align: left;
    resize: none;
    height: 48px;
    border: 1px solid rgb(73, 73, 73);
    position: relative;
    &::-webkit-scrollbar {
      width: 0;
    }
    &::placeholder {
      color: rgb(211, 210, 210);
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0%;
      text-align: left;
    }
    &:hover {
      border: 1px solid rgb(96, 96, 96);
    }
  }
  .input_error {
    border: 1px solid $color-5 !important;
  }
  textarea:focus {
    border: 1px solid $color-5;
  }
  .error_message {
    color: rgb(255, 48, 58);
    font-family: Raleway;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0%;
    text-align: left;
    margin-top: 4px;
  }
  .error_icon {
    position: absolute;
    top: calc(50%);
    right: 12px;
    transform: translateY(-50%);
    z-index: 100000;
  }
}

.dark-theme .input_wrapper input {
  color: $color-1;
  border: 1px solid $color-13;
  &:focus {
    border: 1px solid $color-5;
  }
}

@media only screen and (max-width: 992px) {
  .input_wrapper input {
    height: 56px;
    padding: 0px 16px;
  }
}
</style>
