'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import type { Metadata } from 'next';
import Header from "components/header";
import Footer from "components/footer";




const about: React.FC = () => {
    const fadeInAnimation = {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 50 },
      transition: { duration: 0.8 }, // Set the duration here (in seconds)
    };
    return (
          <motion.div {...fadeInAnimation}>
            <Header />
            <motion.div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8" {...fadeInAnimation}>
              <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" {...fadeInAnimation}>
                {/* Content on the left */}
                <motion.div className="col-span-2" {...fadeInAnimation}>
                  {/* Item 01 */}
                  <motion.div className="flex items-center mt-5 md:mb-0" {...fadeInAnimation}>
                    <div className="border-2 border-solid border-[#2a6f97] text-[#2a6f97] bg-transparent p-6 rounded-lg shadow-lg w-[600px]">
                      <span className="text-4xl font-bold mb-4 block">01</span>
                      Наши сотрудники связываются с вами, чтобы выявить ваши потребности
                    </div>
                  </motion.div>
      
                  {/* Item 02 */}
                  <motion.div className="flex items-center mt-5 md:mb-0" {...fadeInAnimation}>
                    <div className="border-2 border-solid border-[#2a6f97] text-[#2a6f97] bg-transparent p-6 rounded-lg shadow-lg w-[600px]">
                      <span className="text-4xl font-bold mb-4 block">02</span>
                      Звонок от нас. На основе ваших потребностей мы предлагаем вам только тарифные планы, которые действительно вам подходят по цене и наполнению тарифа
                    </div>
                  </motion.div>
      
                  {/* Item 03 */}
                  <motion.div className="flex items-center mt-5 md:mb-0" {...fadeInAnimation}>
                    <div className="border-2 border-solid border-[#2a6f97] text-[#2a6f97] bg-transparent p-6 rounded-lg shadow-lg w-[600px]">
                      <span className="text-4xl font-bold mb-4 block">03</span>
                      Подбираем тариф который подходит именно вам!
                    </div>
                  </motion.div>
      
                  {/* Item 04 */}
                  <motion.div className="flex items-center mt-5 md:mb-0" {...fadeInAnimation}>
                    <div className="border-2 border-solid border-[#2a6f97] text-[#2a6f97] bg-transparent p-6 rounded-lg shadow-lg w-[600px]">
                      <span className="text-4xl font-bold mb-4 block">04</span>
                      Отправляем вашу заявку на подключение услуг
                    </div>
                  </motion.div>
      
                  {/* Item 05 */}
                  <motion.div className="flex items-center mt-5 md:mb-0" {...fadeInAnimation}>
                    <div className="border-2 border-solid border-[#2a6f97] text-[#2a6f97] bg-transparent p-6 rounded-lg shadow-lg w-[600px]">
                      <span className="text-4xl font-bold mb-4 block">05</span>
                      Договариваемся с вами о дате и времени подключения услуг. При необходимости подключаем услуги быстро. Вызов мастера
                    </div>
                  </motion.div>
      
                  {/* Item 06 */}
                  <motion.div className="flex items-center mt-5 md:mb-0" {...fadeInAnimation}>
                    <div className="border-2 border-solid border-[#2a6f97] text-[#2a6f97] bg-transparent p-6 rounded-lg shadow-lg w-[600px]">
                      <span className="text-4xl font-bold mb-4 block">06</span>
                      Без оплаты. Вы не оплачиваете, пока мы не подключим вам услуги. Абонентская плата по тарифу вносится в течение 3-х суток после подключения услуг
                    </div>
                  </motion.div>
                </motion.div>
      
          {/* Изображение справа */}
          <motion.div className="col-span-1 hidden md:block">
          <svg width="460" height="900" viewBox="0 0 57 181" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M43.8428 180.036C40.3045 180.153 36.7661 180.103 33.2278 180.053C23.3675 179.902 13.4904 179.751 3.63011 179.617C2.10411 179.6 0.108615 179.281 0.00799972 178.208C-0.0926157 177.235 1.48365 176.615 2.79165 176.313C7.52057 175.257 12.4843 175.055 17.3977 174.871C24.6252 174.603 31.836 174.368 39.0635 174.183C43.5744 174.066 48.2028 173.982 52.4118 175.055C54.6925 175.642 58.0799 178.124 54.4242 179.348C53.418 179.684 51.3721 179.533 50.2821 179.633C48.1524 179.801 46.006 179.952 43.8428 180.036Z" fill="url(#paint0_linear_145_755)"/>
            <path opacity="0.22" d="M43.8394 180.036C40.3011 180.153 36.7627 180.103 33.2244 180.053C23.3641 179.902 13.487 179.751 3.62669 179.617C2.10069 179.6 0.105197 179.281 0.00458175 178.208C-0.0960336 177.235 1.48023 176.615 2.78823 176.313C7.51715 175.257 12.4809 175.055 17.3943 174.871C24.6218 174.603 31.8325 174.368 39.0601 174.183C43.571 174.066 48.1993 173.982 52.4084 175.055C54.689 175.642 58.0764 178.124 54.4208 179.348C53.4146 179.684 51.3687 179.533 50.2787 179.633C48.149 179.801 46.0026 179.952 43.8394 180.036Z" fill="url(#paint1_linear_145_755)"/>
            <path d="M20.519 91.0952C29.9433 91.33 39.8036 89.586 49.0267 91.5145C49.0435 117.607 47.0144 146.534 43.8785 172.443C40.9271 172.443 37.9926 172.426 35.0412 172.426C32.66 158.34 33.381 145.008 32.8109 130.889C31.7209 137.462 29.675 141.218 27.5117 149.402C26.5056 153.175 25.3318 156.881 24.4933 160.704C24.0573 162.65 23.5878 164.595 23.0847 166.523C22.632 168.183 21.827 169.911 21.8941 171.638C19.0098 171.99 16.0584 171.084 13.2412 170.565C13.2412 167.077 13.2411 163.572 13.2579 160.084C13.2579 155.506 13.5765 151.096 14.1299 146.551C14.6498 142.292 15.4714 137.948 15.4714 133.639C15.7733 130.805 16.0919 127.988 16.3099 125.154C16.813 118.764 16.8801 112.342 17.2658 105.936C17.4502 102.75 17.7186 99.5637 18.1714 96.3943C18.3894 94.8515 18.6241 93.3088 18.9427 91.7995C19.0601 91.2461 19.0265 90.4412 19.6805 90.3909C19.7979 90.3742 20.1165 91.0785 20.519 91.0952Z" fill="#1A1A1A"/>
            <path d="M26.5749 33.7806C20.6386 32.6402 19.2132 37.1176 19.1629 42.3999C19.0791 51.9416 18.7269 61.4833 18.1232 71.0082C17.8046 75.9384 17.4189 80.8853 16.9829 85.7987C16.5134 90.9469 16.178 91.9698 21.7119 92.4226C31.5889 93.2442 41.6002 93.261 51.494 92.4729C52.6176 92.389 52.6343 76.8272 52.6678 75.5192C52.9193 67.3022 51.7623 58.9847 48.8613 51.1032C47.1843 46.5419 44.4509 42.1819 40.3257 38.9455C36.3849 35.8599 31.6895 34.7699 26.5749 33.7806Z" fill="#2A6F97"/>
            <path d="M11.4611 29.6675C12.6182 29.1645 13.7416 28.6614 14.8316 28.0241C15.2844 27.7558 15.6199 28.4098 15.2342 28.7117C14.228 29.4495 13.2218 30.2209 12.1654 30.8749C11.394 31.3612 10.6562 30.0197 11.4611 29.6675Z" fill="#666666"/>
            <path d="M14.7298 18.318C15.082 18.7372 15.3001 19.2403 15.5348 19.7266C15.7864 20.2465 16.1553 20.7999 16.2391 21.37C16.2727 21.6551 15.9875 22.024 15.6857 21.7892C15.2329 21.4539 14.9478 20.9508 14.6292 20.498C14.2771 19.9949 13.8747 19.5086 13.6567 18.9385C13.4219 18.3515 14.3274 17.8485 14.7298 18.318Z" fill="#666666"/>
            <path d="M10.6239 22.9326C11.3114 22.9996 11.9486 23.2009 12.6026 23.4021C13.1896 23.5866 13.7765 23.7207 14.2628 24.1064C14.4808 24.2909 14.3466 24.6766 14.095 24.7436C13.5752 24.861 13.0553 24.7436 12.5355 24.6598C11.848 24.5424 11.1101 24.4753 10.4561 24.2238C9.80214 23.989 9.81897 22.8655 10.6239 22.9326Z" fill="#666666"/>
            <path d="M25.211 32.1362C24.2048 30.7276 23.5341 28.8495 23.4 26.6024C23.1484 22.4604 23.3664 18.1675 25.0769 14.3609C27.0389 10.0009 32.0361 5.65763 37.2178 6.78117C43.2882 8.08917 42.869 15.9204 42.4498 21.1189C42.1144 25.2441 40.6219 29.4364 37.5699 32.2369C32.9919 36.3956 27.8773 35.8422 25.211 32.1362Z" fill="#E8DBCE"/>
            <path d="M26.9054 20.6809C26.3185 23.4478 25.2117 26.1141 23.669 28.4954C23.3671 29.0487 22.579 28.3277 22.4113 27.724C21.12 22.9615 20.4828 14.2583 21.0697 9.34488C21.6734 4.44827 23.8031 3.27443 28.2469 1.12796C31.4834 -0.448342 35.4745 -0.364497 38.6607 1.32919C41.8468 3.02289 44.161 6.24258 44.7479 9.79765C44.7982 10.133 44.8317 10.502 44.6473 10.787C44.3622 11.2398 43.6914 11.2398 43.1548 11.1727C40.1028 10.787 37.0005 10.0157 33.9821 10.6697C30.9804 11.3237 28.096 14.0067 28.5823 17.0587C27.3917 16.8407 26.1005 16.6227 25.0105 17.1426C23.9037 17.6457 23.2162 19.1884 23.9876 20.1107C24.8428 20.6641 25.916 20.8654 26.9054 20.6809Z" fill="#E0C68E"/>
            <path d="M35.5445 171.386C37.9761 171.201 40.4411 171.302 42.8391 171.704C44.7005 173.096 46.7296 174.237 48.8761 175.109C49.4966 175.36 50.1505 175.612 50.6201 176.098C51.0728 176.584 51.2573 177.406 50.8381 177.926C50.4692 178.379 49.7983 178.429 49.2114 178.429C44.7173 178.462 40.2064 178.077 35.7793 177.272C35.511 177.222 35.2259 177.171 35.0415 176.97C34.8906 176.819 34.8234 176.601 34.7563 176.4C34.3036 174.706 34.6055 172.845 35.5445 171.386Z" fill="#2A6F97"/>
            <path d="M14.4154 169.992C16.8469 170.277 19.2282 170.864 21.5089 171.719C23.0516 173.447 24.8292 174.956 26.7744 176.23C27.3446 176.599 27.9314 176.968 28.2836 177.538C28.6357 178.108 28.6526 178.947 28.1327 179.383C27.68 179.752 27.0092 179.668 26.439 179.567C22.0119 178.729 17.6687 177.471 13.4931 175.828C13.2416 175.727 12.9733 175.61 12.8224 175.392C12.705 175.207 12.6714 174.989 12.6547 174.771C12.554 173.027 13.208 171.25 14.4154 169.992Z" fill="#2A6F97"/>
            <path d="M40.9436 37.3678C41.9162 36.9318 42.9895 37.2504 43.6435 38.0554C44.4988 39.1118 44.2639 40.2857 44.1968 41.5434C44.1801 41.7614 44.113 41.9291 44.0124 42.0464C44.1298 42.1135 44.2304 42.1974 44.3142 42.3315C47.601 47.2952 50.0661 52.7117 51.4244 58.5306C52.6988 63.9806 53.0678 66.7308 52.0281 71.9963C52.0281 72.8683 50.7033 75.7526 50.6363 76.6246C50.5692 77.6978 49.3282 80.5654 49.0264 79.4586C47.3495 73.3043 47.6681 64.1315 47.2992 57.776C46.6117 53.4831 45.8738 49.2404 44.046 45.2997C43.6267 44.5954 43.1907 43.9078 42.7379 43.2371C42.5702 43.0191 42.5534 42.8011 42.6037 42.5998C42.3522 42.4992 42.1678 42.2812 42.151 42.0129C41.2623 41.5434 40.1051 40.8391 39.8033 39.8497C39.5182 38.8603 40.0213 37.7871 40.9436 37.3678Z" fill="#D5DBE8"/>
            <path d="M22.6811 25.8992C22.7314 25.2788 23.2679 24.826 23.7542 24.4571C26.3367 22.4783 29.0869 20.7175 31.9544 19.1748C32.5078 18.8897 33.1786 19.0406 33.5475 19.5269C37.7063 25.044 41.0601 30.3431 45.4034 35.6757C45.8058 36.1788 45.6884 36.9334 45.135 37.2688C42.2004 39.0631 39.1149 41.0251 36.0629 42.5175C35.476 42.8026 34.8388 43.0877 34.2015 42.9535C33.4972 42.8026 33.0277 42.1654 32.6252 41.5785C29.372 36.8831 26.2193 32.1206 23.1673 27.2911C22.9158 26.8719 22.6475 26.4023 22.6811 25.8992Z" fill="#666666"/>
            <path d="M43.0915 63.3589C41.4816 60.3572 40.5929 57.104 39.7544 53.8507C38.4129 48.6187 37.2222 43.3532 36.1658 38.0541C35.9981 37.1654 35.8304 36.243 36.1322 35.371C36.4508 34.499 37.4067 33.6941 38.4632 33.7444C43.8293 42.8334 47.1664 52.811 48.2564 63.057C48.3403 63.8117 48.3738 64.6501 47.7701 65.2203C47.0658 65.9078 45.7578 65.891 44.8858 65.4215C44.0306 64.9687 43.5275 64.1638 43.0915 63.3589Z" fill="#E8DBCE"/>
            <path d="M44.0604 61.2433C41.7127 59.4993 39.1805 57.9901 36.5142 56.7491C36.3633 56.6821 36.1787 56.5982 36.0111 56.6653C35.8601 56.7324 35.7763 56.8833 35.7092 57.0342C35.1894 58.2081 34.8037 59.4322 34.5187 60.6731C34.3342 61.5451 34.2503 62.5848 34.8875 63.2221C35.2397 63.5574 35.726 63.7084 36.1788 63.8761C38.4091 64.7145 40.1698 66.5088 42.4337 67.2634C44.1106 67.8336 45.9385 67.7665 47.716 67.6994C47.8837 67.6994 48.0681 67.6827 48.1687 67.5485C48.2358 67.4647 48.2359 67.3473 48.2527 67.2467C48.3197 66.3914 48.37 65.4859 47.9843 64.6977C47.7831 64.2953 47.498 63.9599 47.1962 63.6413C45.7708 62.0818 45.7373 62.501 44.0604 61.2433Z" fill="#E8DBCE"/>
            <defs>
            <linearGradient id="paint0_linear_145_755" x1="55.9712" y1="176.233" x2="0.052152" y2="178.903" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1"/>
            </linearGradient>
            <linearGradient id="paint1_linear_145_755" x1="55.9678" y1="176.233" x2="0.048734" y2="178.903" gradientUnits="userSpaceOnUse">
            <stop/>
            <stop offset="1"/>
            </linearGradient>
            </defs>
          </svg>
          </motion.div>
        </motion.div>
      </motion.div>
      <Footer />
    </motion.div>
  );

};
export default about;

