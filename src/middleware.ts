import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

type UserPermissionsResponse = {
  permissions: string[];
  orgCode: string | null;
};

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const { isAuthenticated, getPermissions } = getKindeServerSession();

  // Check if the user is authenticated
  if (!(await isAuthenticated())) {
    return NextResponse.redirect(
      new URL('/api/auth/login?post_login_redirect_url=/select', request.url)
    );
  }

  // Get user permissions
  const permissions: UserPermissionsResponse | null = await getPermissions();

  // Get the current URL path
  const currentPath = request.nextUrl.pathname;

  // Redirect based on user permissions only if they are not on the correct path already
  if (permissions) {
    if (permissions.permissions.includes('user:investor') && currentPath !== '/investor') {
      return NextResponse.redirect(new URL('/investor', request.url));
    }

    if (permissions.permissions.includes('user:company') && currentPath !== '/company') {
      return NextResponse.redirect(new URL('/company', request.url));
    }
  }
  
  // Continue to the requested page if no redirection is needed
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/company/:path*','/investor/:path*','/select','/test', '/make-payment'],
};
