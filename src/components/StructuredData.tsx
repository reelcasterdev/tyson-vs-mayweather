export function StructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tyson-vs-mayweather.com';
  
  const eventData = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    "name": "Mike Tyson vs Floyd Mayweather Exhibition Fight",
    "description": "Historic boxing exhibition match between Mike Tyson and Floyd Mayweather scheduled for Spring 2026",
    "startDate": "2026-04-01T20:00:00-07:00",
    "endDate": "2026-04-01T23:00:00-07:00",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "TBA",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "TBA",
        "addressCountry": "US"
      }
    },
    "performer": [
      {
        "@type": "Person",
        "name": "Mike Tyson",
        "sameAs": "https://en.wikipedia.org/wiki/Mike_Tyson"
      },
      {
        "@type": "Person",
        "name": "Floyd Mayweather Jr.",
        "sameAs": "https://en.wikipedia.org/wiki/Floyd_Mayweather_Jr."
      }
    ],
    "organizer": {
      "@type": "Organization",
      "name": "CSI Sports/Fight Sports"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/PreOrder",
      "priceCurrency": "USD",
      "url": baseUrl
    }
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": baseUrl,
    "name": "Tyson vs Mayweather Fight Hub",
    "description": "Official fan site for Mike Tyson vs Floyd Mayweather 2026 exhibition fight",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "News",
        "item": `${baseUrl}#news`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Fighter Stats",
        "item": `${baseUrl}#fighter-comparison`
      }
    ]
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "When is the Tyson vs Mayweather fight?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Mike Tyson vs Floyd Mayweather exhibition fight is scheduled for Spring 2026. The exact date will be announced by CSI Sports/Fight Sports."
        }
      },
      {
        "@type": "Question",
        "name": "Where will the Tyson vs Mayweather fight take place?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The venue for the fight has not been announced yet. CSI Sports is considering world-class venues for this historic event."
        }
      },
      {
        "@type": "Question",
        "name": "Is this an official boxing match?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, this is an exhibition match. The fight will not affect either fighter's official professional boxing record."
        }
      },
      {
        "@type": "Question",
        "name": "What are the betting odds for Tyson vs Mayweather?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Current betting odds show Floyd Mayweather as the favorite at -500, with Mike Tyson as the underdog at +350."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    </>
  );
}