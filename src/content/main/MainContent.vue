<template>
  <div>
    <ConBox class="con-box1">
      <div class="home-box box1 trand">
        <h3 class="trand-title">급상승 트렌드</h3>
        <span class="trand-date">2024.06.29 09:20</span>
        <button type="button" class="trand-more">
          <svg
            width="10"
            height="12"
            viewBox="0 0 10 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L5 5L9 1" stroke="#98999B" />
            <path d="M1 7L5 11L9 7" stroke="#98999B" />
          </svg>
        </button>
      </div>
      <div class="home-box box2 search-rank">
        <a-carousel
          :after-change="onChange"
          :vertical="true"
          :swipe="false"
          :dots="false"
          :autoplay="true"
          :autoplaySpeed="2000"
        >
          <div
            :class="`slide slide${slide.count}`"
            v-for="slide in slides"
            :key="slide"
          >
            <div class="slide-inner">
              <span class="count">{{ slide.count + 1 }}</span>
              <span class="title">{{ slide.title }}</span>
              <i
                :class="`variation ${slide.variation}`"
                v-html="setVariation(slide.variation)"
              ></i>
            </div>
          </div>
        </a-carousel>
      </div>
      <div class="home-box box3 qr-box">
        <span class="left-box">
          <a class="inner-box qr">
            <i class="qr-icon"
              ><svg
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <rect
                  y="0.422089"
                  width="22"
                  height="19.25"
                  fill="url(#pattern0_29_15563)"
                />
                <defs>
                  <pattern
                    id="pattern0_29_15563"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlink:href="#image0_29_15563"
                      transform="scale(0.025 0.0285714)"
                    />
                  </pattern>
                  <image
                    id="image0_29_15563"
                    width="40"
                    height="35"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAjCAIAAABpW9/5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LmRhNGE3ZTVlZiwgMjAyMi8xMS8yMi0xMzo1MDowNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjEgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVDNzA2OTQ0M0M2MzExRUY4RjEwQkFDOTZBREE5ODNBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVDNzA2OTQ1M0M2MzExRUY4RjEwQkFDOTZBREE5ODNBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NUM3MDY5NDIzQzYzMTFFRjhGMTBCQUM5NkFEQTk4M0EiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NUM3MDY5NDMzQzYzMTFFRjhGMTBCQUM5NkFEQTk4M0EiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7K0e9vAAAFdUlEQVR42qxXvUstRxSfmd291w80GNQm6iOKCIKFIAqawkL/gqhYiagIFiLYxCqFPkRsTWEZgo3khWAlBEHEwo8mWPgVLAQlRowYTdS79+7O5Ddz1r373tObrO9OMffO7JnzO19z5hyulGKMeZ5n2zb+XF1dHR8fp1IpKaXv+47jZDKZgoKCjo6ORCIBAtBzztkL4/7+fmdnB2fBEEtQgkNRUVFDQ0NZWRn2hRDYB2dOwBjY3draGh0dfXh4sCwLS8yu6+IY6CYmJsbGxnAsByoGyFZXV9PpNPCIw+PjI+QuKSlZWlpqbGwMRdf40Anz5ubm8PAwUEkoosB5aA9g2ANccCAU9NmBsyEqTmGG3ND+7u6up6fn6OgIO0SpzQs6fFtYWAApljU1NXV1dWR5wIBXdXX10NAQljBAMpl8CRXEs7OzUO7y8pIkhqzY3Nvbu76+xvI7M8jUmhpSYG5ubq6trQXkyckJlvgWzhjQQ8UZdJA4g+GXZrS1tdE+9BQUAljc3t7SFrDJaOGM89CAjBza6tkRfiXjgTN2wBB/YMKLi4uzszPswxIBX24GmZ3kjfICPEUE9sMIeBaVKCk4Qmz6hAFsGJwU0I4UTEjPOImllPA4/9sSpVgwzkKl6TwkzaEuB6r5Naw8YWkeOIlZsoxte2nXZawIKjAuxVM0agCM0tJSpf3OcgZvvAFmFRUV+u5y/uZNNVTwpQ+NM4prvQcGBg4ODkZGRjj7jAV3VcYCCNTgknE/OCttYwH+7TfTP/38fWdnZ9JKc5mwlYOwSsOzUSdBNEvgGsB08YDZM8DZuyf9O+E4TCWJjCtpYtXHL4cHTUaBKVLGtYmYRo0KKqI7MDPSD6LNBImHCLADKosHhFJ7mIIof14GHsUmk0oK40d9gz0/ZVu2z3w4gzNEJr7rj4LHZB/Q0w2xI/sZX5tU2HYC1wdOtBzjfKAi8IQxjpHIBos8RjV4ImhgVZgzzALcd014qSdvWMENeIWpLfmR9mbHV8hLCCOtjDapYLKQ2e/e7az/8htTOGWEsf4xmM6rgJ0sGldhVFuOhweQMxsBi5caAfT1wBf2+uofMvUV8z5nqtCc/uvp2luS2zGhXXOwwAC7YWwroYAseJHU6Q8Bnvrxh19tFAZ//m4SFXk19K1JX3EzVIRDdsbLhlog7VIC1YwrKyu5m1aUqAOvcPM8SO1qJ2b+8C3SOJnloyjdu0hNiYQNCbgsgb8FwtdH4lBR4IibZFwnR1Tlkf8mA3oZ18bTl7ER20gappRRmQ8zjjJXK2bKDBRQVnbNtTGl59CrBiWF5XIjlAmf9+q3rOKcxcsgH5aBeh0kLMqJJn9xutmc3u1o7Ug7OR7817+PT0D6NYoWCVRg69pTCCo9Px0pWs9QJUR/ArUAg5rr8PAQ1Ql9Q+2SvxfCAv/d3V3Uzu8JRbVgS0sLCsHBwUHaoc18jf7+fjBvb28Pd7KmRumLP+vr67STu2OIO7a3t9EBnZ+fn56ekkVFtCalIpSWKh/PEylHnNHLoBlASxAUzlRH0meKAqp+8qsx3AyNCZXCVkQjmXoedHzUenw6Hrns5uYGYOBcXFxcVVVFYStIHMCgZaI2a35+PnR8tD+gcPufFg7dh/+Tk5Nky/r6+sLCwqCFCHnNzc0tLi6SjzFT06ebHCHKy8vfvn3b3d39n3jLy8szMzO4NnAnOGS7YY5iz5qenu7r6wMZ+GfT0/j4eFdXF9kcZ0CHGY4BHbq//f19kjqH0ji7sbFBLtQvv0kXlATxLIJ5b28v2AI125hTMsO8traGfhWVPekNjUGKznNlZQXNahiiL/VOEBEA0BhnQYZowvHW1tapqammpibKJLpjE+JfAQYAJ8MbUuLIZs8AAAAASUVORK5CYII="
                  />
                </defs>
              </svg>
            </i>
            <span class="box-text">QR인증</span>
          </a>
          <a class="inner-box cert">
            <i class="cert-icon"
              ><svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="11.6282" cy="12.4661" r="11.5" fill="#999999" />
                <rect
                  x="10.6282"
                  y="17.9661"
                  width="11"
                  height="2"
                  transform="rotate(-90 10.6282 17.9661)"
                  fill="white"
                />
                <rect
                  x="10.6282"
                  y="17.9661"
                  width="11"
                  height="2"
                  transform="rotate(-90 10.6282 17.9661)"
                  fill="white"
                />
                <rect
                  x="6.12823"
                  y="11.4661"
                  width="11"
                  height="2"
                  fill="white"
                />
                <rect
                  x="6.12823"
                  y="11.4661"
                  width="11"
                  height="2"
                  fill="white"
                />
              </svg>
            </i>
            <span class="box-text">인증서</span>
          </a>
          <a class="cert-anchor">
            <span class="box-text">나의 인증내역</span>
            <i></i>
          </a>
        </span>
        <span class="right-box">
          <a class="inner-box id">
            <span class="box-text">
              <strong>홍*동</strong>님의<br />모바일신분증</span
            >
            <i class="id-icon"
              ><svg
                width="76"
                height="22"
                viewBox="0 0 76 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <rect
                  x="0.939026"
                  width="75"
                  height="21.6667"
                  fill="url(#pattern0_29_15590)"
                />
                <defs>
                  <pattern
                    id="pattern0_29_15590"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlink:href="#image0_29_15590"
                      transform="scale(0.00740741 0.025641)"
                    />
                  </pattern>
                  <image
                    id="image0_29_15590"
                    width="135"
                    height="39"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAAAnCAIAAACqmcyzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LmRhNGE3ZTVlZiwgMjAyMi8xMS8yMi0xMzo1MDowNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjEgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk1NkUzNEM2M0M2NDExRUY5QkY5QjkxQUI4ODI5MDFGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjk1NkUzNEM3M0M2NDExRUY5QkY5QjkxQUI4ODI5MDFGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTU2RTM0QzQzQzY0MTFFRjlCRjlCOTFBQjg4MjkwMUYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTU2RTM0QzUzQzY0MTFFRjlCRjlCOTFBQjg4MjkwMUYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6s4DonAAAcGklEQVR42tRb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"
                  />
                </defs>
              </svg>
            </i>
          </a>
        </span>
      </div>
      <div class="home-box box4">
        <div class="inner-box cell-pay">
          <span class="box-text">휴대폰결제</span>
          <a href="">조회하기</a>
        </div>
        <div class="inner-box cell-pay">
          <span class="box-text">U+ PASS머니</span>
          <a href="">혜택받기</a>
        </div>
      </div>
    </ConBox>
    <ConBox class="con-box2">
      <ul class="icon-list">
        <li class="icon-item">
          <a href="" class="icon-anchor">
            <i></i>
            <span class="icon-title"></span>
          </a>
        </li>
      </ul>
    </ConBox>

    <ConBox class="con-box3">
      <div class="benefit-title-wrap">
        <h3>맞춤혜택</h3>
        <span class="more">더보기</span>
      </div>
      <div class="benefit-banner">
        <img src="" alt="" />
      </div>
    </ConBox>

    <div class="bottom-menu">
      <ul class="menu-list">
        <li class="menu-item">
          <a href="" class="menu-anchor">
            <i></i>
            <span class="menu-"></span>
          </a>
        </li>
        <li class="menu-item">
          <a href="" class="menu-anchor">
            <i></i>
            <span class="menu-"></span>
          </a>
        </li>
        <li class="menu-item">
          <a href="" class="menu-anchor">
            <i></i>
            <span class="menu-"></span>
          </a>
        </li>
        <li class="menu-item">
          <a href="" class="menu-anchor">
            <i></i>
            <span class="menu-"></span>
          </a>
        </li>
      </ul>
      <div class="my-menu">
        <a href=""></a>
      </div>
    </div>
  </div>
</template>

<script setup>
import ConBox from "@/components/ConBox.vue";
const onChange = (current) => {
  console.log(current);
};
const slides = [
  {
    count: 0,
    title: "카카오페이1",
    variation: "increase",
  },
  {
    count: 1,
    title: "카카오페이2",
    variation: "decrease",
  },
  {
    count: 2,
    title: "카카오페이3",
    variation: "same",
  },
  {
    count: 3,
    title: "카카오페이4",
    variation: "increase",
  },
  {
    count: 4,
    title: "카카오페이5",
    variation: "decrease",
  },
];

const setVariation = (variation) => {
  var increaseIcon = `<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.13397 0.5C4.51887 -0.166667 5.48113 -0.166666 5.86603 0.5L9.33013 6.5C9.71503 7.16667 9.2339 8 8.4641 8H1.5359C0.766098 8 0.284973 7.16667 0.669873 6.5L4.13397 0.5Z" fill="#FF3A4A"/>
</svg>
`;
  var decreaseIcon = `<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.86603 7.5C5.48113 8.16667 4.51887 8.16667 4.13397 7.5L0.669873 1.5C0.284973 0.833334 0.766098 8.94676e-07 1.5359 8.27378e-07L8.4641 2.21695e-07C9.2339 1.54397e-07 9.71503 0.833333 9.33013 1.5L5.86603 7.5Z" fill="#6250FE"/>
</svg>
`;
  var sameIcon = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="2.5" y1="5.5" x2="9.5" y2="5.5" stroke="#222222" stroke-linecap="round"/>
</svg>
`;
  if (variation === "increase") {
    return increaseIcon;
  } else if (variation === "decrease") {
    return decreaseIcon;
  } else if (variation === "same") {
    return sameIcon;
  }
};
</script>

<style lang="scss" scoped>
.trand {
  position: relative;
  &-title {
    display: inline-block;
    @include title(p1, 700);
    margin-right: 0.8rem;
    @include color(color, purple);
  }
  &-date {
    display: inline-block;
    @include title(caption2);
    @include color(color, gray-400);
  }
  &-more {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 1.2rem;
    height: 1.2rem;
    @include flexbox;
    justify-content: center;
    svg {
      width: 0.8rem;
      height: 1rem;
    }
  }
}
.search-rank {
  margin-top: 1.6rem;
}
.qr-box {
  .inner-box {
    i {
      svg {
      }
    }
    .box-text {
    }
  }
  .inner-box.qr {
  }
  .left-box {
  }
  .right-box {
  }
}
:deep(.slick-slide) {
  height: 2rem;
  line-height: 2rem;
  overflow: hidden;
}

:deep(.slick-slide .slide) {
}
:deep(.slick-slide .slide-inner) {
  @include flexbox;
  gap: 0.4rem;
}

:deep(.slick-slide .slide .count) {
  @include flexbox;
  justify-content: center;
  width: 1.6rem;
  height: 1.6rem;
  @include color(background-color, purple);
  @include color(color, white);
  @include title(p3);
  border-radius: 0.4rem;
}
:deep(.slick-slide .slide .title) {
  @include color(color, black);
  @include title(p3);
}
:deep(.slick-slide .slide .variation) {
  color: #fff;
}
:deep(.slick-slide .slide .variation.increase) {
  color: #fff;
}
:deep(.slick-slide .slide .variation.decrease) {
  color: #fff;
}
</style>
