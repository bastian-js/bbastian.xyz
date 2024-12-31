interface Props {
  title: string;
}

const Head = ({ title }: Props) => {
  return (
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <script
        src="https://kit.fontawesome.com/e0ab8e764a.js"
        crossOrigin="anonymous"
      ></script>

      <link rel="icon" href="/profile_picture.png" />

      <meta property="og:title" content="bastian" />
      <meta
        property="og:description"
        content="A website for projects & socials
    "
      />
      <meta property="og:image" content="/pfp_neu_klein.png" />
      <meta name="theme-color" content="#8BD2EC" />
    </head>
  );
};
export default Head;
