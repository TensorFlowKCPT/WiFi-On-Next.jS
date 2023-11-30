'use client';
import React from 'react';

const ContactUs = () => {
    return (
    <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Свяжитесь с нами</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Для сотрудничества</p>
      <form action="#" className="space-y-8">
          <div>
              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ваш E-mail</label>
              <input
                type="text"
                className="text-black-400 text-xl font-medium leading-4 border-[color:var(--color-light-light-3,#DFDFE6)] bg-gray-50 px-4 py-5 rounded-xl border-2 border-solid max-md:max-w-full w-full required"
                placeholder="name@wifi-On.com"
                required
                />
          </div>
          <div>
              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ваш номер телефона</label>
              <input
                    type="text"
                    className="text-black-400 text-xl font-medium leading-4 border-[color:var(--color-light-light-3,#DFDFE6)] bg-gray-50  px-4 py-5 rounded-xl border-2 border-solid max-md:max-w-full w-full required"
                    required
                    placeholder="+7"
                    />
          </div>
      <button
        className="w-full mt-5 gap-10 px-[20px] py-[10px] bg-[#2a6f97] rounded-[10px] all-[unset] box-border"
      >
        <div className="relative font-semibold text-default-white text-[14px] text-center leading-[20px] whitespace-nowrap">
          Оставить заявку
        </div>
      </button>      
      </form>
  </div>
</section>
  );
};

export default ContactUs;
