import "@/shared/styles/reset.css";
import Template from "@/shared/components/layout/template/Template";

export async function generateMetadata() {
  const title = "호박 블로그";
  const description = "초보 블로거로 개발, 기술, 잡담 등 생각나는 여러 글을 작성합니다.";

  return {
    title,
    description,
    authors: [{ name: "pumpkinglows" }],
    publisher: "pumpkinglows@gmail.com",
    alternates: {
      canonical: process.env.NEXT_PUBLIC_BASE_URL,
    },
    icons: {
      icon: "/favicon.png"
    }
  };
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
          <Template>{children}</Template>
      </body>
    </html>
  );
};

export default RootLayout;
