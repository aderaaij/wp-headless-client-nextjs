import Alert from '@components/Alert';
import Footer from '@components/Footer';
import Meta from '@components/Meta';

interface Props {
  preview: boolean;
}

const Layout: React.FC<Props> = ({ preview, children }) => {
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
};
export default Layout;
