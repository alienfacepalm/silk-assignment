import React from 'react'

export const Logo: React.FC<{
  dimensions: { width: number; height: number }
}> = ({ dimensions: { width, height } }) => (
  <svg
    width={width || 426}
    height={height || 122}
    viewBox="0 0 426 122"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M231.152 27.1628C238.867 27.1628 245.121 21.0821 245.121 13.5814C245.121 6.08072 238.867 0 231.152 0C223.437 0 217.183 6.08072 217.183 13.5814C217.183 21.0821 223.437 27.1628 231.152 27.1628Z"
      fill="black"
    />
    <path
      d="M242.821 40.5792H219.482V112.942C219.482 116.431 222.327 119.259 225.836 119.259H242.821V40.5792Z"
      fill="black"
    />
    <path
      d="M378.546 99.2202H365.12C363.212 99.2202 361.404 98.367 360.196 96.8959L345.019 78.3992L373.034 40.5783H351.625C349.677 40.5783 347.838 41.466 346.634 42.9868L324.51 70.9073H323.456V5.52444H300.117V112.941C300.117 116.431 302.962 119.258 306.471 119.258H323.456V86.0322H324.503L344.543 112.04C348.05 116.59 353.486 119.258 359.251 119.258H378.546L378.546 99.2202Z"
      fill="black"
    />
    <path
      d="M172.629 71.0623C171.824 70.9728 171.026 70.8867 170.239 70.8012C160.259 69.7257 152.374 68.8769 152.374 62.3905C152.374 57.0237 157.85 53.4166 166 53.4166C174.88 53.4166 180.757 57.6127 181.129 64.134H202.495C202.256 48.3877 187.656 37.8336 166.001 37.8336C144.57 37.8336 130.722 48.1895 130.722 64.2183C130.722 84.869 151.194 87.0361 164.743 88.4678C175.215 89.4756 182.079 90.6231 182.079 97.1378C182.079 102.776 176.611 106.418 168.147 106.418C157.448 106.418 150.535 101.1 150.535 92.871H129.801C129.801 111.11 143.906 121.999 167.533 121.999C190.968 121.999 204.959 111.965 204.959 95.1564C204.959 77.2853 189.421 73.0154 172.628 71.0614L172.629 71.0623Z"
      fill="black"
    />
    <path
      d="M411.08 122C418.941 122 425.313 115.628 425.313 107.767C425.313 99.9057 418.941 93.5333 411.08 93.5333C403.219 93.5333 396.846 99.9057 396.846 107.767C396.846 115.628 403.219 122 411.08 122Z"
      fill="#1573FF"
    />
    <path
      d="M260.107 5.52444V112.941C260.107 116.431 262.952 119.258 266.461 119.258H283.447V5.52444H260.107Z"
      fill="black"
    />
    <path
      d="M102.424 70.9045C102.424 71.6377 102.408 72.3678 102.377 73.0929C94.4014 72.7218 85.6426 72.988 76.0627 74.1175H76.0617C73.2379 72.3456 70.5595 70.5536 68.0151 68.7495C80.7541 66.7487 92.1416 66.2415 102.256 66.7608C102.367 68.1273 102.424 69.5099 102.424 70.9045Z"
      fill="#1573FF"
    />
    <path
      d="M101.685 62.2581C90.3959 61.6782 77.5208 62.3781 62.9509 65.0061C60.7022 63.2746 58.5715 61.534 56.5545 59.7924C73.1262 56.3385 87.6118 55.3381 100.16 55.9159C100.801 57.9772 101.312 60.094 101.685 62.2581Z"
      fill="#1573FF"
    />
    <path
      d="M98.5034 51.3668C85.3062 50.8606 69.9986 52.0959 52.4128 56.0662C50.4965 54.2722 48.6949 52.4791 47.001 50.6942C65.4322 46.1602 81.4481 44.591 95.2306 44.9158C96.4692 46.976 97.5646 49.1311 98.5034 51.3668Z"
      fill="#1573FF"
    />
    <path
      d="M60.9451 20.9963C51.5014 22.517 41.321 24.8567 30.3704 28.2047C29.8105 27.1882 29.2832 26.1858 28.7853 25.1995C35.5587 21.919 43.1683 20.0786 51.2118 20.0786C54.5406 20.0786 57.7931 20.3933 60.9451 20.9963Z"
      fill="#1573FF"
    />
    <path
      d="M101.989 77.5543C101.567 80.7601 100.845 83.8722 99.8488 86.8613C93.6119 84.0094 87.8658 81.0506 82.5709 78.0192C89.4956 77.4373 95.9632 77.3143 101.989 77.5543Z"
      fill="#1573FF"
    />
    <path
      d="M98.2301 91.0796C97.3756 93.038 96.4011 94.9329 95.3149 96.7542C93.1618 95.7851 91.0665 94.8028 89.0272 93.8095C87.2145 92.9251 85.4454 92.0336 83.7191 91.1321C81.19 89.814 78.7544 88.4768 76.4072 87.1255C76.4072 87.1265 76.4062 87.1255 76.4062 87.1255C74.6849 86.1352 73.0124 85.1378 71.3866 84.1334C69.3229 82.8587 67.3333 81.574 65.417 80.2801C65.0806 80.0532 64.7463 79.8263 64.4151 79.5984C62.9854 78.6202 61.5974 77.636 60.249 76.6487C60.0895 76.5327 59.931 76.4157 59.7735 76.2998C57.6285 74.7175 55.5861 73.1272 53.6413 71.5338C53.621 71.5177 53.6007 71.5005 53.5813 71.4844C52.1324 70.2965 50.7383 69.1065 49.395 67.9145C49.5789 67.8671 49.7618 67.8187 49.9457 67.7703C49.7598 67.8157 49.5728 67.861 49.3858 67.9074C47.4654 66.2052 45.6517 64.5019 43.9375 62.8016C43.9019 62.7684 43.8674 62.7331 43.8328 62.6988C42.6298 61.5038 41.4765 60.3108 40.3709 59.1228C40.3008 59.0472 40.2307 58.9715 40.1616 58.8969C38.5704 57.1775 37.0777 55.4672 35.6786 53.771C28.64 45.2385 23.9598 37.071 20.8495 29.9725C22.3025 28.9076 23.8145 27.9183 25.3803 27.0097C27.1544 30.746 29.3594 34.7395 32.0998 38.8963C32.9412 40.172 33.8323 41.4638 34.7783 42.7678C36.0657 44.5446 37.4527 46.3457 38.9464 48.163C39.9747 49.4124 41.0517 50.67 42.1827 51.9336C43.7424 53.6752 45.4027 55.4278 47.1697 57.1856C47.2043 57.2199 47.2388 57.2542 47.2734 57.2884H47.2744C48.4653 58.4714 49.7039 59.6553 50.9933 60.8382C51.0472 60.8886 51.102 60.938 51.1559 60.9874C52.9209 62.604 54.7804 64.2205 56.7384 65.832C56.8644 65.9369 56.9904 66.0408 57.1174 66.1447H57.1184C58.3814 67.1773 59.6851 68.209 61.0304 69.2376C61.2875 69.4342 61.5456 69.6299 61.8057 69.8255C63.5758 71.1617 65.418 72.4929 67.3344 73.8149C67.9369 74.2314 68.5466 74.6469 69.1644 75.0604C70.1022 75.6907 71.0574 76.3179 72.0298 76.9421C73.0053 77.5704 73.999 78.1956 75.01 78.8179C76.3249 79.6277 77.6692 80.4324 79.045 81.2321C80.6769 82.181 82.3524 83.1229 84.0727 84.0568C86.4189 85.3315 88.8484 86.591 91.3653 87.8334C93.0835 88.6815 94.8424 89.5216 96.6419 90.3535C97.1673 90.5966 97.6967 90.8386 98.2301 91.0796Z"
      fill="#1573FF"
    />
    <path
      d="M92.1578 40.3757C78.225 40.2829 62.0862 42.1153 43.5646 46.9175C41.9815 45.1043 40.5081 43.3043 39.1364 41.5243C57.03 36.591 72.7624 34.4006 86.4829 34.0557C88.5456 36.001 90.4457 38.1148 92.1578 40.3757Z"
      fill="#1573FF"
    />
    <path
      d="M81.253 29.7386C68.0619 30.4525 53.1139 32.8527 36.2882 37.662C34.9815 35.8034 33.7825 33.9741 32.6831 32.18C46.8639 27.9516 59.7379 25.4214 71.3754 24.1709C74.8881 25.6644 78.1976 27.5381 81.253 29.7386Z"
      fill="#1573FF"
    />
    <path
      d="M37.9292 92.4229C25.1588 94.1231 14.1137 93.8024 4.81533 92.4481C3.85917 90.4241 3.0341 88.3286 2.35026 86.1695C10.6752 87.4169 20.4177 87.8395 31.5613 86.714C33.5539 88.616 35.6735 90.5209 37.9292 92.4229Z"
      fill="#1573FF"
    />
    <path
      d="M49.7781 101.461C35.0567 104.307 22.3777 104.503 11.7706 103.325C10.0869 101.31 8.55664 99.1644 7.19912 96.9044C17.1011 98.2507 28.9336 98.4171 42.6704 96.257C44.918 98.0006 47.2856 99.7372 49.7781 101.461Z"
      fill="#1573FF"
    />
    <path
      d="M62.7893 109.644C48.2824 113.394 35.5404 114.612 24.5857 114.328C21.5435 112.488 18.7116 110.342 16.1307 107.931C27.0681 108.842 40.058 108.279 55.0689 104.976C57.5299 106.547 60.1017 108.105 62.7893 109.644Z"
      fill="#1573FF"
    />
    <path
      d="M92.8021 100.565C91.5208 102.334 90.1256 104.017 88.6299 105.605C86.7766 104.761 84.9669 103.908 83.1988 103.045C80.5438 101.751 77.9842 100.438 75.5161 99.1079C73.6871 98.1226 71.9079 97.1273 70.1774 96.1249C67.6412 94.6566 65.2097 93.1711 62.8798 91.6726C61.1717 90.5744 59.5174 89.4691 57.915 88.3588C55.5282 86.7039 53.2572 85.038 51.097 83.364C51.0858 83.3559 51.0756 83.3478 51.0655 83.3398C49.5525 82.1679 48.0934 80.9921 46.6871 79.8142H46.686C46.6617 79.793 46.6363 79.7718 46.6119 79.7507H46.6109C44.6427 78.1008 42.7781 76.448 41.0101 74.7962C40.9085 74.7024 40.8079 74.6076 40.7073 74.5128C39.5347 73.4116 38.4048 72.3103 37.3175 71.2111C37.1346 71.0266 36.9528 70.842 36.7729 70.6575C34.9409 68.7848 33.2287 66.9191 31.6304 65.0676C30.4598 63.7123 29.3492 62.365 28.2965 61.0278C21.1696 51.9779 16.6642 43.4101 13.817 36.1795C15.0811 34.8383 16.4193 33.5646 17.8225 32.3666C21.1757 40.412 26.561 49.955 35.2051 59.9074C35.3707 60.099 35.5373 60.2906 35.706 60.4822H35.707C36.6794 61.5875 37.6925 62.6978 38.7482 63.8111C38.8559 63.9261 38.9647 64.041 39.0754 64.156C40.6707 65.827 42.3605 67.5051 44.1519 69.1851C44.1722 69.2053 44.1935 69.2245 44.2139 69.2436H44.2149C45.4962 70.4447 46.8283 71.6458 48.2143 72.8458C48.2244 72.8559 48.2356 72.865 48.2468 72.8751H48.2478C50.1723 74.541 52.1994 76.205 54.3353 77.8629C54.3546 77.879 54.3749 77.8941 54.3942 77.9082C55.8524 79.0397 57.3613 80.1672 58.923 81.2896C59.0124 81.3551 59.1019 81.4197 59.1923 81.4832C61.3129 83.0029 63.529 84.5126 65.8447 86.0101C67.4634 87.0569 69.1308 88.0976 70.8481 89.1303C73.1922 90.5401 75.6288 91.9358 78.164 93.3143C79.8934 94.2552 81.6686 95.188 83.4894 96.1118C85.9474 97.3582 88.4907 98.5885 91.1214 99.8007C91.6772 100.056 92.2381 100.311 92.8021 100.565Z"
      fill="#1573FF"
    />
    <path
      d="M74.8292 116.014C71.8367 117.562 68.6705 118.823 65.3682 119.763C65.3458 119.769 65.3235 119.775 65.3021 119.781C64.6457 119.958 63.9924 120.129 63.3431 120.295C63.3299 120.298 63.3167 120.302 63.3045 120.305C59.427 121.237 55.3778 121.73 51.2118 121.73C44.98 121.73 39.0094 120.626 33.4858 118.603C43.7901 118.229 55.4662 116.523 68.4988 112.791C70.5463 113.877 72.6557 114.952 74.8292 116.014Z"
      fill="#1573FF"
    />
    <path
      d="M11.8468 62.2601C7.96018 62.2984 4.28086 62.1472 0.810853 61.8476C1.65422 57.1926 3.13672 52.7565 5.16589 48.6339C6.78353 52.7746 8.94885 57.3721 11.8468 62.2601Z"
      fill="#1573FF"
    />
    <path
      d="M18.8427 72.5917C11.9525 72.8619 5.67293 72.5372 0.00812886 71.8232C0.00304832 71.5177 0 71.2111 0 70.9045C0 69.2426 0.0802724 67.5988 0.237769 65.9773C4.65377 66.4391 9.42236 66.663 14.5425 66.5581C15.8513 68.5347 17.2809 70.5496 18.8427 72.5917Z"
      fill="#1573FF"
    />
    <path
      d="M27.4745 82.6389C17.5533 83.4386 8.79034 83.007 1.19901 81.8886C0.771225 79.9614 0.453184 77.9919 0.253011 75.9892C6.75 76.8806 14.0802 77.2648 22.2365 76.8161C23.8592 78.7422 25.6018 80.6855 27.4745 82.6389Z"
      fill="#1573FF"
    />
    <path
      d="M118.744 115.769H113.634C106.049 115.769 98.5332 114.333 91.4887 111.542C90.9618 111.333 90.5661 111.177 90.3614 111.098C88.6309 110.359 86.9371 109.612 85.2778 108.855C84.5818 108.538 83.8918 108.218 83.208 107.898C81.2693 106.989 79.3803 106.067 77.5391 105.134C74.8678 103.782 72.298 102.406 69.8248 101.009H69.8238C67.9958 99.9772 66.2217 98.9344 64.4984 97.8826C61.9805 96.3468 59.5723 94.7907 57.2688 93.2196C55.5861 92.0729 53.9604 90.9183 52.3874 89.7565H52.3864C50.1103 88.0754 47.9481 86.3823 45.8925 84.681H45.8915C45.8386 84.6376 45.7858 84.5943 45.7329 84.5499C44.3744 83.4235 43.0636 82.294 41.7986 81.1635C41.6624 81.0415 41.5263 80.9195 41.3921 80.7985C39.3884 78.9934 37.4994 77.1852 35.7202 75.3811C34.4115 74.0549 33.1606 72.7298 31.9677 71.4098C30.2271 69.4867 28.6065 67.5736 27.0965 65.6778C25.993 64.2921 24.9485 62.9166 23.9598 61.5532C17.9627 53.2859 14.0253 45.4886 11.4424 38.8812C10.1072 40.5118 8.87163 42.2262 7.74578 44.0152C9.83795 49.3852 12.807 55.5448 17.0188 62.1008H17.0198C17.915 63.4955 18.8671 64.9073 19.8791 66.3342H19.8801C21.262 68.2846 22.7577 70.2612 24.3734 72.2539H24.3744C25.4829 73.6223 26.6494 74.9998 27.8769 76.3814C29.5484 78.2642 31.3317 80.1561 33.2348 82.0489C34.5588 83.367 35.9407 84.685 37.3826 86.0011C37.6966 86.2875 38.0126 86.5739 38.3316 86.8582C40.0712 88.4173 41.8961 89.9703 43.8105 91.5153C45.3417 92.7516 46.9299 93.9819 48.577 95.2042C50.8409 96.8843 53.2166 98.5492 55.7091 100.193C57.4212 101.322 59.1892 102.442 61.0142 103.549C63.4884 105.052 66.0683 106.533 68.7569 107.986C70.6144 108.991 72.5236 109.983 74.4867 110.96C76.0942 111.76 77.7383 112.552 79.4179 113.332C80.2328 113.71 81.0559 114.085 81.887 114.459C83.251 115.006 86.0272 116.138 89.0624 117.363C96.2075 120.246 103.848 121.73 111.561 121.73H118.744L118.744 115.769Z"
      fill="#1573FF"
    />
    <path
      d="M81.887 114.459C84.4964 115.629 79.1039 113.341 81.887 114.459Z"
      fill="#1573FF"
    />
  </svg>
)