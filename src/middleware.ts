import { routing } from './i18n/routing';
import createMiddleware from 'next-intl/middleware';
export default createMiddleware(routing);
console.log("🚀 Middleware is now ACTIVe");
export const config = {
  // الماتشر المعدل لضمان التقاط كل المسارات بشكل صحيح
  matcher: [
    // السماح بالصفحة الرئيسية بدون لغة
    '/', 
    // السماح بالمسارات التي تبدأ باللغة
    '/(ar|en)/:path*',
    // استثناء الملفات التقنية والصور
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};