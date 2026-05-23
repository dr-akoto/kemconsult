import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://kemengineerings.netlify.app/#business",
  "name": "KEM Engineering & Design",
  "description":
    "Premium civil engineering and construction design studio in Iron-City, Kasoa, Ghana. AutoCAD drafting, structural drawings, architectural planning and construction supervision.",
  "url": "https://kemengineerings.netlify.app",
  "telephone": "+233208450327",
  "email": "kemclassic7@icloud.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Iron-City",
    "addressLocality": "Kasoa",
    "addressRegion": "Central Region",
    "addressCountry": "GH",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 5.535,
    "longitude": -0.42,
  },
  "areaServed": {
    "@type": "Place",
    "name": "Greater Accra & Central Region, Ghana",
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Engineering Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AutoCAD Drafting" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Structural Engineering Drawings" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Architectural Design" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Construction Supervision" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "3D Building Visualization" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Quantity Surveying" } },
    ],
  },
  "sameAs": [],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "KEM Engineering & Design — Civil Engineering & Construction, Kasoa Ghana" },
      {
        name: "description",
        content:
          "Premium civil engineering studio in Iron-City, Kasoa, Ghana. AutoCAD drafting, structural drawings, architectural planning and construction supervision. Book a free consultation.",
      },
      { name: "author", content: "KEM Engineering & Design" },
      { property: "og:title", content: "KEM Engineering & Design — Civil Engineering & Construction" },
      {
        property: "og:description",
        content:
          "AutoCAD drafting, structural engineering, architectural planning and on-site supervision in Kasoa, Ghana.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://kemengineerings.netlify.app" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "KEM Engineering & Design — Civil Engineering & Construction" },
      {
        name: "twitter:description",
        content:
          "AutoCAD drafting, structural engineering, architectural planning and on-site supervision in Kasoa, Ghana.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: "https://kemengineerings.netlify.app/" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
