/* eslint-disable no-restricted-exports */
export { default } from 'next-auth/middleware';

export const config = { matcher: ['/wallet/:path*', '/details/:path*', '/register', '/'] };
