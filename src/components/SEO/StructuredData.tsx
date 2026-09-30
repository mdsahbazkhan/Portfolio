import { siteConfig } from "@/data/site";
import { projects } from "@/data/projects";

export function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    sameAs: [
      siteConfig.github,
      siteConfig.linkedin,
      siteConfig.leetcode,
    ],
    email: siteConfig.email,
    jobTitle: siteConfig.role,
    worksFor: {
      "@type": "Organization",
      name: "Self-employed",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    description: siteConfig.description,
  };

  const projectSchemas = projects.map((project) => ({
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.title,
    description: project.shortDescription,
    programmingLanguage: project.technologies.join(", "),
    codeRepository: project.githubUrl,
    url: project.liveUrl !== "#" ? project.liveUrl : undefined,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      {projectSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  );
}

export function ProjectStructuredData({ project }: { project: (typeof projects)[0] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    image: project.image,
    creator: {
      "@type": "Person",
      name: siteConfig.name,
    },
    keywords: project.technologies.join(", "),
    ...(project.liveUrl !== "#" && {
      url: project.liveUrl,
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}