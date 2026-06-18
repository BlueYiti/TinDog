import { Helmet } from "react-helmet-async";

export function SEO() {
  return (
    <Helmet>
      <html lang="en" />
      <title>TinDog | Dog Matchmaking & Adoption</title>
      <meta
        name="description"
        content="Find companionship for your dog through smart matchmaking and adoption partnerships. TinDog connects your furry friend with the perfect playmate."
      />
      <meta property="og:title" content="TinDog | Dog Matchmaking & Adoption" />
      <meta
        property="og:description"
        content="Find companionship for your dog through smart matchmaking and adoption partnerships."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://tindog.app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" type="image/png" href="/favicon.png" />
    </Helmet>
  );
}