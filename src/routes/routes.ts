import { authMiddleware } from '@/middlewares/auth.middleware.ts'
import type { AuthRoutes } from '@/modules/auth/routes/auth.routes.ts'
import { authRoutes } from '@/modules/auth/routes/auth.routes.ts'
import { type UserRoutes, userRoutes } from '@/modules/user/routes/user.routes'
import type { RouteRecordTyped } from '@/types/router/router.type'

export interface Routes extends AuthRoutes, UserRoutes {
  404: {
    path: '/:catchAll(.*)'
  }
  index: {
    path: '/'
  }
}

export const routes: RouteRecordTyped[] = [
  {
    path: '',
    component: () => import('@/components/layout/AppLayout.vue'),
    meta: {
      middleware: [
        authMiddleware,
      ],
    },
    children: [
      {
        name: 'index',
        path: '',
        redirect: {
          name: 'user-overview',
        },
      },
      /**
       * Authenticated routes
       */
      ...userRoutes,
    ],
  },
  /**
   * Unauthenticated routes
   */
  ...authRoutes,
  {
    name: 404,
    path: '/:catchAll(.*)',
    redirect: {
      name: 'index',
    },
  },
]
