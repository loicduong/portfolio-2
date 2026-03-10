import { Metadata, ResolvingMetadata } from 'next';
import Portfolio from '@/components/Portfolio';
import { PROJECTS, Language } from '@/lib/data';

type Props = {
  params: Promise<{ lang: string; slug: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { lang, slug } = await params;
  const currentLang = (['en', 'vn', 'jp'].includes(lang) ? lang.toUpperCase() : 'EN') as Language;
  
  const project = PROJECTS.find((p) => p.slug === slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  const title = `${project.title} | Loc Duong`;
  const description = (project.description as any)[currentLang] || (project.description as any)['EN'];
  const imageUrl = project.image;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://loicduong.dev/${lang}/projects/${slug}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default function ProjectPage() {
  return (
    <main>
      <Portfolio />
    </main>
  );
}
