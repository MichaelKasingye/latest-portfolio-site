import Head from "next/head";

const Meta = ({ title, keywords, description, siteLink, image }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
     


      <meta property="og:title" content={title} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={siteLink} />
    <meta
      property="og:image"
      content={image}
    />
    <meta
      property="og:description"
      content={description}
    />

    <meta property="twitter:card" content={title}/>
    <meta
      property="twitter:url"
      content={siteLink}
    />
    <meta property="twitter:title" content={title} />
    <meta
      property="twitter:description"
      content={description}
    />
    <meta
      property="twitter:image"
      content={image}
    />






{/* <!-- Favicons --> */}
  {/* <link href="assets/img/favicon.png" rel="icon"/>
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon"/> */}

  {/* <!-- Google Fonts --> */}
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet"/>

  {/* <!-- Vendor CSS Files --> */}
  <link href="assets/vendor/animate.css/animate.min.css" rel="stylesheet"/>
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"/>

  {/* <!-- W3school CSS Files --> */}
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>

  {/* <!-- Template Main CSS File --> */}
  <link href="assets/css/style.css" rel="stylesheet"/>
  <link href="assets/css/navbar.css" rel="stylesheet"/>


      {/* CUSTOM */}
      <script defer
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
        crossOrigin="anonymous"
      ></script>


  {/* <!-- Vendor JS Files --> */}
  <script defer src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>


      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Michael Kasingye",
  keywords: "Michael Kasingye",
  description: "Full stack Software Developer, mentor with more than 2 years experience",
  image:"",
  siteLink:""
};

export default Meta;
