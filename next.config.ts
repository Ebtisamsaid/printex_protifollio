import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
const nextConfig: NextConfig = {
  // 1. إضافة رؤوس الأمان لحماية الموقع من الاختراق
  async headers() {
    return [
      {
        source: '/(.*)', // تطبيق القواعد على كل روابط الموقع
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY', // حماية من الـ Clickjacking (تمنع فتح موقعك داخل iframe)
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff', // تمنع المتصفح من تخمين نوع الملفات (تحمي من الملفات الخبيثة)
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block', // حماية من هجمات الـ Cross-Site Scripting
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin', // حماية خصوصية بيانات المحول (Referrer)
          },
        ],
      },
    ];
  },

  // 2. تأمين الصور (تحديد المصادر الموثوقة فقط)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'your-trusted-domain.com', // استبدله بالدومين الخاص بك لو بترفع صور من سيرفر خارجي
      },
    ],
  },

  // 3. خيارات إضافية لتحسين الأمان والأداء
  reactStrictMode: true, // تفعيل وضع التدقيق الصارم لاكتشاف المشاكل برمجياً
  poweredByHeader: false, // إخفاء معلومة أن الموقع مبني بـ Next.js لمنع الهاكرز من استهداف تقنيات محددة
};
export default withNextIntl(nextConfig);
// export default nextConfig;