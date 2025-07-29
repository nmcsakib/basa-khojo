
import withPWA from 'next-pwa';
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const pwaConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
});

export default withBundleAnalyzer(pwaConfig({
  images: {
    domains: ['i.ibb.co', 'static.vecteezy.com'],
  },
}));
