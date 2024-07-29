/** @type {import('next').NextConfig} */
const {
  createVanillaExtractPlugin
} = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true, // 클래스명에 컴포넌트 이름을 붙임
      pure: true, // dead code elimination (사용되지 않는 속성 제거)
    },
  },
};

module.exports = withVanillaExtract(nextConfig);