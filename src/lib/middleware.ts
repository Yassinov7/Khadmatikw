// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // نحلل الرابط ونفك ترميزه (من %D8 إلى أحرف عربية)
  const originalPath = request.nextUrl.pathname;
  const decodedPath = decodeURIComponent(originalPath);

  // إذا الرابط مشفّر (مختلف عن النسخة المقروءة)
  if (originalPath !== decodedPath) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = decodedPath;

    // إعادة توجيه 301 (دائمة)
    return NextResponse.redirect(redirectUrl, 301);
  }

  // مرّر الطلب كما هو إذا لا يوجد فرق
  return NextResponse.next();
}
