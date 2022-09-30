import asyncComponentLoader from 'utils/asyncComponentLoader';

const routes = [
  {
    exact: true,
    component: asyncComponentLoader(() => import('pages/OgrBilgi')),
    path: '/',
  },
  {
    exact: true,
    component: asyncComponentLoader(() => import('pages/OgrBilgi')),
    path: '/OgrBilgi',
  },
  {
    exact: true,
    component: asyncComponentLoader(() => import('pages/UniGenel')),
    path: '/UniGenel',
  },
          {
            exact: true,
            component: asyncComponentLoader(() => import('pages/UniGenel/Duyuru')),
            path: '/UniGenel/Duyuru',
          },
          {
            exact: true,
            component: asyncComponentLoader(() => import('pages/UniGenel/Etkinlik')),
            path: '/UniGenel/Etkinlik',
          },
          {
            exact: true,
            component: asyncComponentLoader(() => import('pages/UniGenel/Iletisim')),
            path: '/UniGenel/Iletisim',
          },
  {
    exact: true,
    component: asyncComponentLoader(() => import('pages/Fakulte')),
    path: '/Fakulte',
  },
        {
          exact: true,
          component: asyncComponentLoader(() => import('pages/Fakulte/Duyuru')),
          path: '/Fakulte/Duyuru',
        },
        {
          exact: true,
          component: asyncComponentLoader(() => import('pages/Fakulte/Etkinlik')),
          path: '/Fakulte/Etkinlik',
        },
        {
          exact: true,
          component: asyncComponentLoader(() => import('pages/Fakulte/Iletisim')),
          path: '/Fakulte/Iletisim',
        },
  {
    exact: true,
    component: asyncComponentLoader(() => import('pages/Bolum')),
    path: '/Bolum',
  },
        {
          exact: true,
          component: asyncComponentLoader(() => import('pages/Bolum/Duyuru-Etkinlik')),
          path: '/Bolum/Duyuru-Etkinlik',
        },
        {
          exact: true,
          component: asyncComponentLoader(() => import('pages/Bolum/DersProgrami')),
          path: '/Bolum/DersProgrami',
        },
        {
          exact: true,
          component: asyncComponentLoader(() => import('pages/Bolum/Hakkinda')),
          path: '/Bolum/Hakkinda',
        },
  {
    exact: true,
    component: asyncComponentLoader(() => import('pages/Kulup')),
    path: '/Kulup',
  },
          {
            exact: true,
            component: asyncComponentLoader(() => import('pages/Kulup/Duyuru')),
            path: '/Kulup/Duyuru',
          },
          {
            exact: true,
            component: asyncComponentLoader(() => import('pages/Kulup/Gorusme')),
            path: '/Kulup/Gorusme',
          },
          {
            exact: true,
            component: asyncComponentLoader(() => import('pages/Kulup/Iletisim')),
            path: '/Kulup/Iletisim',
          },
  {
    exact: true,
    component: asyncComponentLoader(() => import('pages/Mesaj')),
    path: '/Mesaj',
  },
  {
          exact: true,
          component: asyncComponentLoader(() => import('pages/Mesaj/OgrenciMesaj')),
          path: '/Mesaj/OgrenciMesaj',
        },
        {
          exact: true,
          component: asyncComponentLoader(() => import('pages/Mesaj/OgretmenMesaj')),
          path: '/Mesaj/OgretmenMesaj',
        },
  {
    component: asyncComponentLoader(() => import('components/NotFound')),
  },
];

export default routes;
