import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // 1. فك الـ Promise الخاص باللغة (مهم جداً في النسخ الجديدة)
  let locale = await requestLocale ;
  console.log(locale);
  

  // 2. التحقق من اللغة أو استخدام الافتراضية من ملف الـ routing
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }
console.log("Current Locale:", locale)
  return {
    locale,
    // 3. التعديل هنا: جربي كتابة المسار بهذا الشكل لضمان وصول المترجم للملف
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});