import { Metadata, ResolvingMetadata } from 'next';
import Portfolio from '@/components/Portfolio';
import { ARCHIVE_IMAGES, Language } from '@/lib/data';

type Props = {
  params: Promise<{ lang: string; id: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { lang, id } = await params;
  const currentLang = (['en', 'vn', 'jp'].includes(lang) ? lang.toUpperCase() : 'EN') as Language;
  
  const archive = ARCHIVE_IMAGES.find((a) => a.id === id);
  
  if (!archive) {
    return {
      title: 'Archive Not Found',
    };
  }

  const title = `${(archive.title as any)[currentLang]} | Loc Duong Archive`;
  const description = (archive.description as any)[currentLang] || (archive.description as any)['EN'];
  const imageUrl = archive.url;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://loicduong.dev/${lang}/archive/${id}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: (archive.title as any)[currentLang],
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

export default function ArchivePage() {
  return (
    <main>
      <Portfolio />
    </main>
  );
}
