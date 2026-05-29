import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, faqPageJsonLd, serviceJsonLd } from "@/lib/seo";

type PageSeoSchemasProps = {
  serviceName: string;
  serviceDescription: string;
  path: string;
  breadcrumbs?: { name: string; path: string }[];
  faqs?: { question: string; answer: string }[];
};

export function PageSeoSchemas({
  serviceName,
  serviceDescription,
  path,
  breadcrumbs,
  faqs,
}: PageSeoSchemasProps) {
  const crumbs = breadcrumbs ?? [
    { name: "الرئيسية", path: "/" },
    { name: serviceName, path },
  ];

  const schemas = [
    serviceJsonLd({ name: serviceName, description: serviceDescription, path }),
    breadcrumbJsonLd(crumbs),
    ...(faqs?.length ? [faqPageJsonLd(faqs)] : []),
  ];

  return <JsonLd data={schemas} />;
}
