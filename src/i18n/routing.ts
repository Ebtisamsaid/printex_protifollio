import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'ar'],
  defaultLocale: 'en',
});

// تصدير دوال التنقل لاستخدامها في الـ Navbar لاحقاً
export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);