<script setup lang="ts">
import type { PropType } from 'vue'

interface ContactInfo {
  icon: string
  value: string
  desc: string
}

interface SocialInfo {
  icon: string
  link: string
}

defineProps({
  width: {
    type: String,
    default: '15rem',
  },
  avatar: {
    type: String,
  },
  userName: {
    type: String,
  },
  userRole: {
    type: String,
  },
  wrapClass: {
    type: [String, Array, Object],
  },
  headerClass: {
    type: [String, Array, Object],
  },
  contactClass: {
    type: [String, Array, Object],
  },
  footerClass: {
    type: [String, Array, Object],
  },
  contactList: {
    type: Array as PropType<ContactInfo[]>,
  },
  socialList: {
    type: Array as PropType<SocialInfo[]>,
  },
  socialBgColor: {
    type: String,
    default: '#68c8a2',
  },
  socialIconColor: {
    type: String,
    default: '#000',
  },
})
</script>

<template>
  <div class="a-card__box">
    <div
      class="a-card__content" :class="wrapClass" :style="{
        width,
      }"
    >
      <div class="a-card__head" :class="headerClass">
        <slot name="header">
          <img class="a-card__head--img" :src="avatar" alt="">
          <div class="a-card__head--name">
            {{ userName }}
          </div>
          <div class="a-card__head--role">
            {{ userRole }}
          </div>
        </slot>
      </div>
      <div class="a-card__info" :class="contactClass">
        <slot>
          <div v-for="item in contactList" :key="item.value" class="a-card__info--item">
            <i class="a-card__info--icon icon-btn" :class="item.icon" />
            <div class="a-card__info--right">
              <p class="a-card__info--main">
                {{ item.value }}
              </p>
              <p class="a-card__info--desc">
                {{ item.desc }}
              </p>
            </div>
          </div>
        </slot>
      </div>
      <div
        class="a-card__footer" :class="footerClass" :style="{
          background: socialBgColor,
          color: socialIconColor,
        }"
      >
        <slot name="footer">
          <a v-for="item in socialList" :key="item.link" :href="item.link" class="a-card__footer--item"> <i class="a-card__footer--icon icon-btn" :class="item.icon" /> </a>
        </slot>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.a-card__box{
  padding-top: 2rem;
  padding-bottom: 2rem;
  .a-card__content {
    position: relative;
    width: 15rem;
    padding: 0 0.4rem;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 0.8rem 0.2rem rgba(0, 0, 0, 0.4);
    .a-card__head {
      position: relative;
      top: -1.6rem;
      padding: 1rem 2rem;
      text-align: center;
      color: #fff;
      background-color: #6bcca3;
      border-radius: 0.6rem;
      box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.4);
      &--img {
        display: block;
        margin: 0 auto;
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
      }
      &--name {
        display: inline-block;
        font-size: 1.2rem;
        font-weight: bold;
      }
      &--role {
        font-size: 0.7rem;
      }
    }
    .a-card__info {
      margin-top: 1.2rem;
      &--item {
        display: flex;
        margin-top: 0.6rem;
        color: #61bc9f;
      }
      &--icon {
        display: inline-block;
        vertical-align: top;
        margin-right: 1rem;
        font-size: 1.2rem;
      }
      &--right {
        flex: 1;
        text-align: left;
      }
      &--main {
        font-size: 1rem;
        line-height: 1;
        color: #519f89;
        font-weight: bold;
      }
      &--desc {
        margin-top: 0.3rem;
        font-size: 0.7rem;
        line-height: 1;
      }
    }
    .a-card__footer {
      position: relative;
      top: 1rem;
      display: flex;
      margin-top: 1.8rem;
      padding: 0 0.8rem;
      color: #000;
      background-color: #68c8a2;
      border-radius: 0.4rem;
      box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.4);
      &--item {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        height: 3rem;
      }
      &--icon {
        display: inline-block;
        font-size: 1.4rem;
      }
    }
  }
}
</style>
