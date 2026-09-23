import Nav from "@/components/Nav";

export default function BlogLayout({ children }: LayoutProps<"/blog">) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}
