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

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{siteTitle}</title>
      <meta name="description" content={metaDescription} />
      {canonical && <link rel="canonical" href={url} />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={company.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Schema.org JSON-LD */}
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
    </Helmet>
  );
}
