import "../library/styles/tailwind.css";

function MyApp(props) {

  const {
    Component,
    Component: {
      layout
    },
    pageProps
  } = props;

  // Use the layout defined at the page level, if available
  const Layout = layout || ((page) => page)

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>)
    ;
}

export default MyApp;
