import Alert from '@components/Alert';
import Footer from '@components/Footer';
import Meta from '@components/Meta';

interface Props {
  preview: boolean;
  children: any;
}

export default function Layout({ preview, children }: Props) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
