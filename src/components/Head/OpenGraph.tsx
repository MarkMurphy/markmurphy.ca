type OpenGraphProps = {
  title?: string;
  description?: string;
  url?: string;
  locale?: string;
  image?: string;
  type?: string;
  siteName?: string;
};

const OpenGraph = (props: OpenGraphProps) => {
  const {
    title = 'Mark Murphy 🤟',
    description = 'Discover the innovative world of Mark Murphy',
    url = 'https://markmurphy.ca/',
    locale = 'en_CA',
    image = '/images/open_graph_logo.png',
    type = 'website',
    siteName = 'Mark Murphy'
  } = props;

  return (
    <>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content={locale} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
    </>
  );
};

export default OpenGraph;
