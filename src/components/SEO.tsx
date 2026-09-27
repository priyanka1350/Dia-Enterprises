import { Helmet } from 'react-helmet-async';
import { company } from '../data/company';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: 'website' | 'article' | 'product';
  image?: string;
  exactTitle?: boolean;
}

export function SEO({ title, description, canonical, type = 'website', image, exactTitle }: SEOProps) {
  const siteTitle = (exactTitle && title) ? title : (title ? `${title} | ${company.name}` : `${company.name} | ${company.tagline}`);
  const metaDescription = description || company.description;
  const url = canonical ? `${company.website}${canonical}` : company.website;
  const ogImage = image || `${company.website}/og-image.jpg`;

  // LocalBusiness + Organization structured data
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: company.name,
    url: company.website,
    logo: `${company.website}/logo.png`,
    image: ogImage,
    description: company.description,
    email: company.email,
    telephone: company.phone,
    foundingDate: company.foundingYear,
    openingHours: 'Mo-Sa 09:00-18:00',
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      addressRegion: company.address.state,
      postalCode: company.address.pincode,
      addressCountry: 'IN',
    },
    sameAs: [company.website],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Paper Plates & Raw Materials',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Product', name: '80 GSM Silver Paper' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Product', name: '120 GSM Silver Paper' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Product', name: '180 GSM Silver Paper' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Product', name: '200 GSM Silver Paper' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Kraft & Chipboard 200 GSM' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Thali Green Sheet 80 GSM' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Colour Plate Material' } },
      ],
    },
  };

  // Product schema (for product detail pages)
  const productSchema = productName
    ? {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: productName,
        description: productDescription || metaDescription,
        brand: { '@type': 'Brand', name: company.name },
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          seller: { '@type': 'Organization', name: company.name },
          url,
        },
      }
    : null;

  // WebSite schema with SearchAction
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: company.name,
    url: company.website,
    description: company.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${company.website}/?s={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <Helmet>
      {/* ── Primary ── */}
      <html lang="en" />
      <title>{siteTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={company.keywords} />
      <meta name="author" content={company.name} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      {canonical && <link rel="canonical" href={url} />}

      {/* ── Geo / Local SEO ── */}
      <meta name="geo.region" content="IN" />
      <meta name="geo.country" content="India" />
      <meta name="ICBM" content="" />
      <meta name="DC.title" content={siteTitle} />

      {/* ── Open Graph ── */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={`${company.name} - Paper Plates & Raw Materials`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={company.name} />
      <meta property="og:locale" content="en_IN" />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={`${company.name} - Paper Plates & Raw Materials`} />

      {/* ── Mobile / Theme ── */}
      <meta name="theme-color" content="#597124" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content={company.name} />

      {/* ── Structured Data: LocalBusiness ── */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>

      {/* ── Structured Data: WebSite ── */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": company.name,
          "url": company.website,
          "logo": `${company.website}/logo.png`,
          "image": `${company.website}/logo.png`,
          "telephone": company.phone,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": company.address.street,
            "addressLocality": company.address.city,
            "addressRegion": company.address.state,
            "postalCode": company.address.pincode,
            "addressCountry": company.address.country
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "09:00",
            "closes": "18:00"
          }
        })}
      </script>

      {/* ── Structured Data: Product (only on product pages) ── */}
      {productSchema && (
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      )}
    </Helmet>
  );
}
