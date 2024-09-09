<template>
  <BaseLayout>
    <template #default>
      <ConBox class="box1">
        <h3 class="p1">나의 위치 정보 안전하게 보호하기</h3>
        <p class="p1">
          은행, 카드사, 증권사, 보험, 국가 기관 등<br />
          나의 위치 정보를 안전하게 관리해 보세요
        </p>
      </ConBox>
      <ConBox class="box2">
        <ul class="menu-list">
          <li class="menu-item">
            <router-link to="">
              <span>누가 내 위치를 조회했지?</span>
              <h4>내 위치 정보<br />조회 이력</h4>
              <i
                ><svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31.5 18C31.5 15.33 30.7082 12.7199 29.2248 10.4998C27.7414 8.27974 25.633 6.54942 23.1662 5.52763C20.6994 4.50585 17.985 4.2385 15.3663 4.7594C12.7475 5.28031 10.3421 6.56606 8.45406 8.45406C6.56606 10.3421 5.28031 12.7475 4.7594 15.3663C4.2385 17.985 4.50585 20.6994 5.52763 23.1662C6.54942 25.633 8.27974 27.7414 10.4998 29.2248C12.7199 30.7082 15.33 31.5 18 31.5"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.5 15H13.515"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22.5 15H22.515"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.25 22.5C15.237 23.508 16.59 24 18 24"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22.5 27C22.5 28.1935 22.9741 29.3381 23.818 30.182C24.6619 31.0259 25.8065 31.5 27 31.5C28.1935 31.5 29.3381 31.0259 30.182 30.182C31.0259 29.3381 31.5 28.1935 31.5 27C31.5 25.8065 31.0259 24.6619 30.182 23.818C29.3381 22.9741 28.1935 22.5 27 22.5C25.8065 22.5 24.6619 22.9741 23.818 23.818C22.9741 24.6619 22.5 25.8065 22.5 27Z"
                    stroke="#6250FE"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M30.3 30.3L33 33"
                    stroke="#6250FE"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </i>
            </router-link>
          </li>
          <li class="menu-item">
            <router-link to="">
              <span>지금 어디있지?</span>
              <h4>가족 및 지인 <br />위치 조회</h4>
              <i
                ><svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_36_3097)">
                    <path
                      d="M18 22.5C14.5 22.5 7.5 24.6 7.5 33"
                      stroke="black"
                      stroke-width="2"
                    />
                    <circle
                      cx="18"
                      cy="10"
                      r="8"
                      stroke="black"
                      stroke-width="2"
                    />
                    <path
                      d="M27 20.6875C24.2051 20.6875 21.9375 22.8457 21.9375 25.5039C21.9375 28.5625 25.3125 33.4095 26.5518 35.0836C26.6032 35.1543 26.6706 35.2118 26.7485 35.2515C26.8264 35.2911 26.9126 35.3118 27 35.3118C27.0874 35.3118 27.1736 35.2911 27.2515 35.2515C27.3294 35.2118 27.3968 35.1543 27.4482 35.0836C28.6875 33.4102 32.0625 28.565 32.0625 25.5039C32.0625 22.8457 29.7949 20.6875 27 20.6875Z"
                      stroke="#6250FE"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M27 27.4375C27.932 27.4375 28.6875 26.682 28.6875 25.75C28.6875 24.818 27.932 24.0625 27 24.0625C26.068 24.0625 25.3125 24.818 25.3125 25.75C25.3125 26.682 26.068 27.4375 27 27.4375Z"
                      stroke="#6250FE"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_36_3097">
                      <rect width="36" height="36" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </i>
            </router-link>
          </li>
          <li class="menu-item">
            <router-link to="">
              <span>여기가 안전할까?</span>
              <h4>안전 정보 지도에서<br />내 위치 보기</h4>
              <i
                ><svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 27.75L13.5 25.5L4.5 30V10.5L13.5 6L22.5 10.5L31.5 6V16.5"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.5 6V25.5"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22.5 10.5V18"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <g clip-path="url(#clip0_36_3120)">
                    <path
                      d="M27.25 25C27.25 25.4641 27.4344 25.9092 27.7626 26.2374C28.0908 26.5656 28.5359 26.75 29 26.75C29.4641 26.75 29.9092 26.5656 30.2374 26.2374C30.5656 25.9092 30.75 25.4641 30.75 25C30.75 24.5359 30.5656 24.0908 30.2374 23.7626C29.9092 23.4344 29.4641 23.25 29 23.25C28.5359 23.25 28.0908 23.4344 27.7626 23.7626C27.4344 24.0908 27.25 24.5359 27.25 25Z"
                      stroke="#6250FE"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M24.3333 25C24.3333 26.2377 24.825 27.4246 25.7001 28.2998C26.5753 29.175 27.7623 29.6666 29 29.6666C30.2377 29.6666 31.4246 29.175 32.2998 28.2998C33.175 27.4246 33.6666 26.2377 33.6666 25C33.6666 23.7623 33.175 22.5753 32.2998 21.7001C31.4246 20.825 30.2377 20.3333 29 20.3333C27.7623 20.3333 26.5753 20.825 25.7001 21.7001C24.825 22.5753 24.3333 23.7623 24.3333 25Z"
                      stroke="#6250FE"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M29 19.1667V20.3334"
                      stroke="#6250FE"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M29 29.6667V30.8334"
                      stroke="#6250FE"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M33.6667 25H34.8334"
                      stroke="#6250FE"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M23.1667 25H24.3334"
                      stroke="#6250FE"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_36_3120">
                      <rect
                        width="14"
                        height="14"
                        fill="white"
                        transform="translate(22 18)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </i>
            </router-link>
          </li>
          <li class="menu-item">
            <router-link to="">
              <span>마음 편하도록</span>
              <h4>안심 보상 보험</h4>
              <i
                ><svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 13.964C19.328 10.618 27.65 16.472 16 24C4.34997 16.472 12.672 10.618 16 13.964Z"
                    fill="#6250FE"
                  />
                  <path
                    d="M17.414 3C17.039 2.62506 16.5303 2.41443 16 2.41443C15.4697 2.41443 14.9611 2.62506 14.586 3L1.29201 16.292C1.1045 16.4798 0.999263 16.7343 0.999451 16.9997C0.999638 17.2651 1.10523 17.5195 1.29301 17.707C1.48078 17.8945 1.73535 17.9997 2.00071 17.9996C2.26608 17.9994 2.5205 17.8938 2.70801 17.706L4.00001 16.414V27C4.00001 27.7957 4.31608 28.5587 4.87869 29.1213C5.4413 29.6839 6.20436 30 7.00001 30H25C25.7957 30 26.5587 29.6839 27.1213 29.1213C27.6839 28.5587 28 27.7957 28 27V16.414L29.292 17.706C29.4795 17.8938 29.7339 17.9994 29.9993 17.9996C30.2647 17.9997 30.5192 17.8945 30.707 17.707C30.8948 17.5195 31.0004 17.2651 31.0006 16.9997C31.0008 16.7343 30.8955 16.4798 30.708 16.292L26 11.586V5C26 4.73479 25.8947 4.48043 25.7071 4.2929C25.5196 4.10536 25.2652 4 25 4H23C22.7348 4 22.4804 4.10536 22.2929 4.2929C22.1054 4.48043 22 4.73479 22 5V7.586L17.414 3ZM26 14.414V27C26 27.2652 25.8947 27.5196 25.7071 27.7071C25.5196 27.8946 25.2652 28 25 28H7.00001C6.73479 28 6.48044 27.8946 6.2929 27.7071C6.10536 27.5196 6.00001 27.2652 6.00001 27V14.414L16 4.414L26 14.414Z"
                    fill="black"
                  />
                </svg>
              </i>
            </router-link>
          </li>
        </ul>
      </ConBox>
    </template>
  </BaseLayout>
</template>

<script setup>
import ConBox from "@/components/ConBox.vue";
import BaseLayout from "@/components/includes/layout/BaseLayout.vue";
</script>

<style lang="scss" scoped>
.box1 {
  padding-top: 1.6rem;
  p {
    padding-top: 0.4rem;
    @include color(color, gray-400);
  }
}
.box2 {
  padding-top: 2.4rem;
  .menu-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    .menu-item {
      height: 12.6rem;
      position: relative;
      padding: 2.4rem 1.6rem;
      border-radius: 1.2rem;
      width: calc(50% - 0.5rem);
      background-color: #ecf2ff;
      border: 1px solid #ecf2ff;
      &:hover,
      &:focus {
        background-color: transparent;
        @include color(border-color, purple);
      }
      span {
        @include title(p3);
        @include color(color, purple);
      }
      h4 {
        margin-top: 0.4rem;
        text-decoration: none;
        font-size: 1.6rem;
        line-height: 2rem;
        font-weight: 500;
        letter-spacing: -0.08rem;
      }
      i {
        position: absolute;
        right: 1.6rem;
        bottom: 1.6rem;
        svg {
          width: 3.6rem;
          height: 3.6rem;
        }
      }
    }
  }
}
</style>
