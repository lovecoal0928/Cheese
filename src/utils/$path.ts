export const pagesPath = {
  "home": {
    $url: (url?: { hash?: string }) => ({ pathname: '/home' as const, hash: url?.hash })
  },
  "list": {
    $url: (url?: { hash?: string }) => ({ pathname: '/list' as const, hash: url?.hash })
  },
  "login": {
    $url: (url?: { hash?: string }) => ({ pathname: '/login' as const, hash: url?.hash })
  },
  "map": {
    $url: (url?: { hash?: string }) => ({ pathname: '/map' as const, hash: url?.hash })
  },
  "post": {
    $url: (url?: { hash?: string }) => ({ pathname: '/post' as const, hash: url?.hash })
  },
  "signup": {
    $url: (url?: { hash?: string }) => ({ pathname: '/signup' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
