import useSWR from 'swr';
import Image from 'next/image';

// Utility to format likes/comments (optional)
const formatNumber = (n: string | number) => {
  if (typeof n === 'number') return n.toLocaleString();
  return n;
};

export default function InstagramFeed() {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data: posts, error, isLoading } = useSWR('/api/instagram', fetcher, {
    revalidateOnFocus: true,
    dedupingInterval: 5 * 60 * 1000, // 5 min
  });

  if (isLoading) return <p className="text-center py-4">Cargando Instagram…</p>;
  if (error) return <p className="text-center py-4 text-red-500">Error al cargar Instagram.</p>;

  // If the API returned fallback placeholder ids (ig1, ig2, …) we assume token isn’t working
  const isFallback = posts && posts.length && posts[0].id?.startsWith('ig');
  if (isFallback) {
    return (
      <section className="p-4">
        <p className="text-center text-gray-600 mb-4">
          No se pudieron obtener los últimos posts de Instagram. Verifica que el token sea válido y que las variables de entorno estén cargadas.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {posts.map((p: any) => (
            <article key={p.id} className="rounded-xl overflow-hidden bg-white/30 backdrop-blur-lg shadow-lg transition-transform hover:scale-105">
              <Image src={p.image} alt={p.caption} width={300} height={300} className="object-cover w-full h-48" />
              <div className="p-3">
                <p className="text-sm line-clamp-2">{p.caption}</p>
                <div className="flex justify-between text-xs text-gray-700 mt-2">
                  <span>👍 {formatNumber(p.likes)}</span>
                  <span>💬 {formatNumber(p.comments)}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="p-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {posts.map((p: any) => (
          <article key={p.id} className="rounded-xl overflow-hidden bg-white/30 backdrop-blur-lg shadow-lg transition-transform hover:scale-105">
            <Image src={p.image} alt={p.caption} width={300} height={300} className="object-cover w-full h-48" />
            <div className="p-3">
              <p className="text-sm line-clamp-2">{p.caption}</p>
              <div className="flex justify-between text-xs text-gray-700 mt-2">
                <span>👍 {formatNumber(p.likes)}</span>
                <span>💬 {formatNumber(p.comments)}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
