import Svg, { G, Path } from "react-native-svg";

interface IIcon {
  title: string;
  icon: any;
}

export const iconSvg: IIcon[] = [
  {
    title: "home_focused",
    icon: (
      <Svg viewBox="0 0 24 24" fill="none">
        <G id="SVGRepo_bgCarrier" stroke-width="0"></G>
        <G
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></G>
        <G id="SVGRepo_iconCarrier">
          <Path
            d="M20.8593 8.36985L13.9293 2.82985C12.8593 1.96985 11.1293 1.96985 10.0693 2.81985L3.13929 8.36985C2.35929 8.98985 1.85929 10.2998 2.02929 11.2798L3.35929 19.2398C3.59929 20.6598 4.95929 21.8098 6.39929 21.8098H17.5993C19.0293 21.8098 20.3993 20.6498 20.6393 19.2398L21.9693 11.2798C22.1293 10.2998 21.6293 8.98985 20.8593 8.36985ZM11.9993 15.4998C10.6193 15.4998 9.49929 14.3798 9.49929 12.9998C9.49929 11.6198 10.6193 10.4998 11.9993 10.4998C13.3793 10.4998 14.4993 11.6198 14.4993 12.9998C14.4993 14.3798 13.3793 15.4998 11.9993 15.4998Z"
            fill="#292D32"
          ></Path>
        </G>
      </Svg>
    ),
  },
  {
    title: "home_unfocused",
    icon: (
      <Svg viewBox="0 0 24 24" fill="none">
        <G id="SVGRepo_bgCarrier" stroke-width="0"></G>
        <G
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></G>
        <G id="SVGRepo_iconCarrier">
          <Path
            opacity="0.5"
            d="M2.36407 12.9579C1.98463 10.3208 1.79491 9.00229 2.33537 7.87495C2.87583 6.7476 4.02619 6.06234 6.32691 4.69181L7.71175 3.86687C9.80104 2.62229 10.8457 2 12 2C13.1543 2 14.199 2.62229 16.2882 3.86687L17.6731 4.69181C19.9738 6.06234 21.1242 6.7476 21.6646 7.87495C22.2051 9.00229 22.0154 10.3208 21.6359 12.9579L21.3572 14.8952C20.8697 18.2827 20.626 19.9764 19.451 20.9882C18.2759 22 16.5526 22 13.1061 22H10.8939C7.44737 22 5.72409 22 4.54903 20.9882C3.37396 19.9764 3.13025 18.2827 2.64284 14.8952L2.36407 12.9579Z"
            stroke="#1C274C"
            stroke-width="1.5"
          ></Path>
          <Path
            d="M12 15L12 18"
            stroke="#1C274C"
            stroke-width="1.5"
            stroke-linecap="round"
          ></Path>
        </G>
      </Svg>
    ),
  },
  {
    title: "category_focused",
    icon: (
      <Svg viewBox="0 0 24 24" fill="none">
        <G id="SVGRepo_bgCarrier" stroke-width="0"></G>
        <G
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></G>
        <G id="SVGRepo_iconCarrier">
          <Path
            d="M7.24 2H5.34C3.15 2 2 3.15 2 5.33V7.23C2 9.41 3.15 10.56 5.33 10.56H7.23C9.41 10.56 10.56 9.41 10.56 7.23V5.33C10.57 3.15 9.42 2 7.24 2Z"
            fill="#292D32"
          ></Path>
          <Path
            d="M18.6695 2H16.7695C14.5895 2 13.4395 3.15 13.4395 5.33V7.23C13.4395 9.41 14.5895 10.56 16.7695 10.56H18.6695C20.8495 10.56 21.9995 9.41 21.9995 7.23V5.33C21.9995 3.15 20.8495 2 18.6695 2Z"
            fill="#292D32"
          ></Path>
          <Path
            d="M18.6695 13.4297H16.7695C14.5895 13.4297 13.4395 14.5797 13.4395 16.7597V18.6597C13.4395 20.8397 14.5895 21.9897 16.7695 21.9897H18.6695C20.8495 21.9897 21.9995 20.8397 21.9995 18.6597V16.7597C21.9995 14.5797 20.8495 13.4297 18.6695 13.4297Z"
            fill="#292D32"
          ></Path>
          <Path
            d="M7.24 13.4297H5.34C3.15 13.4297 2 14.5797 2 16.7597V18.6597C2 20.8497 3.15 21.9997 5.33 21.9997H7.23C9.41 21.9997 10.56 20.8497 10.56 18.6697V16.7697C10.57 14.5797 9.42 13.4297 7.24 13.4297Z"
            fill="#292D32"
          ></Path>
        </G>
      </Svg>
    ),
  },
  {
    title: "category_unfocused",
    icon: (
      <Svg viewBox="0 0 24 24" fill="none">
        <G id="SVGRepo_bgCarrier" stroke-width="0"></G>
        <G
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></G>
        <G id="SVGRepo_iconCarrier">
          <Path
            d="M5 10H7C9 10 10 9 10 7V5C10 3 9 2 7 2H5C3 2 2 3 2 5V7C2 9 3 10 5 10Z"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></Path>
          <Path
            d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></Path>
          <Path
            d="M17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22Z"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></Path>
          <Path
            d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></Path>
        </G>
      </Svg>
    ),
  },
  {
    title: "crypto_focused",
    icon: (
      <Svg viewBox="0 0 24 24" fill="none">
        <G id="SVGRepo_bgCarrier" stroke-width="0"></G>
        <G
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></G>
        <G id="SVGRepo_iconCarrier">
          <Path
            d="M23.0004 15.2188C22.5904 15.2188 22.2504 15.5588 22.2504 15.9688C22.2504 18.9288 20.1904 21.4087 17.4204 22.0587L17.6904 21.6088C17.9004 21.2488 17.7904 20.7887 17.4304 20.5787C17.0804 20.3687 16.6104 20.4787 16.4004 20.8387L15.3504 22.5887C15.2104 22.8187 15.2104 23.1087 15.3404 23.3387C15.4704 23.5787 15.7204 23.7187 15.9904 23.7187C20.2604 23.7187 23.7404 20.2387 23.7404 15.9688C23.7504 15.5588 23.4104 15.2188 23.0004 15.2188Z"
            fill="#292D32"
          ></Path>
          <Path
            d="M8 0.21875C3.73 0.21875 0.25 3.69875 0.25 7.96875C0.25 8.37875 0.59 8.71875 1 8.71875C1.41 8.71875 1.75 8.37875 1.75 7.96875C1.75 5.00875 3.81 2.52875 6.58 1.87875L6.31 2.32875C6.1 2.68875 6.21 3.14875 6.57 3.35875C6.92 3.56875 7.39 3.45875 7.6 3.09875L8.65 1.34875C8.78 1.11875 8.79 0.83875 8.65 0.59875C8.52 0.36875 8.27 0.21875 8 0.21875Z"
            fill="#292D32"
          ></Path>
          <Path
            d="M21.5002 8.67C21.5002 11.75 19.2602 14.29 16.3302 14.76C16.3302 14.75 16.3302 14.75 16.3302 14.74C16.0402 11.01 13.0202 7.97 9.24023 7.67C9.71023 4.74 12.2502 2.5 15.3302 2.5C18.7402 2.5 21.5002 5.26 21.5002 8.67Z"
            fill="#292D32"
          ></Path>
          <Path
            d="M9.80914 14.2003C9.80914 14.0503 9.63914 13.8203 9.42914 13.8203H7.36914V14.5703H9.42914C9.63914 14.5803 9.80914 14.4103 9.80914 14.2003Z"
            fill="#292D32"
          ></Path>
          <Path
            d="M9.82914 16.0781H9.42914H7.36914V16.8281H9.83914C10.1591 16.8281 10.3791 16.6281 10.3791 16.4481C10.3791 16.2681 10.1491 16.0781 9.82914 16.0781Z"
            fill="#292D32"
          ></Path>
          <Path
            d="M14.83 14.8484C14.6 11.8184 12.18 9.39844 9.15 9.16844C8.99 9.15844 8.84 9.14844 8.67 9.14844C5.26 9.14844 2.5 11.9084 2.5 15.3284C2.5 18.7384 5.26 21.4984 8.67 21.4984C12.08 21.4984 14.85 18.7384 14.85 15.3284C14.85 15.1584 14.84 15.0084 14.83 14.8484ZM9.83 18.3284H9.17V18.7084C9.17 19.1184 8.83 19.4584 8.42 19.4584C8.01 19.4584 7.67 19.1184 7.67 18.7084V18.3284H6.62C6.21 18.3284 5.87 17.9884 5.87 17.5784V15.3284V13.0784C5.87 12.6684 6.21 12.3284 6.62 12.3284H7.67V11.9484C7.67 11.5384 8.01 11.1984 8.42 11.1984C8.83 11.1984 9.17 11.5384 9.17 11.9484V12.3284H9.43C10.43 12.3284 11.31 13.2084 11.31 14.2084C11.31 14.4984 11.24 14.7684 11.12 15.0184C11.58 15.3584 11.87 15.8784 11.87 16.4584C11.87 17.4884 10.96 18.3284 9.83 18.3284Z"
            fill="#292D32"
          ></Path>
        </G>
      </Svg>
    ),
  },
  {
    title: "crypto_unfocused",
    icon: (
      <Svg viewBox="0 0 24 24" fill="none">
        <G id="SVGRepo_bgCarrier" stroke-width="0"></G>
        <G
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></G>
        <G id="SVGRepo_iconCarrier">
          <Path
            opacity="0.4"
            d="M23 15.9697C23 19.8397 19.87 22.9697 16 22.9697L17.05 21.2197"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></Path>
          <Path
            opacity="0.4"
            d="M1 7.96973C1 4.09973 4.13 0.969727 8 0.969727L6.95 2.71973"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></Path>
          <Path
            d="M6.61914 13.0703H9.42914C10.0491 13.0703 10.5591 13.6303 10.5591 14.2003C10.5591 14.8203 10.0591 15.3303 9.42914 15.3303H6.61914V13.0703Z"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></Path>
          <Path
            d="M6.61914 15.3301H9.83914C10.5491 15.3301 11.1291 15.8301 11.1291 16.4601C11.1291 17.0801 10.5491 17.5901 9.83914 17.5901H6.61914V15.3301Z"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></Path>
          <Path
            d="M8.41992 17.5801V18.7001"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></Path>
          <Path
            d="M8.41992 11.9502V13.0702"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></Path>
          <Path
            d="M14.8498 15.3302C14.8498 18.7402 12.0898 21.5002 8.67977 21.5002C5.26977 21.5002 2.50977 18.7402 2.50977 15.3302C2.50977 11.9202 5.26977 9.16016 8.67977 9.16016C8.83977 9.16016 8.98977 9.17018 9.15977 9.18018C12.1898 9.41018 14.6098 11.8302 14.8398 14.8602C14.8398 15.0102 14.8498 15.1602 14.8498 15.3302Z"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></Path>
          <Path
            d="M21.5002 8.66998C21.5002 12.08 18.7402 14.84 15.3302 14.84H14.8402C14.6102 11.81 12.1902 9.38997 9.16016 9.15997V8.66998C9.16016 5.25998 11.9202 2.5 15.3302 2.5C18.7402 2.5 21.5002 5.25998 21.5002 8.66998Z"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></Path>
        </G>
      </Svg>
    ),
  },
  {
    title: "cart_focused",
    icon: (
      <Svg viewBox="0 0 24 24" fill="none">
        <G id="SVGRepo_bgCarrier" stroke-width="0"></G>
        <G
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></G>
        <G id="SVGRepo_iconCarrier">
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.6646 2.32919C15.0351 2.14395 15.4856 2.29412 15.6708 2.6646L17.872 7.06692C19.2251 7.17087 20.0742 7.43628 20.6221 8.11398C21.5226 9.22795 21.1634 10.9044 20.4449 14.2572L20.0164 16.2572C19.5294 18.5297 19.2859 19.666 18.4608 20.333C17.6357 21 16.4737 21 14.1495 21H9.85053C7.52639 21 6.36432 21 5.53925 20.333C4.71418 19.666 4.47069 18.5297 3.98372 16.2572L3.55514 14.2572C2.83668 10.9044 2.47745 9.22795 3.378 8.11398C3.92585 7.43629 4.77494 7.17088 6.12802 7.06693L8.32918 2.6646C8.51442 2.29412 8.96493 2.14395 9.33541 2.32919C9.70589 2.51443 9.85606 2.96494 9.67082 3.33542L7.83589 7.00528C8.31911 7.00001 8.84638 7.00001 9.42196 7.00001H14.5781C15.1537 7.00001 15.6809 7.00001 16.1641 7.00528L14.3292 3.33542C14.1439 2.96494 14.2941 2.51443 14.6646 2.32919ZM7.25 12C7.25 11.5858 7.58579 11.25 8 11.25H16C16.4142 11.25 16.75 11.5858 16.75 12C16.75 12.4142 16.4142 12.75 16 12.75H8C7.58579 12.75 7.25 12.4142 7.25 12ZM10 14.25C9.58579 14.25 9.25 14.5858 9.25 15C9.25 15.4142 9.58579 15.75 10 15.75H14C14.4142 15.75 14.75 15.4142 14.75 15C14.75 14.5858 14.4142 14.25 14 14.25H10Z"
            fill="#1C274C"
          ></Path>
        </G>
      </Svg>
    ),
  },
  {
    title: "cart_unfocused",
    icon: (
      <Svg viewBox="0 0 24 24" fill="none">
        <G id="SVGRepo_bgCarrier" stroke-width="0"></G>
        <G
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></G>
        <G id="SVGRepo_iconCarrier">
          <Path
            d="M3.55514 14.2572C2.83668 10.9043 2.47745 9.22793 3.378 8.11397C4.27855 7 5.99302 7 9.42196 7H14.5781C18.0071 7 19.7215 7 20.6221 8.11397C21.5226 9.22793 21.1634 10.9043 20.4449 14.2572L20.0164 16.2572C19.5294 18.5297 19.2859 19.666 18.4608 20.333C17.6357 21 16.4737 21 14.1495 21H9.85053C7.52639 21 6.36432 21 5.53925 20.333C4.71418 19.666 4.47069 18.5297 3.98372 16.2572L3.55514 14.2572Z"
            stroke="#1C274C"
            stroke-width="1.5"
          ></Path>
          <Path
            d="M8 12H16"
            stroke="#1C274C"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></Path>
          <Path
            d="M10 15H14"
            stroke="#1C274C"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></Path>
          <Path
            d="M18 9L15 3"
            stroke="#1C274C"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></Path>
          <Path
            d="M6 9L9 3"
            stroke="#1C274C"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></Path>
        </G>
      </Svg>
    ),
  },
  {
    title: "support_focused",
    icon: (
      <Svg viewBox="0 0 24 24" fill="none">
        <G id="SVGRepo_bgCarrier" stroke-width="0"></G>
        <G
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></G>
        <G id="SVGRepo_iconCarrier">
          <Path
            d="M2.74982 18.6508C2.33982 18.6508 1.99982 18.3108 1.99982 17.9008V12.2008C1.94982 9.49078 2.95982 6.93078 4.83982 5.01078C6.71982 3.10078 9.23982 2.05078 11.9498 2.05078C17.4898 2.05078 21.9998 6.56078 21.9998 12.1008V17.8008C21.9998 18.2108 21.6598 18.5508 21.2498 18.5508C20.8398 18.5508 20.4998 18.2108 20.4998 17.8008V12.1008C20.4998 7.39078 16.6698 3.55078 11.9498 3.55078C9.63982 3.55078 7.49982 4.44078 5.90982 6.06078C4.30982 7.69078 3.45982 9.86078 3.49982 12.1808V17.8908C3.49982 18.3108 3.16982 18.6508 2.74982 18.6508Z"
            fill="#292D32"
          ></Path>
          <Path
            d="M5.94 12.4492H5.81C3.71 12.4492 2 14.1592 2 16.2592V18.1392C2 20.2392 3.71 21.9492 5.81 21.9492H5.94C8.04 21.9492 9.75 20.2392 9.75 18.1392V16.2592C9.75 14.1592 8.04 12.4492 5.94 12.4492Z"
            fill="#292D32"
          ></Path>
          <Path
            d="M18.19 12.4492H18.06C15.96 12.4492 14.25 14.1592 14.25 16.2592V18.1392C14.25 20.2392 15.96 21.9492 18.06 21.9492H18.19C20.29 21.9492 22 20.2392 22 18.1392V16.2592C22 14.1592 20.29 12.4492 18.19 12.4492Z"
            fill="#292D32"
          ></Path>
        </G>
      </Svg>
    ),
  },
  {
    title: "support_unfocused",
    icon: (
      <Svg viewBox="0 0 24 24" fill="none">
        <G id="SVGRepo_bgCarrier" stroke-width="0"></G>
        <G
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></G>
        <G id="SVGRepo_iconCarrier">
          <Path
            d="M5.46005 18.49V15.57C5.46005 14.6 6.22005 13.73 7.30005 13.73C8.27005 13.73 9.14005 14.49 9.14005 15.57V18.38C9.14005 20.33 7.52005 21.9501 5.57005 21.9501C3.62005 21.9501 2.00005 20.32 2.00005 18.38V12.22C1.89005 6.60005 6.33005 2.05005 11.95 2.05005C17.57 2.05005 22 6.60005 22 12.11V18.2701C22 20.2201 20.38 21.84 18.43 21.84C16.48 21.84 14.86 20.2201 14.86 18.2701V15.46C14.86 14.49 15.62 13.62 16.7 13.62C17.67 13.62 18.54 14.38 18.54 15.46V18.49"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></Path>
        </G>
      </Svg>
    ),
  },
];
